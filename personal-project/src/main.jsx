import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './assets/components/NavBar'
import Hero from './assets/components/Hero'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
  </StrictMode>,
)
