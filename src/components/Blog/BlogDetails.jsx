import React, { useEffect, useState } from 'react';
import { useParams, useOutletContext, useNavigate, Link } from 'react-router-dom';
import { 
  Clock, User, Calendar, ArrowLeft, 
  Share2, Bookmark, ChevronRight, Sparkles, Quote, BookmarkCheck
} from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";



const blogArticles = [
  {
    id: 1,
    category: "Women's Travel",
    title: "Solo Travel Safety: A Comprehensive Guide for Women in India",
    subtitle: "Empowering tips for women exploring India independently, from vetted stays to safe transport hacks.",
    author: "Team Zindagi",
    date: "April 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    content: [
      { type: 'p', text: "Traveling solo as a woman in India is an experience that transforms the soul. It's about more than just seeing new places; it's about claiming your space and discovering your own strength." },
      { type: 'h2', text: "Choosing the Right Destination" },
      { type: 'p', text: "Start with places known for their welcoming culture. Cities in Rajasthan like Udaipur, or the serene backwaters of Kerala, offer excellent infrastructure for solo travelers." },
      { type: 'quote', text: "Safety isn't just about avoiding risks; it's about having the right support system to take bold steps." }
    ]
  },
  {
    id: 2,
    category: "Destination Guides",
    title: "Hidden Gems of Rajasthan: Beyond the Forts",
    subtitle: "Discover offbeat villages and heritage stepwells that offer a glimpse into the true soul of Rajasthan.",
    author: "Rahul Sharma",
    date: "April 10, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    content: [
      { type: 'p', text: "Rajasthan is often equated with the grand forts of Jaipur and Jodhpur, but the true magic lies in the silence of the Thar desert and the intricate carvings of remote stepwells." },
      { type: 'h2', text: "The Magic of Shekhawati" },
      { type: 'p', text: "Known as the world's largest open-air art gallery, this region is home to hundreds of painted havelis that depict everything from local mythology to British-era trains." },
      { type: 'quote', text: "In Rajasthan, even the stones have a story to tell if you are willing to listen." }
    ]
  },
  {
    id: 3,
    category: "Event Ideas",
    title: "Planning the Perfect Destination Engagement in Goa",
    subtitle: "Everything you need to know about sunset venues, local vendors, and logistics for a dream proposal.",
    author: "Event Lead",
    date: "April 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    content: [
      { type: 'p', text: "Goa is the ultimate romantic canvas. But a perfect engagement requires more than just a beautiful sunset; it requires meticulous planning of local logistics." },
      { type: 'h2', text: "South Goa vs North Goa" },
      { type: 'p', text: "For an intimate, quiet proposal, South Goa's pristine beaches like Palolem are unmatched. For a high-energy celebration, North Goa's luxury villas offer better infrastructure." },
      { type: 'quote', text: "The best events are the ones where the hosts are as relaxed as the guests." }
    ]
  },
  {
    id: 4,
    category: "Budget Hacks",
    title: "How to Explore the Himalayas Under ₹10,000",
    subtitle: "Smart booking tips and hostel recommendations for students and solo budget travelers.",
    author: "Team Zindagi",
    date: "April 05, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
    content: [
      { type: 'p', text: "The mountains are calling, and you don't need a massive bank balance to answer. Budget travel in the Himalayas is about timing and local connections." },
      { type: 'h2', text: "Hostels and Homestays" },
      { type: 'p', text: "Skip the hotels and opt for Zostels or local homestays in Parvati Valley. Not only do they cost a fraction, but they also provide a community of fellow travelers." },
      { type: 'quote', text: "Collect moments, not things—especially when you're on a budget." }
    ]
  }
];

