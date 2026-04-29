import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from '../Layout';
import AllPages from './components/AllPages/AllPages';
import { useTheme } from './components/useTheme';
import PackageDetails from './components/PackageDetails/PackageDetails';
import EventCategoryDetails from './components/EventCategoryDetails/EventCategoryDetails';
import Tickets from './components/Tickets/Tickets';
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
        <Route path="book-now" element={<BookNow/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="terms-and-conditions" element={<TermsAndConditions/>} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;