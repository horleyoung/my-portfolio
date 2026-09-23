import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "projects",
      "services",
      "skills",
      "about",
      "experience",
      "contacts",
    ];

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 100; // offset so it triggers a bit early

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);
  return (
    <>
      <nav className="navbar sticky z-1 border-b border-gray-400 dark:border-gray-700 bg-white/70 dark:bg-black/70 backdrop-blur-md relative top-0 w-full flex items-center justify-between p-4 md:p-3 text-[#14213d] dark:text-white">
        <div className="tracking-tight">
          <a
            href="#home"
            className="group inline-flex items-center text-xl font-black text-[#14213d] dark:text-white"
          >
            Horley
            <span className="ml-0.5 text-[#fca311] transition-colors duration-300 group-hover:text-[#14213d] dark:text-[#6049ea] dark:group-hover:text-white">
              .dev
            </span>
          </a>
        </div>
        <ul
          className={`${isOpen ? "flex" : "hidden"} mx-5 md:mx-0 nav-links absolute top-20 left-0 rounded-3xl md:left-70 w-[90%] md:w-auto md:static flex-col md:flex md:flex-row space-x-2 text-[#14213d] md:text-[#14213d] bg-white border border-[#d9dee7] p-5 gap-5 md:bg-transparent md:border-0 md:p-0 dark:text-white dark:bg-[#172033] dark:border-[#263449] md:dark:bg-transparent md:dark:border-0`}
        >
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#fca311] dark:after:bg-[#6049ea] after:transition-transform after:duration-300 after:origin-left hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#6049ea] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100 ${
                activeSection === "projects"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#6049ea] dark:after:bg-[#6049ea] after:transition-transform after:duration-300 after:origin-left hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100 ${
                activeSection === "services"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#6049ea] dark:after:bg-[#6049ea] after:transition-transform after:duration-300 after:origin-left hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100 ${
                activeSection === "skills"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#6049ea] dark:after:bg-[#6049ea] after:transition-transform after:duration-300 after:origin-left hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100 ${
                activeSection === "about"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#fca311] dark:after:bg-[#6049ea] after:transition-transform after:duration-300 after:origin-left hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#6049ea] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100 ${
                activeSection === "experience"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              className={`relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#fca311] dark:after:bg-[#6049ea] after:transition-transform after:duration-300 after:origin-left hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100 ${
                activeSection === "contacts"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="buttons flex items-center justify-center space-x-4">
          <button
            onClick={toggleTheme}
            className=" relative flex h-10 w-10 items-center justify-center"
          >
            <span
              className={`transition-transform duration-500 ease-in-out ${
                isDark ? "rotate-180" : "rotate-0"
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>

          {/* navbar */}
          <button
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute transition-all duration-300 ease-in-out ${
                isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <Menu size={24} />
            </span>

            <span
              className={`absolute transition-all duration-300 ease-in-out ${
                isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <X size={24} />
            </span>
          </button>
        </div>
        {/* Scroll progress fill — last child, sits on top of border-b */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div
            className="h-full bg-[#fca311] dark:bg-[#6049ea] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
