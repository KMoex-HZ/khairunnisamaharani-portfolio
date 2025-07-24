// src/app/ig-konsumerz/page.tsx
'use client'; // Penting karena komponen IgKonsumerzGallery interaktif

import React from 'react';
import { IgKonsumerzGallery } from '@/components/masonry/igKonsumerz';
const IgKonsumerzPage = () => { // Nama komponen sudah benar
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12 gradient leading-[1.25]">
        Konsumerz Instagram Showcase {/* Diubah judulnya */}
      </h1>
      <p className="text-lg text-gray-400 text-center mb-6 max-w-2xl mx-auto">
        A showcase of Instagram visuals and design content created for Konsumerz, featuring campaigns and daily highlights. {/* Diubah deskripsinya */}
      </p>
      {/* Tombol kembali ke halaman utama */}
      <div className="text-center mt-12">
        <a
          href="/"
          className="inline-block relative rounded-full px-6 py-3 overflow-hidden group bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-gray-300 font-medium hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative z-10">Back To Home</span>
        </a>
      </div>

      <div className="flex justify-center items-center mt-15">
        <IgKonsumerzGallery /> {/* Panggil komponen galeri di sini */}
      </div>
      {/* Tambahkan style gradient jika belum ada di global CSS atau layout utama */}
      <style jsx>{`
        .gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default IgKonsumerzPage; // Export sudah benar