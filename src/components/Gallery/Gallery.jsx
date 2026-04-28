import React, { useState, useRef, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Camera, Upload, X, Filter, Maximize2, Sparkles, 
  ShieldCheck, Heart, Zap, Trash2, Edit3 
} from 'lucide-react';
import { FaPlay } from "react-icons/fa6";
import HomeBg from '../../assets/homeBg.mp4'; 

const Gallery = () => {
  const { darkMode } = useOutletContext();
  const fileInputRef = useRef(null);
  
  const categories = ['All', 'Trips', 'Events', "Women's Trips", 'Trekking', 'Camping', 'Celebrations'];

  const initialPhotos = [
    { id: 1, category: 'Trips', url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da', title: 'Rajasthan Heritage', isStatic: true },
    { id: 2, category: "Women's Trips", url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce', title: 'Sisterhood Trek', isStatic: true },
    { id: 3, category: 'Events', url: 'https://images.unsplash.com/photo-1519741497674-611481863552', title: 'Beach Engagement', isStatic: true },
    { id: 4, category: 'Trekking', url: 'https://images.unsplash.com/photo-1551632811-561732d1e306', title: 'Himalayan Summit', isStatic: true },
    { id: 5, category: 'Camping', url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4', title: 'Rishikesh Nights', isStatic: true },
    { id: 6, category: 'Celebrations', url: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15', title: 'Milestone Birthday', isStatic: true },
  ];

  // --- PERSISTENCE LOGIC ---
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('zindagi_gallery');
    return saved ? JSON.parse(saved) : initialPhotos;
  });

  useEffect(() => {
    localStorage.setItem('zindagi_gallery', JSON.stringify(photos));
  }, [photos]);

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null); // Handles both Image and Video Lightbox
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState('Trips');
  const [editingId, setEditingId] = useState(null);

  // --- HANDLERS ---
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file || !newPhotoTitle) {
        alert("Please select an image and enter a title first!");
        return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto = {
        id: Date.now(),
        category: newPhotoCategory,
        url: reader.result, 
        title: newPhotoTitle,
        isStatic: false
      };
      setPhotos([newPhoto, ...photos]);
      setNewPhotoTitle('');
      if (fileInputRef.current) fileInputRef.current.value = "";
    };
    reader.readAsDataURL(file);
  };

  const deletePhoto = (id) => {
    if(window.confirm("Are you sure you want to delete this memory?")) {
      setPhotos(photos.filter(p => p.id !== id));
    }
  };

  const startEdit = (photo) => {
    setEditingId(photo.id);
    setNewPhotoTitle(photo.title);
    setNewPhotoCategory(photo.category);
    const formElement = document.getElementById('upload-form');
    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
  };

  const saveEdit = () => {
    setPhotos(photos.map(p => p.id === editingId ? { ...p, title: newPhotoTitle, category: newPhotoCategory } : p));
    setEditingId(null);
    setNewPhotoTitle('');
  };

  const filteredPhotos = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter);

  return (
    <div className={`pt-28 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      
      {/* --- HERO HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Section 6.5</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mt-4 leading-[0.8]">
          Visual <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${darkMode ? 'white' : '#4c1d95'}` }}>Memories</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-8 text-lg opacity-70 italic font-medium">
          "Capturing the soul of every journey and the joy of every celebration."
        </p>
      </div>

      {/* --- FILTER BAR --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 justify-center scrollbar-hide">
          <div className="flex items-center gap-2 mr-4 text-amber-600 font-black uppercase text-[10px] tracking-widest shrink-0">
            <Filter size={14} /> Filter Gallery:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeFilter === cat 
                ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20' 
                : darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-purple-100 hover:shadow-md shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PHOTO GRID (Parallel Sizes) --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative aspect-[4/3] rounded-[40px] overflow-hidden group border-4 border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 z-20">
                <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">{photo.category}</span>
                <h4 className="text-white font-black uppercase tracking-tight text-xl">{photo.title}</h4>
                
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setSelectedMedia({ ...photo, type: 'image' })} className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-amber-500 hover:text-black transition-colors">
                    <Maximize2 size={18}/>
                  </button>
                  {!photo.isStatic && (
                    <>
                      <button onClick={() => startEdit(photo)} className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-blue-500 transition-colors">
                        <Edit3 size={18}/>
                      </button>
                      <button onClick={() => deletePhoto(photo.id)} className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-red-500 transition-colors">
                        <Trash2 size={18}/>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- VIDEO REELS SECTION --- */}
      <div className={`py-24 border-t border-white/5 ${darkMode ? 'bg-purple-900/10' : 'bg-purple-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-amber-500 font-black uppercase tracking-widest text-xs">Pillar 2 / Pillar 1</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Cinematic Reels</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((v) => (
              <div 
                key={v} 
                onClick={() => setSelectedMedia({ type: 'video', url: HomeBg, title: `Reel #0${v}`, category: 'Cinematic' })}
                className="relative aspect-video rounded-[45px] overflow-hidden cursor-pointer group border-[6px] border-white/5 bg-slate-900 shadow-2xl"
              >
                <video className="w-full h-full object-cover opacity-60">
                   <source src={HomeBg} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-2xl group-hover:scale-125 transition-all duration-500">
                    <FaPlay size={20} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-8 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                   <p className="font-black uppercase tracking-widest text-[10px] text-white">Event Reel #0{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- UPLOAD / EDIT FORM SECTION --- */}
      <div id="upload-form" className="max-w-7xl mx-auto px-6 py-24">
        <div className={`p-10 md:p-16 rounded-[60px] border transition-all duration-500 shadow-2xl ${
          darkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-purple-100'
        }`}>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left p-8 rounded-[40px] bg-amber-500/10 relative overflow-hidden group">
              <Camera size={150} className="absolute -right-10 -bottom-10 text-amber-500 rotate-12 opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="bg-amber-500 text-black px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">Community</span>
                <h2 className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                  {editingId ? 'Edit Memory' : 'Add Your Moment'}
                </h2>
                <p className="opacity-70 font-medium">Capture. Upload. Persist. Your favorite memories stay here even after refresh.</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <input 
                type="text" 
                placeholder="Memory Title" 
                value={newPhotoTitle}
                onChange={(e) => setNewPhotoTitle(e.target.value)}
                className={`w-full p-5 rounded-3xl outline-none border transition-all font-bold ${darkMode ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30' : 'bg-purple-50 border-transparent focus:bg-white focus:border-purple-600'}`} 
              />
              <div className="grid md:grid-cols-2 gap-4">
                <select 
                  value={newPhotoCategory}
                  onChange={(e) => setNewPhotoCategory(e.target.value)}
                  className={`w-full p-5 rounded-3xl outline-none border transition-all font-bold ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-purple-50 border-transparent text-slate-500'}`}
                >
                  {categories.slice(1).map(cat => <option key={cat}>{cat}</option>)}
                </select>
                
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleUpload} className="hidden" />
                
                {!editingId ? (
                  <button 
                    onClick={() => fileInputRef.current.click()}
                    className="bg-purple-600 hover:bg-amber-500 text-white hover:text-black p-5 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                  >
                    Select & Submit <Upload size={16} />
                  </button>
                ) : (
                  <button 
                    onClick={saveEdit}
                    className="bg-green-600 text-white p-5 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95"
                  >
                    Save Changes
                  </button>
                )}
              </div>
              {editingId && <button onClick={() => {setEditingId(null); setNewPhotoTitle('')}} className="text-[10px] uppercase font-black tracking-widest opacity-50 hover:opacity-100 transition-opacity">Cancel Editing</button>}
            </div>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL (Image & Video) --- */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          <button onClick={() => setSelectedMedia(null)} className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors z-[110]">
            <X size={40} />
          </button>
          <div className="relative max-w-5xl w-full flex flex-col items-center justify-center space-y-8">
            {selectedMedia.type === 'video' ? (
              <video controls autoPlay className="max-h-[75vh] w-full rounded-[40px] shadow-2xl border-4 border-white/10 overflow-hidden">
                <source src={selectedMedia.url} type="video/mp4" />
              </video>
            ) : (
              <img src={selectedMedia.url} className="max-h-[75vh] object-contain rounded-[40px] shadow-2xl border-4 border-white/10 animate-in zoom-in-90 duration-500" alt={selectedMedia.title} />
            )}
            <div className="text-center text-white">
              <span className="text-amber-500 font-black uppercase tracking-widest text-[11px] px-4 py-1 border border-amber-500/30 rounded-full">{selectedMedia.category}</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-4 leading-none">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;







