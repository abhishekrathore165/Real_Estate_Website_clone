'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobiNav from './MobiNav'

const ResponNav = () => {
  const [showNav,setShowNav]= useState(false);
  const openNavHandler = ()=> setShowNav(true);
  const closeNavHandler = ()=> setShowNav(false);
  return (
    <div>
      <Navbar openNav={openNavHandler} />
      <MobiNav showNav={showNav} closeNav={closeNavHandler}  />
    </div>
  )
}

export default ResponNav