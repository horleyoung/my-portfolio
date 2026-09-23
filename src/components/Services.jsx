import React from "react";
import services from "../data/servicesData";

const Services = () => {

  return (
    <section id="services" className="section-padding  text-[#14213d]">
      <h3 className="text-md font-semibold mt-16 md:mt-0 mb-4 text-[#fca311] dark:text-[#6049ea] font-mono">My Services</h3>
      <h2 className="text-5xl font-medium mb-8 text-[#14213d] dark:text-white ">What I Build.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-6 dark:text-white ">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="flex flex-col gap-3 p-6 border rounded-lg transition-all duration-200 hover:-translate-y-2 hover:border-[#fca311] dark:hover:border-[#6049ea] hover:shadow-lg"
            >
              <Icon className="text-[#fca311] dark:text-[#6049ea] "/>
              <h3 className="font-bold text-xl">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
