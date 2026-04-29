import React from 'react';
import { 
  Phone, MessageSquare, Send, MapPin, 
  ShieldCheck, Heart, Sparkles 
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import logoIcon from '../../assets/logo_icon.png';
import logoText from '../../assets/logo_text.png';
import legalResolvesLogo from '../../assets/legalresolveslogo.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

    if(window.location.pathname === '/book-now' || window.location.pathname === '/ticket'
      || location.pathname === '/privacy-policy' || location.pathname === '/terms-and-conditions'
     ){
     return null;
  }


  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex flex-col">
                {/* Logo */}
              <Link to="/" className="flex items-center gap-0 group">
                  {/* Logo Icon */}
                    <img 
                      src={logoIcon} 
                      alt="Logo" 
                      className="h-12"
                    />

                  {/* Logo Text */}
                    <img 
                      src={logoText} 
                      alt="Logo Text" 
                      className="h-11 mt-1"
                    />
                </Link>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500 mt-2 italic">
                "Hum hain memories bananewali company"
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Women-founded, women-led travel and events company. We believe every journey and celebration deserves attention, care, and creativity.
            </p>
            {/* <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                { icon: <FaYoutube />, color: "hover:bg-red-600" },
                { icon: <FaPinterestP />, color: "hover:bg-red-500" },
                { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" }
              ].map((social, i) => (
                <div key={i} className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/10 ${social.color} hover:-translate-y-1`}>
                  {social.icon}
                </div>
              ))}
            </div> */}
             <div className="flex gap-5">
                <a 
                  href="https://www.instagram.com/zindagiyatraa?igsh=ZzFhNXluODJ0cWhl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram className='h-8 w-8' />
                </a>
              </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 mb-8 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-500" /> Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest">
              <li><a href="#about" className="text-slate-500 hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#travel" className="text-slate-500 hover:text-amber-500 transition-colors">Travel Packages</a></li>
              <li><a href="#events" className="text-slate-500 hover:text-amber-500 transition-colors">Event Services</a></li>
              <li><a href="#ticketing" className="text-slate-500 hover:text-amber-500 transition-colors">Bulk Ticketing</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 mb-8 flex items-center gap-2">
              <Phone size={14} className="text-amber-500" /> Get in touch
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-amber-500"><Phone size={18}/></div>
                <div>
                  <p className="text-[10px] font-medium uppercase opacity-40">Call Support</p>
                  <a 
                  href="tel:+917977421612" 
                  className="text-sm font-medium hover:text-amber-500 transition-colors"
                >
                  +91 7977421612
                </a>
                </div>
              </li>
              <li className="flex items-start gap-4 cursor-pointer group">
                <a 
                 href="https://wa.me/917977421612" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all"><FaWhatsapp size={18}/></a>
                <div>
                  <p className="text-[10px] font-medium uppercase opacity-40">Quick Chat</p>
                  <p className="text-sm font-medium">WhatsApp Direct</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-widest text-teal-500 bg-teal-500/5 px-4 py-2 rounded-full w-fit">
                <ShieldCheck size={14} /> Pan India (Domestic Only)
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 mb-8 flex items-center gap-2">
              <Heart size={14} className="text-amber-500" /> Join the Journey
            </h4>
            <div className="relative group">
              <input 
                id="newsletterEmail"
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm outline-none focus:border-amber-500/50 transition-all font-normal placeholder:opacity-30" 
              />
            <button
              onClick={() => {
                const email = document.querySelector('#newsletterEmail').value;
                if (!email) return;

                window.location.href = `mailto:${email}?subject=Subscribe&body=Hello, I want to subscribe to Zindagi Yatra updates.`;
              }}
              className="absolute right-2 top-2 bottom-2 bg-amber-600 hover:bg-white hover:text-amber-600 px-5 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-amber-900/20 active:scale-95"
            >
              <Send size={18}/>
            </button>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium uppercase tracking-widest">
              Subscribe to get seasonal travel deals and celebration ideas.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <p className="whitespace-nowrap">
              Built & Designed by
            </p>
            <a 
              href="https://legalresolves.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={legalResolvesLogo}
                alt="LegalResolves Logo"
                className="h-7 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] text-slate-500 font-semibold uppercase tracking-[0.2em]">
            <p>© 2026 Zindagi Yatra and Celebration.</p>
            <span className="hidden md:block opacity-20">|</span>
            <p>Built for Everyday Indians</p>
          </div>
          
          <div className="flex gap-8 text-[10px] text-slate-500 font-semibold uppercase tracking-[0.2em]">
            <Link to="/privacy-policy" className="cursor-pointer hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="cursor-pointer hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;













