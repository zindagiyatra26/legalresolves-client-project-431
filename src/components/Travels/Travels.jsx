import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Users, Filter, Compass, Heart, Tent, Footprints, Wallet, Gem, User, ArrowRight, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import womenThumb1 from '../../assets/travel_women_thumb_1.jpg'
import womenThumb2 from '../../assets/travel_women_thumb_2.jpg'

import travel1 from '../../assets/travel_1.jpg'
import travel2 from '../../assets/travel_2.jpg'
import travel3 from '../../assets/travel_3.jpg'
import travel4 from '../../assets/travel_4.jpg'
import travel5 from '../../assets/travel_5.jpg'
import travel6 from '../../assets/travel_6.jpg'
import travel7 from '../../assets/travel_7.jpg'

const packagesData = [
  { 
    id: 1, 
    slug: "rajasthan-royal-culture", 
    title: "Rajasthan Royal Culture", 
    category: "Budget", 
    price: "12,000", 
    days: "5 Days", 
    nights: "4 Nights",
    img: travel1,
    groupSize: "12-15",
    description: "Explore the land of kings with heritage stays and local desert experiences."
  },
  { 
    id: 2, 
    slug: "spiti-valley-expedition", 
    title: "Spiti Valley Expedition", 
    category: "Trekking", 
    price: "22,500", 
    days: "8 Days", 
    nights: "7 Nights",
    img: travel2,
    groupSize: "8-10",
    description: "High altitude trekking through offbeat Himalayan villages."
  },
  { 
    id: 3, 
    slug: "kerala-backwaters-soul", 
    title: "Kerala Backwaters Soul", 
    category: "Luxury", 
    price: "85,000", 
    days: "7 Days", 
    nights: "6 Nights",
    img: travel3,
    groupSize: "Private",
    description: "Ultra-luxury houseboat stays and premium spa treatments."
  },
  { 
    id: 4, 
    slug: "himachal-womens-trek", 
    title: "Himachal Women's Trek", 
    category: "Women-Only", 
    price: "15,000", 
    days: "4 Days", 
    nights: "3 Nights",
    img: travel4,
    groupSize: "10-12 (Women Only)",
    description: "Safe, empowering trekking spaces led by professional women guides."
  },
  { 
    id: 5, 
    slug: "goa-solo-beach-break", 
    title: "Goa Solo Beach Break", 
    category: "Solo", 
    price: "8,500", 
    days: "3 Days", 
    nights: "2 Nights",
    img: travel5,
    groupSize: "Solo Curated Group",
    description: "Safe group tours for solo travellers joining a curated group."
  },
  { 
    id: 6, 
    slug: "manali-romantic-escape", 
    title: "Manali Romantic Escape", 
    category: "Honeymoon", 
    price: "45,000", 
    days: "6 Days", 
    nights: "5 Nights",
    img: travel6,
    groupSize: "Couple",
    description: "Candle-lit dinners, flower-decorated rooms, and photography packages."
  },
  { 
    id: 7, 
    slug: "rishikesh-river-camping", 
    title: "Rishikesh River Camping", 
    category: "Camping", 
    price: "4,500", 
    days: "2 Days", 
    nights: "1 Night",
    img: travel7,
    groupSize: "Open Group",
    description: "Budget outdoor camping with bonfires, river rafting, and stargazing."
  }
];


