import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cumque debitis! Eius ea iure consequatur nihil, modi velit nobis! Excepturi quisquam vel nam dolores eius dolorem. Sunt iusto aliquid incidunt.'
  },
  {
  avatar: AVTR2,
  name: 'Shatta Wale',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cumque debitis! Eius ea iure consequatur nihil, modi velit nobis! Excepturi quisquam vel nam dolores eius dolorem. Sunt iusto aliquid incidunt.'
  },
  {
  avatar: AVTR3,
  name: 'Kwame Despite',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cumque debitis! Eius ea iure consequatur nhil, modi velit nobis! Excepturi quisquam vel nam dolores eius dolorem. Sunt iusto aliquid incidunt.'
  },
  {
  avatar: AVTR4,
  name: 'Nana Ama McBrown',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cumque debitis! Eius ea iure consequatur nihil, modi velit nobis! Excepturi quisquam vel nam dolores eius dolorem. Sunt iusto aliquid incidunt.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testiomonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key ={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar}/>
            </div>
            <h5 className='client_name'>{name}</h5>

            <small className='client_review'>
              {review}
            </small>
          
        </SwiperSlide>
          )
        })
        }
        
      </Swiper>
    </section>
  )
}

export default testimonials
