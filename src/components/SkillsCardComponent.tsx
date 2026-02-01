import Lottie from "lottie-react";

interface SkillsCardComponentProps {
  name: string;
  description?: string;
  languages?: string[];
  tools?: string[];
  imgSrc?: object;
}

const SkillsCardComponent = (props: SkillsCardComponentProps) => {
  return (
    <div className="glass-card card-modern rounded-3xl p-6 md:p-8 w-full md:w-[420px] min-h-fit">
      {/* Animation */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 md:w-40 md:h-40">
          <Lottie animationData={props.imgSrc} loop={true} />
        </div>
      </div>

      {/* Card Content */}
      <div className="text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 gradient-text">
          {props.name}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
          {props.description}
        </p>

        {/* Languages */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {props.languages?.map((language, index) => (
              <div
                key={index}
                className="group relative"
              >
                <img
                  className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110 cursor-pointer p-2 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:shadow-lg"
                  src={language}
                  alt={`Language ${index + 1}`}
                  onClick={() => window.open(language, '_blank')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4">
            Tools & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {props.tools?.map((tool, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <img
                  className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110 cursor-pointer p-2 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:shadow-lg"
                  src={tool}
                  alt={`Tool ${idx + 1}`}
                  onClick={() => window.open(tool, '_blank')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardComponent;
