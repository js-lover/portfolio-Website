interface ExperienceCardProps {
  year: string;
  month: string;
  companyName: string;
  role: string;
  description: string;
}

const ExperienceCardComponent = (props: ExperienceCardProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 items-start group">
      {/* Date Badge */}
      <div className="flex-shrink-0">
        <div className="glass-card w-28 h-28 flex flex-col justify-center items-center rounded-2xl border-2 border-sky-200 p-4 group-hover:border-sky-400 transition-all duration-300 group-hover:shadow-lg">
          <h1 className="font-bold text-2xl gradient-text">
            {props.year}
          </h1>
          <h3 className="font-medium text-sm text-slate-500 mt-1">
            {props.month}
          </h3>
        </div>
      </div>

      {/* Experience Content */}
      <div className="flex-1 glass-card rounded-2xl p-6 md:p-8 hover-lift border border-slate-100">
        {/* Company and Role */}
        <div className="mb-4">
          <h1 className="font-black text-xl md:text-2xl gradient-text mb-2">
            {props.companyName}
          </h1>
          <h2 className="font-semibold text-base md:text-lg text-sky-600">
            {props.role}
          </h2>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {props.description}
        </p>

        {/* Decorative bottom accent */}
        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ExperienceCardComponent;