const BlogDetails = () => {
  const { id } = useParams();
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Find article by ID (convert id from URL string to number)
    const foundArticle = blogArticles.find(a => a.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);
      window.scrollTo(0, 0);
    } else {
      navigate('/blog'); // Redirect if ID not found
    }
  }, [id, navigate]);

  if (!article) return null;

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      
      {/* --- IMMERSIVE HERO --- */}
      <header className="relative w-full h-[70vh] min-h-[550px] overflow-hidden">
        <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6">
          <div className="max-w-4xl mx-auto w-full space-y-6">
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-amber-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to Journal
            </button>
            
            <div className="space-y-4">
              <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl shadow-amber-500/20">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-purple-100/70 font-medium max-w-2xl italic">
                "{article.subtitle}"
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-600 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-purple-900/40">
                  {article.author.charAt(0)}
                </div>
                <span className="text-xs font-black uppercase tracking-widest">{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                <Calendar size={14} className="text-amber-500" /> {article.date}
              </div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                <Clock size={14} className="text-amber-500" /> {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* STICKY SIDEBAR (LEFT) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 space-y-8 flex flex-col items-center">
              <div className="flex flex-col gap-4">
                 {[
                   { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                   { icon: <FaWhatsapp />, color: "hover:bg-green-600" },
                   { icon: <FaXTwitter />, color: "hover:bg-black" },
                   { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" }
                 ].map((social, i) => (
                   <button key={i} className={`w-12 h-12 rounded-2xl border transition-all ${darkMode ? 'border-white/10 bg-white/5' : 'border-purple-100 bg-purple-50'} flex items-center justify-center hover:text-white hover:scale-110`}>
                     {social.icon}
                   </button>
                 ))}
              </div>
              <div className="h-24 w-[1px] bg-gradient-to-b from-amber-500 to-transparent" />
              <button className="text-amber-500 animate-pulse hover:scale-125 transition-transform"><BookmarkCheck size={28} /></button>
            </div>
          </aside>

          {/* ARTICLE BODY (CENTER) */}
          <article className="lg:col-span-8 space-y-12">
            {article.content.map((block, idx) => {
              if (block.type === 'p') return (
                <p key={idx} className="text-lg md:text-2xl leading-relaxed opacity-80 font-medium">
                  {block.text}
                </p>
              );
              if (block.type === 'h2') return (
                <h2 key={idx} className="text-4xl md:text-5xl font-black uppercase tracking-tighter pt-10 border-l-4 border-amber-500 pl-6">
                  {block.text}
                </h2>
              );
              if (block.type === 'quote') return (
                <div key={idx} className={`p-12 rounded-[50px] border-l-[12px] border-purple-600 relative overflow-hidden ${darkMode ? 'bg-white/5 border-white/5' : 'bg-purple-50 border-purple-100'}`}>
                  <Quote className="absolute -right-6 -top-6 opacity-10 text-purple-500" size={180} />
                  <p className="text-2xl md:text-4xl font-black italic tracking-tight leading-tight relative z-10 text-amber-600">
                    "{block.text}"
                  </p>
                </div>
              );
              return null;
            })}

            {/* AUTHOR BOX */}
            <div className={`mt-24 p-12 rounded-[60px] border flex flex-col md:flex-row gap-10 items-center ${darkMode ? 'bg-slate-900 border-white/5' : 'bg-slate-50 border-slate-200 shadow-xl'}`}>
               <div className="w-28 h-28 rounded-[40px] overflow-hidden shrink-0 border-4 border-amber-500 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Author" className="w-full h-full object-cover" />
               </div>
               <div className="space-y-4 text-center md:text-left">
                  <h4 className="text-2xl font-black uppercase tracking-tight">Curated by {article.author}</h4>
                  <p className="opacity-60 text-sm md:text-base leading-relaxed font-medium">
                    Our lead explorer at Zindagi Yatra, passionate about finding the soul of India through offbeat routes and women-led initiatives.
                  </p>
                  <div className="flex justify-center md:justify-start gap-6 pt-4">
                     <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 border-b border-amber-600/30 pb-1 cursor-pointer hover:text-purple-600">Follow Stories</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 border-b border-amber-600/30 pb-1 cursor-pointer hover:text-purple-600">View Journal</span>
                  </div>
               </div>
            </div>
          </article>

          {/* SIDEBAR (RIGHT) */}
          <aside className="lg:col-span-3 space-y-16">
             <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-amber-500 bg-amber-500/10 w-fit px-4 py-1 rounded-full">Next Stories</h3>
                {blogArticles.filter(a => a.id !== article.id).slice(0, 2).map(other => (
                  <Link key={other.id} to={`/blog/${other.id}`} className="block group space-y-4">
                    <div className="aspect-[4/3] rounded-[35px] overflow-hidden border-2 border-white/5">
                       <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="font-black uppercase tracking-tighter text-sm leading-tight group-hover:text-amber-500 transition-colors">
                      {other.title}
                    </h4>
                    <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">{other.readTime} • {other.category}</p>
                  </Link>
                ))}
             </div>

             <div className={`p-10 rounded-[50px] text-center space-y-8 shadow-2xl ${darkMode ? 'bg-purple-950/20' : 'bg-purple-900 text-white shadow-purple-900/20'}`}>
                <Sparkles size={40} className="mx-auto text-amber-500" />
                <h4 className="text-xl font-black uppercase tracking-tight leading-tight italic">Join The <br/> Inner Circle</h4>
                <p className="text-xs opacity-60 font-medium">Get exclusive offbeat travel tips and event early access.</p>
                <input type="email" placeholder="Your Email" className="w-full p-5 rounded-3xl bg-white/10 border border-white/20 outline-none text-white text-sm font-bold" />
                <button className="w-full bg-amber-500 text-black p-5 rounded-[28px] font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-xl shadow-amber-600/20">Subscribe</button>
             </div>
          </aside>

        </div>
      </section>

      {/* FOOTER PREVIEW */}
      <footer className={`py-32 border-t border-white/5 ${darkMode ? 'bg-slate-950' : 'bg-purple-50'}`}>
         <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-amber-600">Keep Reading</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter hover:text-amber-500 transition-colors cursor-pointer leading-[0.8]">
              Ready for the <br/> Next Adventure?
            </h2>
            <Link to="/blog" className="inline-flex items-center gap-4 bg-purple-600 text-white px-10 py-5 rounded-[24px] font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all shadow-xl active:scale-95">
               Explore Full Journal <ChevronRight size={18} />
            </Link>
         </div>
      </footer>
    </div>
  );
};

export default BlogDetails;




















// import React, { useEffect, useState } from 'react';
// import { useParams, useOutletContext, Link, useNavigate } from 'react-router-dom';
// import { 
//   Clock, User, Calendar, ArrowLeft, 
//   Share2, MessageCircle, Heart, Bookmark,
//   ChevronRight, Sparkles, Quote
// } from 'lucide-react';
// import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const { darkMode } = useOutletContext();
//   const navigate = useNavigate();

//   // Mock Data (In a real app, this would be fetched via API based on 'id')
//   const article = {
//     id: 1,
//     category: "Women's Travel",
//     title: "Solo Travel Safety: A Comprehensive Guide for Women in India",
//     subtitle: "Empowering tips for women exploring India independently, from vetted stays to safe transport hacks.",
//     author: "MD Kaif",
//     date: "April 12, 2026",
//     readTime: "8 min read",
//     image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
//     content: [
//       { type: 'p', text: "Traveling solo as a woman in India is an experience that transforms the soul. It's about more than just seeing new places; it's about claiming your space and discovering your own strength. At Zindagi Yatra, we believe every woman deserves to experience the magic of the open road with absolute peace of mind." },
//       { type: 'h2', text: "Choosing the Right Destination" },
//       { type: 'p', text: "Start with places known for their welcoming culture. Cities in Rajasthan like Udaipur, or the serene backwaters of Kerala, offer excellent infrastructure for solo travelers. Always research 'vetted safestays'—heritage properties or boutique hostels that have specific security protocols for women." },
//       { type: 'quote', text: "Safety isn't just about avoiding risks; it's about having the right support system to take bold steps." },
//       { type: 'h2', text: "The Golden Rule: Local Wisdom" },
//       { type: 'p', text: "Always engage with local women guides. They don't just show you the monuments; they show you the pulse of the city from a perspective that generic guidebooks often miss. From knowing which local transport is safest at sunset to finding the hidden local eateries, their wisdom is your best shield." }
//     ]
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   return (
//     <div className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      
//       {/* --- HERO SECTION --- */}
//       <header className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
//         <img src={article.image} className="w-full h-full object-cover" alt="Hero" />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
//         <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6">
//           <div className="max-w-4xl mx-auto w-full space-y-6">
//             <button 
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 text-amber-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors"
//             >
//               <ArrowLeft size={16} /> Back to Journal
//             </button>
            
//             <div className="space-y-4">
//               <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">
//                 {article.category}
//               </span>
//               <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
//                 {article.title}
//               </h1>
//               <p className="text-lg md:text-xl text-purple-100/70 font-medium max-w-2xl italic">
//                 "{article.subtitle}"
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-white/60">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-black text-white">K</div>
//                 <span className="text-xs font-bold uppercase tracking-widest">{article.author}</span>
//               </div>
//               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
//                 <Calendar size={14} className="text-amber-500" /> {article.date}
//               </div>
//               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
//                 <Clock size={14} className="text-amber-500" /> {article.readTime}
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* --- CONTENT SECTION --- */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-12 gap-16">
          
//           {/* LEFT: STICKY SOCIAL SIDEBAR */}
//           <aside className="hidden lg:block lg:col-span-1">
//             <div className="sticky top-32 space-y-8 flex flex-col items-center">
//               <div className="flex flex-col gap-4">
//                  {[
//                    { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
//                    { icon: <FaXTwitter />, color: "hover:bg-black" },
//                    { icon: <FaWhatsapp />, color: "hover:bg-green-600" },
//                    { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" }
//                  ].map((social, i) => (
//                    <button key={i} className={`w-12 h-12 rounded-2xl border ${darkMode ? 'border-white/10 bg-white/5' : 'border-purple-100 bg-purple-50'} flex items-center justify-center transition-all ${social.color} hover:text-white`}>
//                      {social.icon}
//                    </button>
//                  ))}
//               </div>
//               <div className="h-20 w-[1px] bg-gradient-to-b from-amber-500 to-transparent" />
//               <button className="text-amber-500 hover:scale-110 transition-transform"><Bookmark /></button>
//             </div>
//           </aside>

//           {/* MAIN ARTICLE BODY */}
//           <article className="lg:col-span-8 space-y-10">
//             {article.content.map((block, idx) => {
//               if (block.type === 'p') return (
//                 <p key={idx} className="text-lg md:text-xl leading-relaxed opacity-80 font-medium">
//                   {block.text}
//                 </p>
//               );
//               if (block.type === 'h2') return (
//                 <h2 key={idx} className="text-3xl md:text-4xl font-black uppercase tracking-tighter pt-8">
//                   {block.text}
//                 </h2>
//               );
//               if (block.type === 'quote') return (
//                 <div key={idx} className={`p-10 rounded-[40px] border-l-[12px] border-amber-500 relative overflow-hidden ${darkMode ? 'bg-white/5 border-white/5' : 'bg-purple-50 border-purple-100'}`}>
//                   <Quote className="absolute -right-4 -top-4 opacity-10 text-purple-500" size={120} />
//                   <p className="text-2xl md:text-3xl font-black italic tracking-tight leading-tight relative z-10">
//                     "{block.text}"
//                   </p>
//                 </div>
//               );
//               return null;
//             })}

//             {/* AUTHOR BIO CARD */}
//             <div className={`mt-20 p-8 md:p-12 rounded-[50px] border flex flex-col md:flex-row gap-8 items-center ${darkMode ? 'bg-slate-900 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
//                <div className="w-24 h-24 rounded-[30px] overflow-hidden shrink-0 border-4 border-amber-500">
//                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Author" className="w-full h-full object-cover" />
//                </div>
//                <div className="space-y-3 text-center md:text-left">
//                   <h4 className="text-xl font-black uppercase tracking-tight">Written by {article.author}</h4>
//                   <p className="opacity-60 text-sm leading-relaxed">
//                     Lead travel consultant at Zindagi Yatra. MD Kaif has explored 20+ Indian states and specializes in creating women-safe trekking itineraries.
//                   </p>
//                   <div className="flex justify-center md:justify-start gap-4 pt-2">
//                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 cursor-pointer">Follow Stories</span>
//                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 cursor-pointer">View Portfolio</span>
//                   </div>
//                </div>
//             </div>
//           </article>

//           {/* RIGHT: RELATED POSTS */}
//           <aside className="lg:col-span-3 space-y-12">
//              <div className="space-y-6">
//                 <h3 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Related Articles</h3>
//                 {[1, 2].map(i => (
//                   <Link key={i} to={`/blog/${i + 1}`} className="block group space-y-3">
//                     <div className="aspect-video rounded-3xl overflow-hidden">
//                        <img src={`https://images.unsplash.com/photo-${1524492412937 + i}`} alt="Related" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                     </div>
//                     <h4 className="font-black uppercase tracking-tighter text-sm leading-tight group-hover:text-purple-600 transition-colors">
//                       Hidden Gems of North India
//                     </h4>
//                     <p className="text-[10px] font-bold opacity-40 uppercase">5 min read • Destination</p>
//                   </Link>
//                 ))}
//              </div>

//              {/* Newsletter Sidebar Box */}
//              <div className={`p-8 rounded-[40px] text-center space-y-6 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-900 text-white shadow-xl shadow-purple-900/20'}`}>
//                 <Sparkles size={32} className="mx-auto text-amber-500" />
//                 <h4 className="font-black uppercase tracking-tight leading-tight">Get Travel Hacks in your Inbox</h4>
//                 <input type="email" placeholder="Email" className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none text-white text-sm" />
//                 <button className="w-full bg-amber-500 text-black p-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95">Subscribe</button>
//              </div>
//           </aside>

//         </div>
//       </section>

//       {/* --- NEXT ARTICLE PREVIEW --- */}
//       <footer className={`py-20 border-t border-white/5 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
//          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
//             <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Continue Reading</span>
//             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter hover:text-amber-500 transition-colors cursor-pointer">
//               How to Explore Himalayas <br/> on a Budget
//             </h2>
//             <Link to="/blog" className="inline-flex items-center gap-3 text-purple-600 font-black uppercase text-xs tracking-widest mt-4">
//                Back to Home <ChevronRight size={16} />
//             </Link>
//          </div>
//       </footer>
//     </div>
//   );
// };

// export default BlogDetails;