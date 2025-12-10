import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const INPUT_DIR = 'src/assets/cropping';

// Instagram 4:5 aspect ratio: width:height = 4:5
// So height = width * (5/4) = width * 1.25
const ASPECT_RATIO = 5 / 4;

async function cropToInstagram45(filePath: string): Promise<void> {
  const backupPath = filePath + '.backup';
  const ext = path.extname(filePath).toLowerCase();

  try {
    // Read the original file into buffer
    const originalBuffer = fs.readFileSync(filePath);

    // Get metadata from buffer
    const metadata = await sharp(originalBuffer).metadata();

    if (!metadata.width || !metadata.height) {
      console.log('Skip (no dimensions):', filePath);
      return;
    }

    const originalWidth = metadata.width;
    const originalHeight = metadata.height;

    // Calculate target height for 4:5 aspect ratio
    const targetHeight = Math.round(originalWidth * ASPECT_RATIO);

    // If image is already shorter than or equal to target height, skip
    if (originalHeight <= targetHeight) {
      console.log(`Skip (already fits 4:5): ${path.basename(filePath)} (${originalWidth}x${originalHeight})`);
      return;
    }

    // Crop from bottom: keep top=0, extract from top with target height
    let pipeline = sharp(originalBuffer).extract({
      left: 0,
      top: 0,
      width: originalWidth,
      height: targetHeight,
    });

    // Output in the same format as the input (lossless to preserve quality)
    if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 6 }); // lossless PNG, level 6 is default
    } else {
      pipeline = pipeline.webp({ lossless: true }); // lossless WebP
    }

    const croppedBuffer = await pipeline.toBuffer();

    // Create backup of original
    fs.writeFileSync(backupPath, originalBuffer);

    // Write the cropped buffer to the original file
    fs.writeFileSync(filePath, croppedBuffer);

    // Remove backup if successful
    fs.unlinkSync(backupPath);

    const cropAmount = originalHeight - targetHeight;
    console.log(
      `Cropped: ${path.basename(filePath)} (${originalWidth}x${originalHeight} → ${originalWidth}x${targetHeight}) [removed ${cropAmount}px from bottom]`
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Error cropping', filePath, message);

    // Try to restore from backup if it exists
    if (fs.existsSync(backupPath)) {
      try {
        fs.copyFileSync(backupPath, filePath);
        fs.unlinkSync(backupPath);
        console.log('Restored from backup:', path.basename(filePath));
      } catch (restoreErr) {
        console.error('Failed to restore from backup:', path.basename(filePath));
      }
    }
  }
}

async function processDirectory(): Promise<void> {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`Directory not found: ${INPUT_DIR}`);
    return;
  }

  // Read all files in the directory
  const allFiles = fs.readdirSync(INPUT_DIR);
  const supportedExts = ['.webp', '.png'];
  const imageFiles = allFiles
    .filter((file) => supportedExts.includes(path.extname(file).toLowerCase()))
    .map((file) => path.join(INPUT_DIR, file));

  if (imageFiles.length === 0) {
    console.log('No .webp or .png images found in directory');
    return;
  }

  console.log(`Found ${imageFiles.length} images to process`);
  console.log('Cropping to Instagram 4:5 format (keeping top, cropping bottom)');
  console.log('---');

  for (const file of imageFiles) {
    await cropToInstagram45(file);
  }

  console.log('---');
  console.log('Crop complete!');
}

async function main(): Promise<void> {
  await processDirectory();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

