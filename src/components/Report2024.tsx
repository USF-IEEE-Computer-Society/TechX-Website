import techx2024_recap from '../assets/techx2024/techx2024_recap.jpg'
import Button from './elements/Button'

export default function Report2024() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      <article className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">TechX Florida 2024 Recap</h1>
          <div className="text-gray-500 text-sm md:text-base hidden md:block">
            November 23th, 2024 • University of South Florida • IEEE Computer Society Student Branch at USF
          </div>
          <div className="text-gray-500 text-sm md:text-base block md:hidden">November 8th, 2025 • University of South Florida</div>
          <div className="text-gray-500 text-sm md:text-base block md:hidden">IEEE Computer Society at USF</div>
          <img src={techx2024_recap} alt="TechX 2024 Recap" className="w-full h-auto rounded-md shadow-md mt-8" />
        </header>

        <div className="flex justify-center">
          <a
            className="hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2"
            href="mailto:info@techxflorida.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button id="EmailOrganizers" text="Click here to view recap" />
          </a>
        </div>
      </article>
    </div>
  )
}
