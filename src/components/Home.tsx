import WhyAttend from './sections/Attendance'
import HeroSection from './sections/HeroSection'
import Highlights from './sections/Highlights'
import GetTickets from './sections/GetTickets'
import FAQ from './sections/FAQ'
import Whatsapp from './sections/Whatsapp'
import IEEE from './sections/IEEE'
import Companies from './sections/Companies'
import Photos from './sections/Photos'
import Team from './sections/Team'
import AfterDark from './sections/AfterDark'
import Notification from './sections/Notification'

function Home() {
  return (
    <>
      <Notification />
      <HeroSection />

      <WhyAttend />
      <Highlights />
      <GetTickets />
      <Whatsapp />
      <IEEE />
      <Companies />
      <AfterDark />
      <Team />
      <Photos />
      <FAQ />
    </>
  )
}

export default Home
