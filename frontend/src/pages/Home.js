import React from 'react'

import FridayMessage from '../components/FridayMessage/FridayMessage.js';
import Footer from '../components/Footer/Footer.js';
import NavButton from '../components/NavMenu/NavMenu.js';

const Home = () => {

  return (
    <>
      <NavButton/>
      <FridayMessage />
      <Footer/>
    </>

  )
}

export default Home;