import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../../assets/logo_icon.png';
import logoText from '../../assets/logo_text.png';

const Header = ({ darkMode, toggleTheme }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [visible, setVisible] = useState(true);
const prevScrollPos = useRef(0);


  useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // existing scrolled effect
    setScrolled(currentScrollPos > 50);

    const isScrollingUp = prevScrollPos.current > currentScrollPos;

    if (!isOpen) {
      setVisible(isScrollingUp || currentScrollPos < 50);
    }

    prevScrollPos.current = currentScrollPos;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isOpen]);

    const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Travel', href: '#travel' },
    { name: 'Events', href: '#events' },
    { name: 'Ticketing', href: '#ticketing' },
    // { name: 'Gallery', href: '#gallery' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const isInnerPage = location.pathname !== "/";



  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isOpen]);


  if(window.location.pathname === '/book-now' || window.location.pathname === '/ticket'
     || location.pathname === '/privacy-policy' || location.pathname === '/terms-and-conditions'
  ){
     return null;
  }



  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 flex items-center justify-between px-4 lg:px-6 py-3 lg:py-3 
      ${scrolled ? 'top-0 lg:top-4 w-[100%] lg:w-[95%] lg:max-w-7xl lg:rounded-[20px] shadow-2xl backdrop-blur-2xl' : 'top-0 w-full'} 
      ${darkMode ? (scrolled ? 'bg-slate-900/80 border border-white/10' : 'bg-transparent') : (scrolled ? 'bg-white/80 border border-purple-100' : 'bg-transparent')}`}>
      
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

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
                
        {/* Desktop Links */}
      {navLinks.map((link) => (
        link.name === 'Ticketing' ? (
          <Link 
            key={link.name}
            to="/ticket"
           className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:text-amber-500 
             ${darkMode 
                ? 'text-white/80' 
                : (isInnerPage ? 'text-slate-800' : (scrolled ? 'text-slate-600' : 'text-white/80'))
              }
              `}
              
          >
            {link.name}
          </Link>
        ) : (
          <a 
            key={link.name} 
            href={link.href} 
            className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:text-amber-500 
             ${darkMode 
                ? 'text-white/80' 
                : (isInnerPage ? 'text-slate-800' : (scrolled ? 'text-slate-600' : 'text-white/80'))
              }
                            
              `}
          >
            {link.name}
          </a>
        )
      ))}
        
        <div className="h-6 w-[1px] bg-white/20" />

        {/* <button onClick={toggleTheme} className={`p-2 rounded-xl transition-all ${darkMode ? 'text-amber-400 hover:bg-white/10' : 'text-slate-600 hover:bg-black/5'}`}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button> */}

        <Link to="/book-now" className="bg-amber-500 text-black px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2">
          Book Now
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg bg-amber-500 text-black">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`fixed inset-0 top-0 left-0 w-screen h-screen z-[200] p-10 flex flex-col justify-center space-y-8 animate-in fade-in zoom-in duration-300 ${darkMode ? 'bg-slate-950' : 'bg-purple-950'}`}>
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
         {navLinks.map((link) => (
            link.name === 'Ticketing' ? (
              <Link 
                key={link.name}
                to="/ticket"
                onClick={() => setIsOpen(false)}
                className="text-5xl font-bold uppercase text-white tracking-tighter hover:text-amber-500 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-bold uppercase text-white tracking-tighter hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <Link to="/book-now" onClick={() => setIsOpen(false)} className="text-5xl font-bold text-amber-500">Book Now →</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
