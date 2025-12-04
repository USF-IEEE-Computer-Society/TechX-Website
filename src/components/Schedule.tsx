import ConferenceScheduler from './Conference'
import Notification from './sections/Notification'

function Schedule() {
  return (
    <>
      <Notification />
      <div id={'Schedule'} className={'w-full h-auto bg-white flex flex-col items-center p-[1rem] min-h-screen'}>
        <h2 className={'text-4xl tracking-tight font-bold mt-[1rem] mb-[1.5rem] text-center'}>Schedule TechX Florida 2025</h2>

        <div className="w-full">
          <ConferenceScheduler />
        </div>
      </div>
    </>
  )
}

export default Schedule
