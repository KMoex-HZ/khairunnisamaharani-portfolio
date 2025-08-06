"use client";

import React, { useEffect, useRef, useState } from "react";
import { IgKonsumerzGallery } from "@/components/masonry/igKonsumerz";
import Link from "next/link";
import { Instagram } from "lucide-react";
import "animate.css";

const IgKonsumerzPage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <div
      ref={sectionRef}
      className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6 transition-opacity duration-1000 ${
              hasAnimated ? "animate__animated animate__fadeInUp" : "opacity-0"
            }`}
          >
            <Instagram className="w-8 h-8 text-white" />
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-1000 ease-in-out ${
              hasAnimated
                ? "animate__animated animate__fadeInUp animate__delay-0_3s"
                : "opacity-0"
            }`}
          >
            Konsumerz Instagram Showcase
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto transition-opacity duration-1000 ${
              hasAnimated
                ? "animate__animated animate__fadeInUp animate__delay-0_6s"
                : "opacity-0"
            }`}
          >
            A showcase of Instagram visuals and design content created for
            Konsumerz, featuring campaigns and daily highlights.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16 mb-10">
          <Link
            href="/"
            className="inline-block relative rounded-full px-6 py-3 overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative z-10">Back To Home</span>
          </Link>
        </div>

        {/* Gallery */}
        <div
          className={`transition-opacity duration-1000 ${
            hasAnimated
              ? "animate__animated animate__fadeInUp animate__delay-0_9s"
              : "opacity-0"
          }`}
        >
          <IgKonsumerzGallery />
        </div>
      </div>
    </div>
  );
};

export default IgKonsumerzPage;
