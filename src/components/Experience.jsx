import kwbgrd from "../assets/kwbgrd.png";
import leadership from "../data/leadershipData";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#fca311] dark:text-[#6049ea]">
          Experience
        </p>

        <h2 className="mt-2 max-w-3xl text-4xl font-black font-semibold leading-tight text-[#14213d] dark:text-[#fff] md:text-5xl">
          My journey so far.
        </h2>

        <p className="mt-4 max-w-2xl text-[#536174] dark:text-white">
          A look at the experience and education that have shaped my journey as
          a frontend developer.
        </p>
      </div>

      {/* Experience + Education */}
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        {/* ================= EXPERIENCE ================= */}
        <div className="group">
          <div className="relative border-l-2 border-[#d9dee7] pl-8 transition-colors duration-300 group-hover:border-[#fca311] dark:border-[#263449] dark:group-hover:border-[#6049ea]">
            {/* Experience item */}
            <div className="relative">
              {/* Timeline node */}
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#fca311] dark:border-[#0B1120] dark:bg-[#6049ea]" />
              {/* Date */}
              <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#536174] dark:text-white">
                Aug 2025 — Jan 2026
              </p>
              {/* Role */}
              <h3 className="mt-3 text-2xl font-bold text-[#14213d] dark:text-[#6049ea]">
                Frontend Developer Intern
              </h3>

              {/* Company */}
              <p className="mt-1 text-md font-medium text-[#536174] dark:text-white">
                Systems Technologies Limited
              </p>

              {/* Description */}
              <p className="mt-6 max-w-2xl leading-relaxed text-[#536174] dark:text-white">
                Worked on responsive web interfaces in a fintech environment,
                building and improving frontend experiences using React,
                JavaScript, HTML, CSS, and Tailwind CSS.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#fca311] px-3 py-1 text-sm text-[#536174] dark:border-[#6049ea] dark:text-white">
                  React
                </span>

                <span className="rounded-full border border-[#fca311] px-3 py-1 text-sm text-[#536174] dark:border-[#6049ea] dark:text-white">
                  JavaScript
                </span>

                <span className="rounded-full border border-[#fca311] px-3 py-1 text-sm text-[#536174] dark:border-[#6049ea] dark:text-white">
                  Tailwind CSS
                </span>

                <span className="rounded-full border border-[#fca311] px-3 py-1 text-sm text-[#536174] dark:border-[#6049ea] dark:text-white">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div>
          <div className="rounded-2xl border border-[#d9dee7] bg-white p-5 dark:border-[#263449] dark:bg-[#172033]">
            {/* Label */}
            <div className="flex items-center justify-start">
              <img
                className="m-0 h-18 w-15 object-contain p-0"
                src={kwbgrd}
                alt="Abstract 3D portfolio mark"
              />

              <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#536174] dark:text-white">
                Education
              </p>
            </div>

            {/* Degree */}
            <h3 className="text-md font-bold text-[#14213d] dark:text-[#6049ea]">
              B.Sc. Computer Science
            </h3>

            {/* School */}
            <p className="mt-1 text-sm text-[#536174] dark:text-white">
              Kwara State University
            </p>

            {/* Date */}
            <p className="font-mono text-sm text-[#536174] dark:text-white">
              2022 — 2026
            </p>

            {/* Additional information */}
            <p className="mt-6 text-[15px] leading-relaxed text-[#536174] dark:text-white">
              Computer Science graduate with CGPA 4.57 / 5.0, First Class
              Honours
            </p>
          </div>
        </div>
      </div>

      {/* Leadership & Volunteering will come here */}
      <h3 className="mt-20  text-2xl font-bold text-[#14213d] dark:text-white">
        Leadership & Volunteering
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {leadership.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-[#d9dee7] bg-white p-6 transition-colors duration-300 hover:border-[#fca311] dark:border-[#263449] dark:bg-[#172033] dark:hover:border-[#6049ea]"
          >
            {/* Logo + Role */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#d9dee7] bg-white p-2 dark:border-[#263449] dark:bg-[#0B1120]">
                <img
                  src={item.logo}
                  alt={`${item.org} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                {/* Role */}
                <h4 className="font-bold text-[#14213d] dark:text-[#6049ea]">
                  {item.role}
                </h4>

                {/* Organization + Period */}
                <p className="mt-1 text-sm text-[#536174] dark:text-white">
                  {item.org} · {item.period}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-[#536174] dark:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
