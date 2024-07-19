import { useState } from 'react'

import './App.css'


import { ChakraProvider } from '@chakra-ui/react'



import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ShowCase from './components/ShowCase'
import Feature from './components/Feature'
import FloatingButton from './components/ChatBot'
import Footer from './components/Footer'
import Home from './views/Home'


function App() {


  return (


    <>
      <ChakraProvider>
        <NavBar />

       
        <Home />
   


        <FloatingButton />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
