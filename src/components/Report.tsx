import ReportCard from './elements/ReportCard'
import { reportQuotes } from '../data/reportData'
import Mosaic from './Mosaic'
import catgptImg from '../assets/catgpt.jpeg'

import volunteerImg from '../assets/report/techx-2.webp'

export default function Report() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      <article className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            TechX Florida 2025: Our Celebration of Community and Innovation
          </h1>
          <div className="text-gray-500 text-sm md:text-base hidden md:block">
            November 8th, 2025 • University of South Florida • IEEE Computer Society Student Branch at USF
          </div>
          <div className="text-gray-500 text-sm md:text-base block md:hidden">November 8th, 2025 • University of South Florida</div>
          <div className="text-gray-500 text-sm md:text-base block md:hidden">IEEE Computer Society at USF</div>
          <img src={volunteerImg} alt="Volunteer" className="w-full h-auto rounded-md shadow-md mt-8" />
        </header>

        <section className="mb-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            On November 8th, 2025, we brought together over 336 tech enthusiasts at the University of South Florida for TechX Florida Artificial
            Intelligence conference's second edition - the first and only TechX conference in the US and Canada. If we had to sum it up in one word?{' '}
            <span className="font-semibold text-gray-900">Terrific</span>.
          </p>

          <Mosaic />
        </section>

        <section className="mb-8">
          <h2 className="report-heading">
            Student-Led AI Conference Brings Together Microsoft, JP Morgan, Verizon & More for a Full Day of Tech Innovation{' '}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="report-paragraph">
              As a student-led conference, we exceeded our own expectations. The day featured 11 presentations from AI leaders at Microsoft, JP
              Morgan, Verizon, Intel, etc. alongside a "Careers in Tech" panel and 5 hours of career fair opportunities with companies including
              ICode, ISACA, USF IT, Verizon, IronEagleX, and Uber AI, and more. We also provided over 150 free professional headshots, signature cat
              merchandise, and meals throughout the day.
            </p>
          </div>
          {/*<div className="w-full max-w-3xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-md shadow-md"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=HZNd5y2itg3imnRW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>*/}
        </section>

        <section className="mb-8">
          <h2 className="report-heading">
            500+ Registrations and 336 Attendees: A Cross-Campus, Cross-Industry Event for the Tampa Bay Tech Community
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="report-paragraph">
              Our 500+ registrations translated into a record-breaking 336 check-ins, with attendees representing 9 different educational institutions
              across the US - students and industry professionals alike. Around 40% of the attendees were professionals from the Tampa Bay Area.{' '}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReportCard
              name={reportQuotes[0].name}
              quote={reportQuotes[0].quote}
              linkedinLink={reportQuotes[0].linkedinLink}
              company={reportQuotes[0].company}
              image={reportQuotes[0].image}
              pills={reportQuotes[0].pills}
            />
            <ReportCard
              name={reportQuotes[1].name}
              quote={reportQuotes[1].quote}
              linkedinLink={reportQuotes[1].linkedinLink}
              company={reportQuotes[1].company}
              image={reportQuotes[1].image}
              pills={reportQuotes[1].pills}
            />
            {/*<ReportCard name={reportQuotes[2].name} quote={reportQuotes[2].quote} linkedinLink={reportQuotes[2].linkedinLink} company={reportQuotes[2].company} image={reportQuotes[2].image} pills={reportQuotes[2].pills} />
        <ReportCard name={reportQuotes[3].name} quote={reportQuotes[3].quote} linkedinLink={reportQuotes[3].linkedinLink} company={reportQuotes[3].company} image={reportQuotes[3].image} pills={reportQuotes[3].pills} />*/}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="report-heading">Thank You for Making TechX Florida 2025 Unforgettable — See What's Coming for 2026 </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="report-paragraph">
              These numbers tell a story, but the real story is simpler: you showed up. Our participants, the ones who chose to spend their Saturday
              with us, are what made TechX Florida unforgettable. To our professional chapter partners, speakers, company representatives, organizing
              team, and volunteers: thank you for believing in and building this vision with us.
            </p>
            <p className="report-paragraph">
              We're already excited about TechX Florida 2026, and we are just getting started with this year's celebrations. Over the coming weeks, we
              will be sharing deeper dives into our 11 speakers, the career fair, the panel discussion, participant stories, and behind-the-scenes
              moments. Stay tuned.
            </p>
            <p className="report-paragraph">Thank you for being part of TechX Florida 2025. You made it terrific. 💚💛</p>
          </div>
        </section>
      </article>
      <img src={catgptImg} alt="CatGPT" className="h-40 md:h-60 absolute bottom-0 right-10 hidden min-[1530px]:block" />
    </div>
  )
}
