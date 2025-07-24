'use client';
import { useState, useEffect, useRef } from "react";
import 'animate.css';

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10 mt-[-48px] pt-25 text-center text-gray-300"
      id="about"
      ref={aboutRef}
    >
      <div className="max-w-3xl space-y-6">
        <h1
          className={`text-4xl md:text-6xl font-bold transition-opacity duration-1000 ease-in-out ${
            hasAnimated
              ? 'animate__animated animate__fadeInUp animate__delay-0_3s'
              : 'opacity-0'
          }`}
        >
          Hi I&apos;m <span className="gradient">Khairunnisa</span> Maharani
        </h1>

        <h2
          className={`text-xl md:text-2xl text-gray-300 transition-opacity duration-1000 ${
            hasAnimated
              ? 'animate__animated animate__fadeInUp animate__delay-0_6s'
              : 'opacity-0'
          }`}
        >
          Data Science Student
        </h2>

        <p
          className={`text-md md:text-lg text-gray-400 transition-opacity duration-1000 ${
            hasAnimated
              ? 'animate__animated animate__fadeInUp animate__delay-0_9s'
              : 'opacity-0'
          }`}
        >
          I&apos;m passionate about data, AI, and building impactful digital solutions. This portfolio showcases my journey in technology, learning, and growth.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-4 pt-2 transition-opacity duration-1000 ${
            hasAnimated
              ? 'animate__animated animate__fadeInUp animate__delay-1_2s'
              : 'opacity-0'
          }`}
        >
          <a
            href="/cv/khairunnisa-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative rounded-full px-6 py-3 overflow-hidden group bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-gray-300 font-medium hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative z-10">Download CV</span>
          </a>

          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-block relative rounded-full px-6 py-3 overflow-hidden group border border-transparent bg-transparent text-gray-300 font-medium transition-all duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 "></span>
            <span className="absolute inset-0 rounded-full border border-indigo-400 group-hover:border-indigo-400"></span>
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 group-hover:text-gray-300">
              View Projects
            </span>
          </button>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-300 transition-opacity duration-1000 ${
            hasAnimated
              ? 'animate__animated animate__fadeInUp animate__delay-1_5s'
              : 'opacity-0'
          }`}
        >
          <span className="bg-white/10 px-4 py-1 rounded-full">Sinta 2 Publication</span>
          <span className="bg-white/10 px-4 py-1 rounded-full">Pertamina&apos;s Scholarship Finalist</span>
        </div>
      </div>
    </section>
  );
};

export default About;
