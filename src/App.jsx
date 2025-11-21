import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroView from './components/IntroView'
import Beleive from './components/Beleive'


// change


function App() {

  return (
    <>
      <div className='bg-[#0A0D14] h-auto min-h-full' >
        <IntroView />
        <Beleive />



      </div>
    </>
  )
}

export default App
