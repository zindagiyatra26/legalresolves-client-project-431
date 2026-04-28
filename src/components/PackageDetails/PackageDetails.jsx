import React, { useEffect, useState } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { Clock, Users, Coffee, ChevronDown, CheckCircle2, ShieldCheck, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const packagesData = [
  { id: 1, slug: "rajasthan-royal-culture", title: "Rajasthan Royal Culture", category: "Budget", price: "12,000", days: "5 Days", nights: "4 Nights", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da", groupSize: "12-15", description: "Explore the land of kings with heritage stays and local desert experiences." },
  { id: 2, slug: "spiti-valley-expedition", title: "Spiti Valley Expedition", category: "Trekking", price: "22,500", days: "8 Days", nights: "7 Nights", img: "https://images.unsplash.com/photo-1653844573020-71f77a0ccb8c?q=80&w=687&auto=format&fit=crop", groupSize: "8-10", description: "High altitude trekking through offbeat Himalayan villages." },
  { id: 3, slug: "kerala-backwaters-soul", title: "Kerala Backwaters Soul", category: "Luxury", price: "85,000", days: "7 Days", nights: "6 Nights", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944", groupSize: "Private", description: "Ultra-luxury houseboat stays and premium spa treatments." },
  { id: 4, slug: "himachal-womens-trek", title: "Himachal Women's Trek", category: "Women-Only", price: "15,000", days: "4 Days", nights: "3 Nights", img: "https://images.unsplash.com/photo-1551632811-561732d1e306", groupSize: "10-12 (Women Only)", description: "Safe, empowering trekking spaces led by professional women guides." },
  { id: 5, slug: "goa-solo-beach-break", title: "Goa Solo Beach Break", category: "Solo", price: "8,500", days: "3 Days", nights: "2 Nights", img: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76", groupSize: "Solo Curated Group", description: "Safe group tours for solo travellers joining a curated group." },
  { id: 6, slug: "manali-romantic-escape", title: "Manali Romantic Escape", category: "Honeymoon", price: "45,000", days: "6 Days", nights: "5 Nights", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23", groupSize: "Couple", description: "Candle-lit dinners, flower-decorated rooms, and photography packages." },
  { id: 7, slug: "rishikesh-river-camping", title: "Rishikesh River Camping", category: "Camping", price: "4,500", days: "2 Days", nights: "1 Night", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4", groupSize: "Open Group", description: "Budget outdoor camping with bonfires, river rafting, and stargazing." }
];

const PackageDetails = () => {
  const { slug } = useParams();
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const foundPkg = packagesData.find(p => p.slug === slug);
    if (foundPkg) {
      setPkg(foundPkg);
    } else {
      navigate('/travel');
    }
  }, [slug, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!pkg) return null;

  return (
    <div className={`pt-24 pb-20 transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            
            {/* HERO GALLERY - IMAGE IS NOW RELATIVE */}
            <div className="relative grid gap-6 aspect-[5/4] lg:aspect-[16/9] mb-6 lg:mb-10 rounded-[10px] lg:rounded-[20px] overflow-hidden shadow-2xl group">
              <img src={pkg.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={pkg.title} />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* ABSOLUTE SECTION: Category & Title */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="bg-amber-500 text-black font-semibold uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full inline-block mb-4 shadow-xl">
                  {pkg.category} Package
                </span>
                <h1 className="text-3xl md:text-6xl font-semibold uppercase tracking-tighter text-white leading-tight drop-shadow-2xl">
                  {pkg.title}
                </h1>
                <div className="flex items-center gap-2 text-white/80 mt-2 font-semibold uppercase tracking-widest text-[10px]">
                   <MapPin size={14} className="text-amber-500" /> Domestic Destination • India
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
              {[
                { icon: <Clock size={18}/>, label: `${pkg.days} / ${pkg.nights}` },
                { icon: <Users size={18}/>, label: `Grp: ${pkg.groupSize}` },
                { icon: <Coffee size={18}/>, label: "Meals Inc." },
                { icon: <ShieldCheck size={18}/>, label: "Safe Stays" }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl lg:rounded-2xl flex flex-col gap-2 items-center text-center border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-purple-50 border-purple-100'}`}>
                  <span className="text-amber-500">{item.icon}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-2 lg:pt-4">
              <h3 className="text-2xl font-medium uppercase tracking-tight">Overview</h3>
              <p className="text-base opacity-70 leading-relaxed">
                {pkg.description} We cover all major and offbeat destinations. Our {pkg.category.toLowerCase()} tier ensures you get the best value with vetted accommodation and certified guides.
              </p>
            </div>

            {/* DYNAMIC ITINERARY */}
            <div className="space-y-2 pt-2 lg:pt-4">
              <h3 className="text-2xl font-medium uppercase tracking-tight">Day-by-Day Journey</h3>
              {Array.from({ length: parseInt(pkg.days) }).map((_, i) => (
                <details key={i} className={`group rounded-[10px] border transition-all ${darkMode ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-purple-100'}`}>
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                    <div className="flex items-center gap-6">
                       <span className="text-3xl font-semibold text-amber-500/20 group-hover:text-amber-500 transition-colors">0{i+1}</span>
                       <span className="font-semibold uppercase tracking-widest text-sm">Experience the {i === 0 ? 'Arrival' : 'Adventure'}</span>
                    </div>
                    <ChevronDown size={20} className="group-open:rotate-180 transition-transform text-amber-500" />
                  </summary>
                  <div className="px-8 pb-8 text-sm opacity-70 leading-relaxed ml-12">
                    Complete curated itinerary for {pkg.title}. Including travel logistics, meals, and specialized sightseeing.
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* SIDEBAR BOOKING - Desktop: Sticky Sidebar | Mobile: Fixed Bottom Bar */}
          <div className="lg:col-span-1">
            {/* Desktop Version */}
            {/* <div className={`hidden lg:block p-10 rounded-[20px] sticky top-32 border ${darkMode ? 'bg-slate-900/80 border-white/10 backdrop-blur-2xl shadow-2xl shadow-purple-900/40' : 'bg-white border-purple-100 shadow-2xl'}`}>
              <div className="text-center mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-600 mb-2">Total Package Cost</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-black tracking-tighter text-purple-600">₹{pkg.price}</span>
                  <span className="opacity-40 text-xs font-semibold uppercase">/ Person</span>
                </div>
              </div>
              <button
                onClick={() => navigate("/book-now")}
                className="w-full bg-amber-600 text-white p-6 rounded-[10px] font-semibold uppercase tracking-widest text-xs hover:bg-purple-600 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                Book This Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[9px] text-center mt-4 opacity-50 font-semibold uppercase tracking-widest">No hidden charges • 24/7 Support</p>
            </div> */}

            {/* Desktop Version - Updated Action & Trust Card */}
            <div className={`hidden lg:block p-8 rounded-[20px] sticky top-32 border ${
              darkMode 
                ? 'bg-slate-900/80 border-white/10 backdrop-blur-2xl shadow-2xl shadow-purple-900/40' 
                : 'bg-white border-purple-100 shadow-2xl'
            }`}>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-amber-600 animate-pulse" size={32} />
                </div>
                <h4 className="text-2xl font-semibold uppercase tracking-tighter leading-none mb-3">
                  Tailored For <span className="text-amber-600">You</span>
                </h4>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-50 px-4 leading-relaxed">
                  Every journey is unique. Request a custom itinerary & quote.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  { icon: <CheckCircle2 size={16} />, text: "Flexible Dates & Routes" },
                  { icon: <CheckCircle2 size={16} />, text: "Verified Safety Stays" },
                  { icon: <CheckCircle2 size={16} />, text: "Expert Local Insight" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest opacity-70">
                    <span className="text-teal-500">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => navigate("/book-now")}
                  className="w-full bg-amber-600 text-white p-6 rounded-[10px] font-semibold uppercase tracking-widest text-xs hover:bg-purple-600 transition-all active:scale-95 shadow-xl shadow-amber-600/20 flex items-center justify-center gap-3 group"
                >
                  Plan Your Yatra <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>

                <a 
                  href="https://wa.me/917977421612" 
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full flex items-center justify-center gap-3 p-5 rounded-[10px] border font-semibold uppercase tracking-widest text-[10px] transition-all hover:bg-green-500 hover:text-white hover:border-green-500 ${
                    darkMode ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-slate-50 text-slate-500'
                  }`}
                >
                  <FaWhatsapp size={16} /> Quick WhatsApp Chat
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-dashed border-black/5 dark:border-white/5 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 italic">
                  "Hum hain memories bananewali company"
                </p>
              </div>
            </div>

            {/* Mobile Version Fixed Bottom Bar */}
            {/* <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 border-t backdrop-blur-xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-500 ${darkMode ? 'bg-slate-900/90 border-white/10' : 'bg-white/90 border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]'}`}>
               <div className="flex flex-col">
                  <p className="text-[10px] font-semibold uppercase text-amber-600 tracking-tighter">Total Price</p>
                  <div className="flex items-baseline gap-1">
                     <span className="text-2xl font-semibold text-purple-600">₹{pkg.price}</span>
                     <span className="text-[8px] font-semibold opacity-50 uppercase">/ person</span>
                  </div>
               </div>
               <button 
                  onClick={() => navigate("/book-now")}
                  className="bg-amber-600 text-white px-8 py-4 rounded-2xl font-semibold uppercase text-xs tracking-widest shadow-lg shadow-amber-600/20 active:scale-95">
                  Book Now
               </button>
            </div> */}

            <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 border-t backdrop-blur-xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-500 ${darkMode ? 'bg-slate-900/95 border-white/10' : 'bg-white/95 border-slate-200 shadow-[0_-15px_30px_rgba(0,0,0,0.1)]'}`}>
              <div className="flex flex-col">
                {/* Replaced pricing with Value Tag */}
                <div className="flex items-center gap-2 mb-0.5">
                  <Sparkles size={12} className="text-amber-500" />
                  <p className="text-[10px] font-bold uppercase text-amber-600 tracking-widest">Tailored Trip</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm font-semibold uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-purple-900'}`}>Request Quote</span>
                </div>
              </div>
              
              <button 
                onClick={() => navigate("/book-now")}
                className="bg-amber-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-amber-600/20 active:scale-95 transition-all">
                Plan Your Yatra
              </button>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PackageDetails;