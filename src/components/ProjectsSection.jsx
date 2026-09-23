import Projects from "./Projects";
import projects from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <div id="projects" className=" pt-14 md:pt-24 dark:text-[#ffff] ">
      <h2 className="font-mono text-md px-6 md:px-12 lg:px-24 font-semibold text-[#fca311] dark:text-[#6049ea] mx-auto mt-8 mb-1">
        Selected Projects.
      </h2>
      <p className="text-5xl px-6 md:px-12 lg:px-24 text-[#14213d] font-medium text-[#14213d] dark:text-[#ffff] tracking-tight">
        Things I've built
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-24 mt-2 py-12 ">
        {projects.map((project) => (
          <Projects key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
