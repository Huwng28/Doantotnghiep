import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LastestCollection from '../components/LastestCollection'
import Title from '../components/Title'
import BestSeller from '../components/BestSeller'
import OurPilocy from '../components/OurPilocy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div>
            <Hero />
            <LastestCollection />
            <BestSeller />
            <OurPilocy />
            <NewsletterBox />
        </div>
    )
}

export default Home