// import React, { useState } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import { 
//   Camera, Play, Upload, X, 
//   Filter, Image as ImageIcon, 
//   Maximize2, Sparkles, Heart 
// } from 'lucide-react';

// const Gallery = () => {
//   const { darkMode } = useOutletContext();
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [selectedImg, setSelectedImg] = useState(null);

//   const categories = ['All', 'Trips', 'Events', "Women's Trips", 'Trekking', 'Camping', 'Celebrations'];

//   // 6.5 Photo Gallery Data
//   const photos = [
//     { id: 1, category: 'Trips', url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da', title: 'Rajasthan Heritage' },
//     { id: 2, category: "Women's Trips", url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce', title: 'Sisterhood Trek' },
//     { id: 3, category: 'Events', url: 'https://images.unsplash.com/photo-1519741497674-611481863552', title: 'Beach Engagement' },
//     { id: 4, category: 'Trekking', url: 'https://images.unsplash.com/photo-1551632811-561732d1e306', title: 'Himalayan Summit' },
//     { id: 5, category: 'Camping', url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4', title: 'Rishikesh Nights' },
//     { id: 6, category: 'Celebrations', url: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15', title: 'Milestone Birthday' },
//     { id: 7, category: 'Trips', url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944', title: 'Kerala Waters' },
//     { id: 8, category: 'Events', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3', title: 'Sangeet Night' },
//   ];

