// src/components/sections/projects.tsx
'use client';

import { useState, useRef, useCallback, useEffect } from "react";
import Image from 'next/image';
import 'animate.css';

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Data');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [previewProject, setPreviewProject] = useState<any>(null);

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const projects = [
    {
      title: "Creditworthiness Prediction Model",
      desc: "Developed a creditworthiness prediction model using CART and Random Forest algorithms in R. Addressed class imbalance with ROSE sampling and conducted performance evaluation using multiple metrics such as Accuracy, Recall, F1-Score, and Balanced Accuracy.",
      img: "/images/projects/p3.jpg",
      button: "GitHub",
      category: "Data",
      year: "2025",
      status: "Finished",
      team: "Team (5)",
      type: "Research",
      tech: ["R", "ROSE", "Random Forest", "Decision Tree"],
      preview: "",
      docs: "https://github.com/KMoex-HZ/Creditworthiness-Prediction-using-CART-and-Random-Forest",
      tooltip: "Predicting creditworthiness using R with ROSE and Random Forest"
    },
    {
      title: "Flood Prediction Model",
      desc: "Developed a machine learning model to predict flood probability in Bandar Lampung based on personal experience with recurring floods. Analyzed 50,000+ samples, identified key factors like Monsoon Intensity and Drainage Systems, and built models including Linear Regression, Random Forest, and XGBoost. Deployed the final model as an interactive Streamlit app. Submitted to the Pertamina Foundation scholarship and reached finalist stage.",
      img: "/images/projects/p2.jpg",
      button: "Streamlit",
      category: "Data",
      year: "2025",
      status: "Finished",
      team: "Solo",
      type: "Research",
      tech: ["Python", "Streamlit", "XGBoost", "Random Forest"],
      preview: "https://projek-prediksi-banjir.streamlit.app/", // Ganti kalau URL-nya beda
      docs: "https://github.com/KMoex-HZ/Prediksi-Banjir",
      tooltip: "Flood prediction model with Streamlit app for Bandar Lampung"
    },
    {
      title: "Real-time Gesture Recognition",
      desc: "Built a computer vision prototype to recognize hand gestures from a live webcam stream using MediaPipe and OpenCV. Detected 21 hand landmarks in real-time and implemented Python logic to classify gestures like 'Thumbs-Up'. Visual feedback displayed directly on video output as a demo of Human-Computer Interaction (HCI) without special hardware.",
      img: "/images/projects/demo.gif", // atau demo.gif lo kalau mau dijadiin thumbnail
      button: "GitHub",
      category: "Data",
      year: "2024",
      status: "Finished",
      team: "Solo",
      type: "Personal Project",
      tech: ["Python", "OpenCV", "MediaPipe"],
      preview: "", // bisa tambahin link demo Streamlit/Webcam kalo ada
      docs: "https://github.com/KMoex-HZ/Hand-Tracking", // ganti sesuai repo lo
      tooltip: "Real-time hand gesture detection using MediaPipe and OpenCV"
    },
    {
      title: "Gesture Image Classification",
      desc: "Built a CNN model to classify hand gesture images (rock, paper, scissors) as part of Dicoding’s beginner machine learning course. Developed an end-to-end pipeline using TensorFlow and Keras on Google Colab. Applied data augmentation, designed a multi-layer CNN, and achieved over 96% validation accuracy within 30 minutes of training.",
      img: "/images/projects/p4.png", // lo bisa ganti kalau ada gambar tangan batu-gunting-kertas
      button: "Demo",
      category: "Data",
      year: "2024",
      status: "Finished",
      team: "Solo",
      type: "Personal Project",
      tech: ["Python", "TensorFlow", "Keras", "Google Colab"],
      preview: "https://github.com/KMoex-HZ/ML-rockpaperscissors", // ganti kalo ada demo live
      docs: "https://github.com/KMoex-HZ/ML-rockpaperscissors",
      tooltip: "CNN classifier for rock-paper-scissors hand gestures with 96% validation accuracy"
    },
    {
      title: "Student Performance Prediction",
      desc: "Built an end-to-end machine learning pipeline to predict student exam scores. Designed modular components for data preprocessing, model training, and inference in Python. Deployed the model as an interactive web app using Flask, with cloud-ready setup for platforms like AWS and Azure. Focused on the influence of demographic and social factors on academic performance.",
      img: "/images/projects/p1.png", // ganti kalau ada ilustrasi siswa/grafik
      button: "GitHub",
      category: "Data",
      year: "2024",
      status: "Finished",
      team: "Solo",
      type: "Personal Project",
      tech: ["Python", "Flask", "scikit-learn", "AWS"],
      preview: "", // tambahin kalau lo punya link live demo
      docs: "https://github.com/KMoex-HZ/e2emlproject", // ganti sesuai repo lo
      tooltip: "End-to-end ML pipeline to predict student exam scores via Flask web app"
  },
  {
    title: "Konsumerz Mentoring Website",
    desc: "Developed the front-end of a community service project website for Konsumerz, a mentoring program for vocational high school (SMK RPL) students focused on data exploration and MSME analytics. Designed and implemented the UI using Next.js, Tailwind, and Canva. Led visual branding and actively mentored students to build career-oriented portfolios.",
    img: "/images/projects/p5.png", // kalau ada logo Konsumerz bisa dipake di sini
    button: "Website",
    category: "Website",
    year: "2025",
    status: "Ongoing",
    team: "Team (PKM-PM)",
    type: "Client Work",
    tech: ["Next.js", "Tailwind", "HTML", "CSS", "Vue", "Canva", "GitHub"],
    preview: "https://konsumerz.com", // ganti kalau lo punya URL beda
    docs: "exampels.com", // sesuaikan repo lo
    tooltip: "PKM-PM website for student mentoring and MSME data exploration"
  },
  {
    title: "Interactive Portfolio Website",
    desc: "Developing a fully customized portfolio website from scratch using Next.js, Tailwind, and ReactBits with Aceternity UI components. Built and deployed within a few days to showcase design, frontend, and AI-assisted development capabilities. Hosted on Vercel with continuous deployment from GitHub.",
    img: "/images/projects/p6.png", // lo bisa ganti pake screenshot dari portofolionya nanti
    button: "Website",
    category: "Website",
    year: "2025",
    status: "Ongoing",
    team: "Solo",
    type: "Personal Project",
    tech: ["Next.js", "Tailwind", "HTML", "CSS", "JavaScript", "ReactBits", "Aceternity UI", "GitHub", "Vercel", "AI"],
    preview: "https://khairunnisa.konsumerz.com",
    docs: "https://github.com/KMoex-HZ/khairunnisa-maharani-portfolio",
    tooltip: "Modern personal portfolio built with Next.js, Tailwind, and Aceternity UI"
  },
  {
    title: "Konsumerz Instagram Design",
    desc: "Designed and managed visual content for Konsumerz's Instagram, creating promotional, educational, and branding assets using Canva. Established a consistent visual identity across all posts, including typography, color system, and layout. Contributed to building the online presence of the mentoring program for vocational high school students.",
    img: "/images/projects/p7.jpg", // ganti ke contoh post IG Konsumerz kalau ada
    button: "Design Gallery",
    category: "Design",
    year: "2025",
    status: "Ongoing",
    team: "Solo",
    type: "Client Work",
    tech: ["Canva", "Branding", "Social Media Design", "Graphic Design"],
    preview: "/ig-konsumerz", // sesuaikan rute galeri kalau lo udah bikin
    docs: "",
    tooltip: "Visual branding and content creation for Konsumerz Instagram"
  },
  {
    title: "Data Science Program IG Design",
    desc: "Managing public relations and visual content for the Data Science program's Instagram. Created over 20+ visual assets for academic updates and achievements. Standardized the program's visual branding and collaborated with a multidisciplinary team to deliver consistent and compelling designs using Canva.",
    img: "/images/projects/p8.jpg", // ganti ke contoh desain IG lo kalo ada
    button: "Design Gallery",
    category: "Design",
    year: "2025",
    status: "Ongoing",
    team: "Team (8)",
    type: "Client Work",
    tech: ["Canva", "Visual Communication", "Graphic Design"],
    preview: "/ig-prodi", // internal route ke galeri desain IG prodi
    docs: "",
    tooltip: "Instagram visual branding and content design for Data Science program"
  },
  {
  title: "SQL Data Analytics Project",
  desc: "Learning version of SQL analytics course by DataWithBaraa. Focused on analyzing business questions using T-SQL with sample datasets, reverse-engineering professional queries, and building analytical intuition.",
  img: "/images/projects/p9.jpg", // Ganti sesuai gambar lo
  button: "GitHub",
  category: "Data",
  year: "2025",
  status: "Ongoing",
  team: "Solo",
  type: "Personal Project",
  tech: ["T-SQL", "SQL Server", "SSMS", "Analytics"],
  preview: "https://github.com/KMoex-HZ/dataAnalytics",
  docs: "https://github.com/KMoex-HZ/dataAnalytics", // ganti kalau beda
  tooltip: "Reverse-engineered SQL analytics project from DataWithBaraa course"
},
{
  title: "SQL Data Warehouse Project",
  desc: "Learning adaptation of DataWithBaraa’s warehouse project. Explored Medallion architecture with layered SQL transformations (Bronze, Silver, Gold) and star schema modeling for business analytics.",
  img: "/images/projects/p10.png", // Ganti sesuai nama file gambar lo
  button: "GitHub",
  category: "Data",
  year: "2025",
  status: "Ongoing",
  team: "Solo",
  type: "Personal Project",
  tech: ["T-SQL", "SQL Server", "SSMS", "Draw.io", "ETL", "Star Schema"],
  preview: "https://github.com/KMoex-HZ/dataWarehouse",
  docs: "https://github.com/KMoex-HZ/dataWarehouse", // Ganti kalau beda
  tooltip: "Learning project on SQL warehouse architecture with Medallion model"
},
{
  title: "Tableau BI Dashboards",
  desc: "Practice dashboards from Tableau Ultimate Course by DataWithBaraa. Rebuilt HR, Sales, and Customer Insight dashboards to learn KPI tracking, interactivity, and storytelling with data.",
  img: "/images/projects/p11.png", // Ganti kalau udah punya gambar dashboard
  button: "GitHub",
  category: "Data",
  year: "2025",
  status: "Ongoing",
  team: "Solo",
  type: "Personal Project",
  tech: ["Tableau", "Excel", "CSV", "Python", "SQL", "Data Visualization"],
  preview: "https://public.tableau.com/app/profile/baraa.salkini/viz/SalesCustomerDashboardsDynamic/SalesDashboard", // bisa ditambah link Tableau Public kalau ada
  docs: "https://github.com/KMoex-HZ/tableauProject", // Ganti kalau beda
  tooltip: "Business Intelligence dashboards rebuilt from Tableau Ultimate Course"
}
  ];

  const categories = ["Data", "Website", "Design"];
  const filteredProjects = projects.filter(p => p.category === selectedCategory);

  const techColors: { [key: string]: string } = {
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
    "Data Visualization": "bg-cyan-600"
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

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev =>
      prev <= 0 ? Math.max(0, filteredProjects.length - 3) : prev - 1
    );
  }, [filteredProjects.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev =>
      prev >= filteredProjects.length - 3 ? 0 : prev + 1
    );
  }, [filteredProjects.length]);

  const openPreview = (project: any) => {
    setPreviewProject(project);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewProject(null);
  };

  const isLeftDisabled = currentIndex <= 0;
  const isRightDisabled = currentIndex >= Math.max(0, filteredProjects.length - 3);

  return (
    <section
      ref={sectionRef}
      className="w-[90%] mt-[50px] mx-auto flex flex-col items-center"
      id="projects"
    >
      <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl">
        Explore my diverse project portfolio, showcasing data science applications, web development, and design innovations. Use the filters below to find projects by category, and swipe the cards to see more.
      </p>

      {/* Filter Buttons */}
      <div
        className={`flex flex-wrap justify-center gap-4 mb-10 transition-opacity duration-1000 ${
          hasAnimated
            ? 'animate__animated animate__fadeInUp animate__delay-0_6s'
            : 'opacity-0'
        }`}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`
              px-5 py-2 rounded-full border transition group relative
              ${selectedCategory === cat
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent'
                : 'bg-transparent border-gray-500 text-gray-300 hover:bg-gray-700'}
            `}
            title={`Filter projects by ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Navigation Container */}
      <div
        className={`relative w-full max-w-6xl transition-opacity duration-1000 ${
          hasAnimated
            ? 'animate__animated animate__fadeInUp animate__delay-0_9s'
            : 'opacity-0'
        }`}
      >
        {/* Left Navigation Button */}
        <button
          onClick={goToPrevious}
          disabled={isLeftDisabled}
          className={`
            absolute left-0 top-1/2 transform -translate-y-1/2 z-20 group
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isLeftDisabled
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-110 hover:shadow-lg shadow-purple-500/25'
            }
          `}
          title="Previous projects"
        >
          <i className='bx bx-chevron-left text-2xl'></i>
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={goToNext}
          disabled={isRightDisabled}
          className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 z-20 group
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isRightDisabled
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-110 hover:shadow-lg shadow-purple-500/25'
            }
          `}
          title="Next projects"
        >
          <i className='bx bx-chevron-right text-2xl'></i>
        </button>

        {/* Project Cards Container */}
        <div className="overflow-hidden px-16">
          <div
            className="flex gap-6 py-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 318}px)`,
              width: `${filteredProjects.length * 318}px`
            }}
          >
            {filteredProjects.map((proj, i) => (
              <div
                key={`${proj.title}-${i}`}
                className="relative flex-shrink-0 w-[300px] min-h-[450px] p-4 rounded-xl bg-indigo-400/5 border border-white/30 shadow-lg transform transition-all duration-300 hover:scale-[1.03] cursor-pointer group perspective-1000"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                // onMouseMove dan onMouseLeave ini bisa bikin hitbox geser
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;

                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
                title={proj.tooltip}
              >
                {/* Meta Info Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400">{proj.year}</span>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${statusColors[proj.status]}`}>
                        {proj.status}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${typeColors[proj.type]}`}>
                        {proj.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {proj.team}
                  </span>
                </div>

                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover"
                />

                <h2 className="text-xl font-semibold mb-2">
                  {proj.title.split(" ").slice(0, -1).join(" ")} <span className="gradient">{proj.title.split(" ").slice(-1)}</span>
                </h2>

                <p className="text-sm mb-3 text-gray-300 line-clamp-2">{proj.desc}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.tech && proj.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded text-white ${techColors[tech] || 'bg-gray-600'}`}
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - INI BAGIAN YANG AKAN KITA FOKUSKAN */}
                <div className="flex gap-2 mt-auto relative z-10"> {/* Tambahkan relative z-10 */}
                  <button
                    onClick={() => {
                      if (proj.preview && proj.preview.startsWith('/')) {
                        window.location.href = proj.preview;
                      } else if (proj.button.toLowerCase() === 'github' && proj.docs) {
                        window.open(proj.docs, '_blank');
                      } else if ((proj.button.toLowerCase() === 'demo' || proj.button.toLowerCase() === 'website' || proj.button.toLowerCase() === 'behance' || proj.button.toLowerCase() === 'desain gallery' || proj.button.toLowerCase() === 'streamlit') && proj.preview) {
                        window.open(proj.preview, '_blank');
                      } else {
                        console.log('No valid action defined for this button or link is missing.');
                      }
                    }}
                    className="flex-1 text-sm text-gray-300 px-3 py-2 rounded-md border border-[#72a1de81] bg-[#2200493d] shadow-sm hover:opacity-80 hover:shadow-[#72a1de81] transition"
                    title={`Open ${proj.button}`}
                  >
                    <i className='bx bx-link-external'></i> {proj.button}
                  </button>

                  <button
                    onClick={() => openPreview(proj)}
                    className="text-sm text-gray-300 px-3 py-2 rounded-md border border-green-500/50 bg-green-500/10 hover:bg-green-500/20 transition"
                    title="Preview project"
                  >
                    <i className='bx bx-search-alt'></i>
                  </button>

                  <button
                    onClick={() => proj.docs && window.open(proj.docs, '_blank')}
                    className="text-sm text-gray-300 px-3 py-2 rounded-md border border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20 transition"
                    title="View documentation"
                  >
                    <i className='bx bx-file-blank'></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.max(1, filteredProjects.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${currentIndex === index
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-6'
                  : 'bg-gray-600 hover:bg-gray-500'
                }
              `}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Preview Modal (tetap di sini) */}
      {showPreview && previewProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold gradient mb-2">{previewProject.title}</h3>
                <div className="flex gap-2 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full text-white ${statusColors[previewProject.status]}`}>
                    {previewProject.status}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full text-white ${typeColors[previewProject.type]}`}>
                    {previewProject.type}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {previewProject.year} • {previewProject.team}
                  </span>
                </div>
              </div>
              <button
                onClick={closePreview}
                className="text-gray-400 hover:text-white text-2xl"
                title="Close preview"
              >
                <i className='bx bx-x'></i>
              </button>
            </div>

            <Image
              src={previewProject.img}
              alt={previewProject.title}
              width={600}
              height={300}
              className="rounded-lg mb-4 w-full object-cover"
            />

            <p className="text-gray-300 mb-4">{previewProject.desc}</p>

            {/* Tech Stack Badges di Preview Modal */}
            <div className="flex flex-wrap gap-2 mb-4">
              {previewProject.tech && previewProject.tech.map((tech: string, index: number) => (
                <span
                  key={index}
                  className={`text-sm px-3 py-1 rounded text-white ${techColors[tech] || 'bg-gray-600'}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                <i className='bx bx-link-external'></i> {previewProject.button}
              </button>
              <button
                onClick={() => previewProject.docs && window.open(previewProject.docs, '_blank')}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
              >
                <i className='bx bx-file-blank'></i> Docs
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;