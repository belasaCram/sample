import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor rerum, facilis explicabo maiores, unde fugit porro quisquam repellat rem commodi expedita ullam pariatur ipsam perspiciatis nesciunt molestias nostrum? Fuga?'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor rerum, facilis explicabo maiores, unde fugit porro quisquam repellat rem commodi expedita ullam pariatur ipsam perspiciatis nesciunt molestias nostrum? Fuga?'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor rerum, facilis explicabo maiores, unde fugit porro quisquam repellat rem commodi expedita ullam pariatur ipsam perspiciatis nesciunt molestias nostrum? Fuga?'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor rerum, facilis explicabo maiores, unde fugit porro quisquam repellat rem commodi expedita ullam pariatur ipsam perspiciatis nesciunt molestias nostrum? Fuga?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials