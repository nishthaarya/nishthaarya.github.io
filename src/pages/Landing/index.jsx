import React from 'react'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Reviews from '../../components/Reviews'
import Section from '../../components/Section'

function Landing() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className='flex-1 bg-beige bg-cover bg-center'>
                <Navbar />
                <Hero />
                <Section />
                <Reviews />
                <CTA />
                <Footer />
            </div>
        </div>
    )
}

export default Landing