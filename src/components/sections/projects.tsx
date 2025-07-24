'use client';

import { useEffect, useState, useRef } from "react";

const ProjectSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCards.length === 0) {
          const delays = [0, 300, 600]; // Delay per card (ms)

          delays.forEach((delay, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, delay);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [visibleCards]);

  const projects = [
    {
      title: "Data Visualization Dashboard",
      desc: "Dashboard interaktif berbasis React dan Chart.js yang menampilkan analisis real-time dari dataset publik, seperti COVID-19, ekonomi, atau sosial.",
      img: "/images/projects/p1.png",
      button: "Demo"
    },
    {
      title: "Machine Learning Predictive Model",
      desc: "Model prediktif untuk memprediksi dropout mahasiswa berbasis Random Forest dan XGBoost, dikembangkan dengan Python & Scikit-learn.",
      img: "/images/projects/p1.png",
      button: "GitHub"
    },
    {
      title: "Interactive Portfolio Website",
      desc: "Portofolio pribadi dengan animasi interaktif, efek hover, dan desain futuristik. Dibangun dengan Next.js, Tailwind, dan Framer Motion.",
      img: "/images/projects/p1.png",
      button: "Website"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-[80%] mt-[50px] mb-[200px] mx-auto flex flex-col gap-15 items-center pt-30"
      id="projects"
    >
      <h1 className="text-5xl font-bold text-center autoDisplay gradient leading-[1.25]">My Projects</h1>

      {projects.map((proj, i) => (
        <div
          key={i}
          className={`
            flex flex-wrap md:flex-nowrap w-full min-h-[400px] items-center gap-40 justify-center project-card
            transition-opacity duration-700 ease-out
            ${visibleCards.includes(i) ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'}
          `}
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          {/* IMAGE */}
          <div className="relative flex items-center justify-center w-[35%] min-w-[300px] max-w-[500px] cursor-pointer transition duration-500 mix-blend-exclusion autoBlur project-vidbox">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full object-contain rounded-[20px] shadow-md transition duration-500 hover:shadow-white border-4 border-gray-700"
            />
            <div className="hover-sign"></div>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center items-start w-[45%] min-w-[300px] fadein-left project-info">
            <h1 className="text-2xl font-bold max-w-[450px] mb-4">
              {proj.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient">{proj.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="max-w-[400px] mb-6">{proj.desc}</p>
            <button className="text-gray-300 px-8 py-2.5 rounded-lg border border-[#72a1de81] bg-[#2200493d] shadow-sm hover:opacity-80 hover:shadow-[#72a1de81] transition">
              <i className='bx bx-link-external'></i> {proj.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
