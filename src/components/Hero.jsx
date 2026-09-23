import potrait from "../assets/potrait.jpg";


function Hero() {
  return (
    <section
      id="home"
      className="px-6 sm:px-10  py-15 md:px-16 lg:px-24 flex min-h-[calc(100svh-5rem)] flex-col items-center justify-between gap-12 text-[#14213d] md:flex-row md:gap-16 dark:text-white "
    >
      {/* left part */}
      <div className="w-full max-w-xl text-left">
        <p className="mb-5 text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#fca311] dark:text-[#6049ea] ">
          Hello, I&apos;m Habeeb
        </p>
        <h1 className="max-w-xl text-5xl sm :text-4xl lg:text-6xl font-medium tracking-[-0.04em] text-[#14213d] dark:text-white">
          I build fast, accessible interfaces with React
        </h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-[#536174] dark:text-white sm:text-lg">
          I&apos;m a passionate developer creating thoughtful, high-performing web
          experiences that make an impact.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            className="inline-flex min-h-12 items-center justify-center bg-[#14213d] dark:bg-[#6049ea] px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1f3157] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fca311]"
            href="#projects"
          >
            View my work
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center border border-[#14213d] px-5 py-3 text-sm font-bold text-[#14213d] dark:text-white transition-colors duration-200 hover:bg-[#14213d] dark:hover:bg-[#6049ea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fca311]"
            href="#about"
          >
            More about me
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 px-2 py-3 text-sm font-bold text-[#14213d] dark:text-white dark:hover:text-[#6049ea] transition-colors duration-200 hover:text-[#fca311] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fca311]"
            href="#contacts"
          >
            Let&apos;s talk <span aria-hidden="true" className="text-lg">↗</span>
          </a>
        </div>
      </div>
      {/* right part */}
      <div className="w-full max-w-md shrink-0 md:max-w-[42%]">
        <div className="p-2 sm:p-4 md:p-5 ">
          <div className="flex aspect-square rounded-xl items-center justify-center overflow-hidden border border-[#14213d]/20 bg-[#f5f3ee]">
            <img
              className="h-full w-full object-cover"
              src={potrait}
              alt="Abstract 3D portfolio mark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;  