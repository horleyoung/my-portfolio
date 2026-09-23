const workflow = [
  {
    number: "01",
    title: "STRUCTURE",
    technologies: "HTML • JSX",
    points: ["Semantic UI", "Component structure", "Accessible markup"],
  },
  {
    number: "02",
    title: "STYLE",
    technologies: "CSS • TAILWIND",
    points: ["Responsive layouts", "UI styling", "Consistent design"],
  },
  {
    number: "03",
    title: "BUILD",
    technologies: "JAVASCRIPT • REACT",
    points: ["Components", "State & props", "Dynamic interfaces"],
  },
  {
    number: "04",
    title: "WORKFLOW",
    technologies: "GIT • GITHUB",
    points: ["Version control", "Git workflow", "Project organization"],
  },
  {
    number: "05",
    title: "SHIP",
    technologies: "VITE • VERCEL",
    points: ["Production builds", "Deployment", "Live applications"],
  },
];

const FrontendWorkflow = () => {
  return (
    <div className="mt-20">
      {/* Section heading */}
      <div className="mb-20">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#fca311] dark:text-[#6049ea] font-mono">
          HOW I BUILD INTERFACES
        </p>

        <h3 className="mt-3 text-4xl font-semibold text-[#14213d] dark:text-white">
          From Structure to Ship.
        </h3>

        <p className="mt-4 max-w-xl text-[#536174] dark:text-white">
          The tools are only part of the process. Here's how I bring a frontend
          idea from structure to a working interface.
        </p>
      </div>

      {/* Workflow */}
      <div className="relative">
        {/* ================= MOBILE ================= */}
        <div className="relative lg:hidden">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-7 bottom-7 w-[2px] bg-[#d9dee7]" />

          <div className="space-y-12">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="relative flex items-start gap-6"
              >
                {/* Node */}
                <div className="relative z-0 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#d9dee7] bg-[#f8f6f0] text-sm font-bold text-[#14213d] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-[#fca311] group-hover:shadow-md">
                  {item.number}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#fca311] dark:text-[#6049ea] ">
                    {item.number}
                  </p>

                  <h4 className="mt-1 text-lg font-bold tracking-wide text-[#fff]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm font-semibold text-[#536174]">
                    {item.technologies}
                  </p>

                  <ul className="mt-4 space-y-1 text-sm text-[#536174] dark:text-white">
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-18 right-18 top-8 h-[4px] bg-[#d9dee7]" />

            <div className="grid z-0 grid-cols-5 gap-6">
              {workflow.map((item) => (
                <div
                  key={item.number}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Node */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-[#d9dee7]  bg-[#f8f6f0] text-sm font-bold text-[#14213d] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#fca311]  dark:group-hover:border-[#6049ea] group-hover:shadow-md">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="mt-8 w-full max-w-[210px]">
                    <h4 className="text-lg font-bold tracking-wide text-[#14213d] dark:text-[#6049ea] ">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm font-semibold text-[#536174]">
                      {item.technologies}
                    </p>

                    <ul className="mt-4 space-y-1 text-sm text-[#536174] dark:text-white ">
                      {item.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendWorkflow;
