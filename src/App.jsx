import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


function App() {  


  return (
    <div className="App min-h-screen bg-gray-200 text-white dark:bg-[#000000]">
      <section >
        <Navbar />
        <Hero />
        <div className="border-t border-gray-300 dark:border-gray-700"/>
        <ProjectsSection />
        <div className="border-t border-gray-300 dark:border-gray-700"/>
        <Services />
        <div className="border-t border-gray-300 dark:border-gray-700"/>
        <Skills />
        <div className="border-t border-gray-300 dark:border-gray-700"/>
        <About />
        <div className="border-t border-gray-300 dark:border-gray-700"/>
        <Experience />
        <div className="border-t border-gray-300 dark:border-gray-700"/>
        <Contact />
        <Footer />
      </section>

    </div>

  );
}

export default App;
