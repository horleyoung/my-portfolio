import techColors from "../data/techcolors";
import { Play } from 'lucide-react';
import { SiGithub} from 'react-icons/si';






const Projects = (props) => {
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-300 dark:border-gray-700 hover:border-[#fca311] dark:hover:border-[#6049ea] ">
      <div className="overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="h-64 w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-xl font-bold text-[#14213d] dark:text-white">{props.title}</h3>
        <p className="text-sm text-[#536174] dark:text-gray-300">{props.description}</p>

        <div className="flex flex-wrap gap-2">
          {props.technologies.map((tech) => {
            const color = techColors[tech] || "bg-gray-500";
            return (
              <span key={tech} className={`${color} text-white px-2 py-1 rounded text-xs font-mono`}>
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex gap-6 pt-2 text-[#14213d] dark:text-white">
          <a href={props.liveDemo} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:-translate-y-1">
            Demo <Play className="inline-block ml-1" size={16} />
          </a>
          <a href={props.github} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:-translate-y-1">
            Source <SiGithub className="inline-block ml-1" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
