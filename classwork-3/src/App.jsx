import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './component/navbar/Navbar'
import Hero from './component/hero_section/HeroScetion'
import HeroScetion from './component/hero_section/HeroScetion'
import HeroScetion2  from './component/hero-section2/HeroScetion2'
import CommentsCard from './component/commentsCard/commentsCard'
import Footer from './component/footer/Footer'


function App() {
 

  return (
    <>
    <MyNavbar/>
    <HeroScetion/>
    <HeroScetion2/>
    <CommentsCard/>
    <Footer/>
    </>
  )
}

export default App
