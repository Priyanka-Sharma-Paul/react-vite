import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorPicker from './component/color-picker/ColorPicker'
import colors from './data/colors'

function App() {

  return (
    <>
      <ColorPicker colors={colors} />
    </>
  )
}

export default App
