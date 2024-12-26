import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './components/Imagegallery/ImageGallery'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar/>
      <ImageGallery/>
    </>
  )
}

export default App
