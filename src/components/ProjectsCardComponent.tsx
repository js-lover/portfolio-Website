import Lottie from "lottie-react";

interface ProjectCardProps {
  name: string;
  description: string;
  imageSrc?: object;
  visitLink: string;
  color: string;
  borderColor: string;
  skills?: string[];
}

const ProjectsCardComponent = (props: ProjectCardProps) => {
  return (
    <div className="w-full hover-lift rounded-3xl overflow-hidden" style={{ borderColor: props.borderColor }}>
      <div className="flex flex-col md:flex-row gap-0 bg-[var(--bg-light)] rounded-3xl shadow-xl overflow-hidden border  dark:border-neutral-800" style={{ borderColor: props.borderColor }}>
        {/* Animation Side */}
        <div
          style={{ backgroundColor: props.color }}
          className="w-full md:w-2/5 min-h-[250px] md:min-h-[350px] flex justify-center items-center p-8 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-1 w-full h-full flex items-center justify-center">
            <Lottie
              animationData={props.imageSrc}
              loop={true}
              className="w-full h-full max-w-xs"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-between relative">
          {/* Accent border on left for desktop */}
          <div
            style={{ backgroundColor: props.color }}
            className="hidden md:block absolute left-0 top-0 bottom-0 w-1"
          ></div>

          <div>
            <h2
              className="font-extrabold text-2xl md:text-4xl mb-4"
              style={{ color: props.color }}
            >
              {props.name}
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6">
              {props.description}
            </p>

            {/* Skills Tags */}
            {props.skills && props.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {props.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 bg-[var(--bg-hero)] text-[var(--text-primary)] rounded-full border border-[var(--glass-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Visit Link */}
          <a
            href={props.visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-base md:text-lg font-semibold transition-all duration-300 hover:gap-4 group w-fit"
            style={{ color: props.color }}
          >
            <span>Visit Project</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;
