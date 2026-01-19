import RegistrationButtons from '../elements/RegistrationButtons'
import techxVideo from '../../assets/techx_video.webm'

export default function HeroSection() {
  return (
    <div className={'relative w-full h-[35rem] md:h-[38rem] bg-stone-200 overflow-hidden'}>
      <video src={techxVideo} className={'w-full h-full object-cover'} autoPlay muted loop playsInline />
      <div className={'absolute top-0 opacity-65 w-full h-full bg-black z-1'} />
      <div className={'absolute top-10 md:top-45 flex flex-col justify-center items-center z-2 gap-4 w-full pl-4 pr-4'}>
        <h1 className={'text-white text-4xl md:text-5xl xl:text-6xl text-center font-semibold'}>TechX Florida 2025 AI Conference</h1>
        <p className={'w-[90%] lg:w-[70%] text-white text-lg sm:text-2xl md:text-3xl text-center'}>
          Innovate. Connect. Transform. Join us for the premier tech conference of the year.
        </p>
        <div className={'flex flex-col w-full justify-center items-center gap-1'}>
          <p className={'w-[90%] lg:w-[70%] text-white text-sm sm:text-2xl md:text-xl text-center'}>November 8 2025, Saturday, 11AM - 5PM</p>
          <p className={'w-[90%] lg:w-[70%] text-white text-sm sm:text-2xl md:text-xl text-center'}>
            USF Engineering Building II Hall of Flags, Tampa, FL
          </p>
        </div>

        <RegistrationButtons />
      </div>
    </div>
  )
}
