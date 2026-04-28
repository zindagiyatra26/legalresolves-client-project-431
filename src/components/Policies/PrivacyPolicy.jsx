import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


const PrivacyPolicy = () => {
  const { darkMode } = useOutletContext();
    const navigate = useNavigate();

        //scroll to top on mount
      useEffect(() => {
        window.scrollTo({top: 0,});
      }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-700'}`}>
      <div className={`relative max-w-4xl mx-auto px-4 py-12 md:p-16 shadow-sm border transition-colors duration-500 ${darkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-purple-100'}`}>

        {/* back button */}
      <button 
    onClick={() =>  navigate(-1)}
    className={`absolute top-2 left-2  md:top-8 md:left-8 flex items-center gap-2  px-4 py-2 rounded-full border font-bold uppercase text-[10px] tracking-widest transition-all duration-300 ${
      darkMode 
        ? 'bg-slate-900 border-white/10 text-purple-400 hover:border-purple-500' 
        : 'bg-white border-purple-100 text-purple-900 hover:shadow-lg'
    }`}
  >
    <ArrowLeft className='md:h-4 md:w-4' /> 
    <span className='hidden md:block'>Back</span>
      </button>
        
        {/* Centered, Underlined, and Bold Header */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold uppercase tracking-widest inline-block border-b-4 border-amber-500 pb-2 ${darkMode ? 'text-white' : 'text-purple-950'}`}>
            Privacy Policy
          </h1>
          <p className="text-sm mt-6 italic font-medium opacity-60">Effective Date: April 2026</p>
        </div>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Introduction</h2>
            <p>
              Zindagi Yatra and Celebration is a women-founded travel and events company dedicated to creating beautiful memories. We value your privacy and are committed to protecting the personal information you share with us through our official website.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Information Collection</h2>
            <p className="mb-4">We collect information that helps us plan your perfect journey or celebration. This includes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personal identifiers such as your name, phone number, and email address.</li>
              <li>Details regarding your travel or event interests, such as preferred destinations, dates, and budget range.</li>
              <li>Number of participants for group tours or event guest counts.</li>
              <li>Information provided via our WhatsApp direct chat integration.</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>How We Use Your Data</h2>
            <p>
              Your data is used solely to provide a personalized experience. We use it to contact you for consultations, manage bulk ticketing for group travel through authorized partners like IRCTC and IATA, and track website performance to improve our user experience.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Security & SSL</h2>
            <p>
              We prioritize your safety. Our website uses SSL Certification (HTTPS) to ensure that all data transmitted between your browser and our server is encrypted. We do not process or store online payments at this stage; all financial transactions are handled offline for maximum security.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Contact For Privacy</h2>
            <p>
              If you have any questions regarding your data, please contact our team at Zindagiyatra26@gmail.com
.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;