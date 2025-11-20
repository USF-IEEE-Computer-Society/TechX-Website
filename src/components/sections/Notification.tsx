import { Link } from 'react-router-dom'

export default function WhyAttend() {
  return (
    <div id={'Notification'} className={'w-full h-auto bg-[#00629B] text-white flex flex-col gap-[1rem] p-[1rem]'}>
      <div className={'w-full flex flex-row justify-center items-center gap-2 md:gap-5'}>
        <p className={'text-lg text-white text-center text-balance'}>
          TechX Florida 2025 was a huge success. See the highlights, numbers, and photos
        </p>

        <Link className={'hover:scale-105 duration-300 ease-in-out cursor-pointer'} to={`/2025/report`}>
          <button id="HomeButton" className={'w-[8rem] h-[3rem] bg-[#00629B]  border-2 border-[var(--color-primary)] rounded cursor-pointer'}>
            <h2 className={'text-base font-bold text-white text-balance text-center'}>Read Report</h2>
          </button>
        </Link>
      </div>
    </div>
  )
}
