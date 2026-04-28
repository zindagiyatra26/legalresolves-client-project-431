import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Search, Filter, Clock, User, ArrowRight, 
  Share2, Heart, Sparkles, Compass, Footprints, 
} from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";


const Blog = () => {
  const { darkMode } = useOutletContext();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ["All", "Travel Tips", "Destination Guides", "Event Ideas", "Women's Travel", "Budget Hacks"];

  // 6.7 Blog Articles Data
  const articles = [
    {
      id: 1,
      category: "Women's Travel",
      title: "Solo Travel Safety: A Comprehensive Guide for Women in India",
      excerpt: "Empowering tips for women exploring India independently, from vetted stays to safe transport hacks.",
      author: "Team Zindagi",
      date: "April 12, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
    },
    {
      id: 2,
      category: "Destination Guides",
      title: "Hidden Gems of Rajasthan: Beyond the Forts",
      excerpt: "Discover offbeat villages and heritage stepwells that offer a glimpse into the true soul of Rajasthan.",
      author: "Rahul Sharma",
      date: "April 10, 2026",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
    },
    {
      id: 3,
      category: "Event Ideas",
      title: "Planning the Perfect Destination Engagement in Goa",
      excerpt: "Everything you need to know about sunset venues, local vendors, and logistics for a dream proposal.",
      author: "Event Lead",
      date: "April 08, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      id: 4,
      category: "Budget Hacks",
      title: "How to Explore the Himalayas Under ₹10,000",
      excerpt: "Smart booking tips and hostel recommendations for students and solo budget travelers.",
      author: "Team Zindagi",
      date: "April 05, 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306"
    }
  ];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(art => art.category === activeFilter);

  return (
    <div className={`pt-28 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-purple-50 text-slate-900'}`}>
      
      {/* --- HERO HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center space-y-4">
          <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Section 6.7</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
            The <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${darkMode ? 'white' : '#4c1d95'}` }}>Journal</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-70 font-medium italic">
            "Expert advice on domestic travel, event planning, and women's empowerment."
          </p>
        </div>
      </div>

      {/* --- FEATURED POST --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className={`relative rounded-[60px] overflow-hidden border transition-all duration-500 group ${
          darkMode ? 'bg-slate-900/40 border-white/5 shadow-2xl' : 'bg-white border-purple-100 shadow-xl'
        }`}>
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="h-96 lg:h-[500px] overflow-hidden">
              <img src={articles[0].image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Featured" />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500 text-black px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">Featured Article</span>
                <Sparkles size={16} className="text-amber-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                {articles[0].title}
              </h2>
              <p className="text-lg opacity-60 leading-relaxed font-medium">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-black/5">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 font-black">Z</div>
                   <div>
                     <p className="text-xs font-black uppercase tracking-widest">{articles[0].author}</p>
                     <p className="text-[10px] opacity-50 uppercase font-bold">{articles[0].date}</p>
                   </div>
                </div>
                <button className="bg-purple-600 text-white p-4 rounded-2xl group-hover:bg-amber-600 transition-colors">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CATEGORY FILTER BAR --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12 sticky top-24 z-40">
        <div className={`flex items-center gap-3 overflow-x-auto p-4 rounded-[30px] border backdrop-blur-xl ${
          darkMode ? 'bg-slate-900/50 border-white/10' : 'bg-white/80 border-purple-100'
        }`}>
          <div className="flex items-center gap-2 mr-4 text-amber-600 font-black uppercase text-[10px] tracking-widest shrink-0">
            <Filter size={14} /> Topics:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeFilter === cat 
                ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/20 scale-105' 
                : darkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- BLOG GRID --- */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((art) => (
            <article 
              key={art.id} 
              className={`flex flex-col group rounded-[45px] overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                darkMode ? 'bg-slate-900/60 border-white/5' : 'bg-white border-purple-100 shadow-xl shadow-purple-900/5'
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={art.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={art.title} />
                <span className="absolute top-6 left-6 bg-amber-500 text-black px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                  {art.category}
                </span>
              </div>

              <div className="p-10 flex-grow flex flex-col space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                  <span className="flex items-center gap-1"><Clock size={12}/> {art.readTime}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1"><User size={12}/> {art.author}</span>
                </div>
                
                <h3 className={`text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-purple-600 transition-colors`}>
                  {art.title}
                </h3>
                
                <p className="text-sm opacity-60 leading-relaxed font-medium line-clamp-3">
                  {art.excerpt}
                </p>

                {/* Social Share Footer */}
                <div className="pt-6 border-t border-black/5 mt-auto flex items-center justify-between">
                   <Link to={`/blog/${art.id}`} className="text-amber-600 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      Read More <ArrowRight size={14} />
                   </Link>
                   
                   <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"><FaFacebookF size={14}/></div>
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:text-green-600 hover:bg-green-50 transition-all cursor-pointer"><FaWhatsapp size={14}/></div>
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:text-black hover:bg-slate-200 transition-all cursor-pointer"><FaXTwitter size={14}/></div>
                   </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- INSTAGRAM FEED SECTION --- */}
      <div className={`py-24 border-t border-white/5 ${darkMode ? 'bg-purple-900/10' : 'bg-purple-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-amber-500 font-black uppercase tracking-widest text-xs">Instagram Feed</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Follow The Yatra</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 group relative cursor-pointer">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + (i * 1000000)}?auto=format&fit=crop&q=60`} className="w-full h-full object-cover group-hover:scale-110 transition-all" alt="insta" />
                  <div className="absolute inset-0 bg-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <FaInstagram className="text-white" />
                  </div>
               </div>
             ))}
          </div>
          <button className="bg-amber-500 text-black px-10 py-4 rounded-[20px] font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-black/20">
            Visit @ZindagiYatra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;