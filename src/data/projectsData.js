import todo from "../assets/todo screenshot.png";
import weather from "../assets/weather screenshot.png";
import moniepoint from "../assets/moniepoint screenshot.png";
import testimonial from "../assets/testimonial screenshot.png";

const projects = [
  {
    id: 1,      
    title: "Todo App",
    description:
      "A fully responsive todo app built with React and Tailwind CSS, featuring CRUD operations, filtering, hover states, and a dark mode theme.",  
    image: todo,
    technologies: ["React", "Tailwind CSS", "dnd-kit", "Lucide React", "LocalStorage"],
    liveDemo: "https://todolist-website-one.vercel.app/",
    github: "https://github.com/horleyoung/todolist-website.git"
    },

    {
        id: 2,
        title: "Weather App",
        description: "A responsive weather app built with React and Tailwind CSS, featuring real-time weather data, API integration, and a user-friendly interface.",
        image: weather,
        technologies: ["React", "Tailwind CSS"],
        liveDemo: "https://weather-website-bay-ten.vercel.app/",
        github: "https://github.com/horleyoung/Weather-website.git"
    }, 

    {
        id: 3,
        title: "Moniepoint website",
        description: "A modern, responsive clone of the Moniepoint website built with React and Tailwind CSS, featuring a clean UI, smooth animations, and optimized performance.",
        image: moniepoint,
        technologies: ["React", "Tailwind CSS"],
        liveDemo: "https://moniepoint-website.vercel.app/",
        github: "https://github.com/horleyoung/Moniepoint-website.git"
    },

    {
        id: 4,
        title: "Testimonial Grid",
        description: "A responsive testimonial grid built with HTML and CSS, testing my grid layout skills and ability to design fully responsive interfaces.",
        image: testimonial,
        technologies: ["HTML", "CSS", "JavaScript"],
        liveDemo: "https://horleyoung.github.io/Testimonial-grid/",
        github: "https://github.com/horleyoung/Testimonial-grid.git"
    }
]

export default projects;