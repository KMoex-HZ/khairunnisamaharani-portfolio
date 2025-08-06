// src/app/page.tsx
'use client'; // Tambahin paling atas ya!
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react'; // atau pilih icon lain yang cocok

import { Header } from '@/components/header/header';
import About from '@/components/sections/about';
import ProjectSection from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Aurora from '@/components/ui/Aurora/Aurora';
import Spacer from '@/components/ui/spacer';
import { Timeline } from '@/components/ui/timeline';
import { myExperiences } from '@/data/timelineData';
import CircularGallery from '@/components/ui/CircularGallery/CircularGallery';
import Contact from '@/components/sections/contact';
import { motion } from 'framer-motion';
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import HonorsAndAwards from '@/components/sections/awards';

// Fix alternative: kalau motion.h2 error, pake ini:
const MotionH2 = motion('h2');

export default function Home() {
  const [bendValue, setBendValue] = useState(3);

  // Hook untuk mendeteksi ukuran layar dan mengatur bend value
  useEffect(() => {
    const updateBendValue = () => {
      const width = window.innerWidth;
      
      if (width < 640) { // Mobile (sm)
        setBendValue(1);
      } else if (width < 768) { // Tablet kecil (md)
        setBendValue(1);
      } else if (width < 1024) { // Tablet besar (lg)
        setBendValue(2.5);
      } else { // Desktop
        setBendValue(3);
      }
    };

    // Set initial value
    updateBendValue();

    // Add event listener
    window.addEventListener('resize', updateBendValue);

    // Cleanup
    return () => window.removeEventListener('resize', updateBendValue);
  }, []);

  return (
    <main className='relative min-h-screen'>
      {/* <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
        <Aurora
          key="aurora-1.0"
          colorStops={[
            "#00aaa7",
            "#7e42a7",
            "#6600c5",
            "#6070fd",
            "#2a46ff",
            "#0099ff",
            "#008ead"
          ]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div> */}

      <Header />
      <section id="about" className="pt-[80px] -mt-[60px]">
        <About />
      </section>

      
      <section id="skills" className="pt-[80px] -mt-[60px]">
        <Skills />
      </section>

      {/* Bagian My Projects - DITAMBAHKAN KEMBALI DI SINI */}
      <section className="px-4 md:px-8 pt-5" id='projects'> {/* Gunakan ID 'projects' */}
        <MotionH2
          className="text-5xl font-bold text-center text-gray-300 gradient leading-[1.25]" // Pakai kelas gradient
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        </MotionH2>
        {/* ProjectSection komponen yang menampilkan card projects */}
        <ProjectSection />
      </section>

      <div
      id='awards'>
        <HonorsAndAwards />
      </div>

      {/* Bagian My Experiences (tetap di sini) */}
      <section className="py-20 px-4 md:px-8 pt-15" id='experiences'>
        <MotionH2
          className="text-4xl font-bold text-center mb-9 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
        </MotionH2>
        <div className="w-full px-4 md:px-35">
          <Timeline data={myExperiences} />
        </div>
      </section>
      

<section className="py-20 pt-25 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50" id='certificates'>
  {/* Header */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
      <FileText className="w-8 h-8 text-white" />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      My Certificates
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Certifications and achievements that highlight my commitment to lifelong learning in data science, programming, and design.
    </p>
  </div>

  {/* Gallery */}
  <div className="w-full h-[500px] relative">
    <CircularGallery
      bend={bendValue}
      textColor="#1f2937"  // text-gray-800
      borderRadius={0.05}
      scrollSpeed={1}
      scrollEase={0.1}
    />
  </div>

  <p className='text-xl text-gray-700 text-center mt-6 max-w-2xl mx-auto'>
    &lt;&lt;&lt; Swipe to explore
  </p>
</section>




      {/* Bagian My Publications (tetap di sini, di bawah Certificates) */}
      <section className="py-20 px-4 md:px-8 pt-25" id='publications'>
        <div className="text-center mb-3">
  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
    <FileText className="w-8 h-8 text-white" />
  </div>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    My Publications
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    A curated selection of peer-reviewed articles and research showcasing my work in AI, data science, and technology.
  </p>
</div>


        <div className='flex justify-center items-center py-10'>
          <PinContainer
            title="Visit this website"
            href="https://journal.foundae.com/index.php/smartsoc/article/view/658/331"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-gray-600">
                SINTA 2 Journal Publication
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-gray-500 ">
                  Peer-reviewed article on AI website training, published in a nationally accredited (SINTA 2) journal.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden relative">
                <Image 
                  src="/images/publications/2.jpg" 
                  alt="Publication Preview" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </section>
      
      
    <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50" id="contact">
      <div className='flex justify-center items-center'>
        <Contact />
      </div>
    </section>

    </main>
  );
}