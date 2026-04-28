import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ShieldCheck, Heart, Compass, Award, CheckCircle2, Users, Rocket, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const { darkMode } = useOutletContext();

  const values = [
    { icon: <ShieldCheck className="text-teal-500" size={32} />, label: "Safety First", desc: "Women-safe event spaces and secure travel." },
    { icon: <Heart className="text-rose-500" size={32} />, label: "Inclusivity", desc: "Meaningful experiences for every budget." },
    { icon: <Award className="text-amber-500" size={32} />, label: "Reliability", desc: "One team, one call. No vendor juggling." },
    { icon: <Compass className="text-purple-500" size={32} />, label: "Creativity", desc: "Tailored stories for every celebration." }
  ];

  const comparison = [
    { label: "Focus", others: "Only travel OR events", us: "Both travel & events under one roof" },
    { label: "Budget", others: "Only luxury or budget", us: "Full spectrum: ₹5k to ₹5,00,k" },
    { label: "Planning", others: "Generic packages", us: "Personalized & End-to-end" },
    { label: "Specialty", others: "No gender focus", us: "Dedicated women-only safe trips" }
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* --- HERO SECTION: THE NARRATIVE --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10 lg:mb-24">
          <div className="space-y-4 lg:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <span className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs px-3 py-1 border border-amber-500/30 rounded-full">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter mt-6 leading-none">
                One Company. <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: `1px ${darkMode ? 'white' : '#4c1d95'}` }}>
                  One Team. One Call.
                </span>
              </h2>
            </div>

            <p className={`text-lg lg:text-xl leading-relaxed italic border-l-4 border-amber-500 pl-4 lg:pl-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              "Imagine you want a college trip, a birthday for your mother, and a destination engagement. Normally, that's three headaches. Zindagi Yatra does all of this."
            </p>

            <p className={`text-base lg:text-lg opacity-80 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              We are a women-founded team dedicated to making travel and celebrations accessible to everyday Indians. Whether your budget is ₹5,000 or ₹5,00,000, we believe every journey deserves care.
            </p>

            <div className="flex gap-4">
               <div className="flex items-center gap-2 group cursor-default">
                  <div className="p-2 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                    <Users className="text-purple-500" />
                  </div>
                  <span className="font-semibold text-sm uppercase tracking-widest">Women Led</span>
               </div>
               <div className="flex items-center gap-2 group cursor-default">
                  <div className="p-2 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/20 transition-colors">
                    <Sparkles className="text-teal-500" />
                  </div>
                  <span className="font-semibold text-sm uppercase tracking-widest">Memories First</span>
               </div>
            </div>
          </div>

          {/* Abstract Image Grid (Matches Home Style) */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-0 right-0 w-2/3 h-[400px] rounded-[40px] overflow-hidden rotate-3 shadow-2xl border-4 border-white/10">
               <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Celebration" />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-[350px] rounded-[40px] overflow-hidden -rotate-6 shadow-2xl border-4 border-white/10 z-10">
               <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Travel" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* --- VISION & MISSION: MODERN CARDS --- */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8 mb-10 lg:mb-24">
          <div className={`p-4 lg:p-6 rounded-[10px] lg:rounded-[20px] border transition-all hover:-translate-y-2 ${darkMode ? 'bg-slate-900/50 border-white/5' : 'bg-purple-50 border-purple-100'}`}>
            <Rocket className="text-amber-500 mb-2 lg:mb-6 h-8 w-8 lg:h-10 lg:w-10" />
            <h3 className="text-2xl lg:text-3xl font-semibold uppercase mb-2 lg:mb-4 tracking-tight text-purple-600">Our Vision</h3>
            <p className="text-base lg:text-lg opacity-70 leading-relaxed">
              To become India's most trusted and beloved travel + events company. We want Zindagi Yatra to be the first name that comes to mind whenever someone thinks: <span className="text-amber-600 font-semibold">"Chalo kuch plan karte hain."</span>
            </p>
          </div>
          <div className={`p-4 lg:p-6 rounded-[10px] lg:rounded-[20px] border transition-all hover:-translate-y-2 ${darkMode ? 'bg-slate-900/50 border-white/5' : 'bg-teal-50 border-teal-100'}`}>
            <CheckCircle2 className="text-teal-500 mb-2 lg:mb-6 h-8 w-8 lg:h-10 lg:w-10" size={40} />
            <h3 className="text-2xl lg:text-3xl font-semibold uppercase mb-2 lg:mb-4 tracking-tight text-teal-600">Our Mission</h3>
            <ul className="space-y-2 lg:space-y-3 opacity-80">
              <li>• Empower women as travelers & creators.</li>
              <li>• Accessible pricing for all budget spectrums.</li>
              <li>• One-stop solution to end vendor juggling.</li>
              <li>• Business of creating lasting memories.</li>
            </ul>
          </div>
        </div>

{/* --- COMPARISON SECTION: THE "VERSUS" GRID --- */}
      <div className="mb-10 lg:mb-18">
        <div className="text-center mb-6 lg:mb-12">
          <span className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs">The Difference</span>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase mt-2 lg:mt-4 tracking-tighter">
            Why Choose <span className="text-purple-600">Zindagi Yatra?</span>
          </h2>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {comparison.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-[10px] border transition-all duration-500 hover:scale-[1.01] ${
                darkMode 
                ? 'bg-slate-900/40 border-white/5 hover:border-purple-500/30' 
                : 'bg-white border-purple-100 hover:shadow-2xl shadow-purple-900/5'
              }`}
            >
              <div className="flex flex-col h-full">

               
                {/* Feature Label */}
                <div className={`p-4 md:border-r ${darkMode ? 'border-white/5 bg-white/5' : 'border-purple-50 bg-purple-50/50'}`}>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{item.label}</h4>
                </div>

                {/* Others Side */}
                <div className=" p-4 opacity-50 relative">
                  <span className="text-[10px] uppercase font-semibold block mb-2 tracking-widest">Market Standard</span>
                  <p className="text-sm font-medium">{item.others}</p>
                </div>
              

                {/* Our Side - Highlighted */}
                <div className={`mt-auto p-4 relative overflow-hidden ${
                  darkMode ? 'bg-purple-600/10' : 'bg-purple-600/5'
                }`}>
                  {/* Background Decor */}
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Sparkles size={100} className="text-purple-500" />
                  </div>
                  
                  <span className="text-[10px] uppercase font-semibold block mb-2 tracking-widest text-purple-500">Our Promise</span>
                  <p className="text-lg font-normal tracking-tight leading-tight">{item.us}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* --- VALUES GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {values.map((v, i) => (
            <div key={i} className={`p-3 lg:p-4 rounded-[10px] border transition-all group ${darkMode ? 'bg-slate-900/40 border-white/5 hover:bg-slate-800' : 'bg-white border-purple-100 hover:shadow-xl'}`}>
              <div className="mb-2 lg:mb-4 transform group-hover:scale-110 transition-transform">{v.icon}</div>
              <h4 className="text-lg font-normal uppercase tracking-tight mb-2">{v.label}</h4>
              <p className="text-sm opacity-60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;





