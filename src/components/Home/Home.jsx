import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Compass, Heart, ShieldCheck, Smile, Sparkles } from 'lucide-react';
import HomeBg from '../../assets/homeBg.mp4';
import HomePoster from '../../assets/homePoster.png';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import thumb1 from '../../assets/home_thumb_1.jpg'
import thumb2 from '../../assets/home_thumb_2.jpg'
import thumb3 from '../../assets/home_thumb_3.jpg'
import thumb4 from '../../assets/home_thumb_4.jpg'

const Home = () => {
  const { darkMode } = useOutletContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryThumbnails = [
    thumb1,
    thumb2,
    thumb3,
    thumb4
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % galleryThumbnails.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? galleryThumbnails.length - 1 : prev - 1));

  return (
    <div id="home" className="relative lg:h-screen w-full overflow-hidden bg-black">
      {/* Background Video with Dark Overlay */}
      <video autoPlay muted loop playsInline
      poster={HomePoster}
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 scale-105">
        <source src={HomeBg} type="video/mp4" />
      </video>
      <div className="absolute inset-0 backdrop-blur-xs bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />

      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full pt-30 pb-60 lg:pt-0 lg:pb-0">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-8 md:px-20 lg:pl-32 text-white">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000 text-center sm:text-left">
            
            {/* Floating Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-2xl">
              <Sparkles size={14} className="text-amber-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Women Founded & Led</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl md:text-[120px] font-bold uppercase tracking-tighter leading-[0.8]">
                Zindagi <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Yatra</span>
              </h1>
              <div className="flex items-center gap-4">
                 <div className="h-[2px] w-20 bg-amber-500 hidden md:block" />
                 <p className="  text-amber-400 font-bold tracking-[0.3em] uppercase text-base md:text-xs">
                  Hum Hai Memories Bananewali Company
                 </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg max-w-lg leading-relaxed font-medium">
            Every trip is a chapter. Every celebration is a memory. Let us write yours.
             </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6">
              {/* Primary Action: Explore Trips */}
              <a 
                href="#travel" 
                className="bg-amber-600 hover:bg-white hover:text-amber-600 px-8 py-4 rounded-xl font-bold transition-all uppercase tracking-widest text-xs"
              >
                Explore Trips
              </a>

              {/* New Secondary Action: Plan Your Event */}
              <a 
                href="#events" 
                className="bg-transparent border-2 border-white/40 hover:border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold transition-all uppercase tracking-widest text-xs"
              >
                Plan Your Event
              </a>
            </div>

            {/* Social Connect */}
            {/* <div className="flex gap-6 pt-2 opacity-50">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-amber-500 transition-all hover:scale-110 hover:opacity-100"><Icon size={18} /></a>
              ))}
            </div> */}
          </div>
        </div>


        {/* Right Side: Layered Card Gallery */}
        <div className="lg:col-span-5 hidden lg:flex flex-col justify-center items-center relative">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            
            {galleryThumbnails.map((url, i) => {
              const isActive = i === currentIndex;
              return (
                <div 
                  key={i} 
                  className={`absolute w-64 h-96 rounded-[40px] overflow-hidden border-4 border-white/20 transition-all duration-1000 ease-in-out shadow-2xl
                    ${isActive ? 'z-30 scale-110 opacity-100 translate-x-0' : 'z-10 scale-90 opacity-40 translate-x-20 rotate-12'}
                  `}
                  style={{ 
                    transform: isActive ? 'rotate(-5deg) translateX(-20px)' : `rotate(${i * 10}deg) translateX(${i * 40}px)`,
                    filter: isActive ? 'grayscale(0)' : 'grayscale(1)'
                  }}
                >
                  <img src={url} alt="Destination" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              );
            })}

            {/* Floating Navigation UI */}
            <div className="absolute bottom-0 flex gap-4 z-40 bg-white/10 backdrop-blur-xl p-3 rounded-[30px] border border-white/20">
              <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-amber-500 hover:text-black transition-all">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2 px-4">
                <span className="text-amber-500 font-bold">0{currentIndex + 1}</span>
                <span className="text-white/20">/</span>
                <span className="text-white/60 text-xs">04</span>
              </div>
              <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-amber-500 hover:text-black transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>


      {/* Professional Stats Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl z-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 md:gap-0 w-full bg-white/5 backdrop-blur-2xl px-2 py-4 md:px-8 md:py-6 rounded-xl lg:rounded-2xl border border-white/10 shadow-2xl items-center">
          {[
            { label: 'Destinations', val: '50+', Icon: Compass },
            { label: 'Happy Souls', val: '12K+', Icon: Heart },
            { label: 'Trust Score', val: '100%', Icon: ShieldCheck },
            { label: 'Satisfaction', val: '98%', Icon: Smile },
          ].map((stat, i) => (
            <div key={i} className="flex justify-center w-full">
              {/* Fixed width container ensures all 4 items align their start points identically */}
              <div className="flex items-center gap-3 w-[140px] md:w-auto">
                <div className="w-10 h-10 min-w-[40px] bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                  <stat.Icon size={20} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-2xl font-bold text-white leading-none">
                    {stat.val}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-white/40 mt-1 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
