import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";


const Contact = () => {
  return (
    <section id="contacts" className="section-padding mt-20">
      <p className="font-medium uppercase text-[#fca311] dark:text-[#6049ea] mb-4 font-mono text-md">
         Let's Connect
      </p>
      <h2 className=" text-4xl md:text-5xl font-black font-semibold leading-tight text-[#14213d] dark:text-white tracking-tight max-w-2xl">
        Got something to build? I'd like to hear about it.
      </h2>

      <div className=" mt-10 flex items-center  gap-3">
        <a
          href="mailto:adepojuhabeeb5@gmail.com"
          className=" flex items-center gap-3 bg-[#14213d] dark:bg-[#6049ea] text-white px-6 py-5 rounded-lg w-fit transition-transform duration-200 hover:-translate-y-1"
        >
          <Mail size={20} />
          adepojuhabeeb5@gmail.com
        </a>
        <a
          href="https://wa.me/2347040592820"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#14213d] py-4 px-5  rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-[#6049ea] hover:border-[#8da9c4] hover:shadow-[0_4px_15px_rgba(141,169,196,0.25)]"
        >
          <FaWhatsapp size={22} className="text-black dark:text-white" />
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-black dark:text-white">
        <a
          href="https://github.com/horleyoung"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#14213d] px-5 py-3 rounded-lg  rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#fca311] dark:hover:border-[#6049ea] hover:shadow-[0_0_0_1px_#fca311] dark:hover:shadow-[0_0_0_1px_#6049ea] "
        >
          <FaGithub size={18} />
          GitHub
          <ArrowUpRight size={18} />
        </a>

        <a
          href="https://linkedin.com/in/adepoju-habeeb-979550359"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#14213d] px-5 py-3 rounded-lg  rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#fca311] dark:hover:border-[#6049ea] hover:shadow-[0_0_0_1px_#fca311] dark:hover:shadow-[0_0_0_1px_#6049ea] "
        >
          <FaLinkedin size={18} />
          LinkedIn
          <ArrowUpRight size={18} />
        </a>

        <a
          href="https://x.com/Horley_blaq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#14213d] px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#fca311] dark:hover:border-[#6049ea] hover:shadow-[0_0_0_1px_#fca311] dark:hover:shadow-[0_0_0_1px_#6049ea]"
        >
          <FaXTwitter size={18} />
        </a>
      </div>
    </section>
  );
}; 

export default Contact;
