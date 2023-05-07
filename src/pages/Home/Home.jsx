import React from 'react'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Mission from '../../components/Mission/Mission'


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Mission />
      <Categories />
    </div>
  )
}

export default Home