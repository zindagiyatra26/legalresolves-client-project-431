import React, { useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Image as ImageIcon, 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';

const EventCategoryDetails = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { darkMode } = useOutletContext();

  // This would typically come from a data file or API
  const eventData = {
    birthday: {
      title: "Birthday Celebrations",
      subtitle: "Theme-based parties from 1st to 100th",
      heroImg: "https://images.unsplash.com/photo-1530103043960-ef38714abb15",
      description: "We handle everything from venue sourcing to surprise coordination. Whether it's a milestone 50th or a magical themed 1st birthday, we ensure the cake is sweet and the memories are sweeter.",
      features: ["Custom Theme Design", "Cake & Catering Coordination", "Professional Photography", "Entertainment (DJ/Live Music)"],
      process: ["Concept Design", "Venue Selection", "Vendor Booking", "D-Day Execution"]
    },
    destination: {
      title: "Destination Events",
      subtitle: "Where Travel meets Celebration",
      heroImg: "https://images.unsplash.com/photo-1519741497674-611481863552",
      description: "Our signature service. We plan events AT destinations—a birthday in a Rajasthan fort or an engagement in Goa. We handle travel logistics AND event execution so you only have to show up.",
      features: ["Guest Travel & Stay", "Local Vendor Coordination", "Scenic Venue Scouting", "On-site Management"],
      process: ["Location Picking", "Logistics Planning", "Decor Setup", "Guest Management"]
    },
    corporate: {
      title: "Corporate Events",
      subtitle: "Professional. Punctual. Perfect.",
      heroImg: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      description: "From annual day awards to team-building treks in the Himalayas. We offer a dedicated enquiry process for our corporate partners to ensure brand alignment and seamless flow.",
      features: ["Product Launches", "Award Ceremonies", "Team Outings", "Conferences & Seminars"],
      process: ["Briefing", "Proposal & Budgeting", "Execution Strategy", "Post-Event Reporting"]
    }
  };

  const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
];

  // Fallback for categories not explicitly defined
  const data = eventData[category] || eventData.birthday;

    //scroll to top on mount
    useEffect(() => {
      window.scrollTo({top: 0,});
    }, []);

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-10 lg:mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <span className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs lg:px-4 lg:py-1 lg:border border-amber-500/20 rounded-full">
              {data.subtitle}
            </span>
            <h1 className="text-4xl md:text-7xl font-semibold uppercase tracking-tighter leading-[0.9] mt-2">
              {data.title.split(' ')[0]} <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: `1.2px ${darkMode ? 'white' : '#4c1d95'}` }}>
                {data.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-base lg:text-lg opacity-70 leading-relaxed max-w-xl">
              {data.description}
            </p>
            <div className="flex gap-4">
               <button 
               onClick={() => navigate("/book-now")}
               className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold uppercase tracking-widest text-xs transition-all active:scale-95 shadow-lg shadow-purple-500/20">
                 Book Consultation
               </button>
            </div>
          </div>
          
          <div className="relative aspect-video lg:aspect-square rounded-[15px] lg:rounded-[30px] overflow-hidden shadow-2xl border-4 border-white/5">
            <img src={data.heroImg} className="w-full h-full object-cover" alt={data.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* --- FEATURES & PROCESS --- */}
      <div className={`py-10 lg:py-24 ${darkMode ? 'bg-slate-900/30' : 'bg-purple-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          
          {/* Services Checklist */}
          <div className="space-y-4 lg:space-y-8">
            <h3 className="text-2xl font-semibold uppercase tracking-tight">What We Handle</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className={`p-4 rounded-[10px] border flex items-start gap-2 lg:gap-4 transition-all hover:bg-white/5 ${darkMode ? 'border-white/5 bg-slate-900/50' : 'border-purple-100 bg-white'}`}>
                  <CheckCircle2 className="text-teal-500 shrink-0" />
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="space-y-4 lg:space-y-8">
            <h3 className="text-2xl font-semibold uppercase tracking-tight">Our Process</h3>
            <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-amber-500/20">
              {data.process.map((step, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-semibold text-xs z-10">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm text-purple-600 mb-1">{step}</h4>
                  <p className="text-xs opacity-60">Professional coordination and vendor screening for seamless flow.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     {/* --- GALLERY TEASER --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-24 text-center">
        <h3 className="text-3xl font-semibold uppercase mb-12 tracking-tighter">
          Event <span className="text-amber-500">Showcase</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {images.map((img, i) => (
            
            <div key={i} className="aspect-square rounded-[20px] overflow-hidden group relative">
              
              <img 
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Gallery"
              />

              <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ImageIcon className="text-white" />
              </div>

            </div>
          ))}
          
        </div>
      </div>

      {/* --- ENQUIRY CTA --- */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6 pb-24">
        <div className={`px-4 py-8 lg:p-12 rounded-[20px] border text-center space-y-8 ${darkMode ? 'bg-gradient-to-br from-purple-900/20 to-slate-900 border-white/5' : 'bg-purple-900 text-white'}`}>
          <Sparkles className="mx-auto text-amber-500" size={48} />
          <h2 className="text-3xl lg:text-4xl font-semibold uppercase tracking-tighter">Ready to plan your <br/> {data.title}?</h2>
          <p className="opacity-70 max-w-lg mx-auto italic">"We are in the business of creating memories that people talk about for years."</p>
          <button 
          onClick={() => navigate("/book-now")}
          className="bg-amber-500 hover:bg-white text-black px-12 py-5 rounded-xl font-semibold uppercase tracking-widest text-xs transition-all active:scale-95 shadow-xl">
            Send Enquiry Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCategoryDetails;