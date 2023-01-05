import React from 'react'
import Category from '../../components/Categorys/Category'
import Contact from '../../components/Contact/Contact'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Category/>
      <FeaturedProduct type="trending" />
      <Contact/>
    </div>
  )
}

export default Home