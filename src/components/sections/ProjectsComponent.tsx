import ProjectsCardComponent from '../ProjectsCardComponent'
import data from '../data/projects.json'
import plane from '../../assets/animations/Isometric plane.json'
import chatting from '../../assets/animations/chatting.json'
import walking from '../../assets/animations/walking.json'

const ProjectsComponent = () => {
  return (
    <div id='projects' className='relative flex flex-col justify-center items-center w-full py-20 px-4 bg-gradient-hero overflow-hidden'>
      {/* Decorative blob */}
      <div className="blob-1 top-10 left-10 animate-blob"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h1 className='text-4xl md:text-6xl font-black text-[var(--text-primary)] section-title mb-4'>
          Projects
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Some of my recent work and side projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-12 w-full max-w-7xl relative z-10">
        <ProjectsCardComponent
          name={data.menzaApp.name}
          description={data.menzaApp.description}
          color='#FF5A5A'
          imageSrc={walking}
          visitLink={data.menzaApp.visitLink}
          borderColor='#FF5A5A'
          skills={data.menzaApp.skills}
        />

        <ProjectsCardComponent
          name={data.reactChatApp.name}
          description={data.reactChatApp.description}
          color='#FF8B5A'
          imageSrc={chatting}
          visitLink={data.reactChatApp.visitLink}
          borderColor='#FF8B5A'
          skills={data.reactChatApp.skills}
        />

        <ProjectsCardComponent
          name={data.airCompanion.name}
          description={data.airCompanion.description}
          visitLink={data.airCompanion.visitLink}
          color='#FFA95A'
          imageSrc={plane}
          borderColor='#FFA95A'
          skills={data.airCompanion.skills}
        />
      </div>
    </div>
  )
}

export default ProjectsComponent