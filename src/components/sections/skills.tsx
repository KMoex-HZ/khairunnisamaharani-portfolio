'use client';
import React, { useState, useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";
import "animate.css";
import Image from 'next/image';
import { Code, Brain, Palette, Database } from 'lucide-react';

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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50"
      ref={skillsRef}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-16 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_3s' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and creative skills honed through academic projects and hands-on experience
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 mb-12 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_6s' : 'opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data Science & Design
              </span>
              <span className="inline-block ml-3">
                <i className="bx bx-brain text-blue-500"></i>
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              I&apos;m a data science student who loves combining logic and creativity.
              I enjoy building AI-powered tools, exploring trends with Python & SQL,
              and making things visually satisfying with Figma and TailwindCSS.
              I care about making things both useful and beautiful.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Science",
                skills: ["Python", "R", "SQL", "Machine Learning"],
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Programming",
                skills: ["JavaScript", "TypeScript", "React", "Next.js"],
                gradient: "from-purple-400 to-pink-500"
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Design",
                skills: ["Figma", "UI/UX", "TailwindCSS", "Adobe"],
                gradient: "from-green-400 to-blue-500"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI & Analytics",
                skills: ["TensorFlow", "Pandas", "Jupyter", "Statistics"],
                gradient: "from-yellow-400 to-orange-500"
              }
            ].map((category, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl text-white mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 text-sm flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-2`}></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom border - properly positioned inside the card */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Slider */}
        <div className={`transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_9s' : 'opacity-0'
        }`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Technology Stack</h3>
              <p className="text-gray-600">Tools and technologies I work with</p>
            </div>
            
            <div className="overflow-hidden w-full pb-4">
              <div className="flex animate-slider-loop">
                {[...Array(19).fill(null).map((_, i) => (
                  <div className="min-w-[120px] h-[120px] p-4 mx-2 relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group" key={`original-${i}`}> 
                    <Image
                      src={`/images/skills/${i + 1}.png`} 
                      alt={`skill-${i + 1}`}
                      fill
                      style={{ objectFit: 'contain', padding: '12px' }}
                      sizes="(max-width: 768px) 100px, 120px"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )),
                ...Array(19).fill(null).map((_, i) => (
                  <div className="min-w-[120px] h-[120px] p-4 mx-2 relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group" key={`duplicate-${i}`}>
                    <Image
                      src={`/images/skills/${i + 1}.png`} 
                      alt={`skill-copy-${i + 1}`}
                      fill 
                      style={{ objectFit: 'contain', padding: '12px' }}
                      sizes="(max-width: 768px) 100px, 120px"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slider-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slider-loop {
          animation: slider-loop 30s linear infinite;
        }

        .animate-slider-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;