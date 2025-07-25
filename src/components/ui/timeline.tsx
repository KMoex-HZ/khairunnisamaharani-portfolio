"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'; // Impor komponen Image

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
  images?: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Scroll progress dari container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end center"],
  });

  // Transformasi tinggi dan opacity garis berdasarkan scroll
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Hitung jarak absolut dari item pertama ke terakhir
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLineHeight(rect.height);
    }
  }, [data]);


  return (
    <div className="w-full bg-transparent font-sans min-h-screen " ref={containerRef}>
      <div className="mx-auto py-3 px-4 md:px-8 lg:px-10 text-center max-w-3xl">
        <h2 className="text-lg md:text-5xl mb-7 text-gray-300 font-bold gradient leading-[1.30]">
          Changelog from my journey
        </h2>
        <p className="text-gray-300 text-lg">
          Starting from a passion for visual storytelling in vocational multimedia school to diving into data and machine learning at Institut Teknologi Sumatera, this timeline reflects how each step has shaped who I am today.
        </p>
      </div>


      <div className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex justify-start pt-10 md:pt-40 md:gap-5 lg:gap:5 xl:gap-60 pr-10"
          ref={index === 0 ? topRef : index === data.length - 1 ? bottomRef : undefined}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut"
          }}
        >

            {/* Tahun sticky */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl sm:text-10 md:pl-20 md:text-4xl font-bold text-gray-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-2 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-300">
                {item.title}
              </h3>
              {item.content}

              {item.images && item.images.length > 0 && (
                <div className="mt-4 md:mt-8 grid grid-cols-2 gap-5">
                  {item.images.map((imgSrc, imgIndex) => (
                    <div key={imgIndex} className="relative w-full pb-[125%]">
                      {/* PERBAIKAN IMAGE DI SINI */}
                      <Image
                        src={imgSrc}
                        alt={`${item.title} - Gambar ${imgIndex + 1}`}
                        fill // Gunakan 'fill' karena ukuran gambar bisa berbeda
                        style={{ objectFit: 'cover', borderRadius: '0.5rem' }} // object-cover dan rounded-lg
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw" // Sesuaikan perkiraan ukuran
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Garis timeline */}
        <div
          style={{ height: `${lineHeight}px` }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
            maskImage: 'linear-gradient(to bottom, black 0%, black 10%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          }}
          className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-[#00fff7] via-[#0070ff] to-transparent rounded-full"
        />


        </div>
      </div>
    </div>
  );
};