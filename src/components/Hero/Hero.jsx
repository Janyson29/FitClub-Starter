import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'; 
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<= 768 ? true: false;

  return (
    <div className="hero" id='home'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile? '165px': '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
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
            <span>
              <NumberCounter end={140} start={100} delay= '4' preFix='+'/>
            </span>
            <span>TREINADORES ESPECIALIZADOS</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay= '4' preFix='+'/>
            </span>
            <span>MEMBROS</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={30} delay= '4' preFix='+'/>
            </span>
            <span>PROGRAMAS DE FITNESS</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Iniciar</buttons>
          <buttons className="btn">Saber mais</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Entrar</button>

        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Frequência cardíaca</span><span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition} 
        src={hero_image_back} alt="" className='hero-image-back' />

        {/* calories */}
        <motion.div
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
         className="calories">
          <img src={Calories} alt=""/>
          <div>
            <span>Calorias queimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero