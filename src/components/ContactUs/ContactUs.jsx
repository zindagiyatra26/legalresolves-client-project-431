import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Phone, MapPin, Mail, Clock, MessageSquare, 
  Send, ShieldCheck, Users, Briefcase, Zap, 
   Compass,
   Heart,
   Award
} from 'lucide-react';
import { FaWhatsapp, FaPinterestP } from 'react-icons/fa6';
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
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
    } else{
      setIsLoading(false);
    }
    
  } catch (err) {
    console.error(err);
    alert("Error submitting form ❌");
    setIsLoading(false);
  }
};

  return (
    <div id="contact" className={`transition-colors duration-500 pt-24 min-h-screen ${
      darkMode ? 'bg-slate-950' : 'bg-purple-900'
    }`}>
      
      <div className="max-w-7xl mx-auto px-0 lg:px-6 md:pb-24">
        {/* Header Section */}
        <div className="mb-10 lg:mb-16 text-center ">
          <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter text-white">
            Get In <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Touch</span>
          </h1>
          <p className="mt-2 lg:mt-4 text-purple-100/60 font-medium italic">"Chalo Kuch Plan Karte Hain"</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 overflow-hidden md:rounded-[30px] md:shadow-2xl md:border border-white/10">
          
          {/* LEFT SIDE: INFO PANEL */}
          <div className={`lg:col-span-5 px-4 py-6 md:p-16 relative overflow-hidden flex flex-col justify-between bg-white/5 backdrop-blur-lg border-r border-white/10 text-white`}>
            {/* Abstract Background Decor */}
            <Compass className="absolute -right-20 -top-20 opacity-10 rotate-12" size={400} />
            
            <div className="relative z-10 space-y-4 md:space-y-10">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tighter leading-none italic">
                  One Company. <br className='hidden md:block'/>
                  <span className="text-amber-500">One Team.</span>
                </h2>
                <p className="opacity-70 text-base md:text-lg leading-relaxed font-medium">
                  We are your warm, caring friends ready to plan the best experience of your life.
                </p>
              </div>

              

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

              {/* WhatsApp Quick Action */}
              <a 
                href="https://wa.me/917977421612" 
                target="_blank" 
                rel="noopener noreferrer"
                className="max-w-max flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold uppercase text-[10px] tracking-widest transition-all shadow-xl shadow-green-500/20 active:scale-95"
              >
                <FaWhatsapp size={18} /> Direct WhatsApp Chat
              </a>
            </div>

            {/* Socials & Hours */}
            <div className="relative z-10 pt-10 border-t border-white/10 flex items-center justify-between gap-6">
              {/* <div className="flex gap-5">
                {[<FaInstagram size={20}/>, <FaFacebook size={20}/>, <FaYoutube size={20}/>, <FaPinterestP size={20}/>].map((icon, i) => (
                  <a key={i} href="#" className="hover:text-amber-500 transition-colors">{icon}</a>
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
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-50">Business Hours</p>
                <p className="text-xs font-semibold uppercase text-amber-500">Mon-Sat: 10AM - 7PM</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM PANEL */}
          <div className={`lg:col-span-7 px-4 py-6 md:p-16 ${darkMode ? 'bg-slate-900/90' : 'bg-white'}`}>
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <MessageSquare className="text-purple-600" />
                </div>
                <h3 className={`text-2xl font-semibold uppercase tracking-tight ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                  Send an Enquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-40">Full Name</p>
                  <input name="name" onChange={handleChange} type="text" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-600'}`} />
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-40">Mobile Number</p>
                  <input name="phone" onChange={handleChange} type="tel" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-600'}`} />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-40">Email Address</p>
                  <input name="email" onChange={handleChange} type="email" className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-600'}`} />
                </div>

                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-40">Interested In</p>
                  <select name="interest" onChange={handleChange} className={`w-full p-4 rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-slate-800 border-white/10 text-white' : 'bg-purple-50 border-transparent'}`}>
                    <option>Travel Package</option>
                    <option>Event Management</option>
                    <option>Both Services</option>
                    <option>Corporate Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-40">Callback Time</p>
                  <input name="callback" onChange={handleChange} type="text" placeholder="e.g. 5 PM" className={`w-full p-4 rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-600'}`} />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-40">Your Message</p>
                  <textarea name="message" onChange={handleChange} className={`w-full p-4 h-32 rounded-xl outline-none border transition-all font-normal ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-600'}`}></textarea>
                </div>

                <button
                 type="submit"
                 disabled={isLoading}
                 className="md:col-span-2 bg-amber-600 hover:bg-purple-700 text-white p-5 rounded-xl font-semibold uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                 {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                    Submit Enquiry <Send size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* CORPORATE QUICK LINK */}
              <div className={`mb-20 md:mb-0 mt-6 md:mt-12 p-6 rounded-2xl border flex items-center justify-between group cursor-pointer ${darkMode ? 'bg-white/5 border-white/5 hover:border-purple-500/30' : 'bg-purple-50 border-purple-100 hover:bg-purple-100'}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500 p-2 rounded-lg text-black shadow-lg shadow-amber-500/20"><Briefcase size={18} /></div>
                  <p className={`text-xs font-semibold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-purple-900'}`}>Corporate Proposal Request</p>
                </div>
                <Zap className="text-amber-500 animate-pulse" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;







