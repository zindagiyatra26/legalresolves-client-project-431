import { Outlet } from "react-router-dom";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";




const Layout = ({ darkMode, toggleTheme }) => {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        {/* We pass darkMode to the child components via Outlet Context */}
        <Outlet context={{ darkMode }} /> 
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};





// const Layout = ({ darkMode, toggleTheme }) => {
//   return (
//     /* We manually toggle between 'bg-white' and 'bg-slate-900'.
//        This works even without 'darkMode: class' in the config.
//     */
//     <div className={`min-h-screen transition-colors duration-300 ${
//       darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
//     }`}>
//       {/* Ensure you pass toggleTheme to the Header for the button to work */}
//       <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      
//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// };





// const Layout = ({ darkMode, setDarkMode }) => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
//       <Header darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };


// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

export default Layout;
