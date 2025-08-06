"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

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
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Hitung jarak absolut dari item pertama ke terakhir
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLineHeight(rect.height);
    }
  }, [data]);

  return (
    <div
      className="w-full bg-gradient-to-br from-slate-50 to-blue-50 font-sans min-h-screen"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Ikon Jam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
          >
            <Clock className="w-8 h-8 text-white" />
          </motion.div>

          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            My Journey
          </motion.h2>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Starting from a passion for visual storytelling in vocational
            multimedia school to diving into data and machine learning at
            Institut Teknologi Sumatera, this timeline reflects how each step
            has shaped who I am today.
          </motion.p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto pb-16">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex justify-start pt-10 md:pt-40 md:gap-5 lg:gap-5 xl:gap-60 pr-10"
            ref={
              index === 0
                ? topRef
                : index === data.length - 1
                ? bottomRef
                : undefined
            }
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            {/* Timeline Point and Year */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 w-12 absolute left-2 md:left-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <div className="h-6 w-6 rounded-full bg-white border-2 border-blue-200 shadow-sm" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-gray-900">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-900">
                {item.title}
              </h3>

              {/* Content Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-shadow duration-300">
                <div className="text-gray-700 leading-relaxed">
                  {item.content}
                </div>

                {/* Images Grid */}
                {item.images && item.images.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {item.images.map((imgSrc, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative w-full pb-[125%] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${item.title} - Gambar ${imgIndex + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Animated Timeline Line */}
        <div
          style={{ height: `${lineHeight}px` }}
          className="absolute left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-gray-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              maskImage:
                "linear-gradient(to bottom, black 0%, black 10%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-blue-500 via-purple-600 to-transparent rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
