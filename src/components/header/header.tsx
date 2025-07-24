"use client"; // Tetap pertahankan ini karena kita akan pakai state dan efek

import React, { useState, useEffect } from 'react'; // Import useState dan useEffect

export const Header = () => {
  // Class dasar untuk semua link
  const baseLinkClass = "inline-block text-gray-400 hover:text-white hover:-translate-y-1 hover:drop-shadow-md transition-all duration-200 ease-in-out";

  // State untuk menyimpan ID section yang sedang aktif
  const [activeSection, setActiveSection] = useState<string>(''); // Default kosong

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Setelah scroll, langsung set activeSection
      setActiveSection(id);
      // Opsional: Tutup menu mobile jika ada
    }
  };

  // Efek untuk mendeteksi section aktif saat scroll
  useEffect(() => {
    const handleScrollDetection = () => {
      const sections = ['about', 'skills', 'projects', 'experiences', 'certificates', 'publications','contact']; // Daftar semua ID section kamu
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Posisi scroll di tengah viewport

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break; // Hentikan loop begitu menemukan section yang aktif
          }
        }
      }
    };

    // Tambahkan event listener saat komponen di-mount
    window.addEventListener('scroll', handleScrollDetection);
    // Jalankan sekali saat pertama kali di-mount untuk set posisi awal
    handleScrollDetection();

    // Hapus event listener saat komponen di-unmount untuk mencegah memory leaks
    return () => {
      window.removeEventListener('scroll', handleScrollDetection);
    };
  }, []); // [] agar efek ini hanya berjalan sekali saat mount dan unmount

  return (
    <header
      className="bg-white/3 backdrop-blur-lg text-white py-4 rounded-full max-w-[720px] mx-auto sticky top-6 z-999 ring-1 ring-white/10 transition-all"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <button
              onClick={() => handleScroll("about")}
              // Gabungkan class dasar dengan class 'aktif' jika section 'about' sedang aktif
              className={`${baseLinkClass} ${activeSection === 'about' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className={`${baseLinkClass} ${activeSection === 'skills' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className={`${baseLinkClass} ${activeSection === 'projects' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("experiences")}
              className={`${baseLinkClass} ${activeSection === 'experiences' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              Experiences
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("certificates")}
              className={`${baseLinkClass} ${activeSection === 'certificates' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              Certificates
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("publications")}
              className={`${baseLinkClass} ${activeSection === 'publications' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              Publications
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className={`${baseLinkClass} ${activeSection === 'contact' ? 'text-white -translate-y-1 drop-shadow-md' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};