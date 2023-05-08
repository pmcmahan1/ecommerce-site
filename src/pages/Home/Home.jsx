import React from 'react'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Mission from '../../components/Mission/Mission'
import NewProducts from '../../components/NewProducts/NewProducts'



const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Mission />
      <Categories />
      <NewProducts />
    </div>
  )
}

export default Home