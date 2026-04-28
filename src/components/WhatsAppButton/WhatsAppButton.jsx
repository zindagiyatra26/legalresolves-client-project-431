import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const phoneNumber = "917977421612"; 
  const message = encodeURIComponent("Hi Zindagi Yatra! I'd like to plan a trip/event.");

  return (
    <>
      <style>{`
        @keyframes pulse-green {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .animate-whatsapp {
          animation: pulse-green 2s infinite;
        }
      `}</style>

      <a 
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] flex items-center group"
      >
        {/* Tooltip Label (Left Side) */}
        <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <div className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-xl whitespace-nowrap shadow-2xl border border-white/10">
            Let's Chat!
          </div>
        </div>

        {/* The Button Container */}
        <div className="relative">
          {/* Pulsing Background Ring */}
          <div className="absolute inset-0 rounded-full animate-whatsapp" />
          
          {/* Main Button */}
          <div className="relative bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-green-500 group-hover:rotate-[360deg] active:scale-90 border-2 border-transparent group-hover:border-green-500">
            <FaWhatsapp size={32} />
          </div>
          
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center animate-bounce">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </a>
    </>
  );
};

export default WhatsAppButton;