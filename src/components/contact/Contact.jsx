import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>dummy.com</h5>
            <a href="mailto:dummy">Send A Message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>dummy.com</h5>
            <a href="mailto:dummy">Send A Message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Skype</h4>
            <h5>dummy.com</h5>
            <a href="mailto:dummy">Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact