// src/components/sections/about.tsx

"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Trophy,
  GraduationCap,
  Star,
  Download,
  Eye,
  User,
  Code,
  Database,
} from "lucide-react";
import "animate.css";

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
      className="py-10 px-4 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen"
      ref={aboutRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Tambahkan animasi di sini */}
          <div
            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 transition-opacity duration-1000 ${
              hasAnimated
                ? "animate__animated animate__fadeInUp" // Animasi untuk ikon
                : "opacity-0"
            }`}
          >
            <User className="w-8 h-8 text-white" />
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-opacity duration-1000 ease-in-out ${
              hasAnimated
                ? "animate__animated animate__fadeInUp animate__delay-0_3s"
                : "opacity-0"
            }`}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Khairunnisa
            </span>{" "}
            Maharani
          </h1>
          <h2
            className={`text-xl md:text-2xl text-gray-600 mb-6 transition-opacity duration-1000 ${
              hasAnimated
                ? "animate__animated animate__fadeInUp animate__delay-0_6s"
                : "opacity-0"
            }`}
          >
            Data Science Student & Technology Enthusiast
          </h2>
        </div>

        {/* Main Content Card */}
        <div
          className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16 transition-opacity duration-1000 ${
            hasAnimated
              ? "animate__animated animate__fadeInUp animate__delay-0_9s"
              : "opacity-0"
          }`}
        >
          <div className="p-8 md:p-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              I&apos;m passionate about data science, artificial intelligence,
              and building impactful digital solutions. My journey combines
              academic excellence with practical experience in technology and
              environmental sustainability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="/cv/khairunnisa-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </span>
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-blue-500 opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    View Projects
                  </span>
                </span>
              </button>
            </div>

            {/* Achievement Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full border border-blue-200 shadow-sm text-sm font-medium">
                Sinta 2 Publication
              </span>
              <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full border border-green-200 shadow-sm text-sm font-medium">
                Pertamina&apos;s Scholarship Awardee 2025
              </span>
            </div>
          </div>
        </div>

        {/* Skills & Focus Areas */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-opacity duration-1000 ${
            hasAnimated
              ? "animate__animated animate__fadeInUp animate__delay-1_2s"
              : "opacity-0"
          }`}
        >
          {[
            {
              icon: <Database className="w-8 h-8" />,
              title: "Data Science",
              description:
                "Analyzing complex datasets to extract meaningful insights and drive decision-making",
              gradient: "from-blue-400 to-cyan-500",
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "AI & Technology",
              description:
                "Building intelligent solutions and exploring cutting-edge technologies",
              gradient: "from-purple-400 to-pink-500",
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Sustainability",
              description:
                "Combining technology with environmental consciousness for positive impact",
              gradient: "from-green-400 to-emerald-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <div className="relative p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl text-white shadow-lg mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Fixed bottom border - now properly positioned for each card */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
