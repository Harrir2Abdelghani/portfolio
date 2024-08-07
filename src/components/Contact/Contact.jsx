import React from 'react'
import './Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import  { useRef } from 'react';

import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wrkqzg8', 'template_qumopyj', form.current, 'user_dfjX0hZjdBMUllwqksbvA')
      .then((result) => {
          alert("Sent Successfully");
      }, (error) => {
          alert("Error Sending !");
      });

      e.target.reset()
  };

  
    
  
  return (
    <section id='Contact'>
        <h4>Get In Touch</h4>
        

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <AiFillLinkedin className='contact__option-icon'/>
              <h5>LinkedIn</h5>
              
              <a href='https://www.linkedin.com/in/harrir-abdelghani-90741a230/' target='_blank' >Send Message</a>
            </article>

            <article className='contact__option'>
              <FaFacebookMessenger className='contact__option-icon'/>
              <h5>Messanger</h5>
              
              <a href='https://m.me/100009454786442' target='_blank'>Send Message</a>
            </article>

            

            
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full name' required></input>
          <input type='email' name='email' placeholder='your email' required></input>
          <textarea name='message' rows='7' placeholder='your message' required></textarea>
          <button type='submit' className='btn' >Send</button>
        </form>
        </div>
    </section>
  )
}

export default Contact