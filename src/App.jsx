import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { ChakraProvider } from '@chakra-ui/react'



import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ShowCase from './components/ShowCase'
import Feature from './components/Feature'
import FloatingButton from './components/ChatBot'
import Footer from './components/Footer'


function App() {


  return (


    <>
      <ChakraProvider>
        <NavBar />

        <HeroSection />
        <Feature />
        <FloatingButton />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
