// src/app/page.tsx
'use client'; // Tambahin paling atas ya!
import Image from 'next/image';

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

// Fix alternative: kalau motion.h2 error, pake ini:
const MotionH2 = motion('h2');

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
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
      </div>

      <Header />
      <About />
      <Skills />

      {/* Bagian My Projects - DITAMBAHKAN KEMBALI DI SINI */}
      <section className="py-20 px-4 md:px-8 pt-25" id='projects'> {/* Gunakan ID 'projects' */}
        <MotionH2
          className="text-5xl font-bold text-center text-gray-300 gradient leading-[1.25]" // Pakai kelas gradient
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </MotionH2>
        {/* ProjectSection komponen yang menampilkan card projects */}
        <ProjectSection />
      </section>

      {/* Bagian My Experiences (tetap di sini) */}
      <section className="py-20 px-4 md:px-8 pt-30" id='experiences'>
        <MotionH2
          className="text-4xl font-bold text-center mb-9 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Experiences
        </MotionH2>
        <div className="w-full px-4 md:px-35">
          <Timeline data={myExperiences} />
        </div>
      </section>

      <section className="py-20 pt-25 px-4 md:px-8" id='certificates'>
        <MotionH2
          className="text-5xl font-bold text-center mb-9 text-gray-300 gradient leading-[1.25]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Certificates
        </MotionH2>
        <p className="text-lg text-gray-400 text-center mb-0 max-w-2xl mx-auto">
          This gallery showcases various certifications and recognitions of my expertise in data science, programming, and design. Each certificate is a testament to my commitment to lifelong learning.
        </p>

        <div className="w-full h-[500px] relative">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={1}
            scrollEase={0.05}
          />
        </div>
      </section>

      {/* Bagian My Publications (tetap di sini, di bawah Certificates) */}
      <section className="py-20 px-4 md:px-8 pt-25" id='publications'>
        <MotionH2
          className="text-5xl font-bold text-center mb-9 text-gray-300 gradient leading-[1.25]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Publications
        </MotionH2>
        <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Click to read more or download the full publication documents.
        </p>


        <div className='flex justify-center items-center py-10'>
          <PinContainer
            title="Visit this website"
            href="https://journal.foundae.com/index.php/smartsoc/article/view/658/331"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                SINTA 2 Journal Publication
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
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

      <div className='flex justify-center items-center pt-10' id='contact'>
        <Contact />
      </div>
    </main>
  );
}