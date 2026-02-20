import { useState } from 'react'

import './NavBar.css'

function NavBar() {
 

  return (
   <nav className='navbar'>
    <div className='logo'>⚡ FitPro Trainer</div>
      <ul className='nav-links'>
        <li><a href="#home">Início</a></li>
        <li><a href="#services">Serviço</a></li>
        <li><a href="#testimonials">Resultado</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <a href="#contact" className='cta-btn'>Começar agora</a>
    
   </nav>
  )
}

export default NavBar
