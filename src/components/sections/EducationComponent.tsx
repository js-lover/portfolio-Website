const EducationComponent = () => {
    return (
        <div id='education' className='relative w-full py-20 px-4 flex flex-col justify-center items-center'>
            {/* Section Title */}
            <div className='flex flex-col items-center mb-16 relative z-10'>
                <h1 className='font-black text-4xl md:text-6xl text-slate-800 section-title mb-4'>
                    Education
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl text-center">
                    My academic background
                </p>
            </div>

            {/* Education Card */}
            <div className='w-full max-w-4xl relative z-10'>
                <div className="glass-card rounded-3xl p-8 md:p-12 hover-lift border border-indigo-100">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* University Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                        </div>

                        {/* Education Details */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-black gradient-text mb-2">
                                Istanbul University - Cerrahpaşa
                            </h2>
                            <h3 className="text-lg md:text-xl font-semibold text-indigo-600 mb-3">
                                Computer Engineering
                            </h3>
                            <div className="flex items-center gap-2 text-slate-600 mb-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="font-medium">September 2020 - July 2025</span>
                            </div>
                            <p className="text-slate-600 text-base">
                                Pursuing a Bachelor's degree in Computer Engineering with a focus on software development,
                                algorithms, and modern web technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationComponent
