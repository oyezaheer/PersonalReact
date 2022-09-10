import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiInstagram} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o9qjukl', 'template_w7grb4c', form.current, 'sCekS4CnRoDzv-6n7')
      e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>zaheer286khan@gmail.com</h5>
          <a href="mailto:zaheer286khan@gmail.com"  target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <SiInstagram className='contact__option-icon' />
          <h4>Instagram</h4>
          <h5>oyezaheer</h5>
          <a href="https://m.me/oyezaheer" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+91 83499-13807</h5>
          <a href="https://api.whatsapp.com/send?phone=6262966656" target="_blank">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTION  */}


      <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your full name' required />
    <input type="email" name='email' placeholder='Your email' required />
    <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
