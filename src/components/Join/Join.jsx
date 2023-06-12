import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsb9voc', 'template_3gfbj2x', form.current, 'QxlCiwmOM-30TpTbc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>PRONTO</span>
          <span>PARA FICAR</span>
        </div>
        <div>
          <span>bodybuilder</span>
          <span className='stroke-text'>CONOSCO?
</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder='Insira seu endereço de email' />
          <button className='btn btn-j'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Join