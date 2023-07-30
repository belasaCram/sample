import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Fontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>HTML</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>CSS</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>JS</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>BOOTSTRAP</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>TAILWIND</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>REACT</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>NODEJS</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>HTML</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>CSS</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>JS</h4> 
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience