'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Appartment from './Appartment/Appartment'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import Building from './Building/Building'
import Review from './Review/Review'
import Blog from './Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(()=>{
    const initAos=async()=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
    initAos();
  },[])
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Appartment/>
      <Properties/>
      <CityProperties/>
      <Building/>
      <Review/>
      <Blog/>
    </div>
  )
}

export default Home