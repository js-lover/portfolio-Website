import SkillsCardComponent from "../SkillsCardComponent";
import data from "../data/skills.json";
import backend from "../../assets/animations/backend.json";
import frontend from "../../assets/animations/frontend.json";

const SkillsComponent = () => {
  return (
    <div
      id="skills"
      className="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-600 via-blue-600 to-sky-800"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Skills
          </h1>
          <p className="text-lg text-sky-200 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Cards */}
        <div className="flex md:flex-row flex-col gap-8 md:gap-12 justify-center items-center md:items-stretch">
          <SkillsCardComponent
            name={data.frontend.name}
            description={data.frontend.description}
            languages={data.frontend.languages}
            tools={data.frontend.tools}
            imgSrc={frontend}
          />

          <SkillsCardComponent
            name={data.backend.name}
            description={data.backend.description}
            languages={data.backend.languages}
            tools={data.backend.tools}
            imgSrc={backend}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
