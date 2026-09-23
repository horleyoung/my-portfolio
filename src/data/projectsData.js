import todo from "../assets/todo screenshot.png";
import weather from "../assets/weather screenshot.png";
import moniepoint from "../assets/moniepoint screenshot.png";
import testimonial from "../assets/testimonial screenshot.png";

const projects = [
  {
    id: 1,      
    title: "Todo App",
    description:
      "A responsive todo app built with React and Tailwind CSS. Fully responsive across devices, with hover states on every interactive element. Add, complete, delete, and filter todos by all/active/complete, clear completed items in one click, and toggle between light and dark mode.",  
    image: todo,
    technologies: ["React", "Tailwind CSS", "dnd-kit", "Lucide React", "LocalStorage"],
    liveDemo: "https://todolist-website-one.vercel.app/",
    github: "https://github.com/horleyoung/todolist-website.git"
    },

    {
        id: 2,
        title: "Weather App",
        description: "A responsive weather app built with React and Tailwind CSS. Fetches real-time weather data from a public API and displays it in a user-friendly interface.",
        image: weather,
        technologies: ["React", "Tailwind CSS"],
        liveDemo: "https://weather-website-bay-ten.vercel.app/",
        github: "https://github.com/horleyoung/Weather-website.git"
    }, 

    {
        id: 3,
        title: "Moniepoint website",
        description: "A modern, responsive website for Moniepoint, built with React and Tailwind CSS. Features a clean design, smooth animations, and optimized performance for an engaging user experience.",
        image: moniepoint,
        technologies: ["React", "Tailwind CSS"],
        liveDemo: "https://moniepoint-website.vercel.app/",
        github: "https://github.com/horleyoung/Moniepoint-website.git"
    },

    {
        id: 4,
        title: "Testimonial Grid",
        description: "A brief description of Project 4 goes here. This project showcases my skills in front-end development and demonstrates my ability to create responsive and interactive web applications.",
        image: testimonial,
        technologies: ["HTML", "CSS", "JavaScript"],
        liveDemo: " https://github.com/horleyoung/Testimonial-grid.git",
        github: "https://horleyoung.github.io/Testimonial-grid/"
    }
]

export default projects;