import React from 'react'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import Travels from '../Travels/Travels'
import Events from '../Events/Events'
import ContactUs from '../ContactUs/ContactUs'
import { MessageCircle } from 'lucide-react'
import Tickets from '../Tickets/Tickets'
import Gallery from '../Gallery/Gallery'
import Blog from '../Blog/Blog'
import Testimonials from '../Testimonials/Testimonials'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'


const AllPages = () => {
  return (
    <div>
      <Home />
      <AboutUs/>
      <Travels/>
      <Events/>
      {/* <Tickets/> */}
      {/* <Gallery />
      <Blog /> */}
       <Testimonials/>
      <ContactUs/>
     
      <WhatsAppButton/>
    </div>
  )
}

export default AllPages