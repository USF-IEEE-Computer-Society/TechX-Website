import LazyImage from './LazyImage'
import linkedin from '../../assets/logos/LinkedIn_icon.svg.webp'

interface ReportCardProps {
  image: string
  name: string
  quote: string
  linkedinLink: string
  company: string
  pills: string[]
}

export default function ReportCard(props: ReportCardProps) {
  return (
    <div className="w-full rounded-xl h-full mb-2 md:mb-0 p-4 border-2 border-gray-300 bg-gray-100 flex flex-col">
      <div className="flex flex-row gap-2">
        <LazyImage className="h-30 w-auto aspect-square object-cover rounded" src={props.image} alt={props.name} />
        <div className="flex flex-col p-2 gap-1">
          <div className="flex flex-row gap-2 items-center">
            <h2 className="text-xl md:text-2xl font-bold break-words">{props.name}</h2>
            <div className="min-w-6">
              {props.linkedinLink !== '' && (
                <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                  <LazyImage className="h-6 w-6" src={linkedin} alt="Linkedin Icon" />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <h3 className="text-base md:text-base tracking-tight font-semibold break-words">{props.company}</h3>
          </div>
          <div>
            {props.pills.includes('Speaker') ? <span className="PillReportCard bg-green-100 text-green-800">Speaker</span> : null}
            {props.pills.includes('Panel') ? (
              <span className={'PillReportCard bg-purple-100 text-purple-800'}>"Careers in Tech" Panelist</span>
            ) : null}
          </div>
        </div>
      </div>
      <p className="text-base md:text-md text-gray-600 mt-3 break-words">{props.quote}</p>
    </div>
  )
}
