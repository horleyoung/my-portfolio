import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding  pt-24 mt-4">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left column */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex justify-between bg-gray-100 rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 ">
            <div className="flex flex-col ">
              <span className="text-3xl font-bold text-[#fca311] dark:text-[#6049ea]">1+</span>
              <span className="text-sm text-[#536174] uppercase tracking-wide">
                Years Coding
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#fca311] dark:text-[#6049ea]">6+</span>
              <span className="text-sm text-[#536174] uppercase tracking-wide">
                Projects Built
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#fca311] dark:text-[#6049ea]">5</span>
              <span className="text-sm text-[#536174] uppercase tracking-wide">
                Technologies
              </span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 flex-1 flex items-center ">
            <p className="text-2xl font-bold text-[#14213d] leading-snug">
              "I care about writing code that's readable, interfaces that feel
              intuitive, and details that make a product feel finished — not
              just functional."
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h3 className="text-xl font-semibold text-[#fca311] dark:text-[#6049ea] font-mono text-xl ">About Me</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#14213d] dark:text-white">
            I'm Habeeb — a frontend developer focused on clean, functional
            interfaces.
          </h2>

          <p className="text-[#536174] dark:text-white ">
            Frontend developer with a Computer Science background from Kwara
            State University , focused on React and JavaScript.
          </p>

          <p className="text-[#536174] dark:text-white">
            Completed SIWES as a Frontend Developer Intern, building responsive
            UIs for fintech apps. Since then, I've kept building — 6+ personal
            projects and counting.
          </p>

          <p className="text-[#536174] dark:text-white">
            Beyond code, I'm a Campus Ambassador for Cowrywise and active GDG
            member — tech talks, workshops, hackathons.
          </p>
          <a
            href="/Habeeb Adepoju CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg items-center gap-2 w-fit mt-4 bg-[#14213d] text-white px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1f3157]"
          >
            <FileText size={18} />
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
