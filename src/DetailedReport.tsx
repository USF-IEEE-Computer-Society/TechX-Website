import { useEffect, useState } from 'react'

interface ImageModule {
  [key: string]: () => Promise<{ default: string }>
}

export default function DetailedReport() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const imageModules: ImageModule = import.meta.glob('./assets/detailed_report/*.{jpg,jpeg,png,webp}', { eager: true }) as ImageModule

    const imagePaths = Object.keys(imageModules)
      .sort((a, b) => {
        // Extract numbers from filenames and sort numerically
        const numA = parseInt(a.match(/(\d+)\.[^.]+$/)?.[1] || '0')
        const numB = parseInt(b.match(/(\d+)\.[^.]+$/)?.[1] || '0')
        return numA - numB
      })
      .map(path => {
        // @ts-expect-error - Vite glob imports have default property
        return imageModules[path].default || imageModules[path]
      })

    setImages(imagePaths)
  }, [])

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 text-center mb-10">TechX Florida 2025 Detailed Report</h1>
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-1">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`TechX Florida 2025 Report - Page ${index + 1}`}
            className="w-full h-auto"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  )
}
