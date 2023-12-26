import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import Slide1 from '../img/slider1.jpg'
import Slide2 from '../img/slider2.jpg'
import Slide3 from '../img/slider3.jpg'
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';

const Swiperslider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}>
        <SwiperSlide>
          <img src={Slide1} alt='slide1' />
          <div className='slider-text'>
            <h3>Do The Ride Thing</h3>
            <Button size='md' variant='outline-light'>Get Info</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer playing={true} volume={1} autoPlay={true} loop={true} controls={false} muted={true} width="100%" height='900px' url={`https://www.youtube.com/embed/j0hcRDypgmY?{mainTrailerShowcase.key}`}
        />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt='slide2' />
          <div className='slider-text'>
            <h3>Lets Ride</h3>
            <Button size='md' variant='outline-light'>Get Info</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt='slide3' />
          <div className='slider-text'>
            <h3>Join Rider Club</h3>
            <Button size='md' variant='outline-light'>Join Us</Button>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Swiperslider
