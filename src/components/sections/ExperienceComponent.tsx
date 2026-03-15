import ExperienceCardComponent from '../ExperienceCardComponent'
import data from '../data/experience.json'

const ExperienceComponent = () => {
  return (
    <div id='experience' className='relative w-full py-20 px-4 flex flex-col justify-center items-center overflow-hidden'>
      {/* Background decorative elements */}
      <div className="blob-2 top-20 right-10 animate-blob"></div>

      {/* Section Title */}
      <div className='flex flex-col items-center mb-16 relative z-10'>
        <h1 className='font-black text-4xl md:text-6xl text-[var(--text-primary)] section-title mb-4'>
          Experience
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-center">
          My professional journey and contributions
        </p>
      </div>

      {/* Experience Timeline */}
      <div className='flex flex-col gap-6 md:gap-8 w-full max-w-5xl relative z-10'>
        <ExperienceCardComponent
          year={data.tav.year}
          month={data.tav.month}
          companyName={data.tav.name}
          role={data.tav.role}
          description={data.tav.description}
        />
        <ExperienceCardComponent
          year={data.ravenFrontend.year}
          month={data.ravenFrontend.month}
          companyName={data.ravenFrontend.name}
          role={data.ravenFrontend.role}
          description={data.ravenFrontend.description}
        />
        <ExperienceCardComponent
          year={data.ravenBackend.year}
          month={data.ravenBackend.month}
          companyName={data.ravenBackend.name}
          role={data.ravenBackend.role}
          description={data.ravenBackend.description}
        />
      </div>
    </div>
  )
}

export default ExperienceComponent