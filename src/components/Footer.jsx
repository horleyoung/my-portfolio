import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-24">
      {/* HR ruler */}
      <div className="border-t border-[#aeb6c4]" />

      <div className="section-padding flex flex-col py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[8rem]">
          <p className="text-sm text-[#536174] ">
            © 2026 HorleyDev. All rights reserved.
          </p>

          <ul className="flex flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium text-[#14213d] dark:text-[#fff]">
            <li className="relative w-fit hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] dark:after:bg-[#6049ea] after:scale-x-0 after:origin-left after:transition-transfo1m after:duration-400 hover:after:scale-x-100 active:after:scale-x-100">
              {" "}
              Frontend development.
            </li>
            <li className="relative w-fit hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] dark:after:bg-[#6049ea] after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100 active:after:scale-x-100">
              Product thinking.
            </li>
            <li className="relative w-fit hover:cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-[#fca311] dark:after:bg-[#6049ea] after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100 active:after:scale-x-100">
              Premium execution.
            </li>
          </ul>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className=" self-end md:self-auto flex h-11 w-11 items-center justify-center rounded-lg border border-[#14213d] text-[#14213d]
            transition-all duration-300 hover:scale-105 hover:border-[#fca311] hover:text-[#fca311] hover:shadow-[0_4px_15px_rgba(252,163,17,0.25)] dark:border-white dark:text-white dark:hover:border-[#6049ea] dark:hover:text-[#8da9c4] dark:hover:shadow-[0_4px_15px_rgba(141,169,196,0.25)]
          "
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
