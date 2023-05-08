import React, { useState } from 'react'
import './Slider.scss'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider1 from './slider1.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }


    const data = [
        slider1, slider2, slider3
      ];

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <ArrowBackIosIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider