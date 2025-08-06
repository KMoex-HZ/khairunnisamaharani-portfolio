'use client';

import { useState, useEffect, useRef } from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { Mail, MapPin, Briefcase } from 'lucide-react';
import 'animate.css';

const Contact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [hasAnimated]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'khnrni',
      url: 'https://www.linkedin.com/in/khnrni/',
      icon: <BsLinkedin className="text-2xl" />,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Instagram',
      handle: '@khrnsmhrni',
      url: 'https://www.instagram.com/khrnsmhrni/',
      icon: <BsInstagram className="text-2xl" />,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'GitHub',
      handle: 'KMoex-HZ',
      url: 'https://github.com/KMoex-HZ',
      icon: <BsGithub className="text-2xl" />,
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      name: 'WhatsApp',
      handle: '+62 821-8257-8148',
      url: 'https://wa.me/6282182578148',
      icon: <BsWhatsapp className="text-2xl" />,
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Email',
      handle: 'khrnnsmaharani@gmail.com',
      url: 'mailto:khrnnsmaharani@gmail.com',
      icon: <BiMailSend className="text-2xl" />,
      gradient: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section
      ref={contactRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-16 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_3s' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out to me through any of the platforms below. I'm always open to opportunities, collaboration, or simply a chat.
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_6s' : 'opacity-0'
        }`}>
          
          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Connect With Me</h3>
            
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl text-white shadow-lg`}>
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {social.name}
                    </h4>
                    <p className="text-gray-600">{social.handle}</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                {/* Bottom border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </a>
            ))}
          </div>

          {/* Professional Profile Card */}
          <div className={`space-y-6 transition-opacity duration-1000 ${
            hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-0_9s' : 'opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">My Profile</h3>

            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 min-h-[620px] flex flex-col justify-start">
  <div className="flex justify-center mb-6">
    <div className="w-60 aspect-[4/5] overflow-hidden rounded-xl border-4 border-gray-200 shadow-md">

      <img
        src="/images/profile.jpg"
        alt="Khairunnisa M"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  <div className="text-center pb-4">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Khairunnisa Maharani</h3>
    <div className="flex items-center justify-center space-x-2 mb-3">
      <Briefcase className="w-4 h-4 text-blue-500" />
      <p className="text-gray-700 font-medium">Data Scientist</p>
    </div>
    <div className="flex items-center justify-center space-x-2 mb-6">
      <MapPin className="w-4 h-4 text-gray-500" />
      <p className="text-gray-600 text-sm">Bandar Lampung, Indonesia</p>
    </div>
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">AI & ML</span>
      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Data Analysis</span>
      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">Python</span>
    </div>
    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
      <p className="text-gray-600 text-sm italic text-center">"Turning data into insights, one algorithm at a time"</p>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className={`text-center mt-16 transition-opacity duration-1000 ${
          hasAnimated ? 'animate__animated animate__fadeInUp animate__delay-1_2s' : 'opacity-0'
        }`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether it's a data science project, web development, or design work, I'd love to hear about your ideas and see how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:khrnnsmaharani@gmail.com"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <BiMailSend className="w-5 h-5" />
                  <span>Send Me an Email</span>
                </span>
              </a>
              
              <a
                href="https://wa.me/6282182578148"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-green-500 opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <BsWhatsapp className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors duration-300" />
                  <span className="group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    WhatsApp Me
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;