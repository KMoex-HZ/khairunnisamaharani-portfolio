"use client";
import React, { useState, useEffect, useRef } from "react";
import { Award, Trophy, GraduationCap, Star } from "lucide-react";
import "animate.css";

const HonorsAndAwards = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const awardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (awardsRef.current) observer.observe(awardsRef.current);
    return () => {
      if (awardsRef.current) observer.unobserve(awardsRef.current);
    };
  }, [hasAnimated]);

  const awards = [
    {
      id: 1,
      title: "Pertamina Foundation Scholarship",
      subtitle: "Sobat Bumi Program",
      year: "2025",
      description:
        "Received prestigious scholarship from Pertamina Foundation supporting environmental sustainability initiatives and academic excellence.",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      title: "Gold & Silver Medalist",
      subtitle: "National Science Competition (KSPI)",
      year: "2024",
      description:
        "Achieved a Gold Medal in English and a Silver Medal in Mathematics at the national level, competing in the higher education category organized by Puskanas.id.",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      id: 2,
      title: "Best Student Award",
      subtitle: "Multimedia Program",
      year: "2023",
      description:
        "Recognized as the top-performing student in Multimedia Program at SMK N 1 Bandar Lampung for outstanding academic achievement.",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      title: "BNSP Certified – Multimedia",
      subtitle: "Professional Competency Certification",
      year: "2023",
      description:
        "Earned professional certification from the National Professional Certification Agency (BNSP), validating expertise in multimedia production, editing, and content creation.",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-slate-500 to-gray-900",
    },
  ];

  return (
    <section
      id="awards"
      className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen"
      ref={awardsRef}
    >
      <div className="max-w-6xl mx-auto mt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 transition-opacity duration-1000 ${
              hasAnimated ? "animate__animated animate__fadeInUp" : "opacity-0"
            }`}
          >
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-opacity duration-1000 ${
              hasAnimated
                ? "animate__animated animate__fadeInUp animate__delay-0.3s"
                : "opacity-0"
            }`}
          >
            Honors & Awards
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-opacity duration-1000 ${
              hasAnimated
                ? "animate__animated animate__fadeInUp animate__delay-0.6s"
                : "opacity-0"
            }`}
          >
            Recognition and achievements that reflect dedication to excellence
            in academics and environmental sustainability
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                hasAnimated
                  ? `animate__animated animate__fadeInUp animate__delay-${
                      0.9 + index * 0.3
                    }s`
                  : "opacity-0"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${award.gradient} rounded-xl text-white shadow-lg`}
                  >
                    {award.icon}
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Additional logos based on award type */}
                    {award.id === 1 && (
                      <div className="flex items-center space-x-3">
                        {/* Pertamina Foundation Logo */}
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                          <img
                            src="/images/pertamina-foundation-logo.jpeg"
                            alt="Pertamina Foundation"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        {/* Sobat Bumi Lampung Logo */}
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                          <img
                            src="/images/sobat-bumi-lampung-logo.jpeg"
                            alt="Sobat Bumi Lampung"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {award.id === 2 && (
                      <div className="flex items-center space-x-3">
                        {/* BNSP Logo */}
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                          <img
                            src="/images/smkn1.png"
                            alt="BNSP"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {award.id === 3 && (
                      <div className="flex items-center space-x-3">
                        {/* Puskanas Logo */}
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                          <img
                            src="/images/puskanas-logo.png"
                            alt="Puskanas.id"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                    )}
                    {award.id === 4 && (
                      <div className="flex items-center space-x-3">
                        {/* BNSP Logo */}
                        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                          <img
                            src="/images/bnsp-logo.png"
                            alt="BNSP"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                    )}

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {award.title}
                </h3>

                <p className="text-lg font-semibold text-gray-600 mb-4">
                  {award.subtitle}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {award.description}
                </p>

                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${award.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${award.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div
          className={`mt-16 text-center transition-opacity duration-1000 ${
            hasAnimated
              ? "animate__animated animate__fadeInUp animate__delay-1.5s"
              : "opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white rounded-2xl shadow-lg px-6 py-6 text-center">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-medium">4 Major Awards</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">
                Academic Excellence
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">
                Sustainability Focus
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate__delay-0\\.3s {
          animation-delay: 0.3s;
        }
        .animate__delay-0\\.6s {
          animation-delay: 0.6s;
        }
        .animate__delay-0\\.9s {
          animation-delay: 0.9s;
        }
        .animate__delay-1\\.2s {
          animation-delay: 1.2s;
        }
        .animate__delay-1\\.5s {
          animation-delay: 1.5s;
        }
        .animate__delay-1\\.8s {
          animation-delay: 1.8s;
        }
      `}</style>
    </section>
  );
};

export default HonorsAndAwards;
