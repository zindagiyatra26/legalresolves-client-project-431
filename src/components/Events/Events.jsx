import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { PartyPopper, Heart, MapPin, Briefcase, Users, Sparkles, ArrowRight } from 'lucide-react';

const Events = () => {
  const { darkMode } = useOutletContext();

  const services = [
    { icon: <PartyPopper />, title: "Birthdays", desc: "Themes for all ages, surprises, and end-to-end execution.", link: "birthday" },
    { icon: <Heart />, title: "Pre-Wedding", desc: "Mehendi, Sangeet, and Haldi ceremonies with a creative touch.", link: "pre-wedding" },
    { icon: <MapPin />, title: "Destination", desc: "Events at forts, beaches, and hill stations. We handle travel + event.", link: "destination" },
    { icon: <Briefcase />, title: "Corporate", desc: "Retreats, product launches, and team-building expeditions.", link: "corporate" },
    { icon: <Users />, title: "Socials", desc: "College reunions, kitty parties, and intimate get-togethers.", link: "social" },
    { icon: <Sparkles />, title: "Custom", desc: "You dream it, we plan it. Personalized vendor management.", link: "custom" },
  ];

  return (
    <div id="events" className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-10 lg:mb-16 text-center">
        {/* <span className="text-amber-500 font-semibold uppercase tracking-[0.4em] text-xs">Pillar 2</span> */}
        <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-[0.8]">
          Events & {" "}
          <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${darkMode ? 'white' : '#4c1d95'}` }}>Celebrations</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 lg:mt-8 text-base lg:text-lg opacity-70 leading-relaxed">
          From an intimate party of 15 to grand corporate retreats of 500. We are in the business of creating memories.
        </p>
      </div>

      {/* --- CATEGORY GRID --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pb-24">
        {services.map((service, i) => (
          <Link to={`/events/${service.link}`} key={i} className={`group p-4 lg:p-6 rounded-[10px] lg:rounded-[20px] border transition-all duration-500 hover:-translate-y-2 ${
            darkMode ? 'bg-slate-900/50 border-white/5 hover:border-purple-500/30' : 'bg-white border-purple-100 hover:shadow-2xl'
          }`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transition-all group-hover:scale-110 ${
              darkMode ? 'bg-purple-600/20 text-purple-400' : 'bg-purple-50 text-purple-950'
            }`}>
              {React.cloneElement(service.icon, { size: 32 })}
            </div>
            <h3 className="text-2xl font-semibold uppercase tracking-tight mb-2 lg:mb-4 group-hover:text-amber-500 transition-colors">
              {service.title}
            </h3>
            <p className="text-base opacity-60 leading-relaxed mb-4 lg:mb-6">
              {service.desc}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-amber-500">
              Learn More <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;