//   const filteredPhotos = activeFilter === 'All' 
//     ? photos 
//     : photos.filter(p => p.category === activeFilter);

//   return (
//     <div className={`pt-28 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-purple-50 text-slate-900'}`}>
      
//       {/* --- HEADER --- */}
//       <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//         {/* <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Section 6.5</span> */}
//         <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-4 leading-[0.8]">
//           Visual <br/>
//           <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${darkMode ? 'white' : '#4c1d95'}` }}>Memories</span>
//         </h1>
//         <p className="max-w-2xl mx-auto mt-8 text-lg opacity-70 italic font-medium">
//           "Capturing the soul of every journey and the joy of every celebration."
//         </p>
//       </div>

//       {/* --- CATEGORY FILTER --- */}
//       <div className="max-w-7xl mx-auto px-6 mb-12">
//         <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center">
//           <div className="flex items-center gap-2 mr-4 text-amber-600 font-black uppercase text-[10px] tracking-widest shrink-0">
//             <Filter size={14} /> Filter Gallery:
//           </div>
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveFilter(cat)}
//               className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
//                 activeFilter === cat 
//                 ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20' 
//                 : darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-purple-100 hover:shadow-md shadow-sm'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* --- PHOTO GRID & LIGHTBOX --- */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
//           {filteredPhotos.map((photo) => (
//             <div 
//               key={photo.id} 
//               className="relative rounded-[32px] overflow-hidden group cursor-pointer border-4 border-white/5 shadow-xl"
//               onClick={() => setSelectedImg(photo)}
//             >
//               <img 
//                 src={photo.url} 
//                 alt={photo.title} 
//                 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
//                 loading="lazy" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
//                 <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">{photo.category}</p>
//                 <h4 className="text-white font-black uppercase tracking-tight text-xl">{photo.title}</h4>
//                 <Maximize2 className="text-white mt-4 opacity-50" size={20} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* --- VIDEO GALLERY --- */}
//       <div className={`py-24 ${darkMode ? 'bg-slate-900/40' : 'bg-purple-900 text-white'}`}>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//             <div className="space-y-2">
//               <span className="text-amber-500 font-black uppercase tracking-widest text-xs">Cinematic Clips</span>
//               <h2 className="text-4xl font-black uppercase tracking-tighter">Video Reels</h2>
//             </div>
//             <button className="flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-purple-900 transition-all">
//               View All Reels <Play size={14} fill="currentColor" />
//             </button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((v) => (
//               <div key={v} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl group border-2 border-white/10">
//                 <img src={`https://images.unsplash.com/photo-1492684223066-81342ee5ff30`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Video" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-2xl group-hover:scale-125 transition-transform">
//                     <Play fill="currentColor" />
//                   </div>
//                 </div>
//                 <div className="absolute bottom-6 left-8">
//                   <p className="font-black uppercase tracking-widest text-[10px]">Trip Reel #0{v}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- USER GENERATED CONTENT SECTION --- */}
//       <div className="max-w-5xl mx-auto px-6 py-24">
//         <div className={`p-12 md:p-16 rounded-[60px] border relative overflow-hidden text-center space-y-8 ${
//           darkMode ? 'bg-slate-900/50 border-white/5' : 'bg-white border-purple-100 shadow-2xl'
//         }`}>
//           <div className="absolute top-10 right-10 opacity-5 rotate-12 pointer-events-none">
//             <Camera size={200} />
//           </div>
          
//           <div className="relative z-10 space-y-6">
//             <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-3xl flex items-center justify-center mx-auto">
//               <Upload size={32} />
//             </div>
//             <h2 className="text-4xl font-black uppercase tracking-tighter">Be Part of Our Story</h2>
//             <p className="opacity-60 max-w-lg mx-auto font-medium">
//               Travelled with us? Hosted a celebration? Upload your favorite moments and get featured on our official gallery.
//             </p>
//             <button className="bg-purple-600 hover:bg-amber-600 text-white px-10 py-5 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 flex items-center gap-3 mx-auto">
//               Submit Your Photos <Sparkles size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- LIGHTBOX MODAL --- */}
//       {selectedImg && (
//         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
//           <button 
//             onClick={() => setSelectedImg(null)}
//             className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors"
//           >
//             <X size={40} />
//           </button>
//           <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
//             <img 
//               src={selectedImg.url} 
//               className="max-h-[80vh] object-contain rounded-2xl shadow-2xl border-2 border-white/10"
//               alt={selectedImg.title}
//             />
//             <div className="mt-8 text-center text-white">
//               <span className="text-amber-500 font-black uppercase tracking-widest text-xs">{selectedImg.category}</span>
//               <h3 className="text-3xl font-black uppercase tracking-tighter mt-2">{selectedImg.title}</h3>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;