import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './assets/components/NavBar'
import Hero from './assets/components/Hero'
import Services from './assets/components/Services'
import Testimonials from './assets/components/Testimonials'
import Social from './assets/components/Social'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <Services />
    <Testimonials />
    <Social />
    <Contact />
    <Footer />
  </StrictMode>,
)
