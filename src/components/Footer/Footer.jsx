import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/Janyson29" target="_blank">
            <img src={Github} alt="Texto alternativo da imagem" />
          </a>
          <a href="https://www.instagram.com/janyson29/" target='_blank'>
            <img src={Instagram} alt="Texto alternativo da imagem" />
          </a>
          <a href="https://www.linkedin.com/in/janysonsilva/" target="_blank">
            <img src={LinkedIn} alt="Texto alternativo da imagem" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer