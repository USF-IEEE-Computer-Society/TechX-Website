import { useEffect, useState } from 'react'
import LazyImage from './elements/LazyImage'

interface ImageModule {
  [key: string]: () => Promise<{ default: string }>
}

export default function Mosaic() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Dynamically import all images from the mosaic folder
    const imageModules: ImageModule = import.meta.glob('../assets/report/mosaic/*.{jpg,jpeg,png,webp}', { eager: true }) as ImageModule

    const imagePaths = Object.keys(imageModules).map(path => {
      // @ts-expect-error - Vite glob imports have default property
      return imageModules[path].default || imageModules[path]
    })

    setImages(imagePaths)
  }, [])

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] my-8 px-4 md:px-40">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
            <LazyImage
              src={image}
              alt={`TechX Florida 2025 IEEE CS USF - Photo ${index + 1}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
