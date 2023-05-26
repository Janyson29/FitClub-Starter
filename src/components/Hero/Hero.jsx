import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>O MELHOR CLUBE FITNESS DA CIDADE</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div><span className='stroke-text' >DÊ FORMA </span><span>AO SEU</span></div>
          <div>
            <span>CORPO IDEAL</span>
          </div>
          <div><span>Aqui, vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo</span></div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 43</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
      </div>
      <div className="right-h">Right side</div>
    </div>
  )
}

export default Hero