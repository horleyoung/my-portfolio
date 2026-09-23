import skills from "../data/skillsData";
import Workflow from "./Workflow";

const Skills = () => {
  return (
    <div id="skills" className="section-padding pt-24 ">
      <h3 className="text-md font-semibold text-[#fca311] dark:text-[#6049ea] font-mono">SKILLS</h3>
      <h2 className="text-4xl md:text-5xl font-medium text-[#14213d] dark:text-white">
        Tools I Work With.
      </h2>

      <div
        className="overflow-hidden mt-22 py-10 border-t-2 border-b-2 border-[#d9dee7]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee text-[#14213d] dark:text-white gap-8 w-max">
          {skills.map((skill) => {
            const Icon = skill.icon;
             const isVercel = skill.name === "Vercel";
            return (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-4 px-6 flex-shrink-0 transition-all duration-300 hover:scale-100 hover:-translate-y-1 cursor-pointer"
              >
                <Icon size={42} style={{ color: skill.color }} 
                className={isVercel ? "dark:!text-white" : ""} />
                <span>{skill.name}</span>
              </div>
            );
          })}
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={`dup-${skill.id}`}
                className="flex flex-col items-center gap-4 px-6 flex-shrink-0 transition-all duration-300 hover:scale-100 hover:-translate-y-1 cursor-pointer"
              >
                <Icon size={42} style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Workflow />
    </div>
  );
};

export default Skills;
