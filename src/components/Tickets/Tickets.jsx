import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Train,
  Plane,
  Bus,
  CheckCircle,
  ShieldCheck,
  FileText,
  Globe,
  ArrowRight,
  Ticket,
  Zap,
} from "lucide-react";

const Tickets = () => {
  const { darkMode } = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    ticketVolume: "",
    travelMode: "",
    travelDate: "",
    requirements: "",
  });

  const licensing = [
    {
      title: "IRCTC Agent",
      desc: "Authorized agent for seamless train bookings across India.",
      icon: <Train size={20} className="text-amber-500" />,
    },
    {
      title: "IATA Partner",
      desc: "Professional management for airline tickets and corporate air travel.",
      icon: <Plane size={20} className="text-teal-400" />,
    },
    {
      title: "GST Registered",
      desc: "Fully compliant for B2B corporate billing and B2C transactions.",
      icon: <FileText size={20} className="text-purple-400" />,
    },
    {
      title: "GDS Integrated",
      desc: "Real-time API access for live ticket availability and booking.",
      icon: <Globe size={20} className="text-blue-400" />,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwGjY9J0P_ON9kSdSzERp-up2lm15OicM5dvy3pBh5p6zOoebxGpbnhlCx9TLHLaKgX/exec",
      {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          type: "TicketBookings",
        }),
      }
    );

    const data = await res.json();

    if (data.status === "success") {
      alert("Booking request sent ✅");

      setFormData({
        companyName: "",
        ticketVolume: "",
        travelMode: "",
        travelDate: "",
        requirements: "",
      });

      setIsLoading(false);
    } else {
      alert("Submission failed ❌");
      setIsLoading(false);
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong ❌");
    setIsLoading(false);
  }
};






  

  //scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);


  return (
    <div
      className={`transition-colors duration-500 min-h-screen ${darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}
    >
      <div className="pb-0">
        <div className=" grid lg:grid-cols-12 gap-0 overflow-hidden">
          {/* LEFT SIDE: CONTENT (Purple Background) */}
          <div
            className={`lg:col-span-6 px-4 py-6 md:p-16 space-y-4 lg:space-y-8 relative overflow-hidden ${darkMode ? "bg-purple-900/20" : "bg-purple-900 text-white"}`}
          >
            {/* Background Decoration */}
            <Zap
              className="absolute -right-10 -top-10 opacity-10 rotate-12"
              size={300}
            />

            <div className="relative z-10 space-y-2 lg:space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tighter leading-tight italic">
                What is <br />
                <span className="text-amber-500">Bulk Ticketing?</span>
              </h2>
              <p className="text-base lg:text-lg opacity-80 leading-relaxed font-medium">
                When you organize group trips, school excursions, or corporate
                events, you need large quantities of tickets simultaneously. We
                specialize in securing these volumes for train, bus, and flights
                at negotiated rates.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4 relative z-10">
              {licensing.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 lg:p-6 rounded-[10px] border transition-all group ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-white/10 border-white/10 backdrop-blur-md hover:bg-white/20"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold uppercase tracking-widest text-[11px] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] opacity-70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Banner Inside Left Panel */}
            <div
              className={`p-6 border-t border-white/10 flex flex-col gap-4 relative z-10`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-amber-500" size={18} />{" "}
                <span className="text-[9px] font-semibold uppercase tracking-widest">
                  IRCTC Registered Agent
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-teal-400" size={18} />{" "}
                <span className="text-[9px] font-semibold uppercase tracking-widest">
                  IATA Travel Compliance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-amber-500" size={18} />{" "}
                <span className="text-[9px] font-semibold uppercase tracking-widest">
                  B2B GST Compliant Billing
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: WHITE FORM PANEL */}
          <div
            className={`lg:col-span-6 px-4 py-6 md:p-16 flex ${darkMode ? "bg-slate-900" : "bg-white"}`}
          >
            <div className="w-full max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-6 lg:mb-10">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${darkMode ? "bg-purple-900/40 text-purple-400" : "bg-purple-900 text-white"}`}
                >
                  <Ticket size={28} />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-semibold uppercase tracking-tight ${darkMode ? "text-white" : "text-purple-900"}`}
                  >
                    Request Quote
                  </h3>
                  <p className="text-[10px] font-semibold uppercase opacity-50 tracking-widest">
                    For Groups of 10 or more
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50">
                    Company / Group Name
                  </p>
                  <input
                    name="companyName"
                    onChange={handleChange}
                    type="text"
                    className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? "bg-white/5 border-white/10 text-white" : "bg-purple-50 border-transparent focus:bg-white focus:border-purple-600 focus:shadow-xl"}`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50">
                      Ticket Volume
                    </p>
                    <input
                      name="ticketVolume"
                      onChange={handleChange}
                      type="number"
                      placeholder="10+"
                      className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? "bg-white/5 border-white/10 text-white" : "bg-purple-50 border-transparent focus:bg-white focus:border-purple-600"}`}
                    />
                  </div>
                <div className="space-y-1">
                    <label
                      htmlFor="travelMode"
                      className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50"
                    >
                      Travel Mode
                    </label>

                    <select
                      id="travelMode" 
                      name="travelMode"
                      onChange={handleChange}
                    className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${
                    darkMode
                      ? "bg-slate-800 border-white/10 text-white"
                      : "bg-purple-50 border-transparent focus:border-purple-600"
                  }`}
                    >
                      <option value="">Select Travel Mode</option> 
                      <option value="Train">Train</option>
                      <option value="Flight">Flight</option>
                      <option value="Bus">Bus</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50">
                    Preferred Travel Date
                  </p>
                  <input
                    name="travelDate"
                    onChange={handleChange}
                    type="date"
                    className={`w-full p-4 rounded-lg md:rounded-xl outline-none border transition-all font-normal ${darkMode ? "bg-white/5 border-white/10 text-white" : "bg-purple-50 border-transparent focus:bg-white"}`}
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-widest ml-2 opacity-50">
                    Specific Requirements
                  </p>
                  <textarea
                    name="requirements"
                    onChange={handleChange}
                    placeholder="e.g. Bulk meal requests, specific airline preference..."
                    className={`w-full p-5 h-28 rounded-xl outline-none border transition-all font-normal ${darkMode ? "bg-white/5 border-white/10 text-white" : "bg-purple-50 border-transparent focus:border-purple-600"}`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`mb-10 lg:mb-0 w-full p-6 rounded-[10px] font-semibold uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/20`}
                >
                  {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Requesting...
                      </>
                    ) : (
                      <>
                       Request Booking <ArrowRight size={16} />
                      </>
                    )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
