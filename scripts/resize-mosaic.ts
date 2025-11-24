import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const MOSAIC_DIR = 'src/assets/report';
const RESIZE_FACTOR = 2;

async function resizeImage(filePath: string): Promise<void> {
  const backupPath = filePath + '.backup';
  
  try {
    // First, read the original file into buffer
    const originalBuffer = fs.readFileSync(filePath);
    
    // Get metadata from buffer
    const metadata = await sharp(originalBuffer).metadata();
    
    if (!metadata.width || !metadata.height) {
      console.log('Skip (no dimensions):', filePath);
      return;
    }

    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    const newWidth = Math.round(originalWidth / RESIZE_FACTOR);
    const newHeight = Math.round(originalHeight / RESIZE_FACTOR);

    // Resize the image from buffer
    const resizedBuffer = await sharp(originalBuffer)
      .resize(newWidth, newHeight, {
        fit: 'fill',
        kernel: sharp.kernel.lanczos3
      })
      .toBuffer();

    // Create backup of original
    fs.writeFileSync(backupPath, originalBuffer);
    
    // Write the resized buffer to the original file
    fs.writeFileSync(filePath, resizedBuffer);
    
    // Remove backup if successful
    fs.unlinkSync(backupPath);

    console.log(`Resized: ${path.basename(filePath)} (${originalWidth}x${originalHeight} → ${newWidth}x${newHeight})`);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Error resizing', filePath, message);
    
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

async function processMosaicDir(): Promise<void> {
  if (!fs.existsSync(MOSAIC_DIR)) {
    console.error(`Directory not found: ${MOSAIC_DIR}`);
    return;
  }

  // Read all files in the mosaic directory
  const allFiles = fs.readdirSync(MOSAIC_DIR);
  const webpFiles = allFiles
    .filter(file => file.toLowerCase().endsWith('.webp'))
    .map(file => path.join(MOSAIC_DIR, file));

  if (webpFiles.length === 0) {
    console.log('No .webp images found in mosaic directory');
    return;
  }

  console.log(`Found ${webpFiles.length} images to resize`);
  console.log('---');

  for (const file of webpFiles) {
    await resizeImage(file);
  }

  console.log('---');
  console.log('Resize complete!');
}

async function main(): Promise<void> {
  await processMosaicDir();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

