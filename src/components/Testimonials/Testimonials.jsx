import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  X,
  Star,
  Quote,
  Maximize2,
  Heart,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import { FaPlay, FaGoogle, FaWhatsapp } from "react-icons/fa6";
import HomeBg from "../../assets/homeBg.mp4"; // Using your existing video asset

const Testimonials = () => {
  const { darkMode } = useOutletContext();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const writtenReviews = [
    {
      id: 1,
      name: "Ananya Sharma",
      trip: "Spiti Expedition",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      text: "As a solo female traveler, Zindagi Yatra made me feel like I was traveling with family. The safety was top-notch!",
      date: "Oct 2025",
    },
    {
      id: 2,
      name: "Vikram & Sneha",
      trip: "Kerala Honeymoon",
      photo: "https://images.unsplash.com/photo-1623091423323-548944521013",
      rating: 5,
      text: "Our honeymoon was magical. Every detail, from the houseboat to the dinners, was perfectly executed.",
      date: "Feb 2026",
    },
    {
      id: 3,
      name: "Priya Das",
      trip: "Corporate Retreat",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      rating: 5,
      text: "Planned our 50-person retreat. Seamless logistics and high energy. The team-building was perfect.",
      date: "Dec 2025",
    },
    {
      id: 4,
      name: "Meera Iyer",
      trip: "Women's Retreat",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      rating: 5,
      text: "'Sirf Apni, Apne Liye' is an emotion. I came back a different person. Highly recommend to all women!",
      date: "Jan 2026",
    },
    {
      id: 5,
      name: "Rahul Verma",
      trip: "Ladakh Bike Trip",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "Flawless execution at high altitudes. The bikes and stays were premium.",
      date: "March 2026",
    },
  ];

  return (
    <div
      className={`pt-24 transition-colors duration-500 overflow-hidden ${darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 5)); }
        }
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
        }
 
      `}</style>

      {/* --- HERO HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-10 lg:mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-[0.8]">
          Voice of the{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: `1.5px ${darkMode ? "white" : "#4c1d95"}`,
            }}
          >
            Travelers
          </span>
        </h1>
      </div>

      {/* --- INFINITE WRITTEN REVIEWS SLIDER --- */}
      <div className="mb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-6 lg:mb-12 text-center relative">
          {/* Main Heading with Animated Lines */}
          <div className="flex items-center justify-center gap-4 lg:gap-6">
            <div
              className="h-[2px] w-0 bg-gradient-to-r from-transparent to-amber-500 animate-[line-grow_1.5s_ease-out_forwards]"
              style={{ animation: "line-grow 1s ease-out forwards" }}
            />

            <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight italic group">
              What They{" "}
              <span className="text-amber-600 relative">
                Say
                {/* Subtle underline flourish */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-amber-500/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
            </h2>

            <div
              className="h-[2px] w-0 bg-gradient-to-l from-transparent to-amber-500"
              style={{ animation: "line-grow 1s ease-out forwards" }}
            />
          </div>

          {/* CSS for the line growth */}
          <style>{`
            @keyframes line-grow {
              from { width: 0; opacity: 0; }
              to { width: 64px; opacity: 0.5; }
            }
          `}</style>
        </div>

        <div className="relative flex overflow-hidden">
          <div
            className="flex animate-infinite-scroll gap-4 lg:gap-6 py-6 lg:py-10"
            onTouchStart={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {/* Triple the array to ensure seamless infinite loop on all screens */}
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                {writtenReviews.map((review) => (
                  <div
                    key={review.id}
                    className={`w-[300px] lg:w-[350px] flex flex-col justify-between p-4 rounded-[10px] lg:rounded-[20px] border flex-shrink-0 transition-all duration-500 hover:-translate-y-4 ${
                      darkMode
                        ? "bg-slate-900 border-white/5"
                        : "bg-white border-purple-100 shadow-xl"
                    }`}
                  >
                    <div>
                      <Quote
                        className="text-amber-500/20 mb-2 lg:mb-4"
                        size={40}
                      />
                      <div className="flex gap-1 mb-2 lg:mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            fill="#f59e0b"
                            className="text-amber-500"
                          />
                        ))}
                      </div>
                      <p className="text-sm font-medium leading-relaxed opacity-80 mb-4 lg:mb-8 italic">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-3 lg:pt-6 border-t border-black/5">
                      <img
                        src={review.photo}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-500"
                        alt=""
                      />
                      <div>
                        <h5 className="font-semibold uppercase text-xs tracking-tighter">
                          {review.name}
                        </h5>
                        <p className="text-[9px] font-semibold uppercase text-amber-600 tracking-widest">
                          {review.trip}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
