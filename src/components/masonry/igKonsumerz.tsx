// src/components/Masonry/IgKonsumerzGallery.tsx
'use client'; // Penting, karena komponen Masonry interaktif

import React from 'react';
import MasonryKonsumerz from '@/components/ui/Masonry/MasonryKonsumerz'; // <-- Ubah ini untuk mengarah ke MasonryKonsumerz.tsx kamu
import { igKonsumerzItems } from '@/data/ig-konsumerz';
export const IgKonsumerzGallery = () => {
  // Filter item 'konsumerz_012' (yang rasionya 1:3) agar tidak dimasukkan ke Masonry 1:1 ini
  const itemsFor1to1Masonry = igKonsumerzItems.filter(item => item.id !== "konsumerz_012");

  return (
    <MasonryKonsumerz // <-- Kita ganti nama komponennya jadi MasonryKonsumerz
      items={itemsFor1to1Masonry} // <-- Berikan data yang sudah difilter ke komponen MasonryKonsumerz
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