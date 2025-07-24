'use client';
import React, { useState, useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";
import "animate.css";
import Image from 'next/image';

const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillsRef = useRef<HTMLElement>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSkillsRef = skillsRef.current; 

    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    return () => {
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      className="skills-section relative flex flex-col items-center justify-center gap-8 px-4 py-16"
      id="skills"
      ref={skillsRef}
    >
      {/* Judul */}
      <div className={`w-full text-center mb-5 pt-15 transition-opacity duration-1000 ${
        hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_3s' : 'opacity-0'
      }`}>
        <h1 className="section-title font-bold text-4xl">
          My Skills
        </h1>
      </div>

      {/* Teks Deskripsi */}
      <div className={`text-content max-w-2xl mx-auto text-center z-10 mb-30 transition-opacity duration-1000 ${
        hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_6s' : 'opacity-0'
      }`}>
        <h1 className="gradient font-bold text-5xl mb-10 leading-[1.25]">
          Data Science & Design <i className="bx bx-brain"></i>
        </h1>
        <p className="text-lg leading-relaxed">
          I&apos;m a data science student who loves combining logic and creativity.
          I enjoy building AI-powered tools, exploring trends with Python & SQL,
          and making things visually satisfying with Figma and TailwindCSS.
          I care about making things both useful and beautiful.
        </p>
      </div>

      {/* Slider */}
      <div className={`skills-box transition-opacity duration-1000 ${
        hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_9s' : 'opacity-0'
      }`}>
        <div className="slider overflow-hidden w-full">
          {/* Perhatikan penambahan 'relative' pada elemen 'item' */}
          <div className="list flex animate-slider-loop">
            {[...Array(17).fill(null).map((_, i) => (
              <div className="item min-w-[120px] p-2 relative" key={`original-${i}`}> 
                <Image
                  src={`/images/skills/${i + 1}.png`} 
                  alt={`skill-${i + 1}`}
                  fill // Mengisi parent element
                  style={{ objectFit: 'contain' }} // Penting: Agar gambar tidak terpotong dan mempertahankan rasio
                  sizes="(max-width: 768px) 100px, 120px" // Memberi tahu Next.js perkiraan ukuran di berbagai breakpoint
                />
              </div>
            )),
            ...Array(17).fill(null).map((_, i) => (
              <div className="item min-w-[120px] p-2 relative" key={`duplicate-${i}`}>
                <Image
                  src={`/images/skills/${i + 1}.png`} 
                  alt={`skill-copy-${i + 1}`}
                  fill 
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100px, 120px"
                />
              </div>
            ))]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;