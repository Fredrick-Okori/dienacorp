import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { ChakraProvider } from '@chakra-ui/react'



import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ShowCase from './components/ShowCase'
import Feature from './components/Feature'


function App() {
 

  return (


    <>
      <ChakraProvider>
        <NavBar />
        <HeroSection />
  <Feature/>
      </ChakraProvider>
    </>
  )
}

export default App
