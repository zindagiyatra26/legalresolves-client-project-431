import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from '../Layout';
import AllPages from './components/AllPages/AllPages';
import { useTheme } from './components/useTheme';
import PackageDetails from './components/PackageDetails/PackageDetails';
import EventCategoryDetails from './components/EventCategoryDetails/EventCategoryDetails';
import Tickets from './components/Tickets/Tickets';
import BlogDetails from './components/Blog/BlogDetails';
import BookNow from './components/BookNow/BookNow';
import PrivacyPolicy from './components/Policies/PrivacyPolicy';
import TermsAndConditions from './components/Policies/TermsAndConditions';

function App() {
  const { darkMode, toggleTheme } = useTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      // Pass the theme values to Layout
      <Route path="/" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme} />}>
        <Route index element={<AllPages />} />
        <Route path="travel/:slug" element={<PackageDetails />} />
        <Route path="events/:category" element={<EventCategoryDetails />} />
        <Route path='ticket' element={<Tickets/>} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="book-now" element={<BookNow/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="terms-and-conditions" element={<TermsAndConditions/>} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;








// import { useState, useEffect } from 'react'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from '../Layout'
// import AllPages from './components/AllPages/AllPages'

// function App() {
//   // const [darkMode, setDarkMode] = useState(() => {
//   //   const saved = localStorage.getItem('theme');
//   //   return saved ? saved === 'dark' : true; 
//   // });

//   // useEffect(() => {
//   //   const root = window.document.documentElement;
//   //   const theme = darkMode ? 'dark' : 'light';
    
//   //   // This sets the attribute that our CSS listens to
//   //   root.setAttribute('data-theme', theme);
//   //   localStorage.setItem('theme', theme);
//   // }, [darkMode]);


//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark' || true; // Default dark
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark'); // This activates the CSS overrides
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
//         <Route index element={<AllPages />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// }

// export default App;








// import { useState, useEffect } from 'react'
// import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Layout from '../Layout'
// import AllPages from './components/AllPages/AllPages'

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   // Apply theme to the body
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
//         <Route index element={<AllPages />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// }

// export default App;









// import { useState } from 'react'
// import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// import Layout from '../Layout'
// import AllPages from './components/AllPages/AllPages'

// function App() {

//     const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout />}>
//         <Route index element={<AllPages/>} />
//       </Route>
//     )
//   );

//   return (
//      <RouterProvider router={router} />
//   )
// }

// export default App

