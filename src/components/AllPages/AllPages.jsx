import React from 'react'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import Travels from '../Travels/Travels'
import Events from '../Events/Events'
import ContactUs from '../ContactUs/ContactUs'
import { MessageCircle } from 'lucide-react'
import Testimonials from '../Testimonials/Testimonials'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'


const AllPages = () => {
  return (
    <div>
      <Home />
      <AboutUs/>
      <Travels/>
      <Events/>
       <Testimonials/>
      <ContactUs/>
     
      <WhatsAppButton />
    </div>
  )
}

export default AllPages