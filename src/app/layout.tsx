import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khairunnisa-Portfolio",
  description:
    "Portofolio personal Khairunnisa Maharani, mahasiswa Sains Data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video> */}

        {/* Konten utama */}
        {children}
      </body>
    </html>
  );
}
