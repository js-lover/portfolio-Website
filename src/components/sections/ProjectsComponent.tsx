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
        <h1 className='text-4xl md:text-6xl font-black text-slate-800 section-title mb-4'>
          Projects
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Some of my recent work and side projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-12 w-full max-w-7xl relative z-10">
        <ProjectsCardComponent
          name={data.menzaApp.name}
          description={data.menzaApp.description}
          color='#10B981'
          imageSrc={walking}
          visitLink={data.menzaApp.visitLink}
        />

        <ProjectsCardComponent
          name={data.reactChatApp.name}
          description={data.reactChatApp.description}
          color='#FF714B'
          imageSrc={chatting}
          visitLink={data.reactChatApp.visitLink}
        />

        <ProjectsCardComponent
          name={data.airCompanion.name}
          description={data.airCompanion.description}
          visitLink={data.airCompanion.visitLink}
          color='#4E71FF'
          imageSrc={plane}
        />
      </div>
    </div>
  )
}

export default ProjectsComponent