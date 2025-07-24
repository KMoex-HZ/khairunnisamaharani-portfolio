// src/components/Masonry/IgProdiGallery.tsx
'use client'; // Penting, karena komponen Masonry interaktif

import React from 'react';
import MasonryProdi from '@/components/ui/Masonry/MasonryProdi'; // <-- Kita ubah import ke MasonryProdi.tsx
import { igProdiItems } from '@/data/ig-prodiData'; // <-- Import data IG Prodi di sini

export const IgProdiGallery = () => {
  return (
    <MasonryProdi // <-- Kita ganti nama komponennya jadi MasonryProdi
      items={igProdiItems} // <-- Berikan data igProdiItems ke komponen MasonryProdi
      ease="power3.out"
      duration={0.6}
      stagger={0.05}
      animateFrom="bottom"
      scaleOnHover={true}
      hoverScale={0.95}
      blurToFocus={true}
      colorShiftOnHover={false}
    />
  );
};