import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  const { darkMode } = useOutletContext();
  const navigate = useNavigate();

      //scroll to top on mount
    useEffect(() => {
      window.scrollTo({top: 0,});
    }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-300' : 'bg-purple-50 text-slate-700'}`}>
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
            Terms and Conditions
          </h1>
          <p className="text-sm mt-6 italic font-medium opacity-60">Version 1.0 | April 2026</p>
        </div>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Service Scope</h2>
            <p>
              Zindagi Yatra and Celebration provides Travel & Tourism and Events Management services exclusively within India. We do not operate international tours at this stage. Our services range from budget-friendly packages starting at ₹5,000 to luxury experiences up to ₹5,00,000.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Booking & Enquiry Policy</h2>
            <p className="mb-4">Please note that our website is currently enquiry-based:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Submitting an enquiry form does not constitute a confirmed booking.</li>
              <li>Bookings are only finalized after a consultation call and receipt of payment through offline channels.</li>
              <li>Bulk ticketing for groups of 10 or more is subject to availability and the terms of our authorized ticketing partners.</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Women-Only Trips</h2>
            <p>
              Our flagship Women-Only trips are designed to provide safe, empowering spaces. We maintain strict safety protocols and vetted accommodations. To maintain the integrity of these groups, we reserve the right to verify the identity of all participants.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Trekking & Safety</h2>
            <p>
              For trekking expeditions, participants must meet the fitness prerequisites and follow the instructions of our certified guides. Safety equipment and first aid are provided as part of the package, but individual health insurance is recommended.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-purple-400' : 'text-purple-900'}`}>Cancellations</h2>
            <p>
              Cancellation and refund policies are specific to each travel package or event contract. These details will be clearly shared with you by our team during the personalized planning phase before any payment is made.
            </p>
          </section>

          <div className="pt-10 border-t border-white/10 text-center">
            <p className="text-xs font-bold text-amber-500/50 uppercase tracking-[0.3em]">
              Hum Hain Memories Bananewali Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;