const Travels = () => {
  const { darkMode } = useOutletContext();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: <Compass size={16} /> },
    { name: 'Women-Only', icon: <Users size={16} /> },
    { name: 'Trekking', icon: <Footprints size={16} /> },
    { name: 'Honeymoon', icon: <Heart size={16} /> },
    { name: 'Camping', icon: <Tent size={16} /> },
    { name: 'Solo', icon: <User size={16} /> },
    { name: 'Budget', icon: <Wallet size={16} /> },
    { name: 'Luxury', icon: <Gem size={16} /> },
  ];

  // FIXED FILTER LOGIC
  const filteredPackages = activeFilter === 'All' 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === activeFilter);

  return (
    <div id="travel" className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-purple-50 text-slate-900'}`}>
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-10 lg:mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-[0.8]">
          Travel & {" "}
          <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${darkMode ? 'white' : '#4c1d95'}` }}>Tourism</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 lg:mt-8 text-base lg:text-lg opacity-70 leading-relaxed">
          Domestic India Packages covering everything from weekend getaways to expert trekking expeditions.
        </p>
      </div>

          {/*  FLAGSHIP SECTION  */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-10 lg:mb-16">
        <div className={`relative p-4 md:p-8 rounded-[20px] lg:rounded-[40px] overflow-hidden border transition-all duration-500 ${
          darkMode 
          ? 'bg-gradient-to-br from-purple-900/40 to-slate-900 border-white/10 shadow-2xl shadow-purple-500/10' 
          : 'bg-gradient-to-br from-purple-950 to-purple-800 text-white border-transparent shadow-2xl shadow-purple-900/30'
        }`}>

      {/* FLOATING IMAGE COLLAGE  */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
            {/* Primary Image: Empowerment/Safety */}
            <div className="absolute top-12 right-12 w-64 h-80 rounded-[40px] overflow-hidden border-4 border-white/20 shadow-2xl rotate-6 group-hover:rotate-3 transition-transform duration-700 z-20">
              <img 
                src={womenThumb1} 
                alt="Women Empowerment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-900/20" />
            </div>

            {/* Secondary Image: Travel/Adventure */}
            <div className="absolute bottom-12 right-48 w-56 h-72 rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl -rotate-12 group-hover:-rotate-6 transition-transform duration-700 z-10 opacity-60 group-hover:opacity-100">
              <img 
                src={womenThumb2}
                alt="Safe Travel" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Safety Badge with Image-style Glass */}
            {/* <div className="absolute top-2 right-[40px] -translate-y-1/2 p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl animate-bounce z-30">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="text-amber-500" size={24} />
                <span className="text-[8px] font-semibold uppercase tracking-tighter">100% Safe</span>
              </div>
            </div> */}
          </div>

          <div className="relative z-10 max-w-5xl space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full font-semibold text-[10px] uppercase tracking-widest shadow-lg shadow-amber-500/20">
                Flagship Offering
              </span>
              <Sparkles className="text-amber-500 animate-bounce" size={18} />
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-none italic">
              "Sirf Apni,{" "}
              <span className="text-amber-500">Apne Liye"</span>
            </h2>

            <p className="text-lg md:text-xl max-w-3xl opacity-80 leading-relaxed font-medium">
              Safe, empowering travel spaces designed by women, for women. 
              Vetted stays, female guides, and curated solo-friendly itineraries 
              that feel empowering and safe.
            </p>

            <Link 
              to="/travel/himachal-womens-trek" 
              className="inline-flex items-center gap-4 bg-white text-purple-950 px-10 py-5 rounded-[12px] lg:rounded-[20px] font-semibold uppercase text-xs tracking-widest hover:bg-amber-500 hover:scale-105 transition-all shadow-xl group"
            >
              Explore Women-Only Trips
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/*  FILTER BAR */}
      <div className="max-w-7xl mx-auto lg:px-6 mb-6 lg:mb-12 sticky top-20 lg:top-20 z-40">
        <div className={`flex items-center gap-4 overflow-x-auto p-4 lg:rounded-3xl border backdrop-blur-xl ${darkMode ? 'bg-slate-900/50 border-white/10' : 'bg-white/80 border-purple-100'}`}>
          <div className="flex items-center gap-2 mr-4 text-amber-600 font-semibold uppercase text-[10px] tracking-widest shrink-0">
            <Filter size={14} /> Filter Trips:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-semibold uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeFilter === cat.name 
                ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20' 
                : darkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-white'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* PACKAGE GRID  */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-24">
        {filteredPackages.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 lg:gap-10">
            {filteredPackages.map((pkg) => (
              <Link 
                to={`/travel/${pkg.slug}`} 
                key={pkg.id} 
                className="group relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)]"
              >
                {/* Main Card Container */}
                <div className="relative aspect-[5/4] lg:aspect-[4/5] rounded-[20px] lg:rounded-[30px] overflow-hidden border-[6px] border-white/5 shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-purple-500/20">
                  <img 
                    src={pkg.img} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Top Overlay Badges */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
                    <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full text-[9px] font-semibold uppercase tracking-widest shadow-xl">
                      {pkg.category}
                    </span>
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 text-white">
                      <Heart size={14} className="group-hover:text-rose-500 transition-colors" />
                    </div>
                  </div>

                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                  
                  {/* --- INTERNAL CONTENT & FOOTER (All inside main div) --- */}
                  <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-6">
                    {/* Title Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 text-[10px] font-semibold uppercase tracking-[0.2em]">
                        <Compass size={14} className="animate-pulse" /> 
                        {pkg.days} / {parseInt(pkg.days) - 1} Nights
                      </div>
                      <h4 className="text-3xl font-semibold leading-[0.9] uppercase tracking-tighter text-white group-hover:text-amber-500 transition-colors">
                        {pkg.title.split(' ')[0]} <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                          {pkg.title.split(' ').slice(1).join(' ')}
                        </span>
                      </h4>
                    </div>

                    {/* Footer Details (Now Inside) */}
                    <div className="hidden pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">Starts At</p>
                        <p className="text-2xl font-semibold text-white">₹{pkg.price}</p>
                      </div>
                      
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 text-black flex items-center justify-center transition-all duration-500 group-hover:-rotate-[30deg] shadow-lg shadow-amber-500/20">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Glow Effect */}
                <div className="absolute -z-10 inset-0 bg-purple-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 rounded-[60px] border-2 border-dashed border-purple-200/20">
            <div className="bg-purple-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-500">
              <Compass size={40} />
            </div>
            <p className="opacity-50 font-semibold uppercase tracking-widest text-sm">
              No journeys found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travels;











