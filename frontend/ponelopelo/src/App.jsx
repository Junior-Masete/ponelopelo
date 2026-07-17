import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import reactLogo from './assets/react.svg'
import Navbar from './components/NavBar'
import Homepage from './pages/HomePage';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Homepage />
    </BrowserRouter>
    </>
  )
}

export default App
