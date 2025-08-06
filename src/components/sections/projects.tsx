// src/components/sections/projects.tsx
'use client';

import { useState, useRef, useCallback, useEffect } from "react";
import Image from 'next/image';
import 'animate.css';
import { FolderOpen, ExternalLink, FileText, Search } from 'lucide-react';
// Import your projects data
import { projects } from '@/data/projects';

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Data');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [previewProject, setPreviewProject] = useState<any>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Sample projects data - replace with your actual data

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const categories = ["Data", "Website", "Design"];
  const filteredProjects = projects.filter(p => p.category === selectedCategory);

  const techColors: { [key: string]: string } = {
    "Logistic Regression": "bg-green-600",
    "SMOTE": "bg-pink-500",
    "Linear Regression": "bg-emerald-500",
    "Pandas": "bg-pink-600",
    "Matplotlib": "bg-orange-400",
    "Seaborn": "bg-cyan-400",
    "Statsmodels": "bg-indigo-500",
    "Prophet": "bg-teal-500",
    "NumPy": "bg-blue-400",
    "Jupyter Notebook": "bg-orange-300",
    "R": "bg-blue-500",
    "scikit-learn": "bg-black",
    "Python": "bg-green-500",
    "AWS": "bg-yellow-500",
    "MediaPipe": "bg-blue-600",
    "TensorFlow": "bg-orange-500",
    "Random Forest": "bg-red-500",
    "Tailwind": "bg-cyan-500",
    "Decision Tree": "bg-pink-500",
    "OpenCV": "bg-purple-500",
    "PostgreSQL": "bg-indigo-600",
    "ROSE": "bg-purple-600",
    "Streamlit": "bg-blue-700",
    "XGBoost": "bg-orange-700",
    "Keras": "bg-purple-700",
    "Google Colab": "bg-orange-600",
    "Flask": "bg-blue-400",
    "GSAP": "bg-green-600",
    "Next.js": "bg-gray-800",
    "HTML": "bg-orange-500",
    "CSS": "bg-blue-300",
    "Vue": "bg-green-400",
    "Canva": "bg-indigo-400",
    "GitHub": "bg-pink-600",
    "JavaScript": "bg-yellow-400",
    "ReactBits": "bg-fuchsia-500",
    "Aceternity UI": "bg-rose-500",
    "Vercel": "bg-gray-800",
    "AI": "bg-teal-500",
    "Visual Communication": "bg-pink-400",
    "Graphic Design": "bg-blue-500",
    "Branding": "bg-amber-500",
    "Social Media Design": "bg-rose-400",
    "T-SQL": "bg-purple-600",
    "SQL Server": "bg-blue-800",
    "SSMS": "bg-gray-500",
    "Analytics": "bg-sky-600",
    "Draw.io": "bg-pink-400",
    "ETL": "bg-emerald-500",
    "Star Schema": "bg-indigo-600",
    "Tableau": "bg-indigo-500",
    "CSV": "bg-gray-400",
    "Data Visualization": "bg-cyan-600",
    "Typescript": "bg-purple-700",
    "KMeans": "bg-lime-500",
  };

  const statusColors: { [key: string]: string } = {
    "Finished": "bg-green-500",
    "Ongoing": "bg-yellow-500",
    "Prototype": "bg-blue-500"
  };

  const typeColors: { [key: string]: string } = {
    "Personal Project": "bg-purple-500",
    "Research": "bg-indigo-500",
    "Competition": "bg-red-500",
    "Client Work": "bg-green-600"
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  // Calculate items per page based on screen size
  const itemsPerPage = isMobile ? 1 : 3;
  const cardWidth = isMobile ? 280 : 300;
  const cardGap = isMobile ? 16 : 24;

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev =>
      prev <= 0 ? Math.max(0, filteredProjects.length - itemsPerPage) : prev - 1
    );
  }, [filteredProjects.length, itemsPerPage]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev =>
      prev >= filteredProjects.length - itemsPerPage ? 0 : prev + 1
    );
  }, [filteredProjects.length, itemsPerPage]);

  const openPreview = (project: any) => {
    setPreviewProject(project);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewProject(null);
  };

  const isLeftDisabled = currentIndex <= 0;
  const isRightDisabled = currentIndex >= Math.max(0, filteredProjects.length - itemsPerPage);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50 mt-6"
      id="projects"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-16 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_3s' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <FolderOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my diverse project portfolio, showcasing data science applications, web development, and design innovations. Use the filters below to find projects by category.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_6s' : 'opacity-0'
        }`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-8 py-3 text-base rounded-full border-2 transition-all duration-300 font-medium ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg transform scale-105'
                  : 'bg-white/70 border-gray-300 text-gray-700 hover:bg-white hover:border-blue-400 hover:text-blue-600'
              }`}
              title={`Filter projects by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Container */}
        <div className={`bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_9s' : 'opacity-0'
        }`}>
          {/* Navigation Container */}
          <div className="relative w-full">
            {/* Navigation Buttons - Hidden on mobile */}
            {!isMobile && (
              <>
                <button
                  onClick={goToPrevious}
                  disabled={isLeftDisabled}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isLeftDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 hover:shadow-xl shadow-blue-500/25'
                  }`}
                  title="Previous projects"
                >
                  <i className='bx bx-chevron-left text-2xl'></i>
                </button>

                <button
                  onClick={goToNext}
                  disabled={isRightDisabled}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRightDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 hover:shadow-xl shadow-blue-500/25'
                  }`}
                  title="Next projects"
                >
                  <i className='bx bx-chevron-right text-2xl'></i>
                </button>
              </>
            )}

            {/* Project Cards Container */}
            <div className={`overflow-hidden ${isMobile ? 'px-4' : 'px-16'}`}>
              <div
                className="flex gap-6 py-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
                  width: `${filteredProjects.length * (cardWidth + cardGap)}px`
                }}
              >
                {filteredProjects.map((proj, i) => (
                  <div
                    key={`${proj.title}-${i}`}
                    className={`relative group overflow-hidden flex-shrink-0 ${isMobile ? 'w-[280px]' : 'w-[300px]'} min-h-[500px] p-6 rounded-2xl bg-white border border-gray-200 shadow-lg transform transition-all duration-300`}
                    title={proj.tooltip}
                  >
                    {/* Meta Info Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-gray-500 font-medium">{proj.year}</span>
                        <div className="flex gap-2">
                          <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${statusColors[proj.status]}`}>
                            {proj.status}
                          </span>
                          <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${typeColors[proj.type]} hidden sm:inline`}>
                            {proj.type}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {proj.team}
                      </span>
                    </div>

                    <div className="relative mb-4 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={proj.img}
                        alt={proj.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-[180px] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2">
                      {proj.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {proj.title.split(" ").slice(-1)}
                      </span>
                    </h3>

                    <p className="text-sm mb-4 text-gray-600 line-clamp-3">{proj.desc}</p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6 max-h-20 overflow-hidden">
                      {proj.tech && proj.tech.slice(0, isMobile ? 4 : 6).map((tech, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-md text-white font-medium ${techColors[tech] || 'bg-gray-600'}`}
                          title={tech}
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.tech && proj.tech.length > (isMobile ? 4 : 6) && (
                        <span className="text-xs px-2 py-1 rounded-md text-gray-600 bg-gray-200 font-medium">
                          +{proj.tech.length - (isMobile ? 4 : 6)}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (proj.preview && proj.preview.startsWith('/')) {
                            window.location.href = proj.preview;
                          } else if (proj.button.toLowerCase() === 'github' && proj.docs) {
                            window.open(proj.docs, '_blank');
                          } else if ((proj.button.toLowerCase() === 'demo' || proj.button.toLowerCase() === 'website' || proj.button.toLowerCase() === 'behance' || proj.button.toLowerCase() === 'desain gallery' || proj.button.toLowerCase() === 'streamlit') && proj.preview) {
                            window.open(proj.preview, '_blank');
                          }
                        }}
                        className="flex-1 text-sm text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
                        title={`Open ${proj.button}`}
                      >
                        <ExternalLink className="w-4 h-4 inline mr-2" />
                        {proj.button}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPreview(proj);
                        }}
                        className="text-sm text-gray-700 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 font-medium cursor-pointer"
                        title="Preview project"
                      >
                        <Search className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          proj.docs && window.open(proj.docs, '_blank');
                        }}
                        className="text-sm text-gray-700 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 font-medium cursor-pointer"
                        title="View documentation"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={goToPrevious}
                  disabled={isLeftDisabled}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isLeftDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 shadow-lg'
                  }`}
                  title="Previous project"
                >
                  <i className='bx bx-chevron-left text-xl'></i>
                </button>
                
                <button
                  onClick={goToNext}
                  disabled={isRightDisabled}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRightDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 shadow-lg'
                  }`}
                  title="Next project"
                >
                  <i className='bx bx-chevron-right text-xl'></i>
                </button>
              </div>
            )}

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.max(1, filteredProjects.length - itemsPerPage + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                  title={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && previewProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {previewProject.title}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${statusColors[previewProject.status]}`}>
                    {previewProject.status}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${typeColors[previewProject.type]}`}>
                    {previewProject.type}
                  </span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                    {previewProject.year} • {previewProject.team}
                  </span>
                </div>
              </div>
              <button
                onClick={closePreview}
                className="text-gray-400 hover:text-gray-600 text-2xl flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                title="Close preview"
              >
                <i className='bx bx-x'></i>
              </button>
            </div>

            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src={previewProject.img}
                alt={previewProject.title}
                width={600}
                height={300}
                className="w-full object-cover h-[300px]"
              />
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{previewProject.desc}</p>

            {/* Tech Stack Badges in Preview Modal */}
            <div className="flex flex-wrap gap-2 mb-6">
              {previewProject.tech && previewProject.tech.map((tech: string, index: number) => (
                <span
                  key={index}
                  className={`text-sm px-3 py-2 rounded-lg text-white font-medium ${techColors[tech] || 'bg-gray-600'}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => {
                  if (previewProject.preview && previewProject.preview.startsWith('/')) {
                    window.location.href = previewProject.preview;
                  } else if (previewProject.button.toLowerCase() === 'github' && previewProject.docs) {
                    window.open(previewProject.docs, '_blank');
                  } else if ((previewProject.button.toLowerCase() === 'demo' || previewProject.button.toLowerCase() === 'website' || previewProject.button.toLowerCase() === 'behance' || previewProject.button.toLowerCase() === 'desain gallery' || previewProject.button.toLowerCase() === 'streamlit') && previewProject.preview) {
                    window.open(previewProject.preview, '_blank');
                  }
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center font-medium shadow-lg hover:shadow-xl cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 inline mr-2" />
                {previewProject.button}
              </button>
              {previewProject.docs && (
                <button
                  onClick={() => window.open(previewProject.docs, '_blank')}
                  className="sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-center font-medium cursor-pointer"
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Docs
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;