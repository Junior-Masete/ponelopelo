 import React from 'react'
import Hero from '../components/Hero.jsx'
import CommunitySection from '../components/CommunitySection.jsx';
import LivingLibrarySection from '../components/LivingLibrary.jsx';
import Footer from '../components/Footer.jsx';


function Homepage () {
    return (
        <>
            <Hero />
            <CommunitySection />
            <LivingLibrarySection />
            <Footer />
        </>
    )
}

export default Homepage;