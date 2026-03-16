import gbm from '../../assets/gbm.webp'

export default function Whatsapp() {
  return (
    <div id={'Whatsapp'} className={'w-full h-auto bg-[#F5F5F5] flex flex-col items-center p-[2rem]'}>
      <div className={'flex flex-col md:flex-row items-center'}>
        <div>
          <img src={gbm} className="h-50 md:h-60" loading="lazy" />
        </div>

        <div className={'flex flex-col items-center h-100% p-[2rem]'}>
          <h2 className={'text-4xl tracking-tight font-bold text-center m-4'}>Join WhatsApp Community of TechX</h2>

          <p className={'text-lg text-center text-balance mb-12'}> Network with attendees, get updates, and stay in the loop </p>

          <p className={'text-base text-center text-red-600 font-semibold mt-2'}>
            Unfortunately, Whatsapp group is closed
          </p>
        </div>
      </div>
    </div>
  )
}
