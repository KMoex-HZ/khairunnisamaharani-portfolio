"use client";

import React, { useState, useEffect } from "react";

export const Header = () => {
  const baseLinkClass =
    "inline-block text-gray-600 hover:text-blue-600 hover:-translate-y-1 hover:drop-shadow-md transition-all duration-200 ease-in-out font-medium";
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      // Tutup menu mobile setelah scroll
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efek untuk mendeteksi section aktif saat scroll
  useEffect(() => {
    const handleScrollDetection = () => {
      const sections = [
        "about",
        "skills",
        "projects",
        "awards",
        "experiences",
        "certificates",
        "publications",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollDetection);
    handleScrollDetection();

    return () => {
      window.removeEventListener("scroll", handleScrollDetection);
    };
  }, []);

  // Tutup menu ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "experiences", label: "Experiences" },
    { id: "certificates", label: "Certificates" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className="bg-white/80 backdrop-blur-lg border border-gray-200/50 text-gray-700 py-4 rounded-full max-w-[820px] mx-auto sticky top-6 z-50 shadow-lg transition-all"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`${baseLinkClass} ${
                    activeSection === item.id
                      ? "text-blue-600 -translate-y-1 drop-shadow-md bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <div className="flex justify-between items-center">
            {/* Logo atau Brand */}
            <div className="text-gray-700 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Burger Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-xl overflow-hidden">
              <ul className="py-2">
                {navigationItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className={`w-full text-left px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 font-medium ${
                        activeSection === item.id
                          ? "text-blue-600 bg-blue-50/50 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                          : ""
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
