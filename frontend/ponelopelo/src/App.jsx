import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import Navbar from './components/NavBar'
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LivingLibraryPage from './pages/LivingLibraryPage';
import ProjectsPage from './pages/ProjectsPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter basename="/ponelopelo">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about-us" element={<AboutPage/>} />
        <Route path="living-library" element={<LivingLibraryPage />} />
        <Route path="projects" element={<ProjectsPage /> } />
        <Route path="partners" element={<PartnersPage /> } />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
