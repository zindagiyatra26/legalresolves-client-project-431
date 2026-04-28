import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Phone, MapPin, Mail, MessageSquare, 
  Send, ShieldCheck, Users, Briefcase, Zap, 
  Compass, Heart, Award, Calendar, Sparkles
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaPinterestP } from 'react-icons/fa6';

const BookNow = () => {
  const { darkMode } = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    callback: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbxyarTbdQutRpWNd2Kmh5rCHKkWH8f-wxAGzXUlptjMXccf9YY4IAss0PlIjNJf3-0DHg/exec", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          type: "ContactForm"
        })
      });
  
      const data = await res.json();
  
      if (data.status === "success") {
        alert("Form submitted successfully ✅");
        setFormData({
          name: "",
          phone: "",
          email: "",
          interest: "",
          callback: "",
          message: ""
        });

        setIsLoading(false);
      } else {
        setIsLoading(false);
      }

    } catch (err) {
      console.error(err);
      alert("Error submitting form ❌");
      setIsLoading(false);
    }
  };
  
    //scroll to top on mount
  useEffect(() => {
    window.scrollTo({top: 0,});
  }, []);


  return (
    <div className={`transition-colors duration-500 min-h-screen ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      
      <div className="">
        {/* Main Grid Container: items-start is CRITICAL for sticky to work */}
       <div className="grid lg:grid-cols-12 gap-0 overflow-hidden items-stretch min-h-screen">
          
          {/* --- LEFT SIDE: INFO PANEL (Solid Background - Long Content) --- */}
          <div className={`h-full lg:col-span-6 px-4 py-6 md:p-16 relative overflow-hidden flex flex-col justify-between text-white ${
            darkMode ? 'bg-purple-900/20 backdrop-blur-md' : 'bg-purple-900'
          }`}>
            <Compass className="absolute -right-20 -top-20 opacity-10 rotate-12" size={400} />
            
            <div className="relative z-10 space-y-4 lg:space-y-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                  <Sparkles size={14} className="text-amber-400" />
                  <span className="text-amber-400 font-semibold uppercase text-[10px] tracking-widest">Reservation Center</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-[0.85]">
                  Secure Your <br/>
                  <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Next Memory</span>
                </h1>
                <p className="text-lg opacity-70 font-normal italic max-w-lg leading-relaxed">
                  "Chalo Kuch Plan Karte Hain" — Every great journey begins with a single conversation. Whether it's a solo escape or a grand celebration, we are here.
                </p>
              </div>

              {/* Info Cards Stack */}
              <div className="space-y-3 md:space-y-6">
              
                {/* PHONE */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-500">
                      Call / WhatsApp
                    </p>
                    <a 
                      href="tel:+917977421612"
                      className="font-medium text-lg hover:text-amber-500 transition-colors"
                    >
                      +91 7977421612
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-500">
                      Email Address
                    </p>
                    <a 
                      href="mailto:Zindagiyatra26@gmail.com"
                      className="font-medium text-lg hover:text-amber-500 transition-colors"
                    >
                      Zindagiyatra26@gmail.com
                    </a>
                  </div>
                </div>

                {/* LOCATION (with intent) */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-500">
                      Office Address
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=DIV+OF+EVERSHINE+BUILDING+Bassein+Waliv+Police+Station+Thane+401201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm hover:text-amber-500 transition-colors"
                    >
                      DIV OF EVERSHINE BUIL, P.L BLDG.NO.ECA 142, Bassein, Waliv Police Station, Bassein, Thane- 401201, Maharashtra, India
                    </a>
                  </div>
                </div>

              </div>

              {/* Brand/Trust Box */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold uppercase tracking-tighter italic">
                  One Company.<br/><span className="text-amber-500">One Team.</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                 <a 
                    href="https://wa.me/917977421612" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="max-w-max flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold uppercase text-[10px] tracking-widest transition-all shadow-xl shadow-green-500/20 active:scale-95"
                  >
                    <FaWhatsapp size={18} /> Direct WhatsApp Chat
                  </a>
                  {/* <div className="flex items-center gap-4">
                     {[<FaInstagram />, <FaFacebook />, <FaYoutube />, <FaPinterestP />].map((icon, i) => (
                       <a key={i} href="#" className="text-white/60 hover:text-amber-500 transition-colors text-xl">{icon}</a>
                     ))}
                  </div> */}

                   <div className="flex items-center gap-4">
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
              </div>

              {/* Reassurance Badges */}
              <div className="flex justify-between items-center pt-8 border-t border-white/10">
                 {[
                   { icon: <ShieldCheck size={18}/>, label: "Secure" },
                   { icon: <Users size={18}/>, label: "Women Led" },
                   { icon: <Zap size={18}/>, label: "Fast" }
                 ].map((badge, i) => (
                   <div key={i} className="flex items-center gap-2 opacity-50">
                      <span className="text-amber-400">{badge.icon}</span>
                      <span className="text-[9px] font-semibold uppercase tracking-widest">{badge.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM PANEL (Sticky) --- */}
          <div className={`h-full lg:col-span-6 px-4 py-6 md:p-16 lg:sticky lg:top-28 transition-all duration-300 ${
            darkMode ? 'bg-slate-900' : 'bg-white'
          }`}>
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-2xl bg-purple-600/10 flex items-center justify-center">
                  <MessageSquare className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-purple-950'}`}>
                    Start <span className="text-amber-500">Enquiry</span>
                  </h3>
                  <p className="text-[10px] font-semibold opacity-40 uppercase tracking-widest mt-1">Response within 24 Hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className={`text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50 block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Full Name</label>
                  <input name="name" onChange={handleChange} type="text" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-200'}`} />
                </div>
                
                <div className="space-y-1.5">
                  <label className={`text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50 block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Mobile Number</label>
                  <input name="phone" onChange={handleChange} type="tel" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-200'}`} />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className={`text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50 block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email Address</label>
                  <input name="email" onChange={handleChange} type="email" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-200'}`} />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50 block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Interested In</label>
                  <select name="interest" onChange={handleChange} className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal cursor-pointer ${darkMode ? 'bg-slate-800 border-white/10 text-white' : 'bg-purple-50 border-transparent'}`}>
                    <option>Travel Package</option>
                    <option>Event Management</option>
                    <option>Both Services</option>
                    <option>Corporate Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50 block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Callback Time</label>
                  <input name="callback" onChange={handleChange} type="text" placeholder="e.g. Afternoon" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white'}`} />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className={`text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50 block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Message</label>
                  <textarea name="message" onChange={handleChange} className={`w-full p-6 h-32 rounded-xl outline-none border transition-all font-normal resize-none ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white'}`}></textarea>
                </div>

                <button 
                 type="submit"
                 disabled={isLoading}
                 className="md:col-span-2 bg-purple-900 text-white p-6 rounded-[10px] font-semibold uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 hover:bg-purple-800">
                  {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                       Submit Reservation <Send size={18} />
                      </>
                    )}
                </button>
              </form>

              {/* Corporate Footer Link */}
              <div className={`mb-10 lg:mb-0 mt-8 p-6 rounded-xl border flex items-center justify-between group cursor-pointer ${
                darkMode ? 'bg-purple-600/10 border-purple-500/20' : 'bg-purple-50 border-purple-100 hover:bg-purple-100'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500 p-2.5 rounded-xl text-black shadow-lg shadow-amber-500/30">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-purple-950'}`}>Corporate Inquiry</p>
                    <p className="text-[10px] opacity-60 font-semibold uppercase tracking-tighter italic">Group discounts apply</p>
                  </div>
                </div>
                <Zap className="text-amber-500 animate-pulse" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;