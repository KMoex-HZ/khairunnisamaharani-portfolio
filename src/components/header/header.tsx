"use client";

import React, { useState, useEffect } from 'react';

export const Header = () => {
  const baseLinkClass = "inline-block text-gray-400 hover:text-white hover:-translate-y-1 hover:drop-shadow-md transition-all duration-200 ease-in-out";
  const [activeSection, setActiveSection] = useState<string>('');
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
      const sections = ['about', 'skills', 'projects', 'experiences', 'certificates', 'publications','contact'];
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

    window.addEventListener('scroll', handleScrollDetection);
    handleScrollDetection();

    return () => {
      window.removeEventListener('scroll', handleScrollDetection);
    };
  }, []);

  // Tutup menu ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className="bg-white/3 backdrop-blur-lg text-white py-4 rounded-full max-w-[720px] mx-auto sticky top-6 z-999 ring-1 ring-white/10 transition-all"
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
                  className={`${baseLinkClass} ${activeSection === item.id ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
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
            {/* Logo atau Brand (opsional) */}
            <div className="text-white font-semibold">
              Portfolio
            </div>
            
            {/* Burger Button */}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-black backdrop-blur-lg rounded-2xl ring-1 ring-white/10 overflow-hidden">
              <ul className="py-2">
                {navigationItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className={`w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                        activeSection === item.id ? 'text-white bg-white/5' : ''
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`
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