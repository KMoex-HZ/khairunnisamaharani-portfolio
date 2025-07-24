'use client';

import { motion } from 'framer-motion';
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import ProfileCard from '../ui/ProfileCard/ProfileCard';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Contact = () => {
  return (
    <section className="w-[80%] min-h-screen flex flex-col items-center justify-start mx-auto pt-20 gap-10">
      {/* Judul atas */}
      <motion.h1
        className="text-5xl font-bold gradient text-center leading-[1.25]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp(0)}
      >
        Let&apos;s talk
      </motion.h1>

      {/* Konten utama: kiri & kanan */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-start">
        {/* Kontak kiri + paragraf */}
        <motion.div
          className="flex flex-col mt-10 gap-6 text-gray-300/80 text-lg w-full md:w-[50%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.2)}
        >
          <p className="text-base text-gray-400 text-lg mb-10">
            Feel free to reach out to me through any of the platforms below. I&apos;m always open to opportunities, collaboration, or simply a chat.
          </p>

          <a href="https://linkedin.com/in/yourlinkedin" className="flex items-center">
            <BsLinkedin className="text-[#7668ff] text-2xl mr-3" />
            khnrni
          </a>
          <a href="https://instagram.com/yourusername" className="flex items-center">
            <BsInstagram className="text-[#7668ff] text-2xl mr-3" />
            @khrnsmhrni
          </a>
          <a href="https://github.com/KMoex-HZ" className="flex items-center">
            <BsGithub className="text-[#7668ff] text-2xl mr-3" />
            KMoex-HZ
          </a>
          <a href="https://wa.me/6282182578148" className="flex items-center">
            <BsWhatsapp className="text-[#7668ff] text-2xl mr-3" />
            +62 821-8257-8148
          </a>
          <a href="mailto:khrnnsmaharani@gmail.com" className="flex items-center">
            <BiMailSend className="text-[#7668ff] text-2xl mr-3" />
            khrnnsmaharani@gmail.com
          </a>
        </motion.div>

        {/* Photocard kanan */}
        <div className="w-full md:w-[40%] h-auto rounded-xl flex justify-center items-center text-gray-500/50 text-sm italic">
          <ProfileCard
            name="Khairunnisa M"
            title="Data Scientist"
            handle="khrnsmhrni"
            status="Exploring AI"
            contactText="Contact Me"
            grainUrl="/images/grain.webp"
            iconUrl="/images/iconpattern.png"
            avatarUrl="/images/avatar.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => window.location.href = "mailto:khrnnsmaharani@gmail.com"}
            className="scale-85"
            />
        </div>
      </div>
    </section>
  );
};

export default Contact;
