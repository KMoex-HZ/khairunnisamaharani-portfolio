'use client'; // Tambahin paling atas ya!

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
      <ProjectSection />

      <section className="py-20 px-4 md:px-8 pt-30" id='experiences'>
        <MotionH2
          className="text-4xl font-bold text-center mb-9 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Experiences 📈
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

      <div className='flex justify-center items-center pt-10' id='contact'>
        <Contact />
      </div>
    </main>
  );
}
