


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroView from './components/IntroView'
import Beleive from './components/Beleive'
import TwoThreePhone from './components/TwoThreePhone'
import GlobalImpact from './components/GlobalImpact'
import FourToggle from './components/FourToggle'
import SideCar from './components/SideCar'
import Decenter from './components/Decenter'
import SidePhone from './components/SidePhone'
import PriceTable from './components/PriceTable'
import Feedback from './components/Feedback'
import Faq from './components/Faq'
import QrCode from './components/QrCode'
import Elevate from './components/Elevate'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Test from './components/Test'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// change


function TotalApp() {

    return (
        <>
            <div className='bg-[#0E121C] h-auto min-h-full overflow-hidden' >
                {/* <Test /> */}
                <div id="home">
                    <IntroView />
                </div>
                <div id="about" className='scroll-mt-40 mt-10 md:mt-0 lg:mt-0 xl:mt-20' >
                    <Beleive />
                </div>


                <TwoThreePhone />
                <GlobalImpact />
                <div id="features" className='scroll-mt-40 mt-0 md:mt-20' >
                    <FourToggle />
                </div>
                <SideCar />
                <Decenter />
                <SidePhone />

                <div id="pricing" className='scroll-mt-40 mt-0 md:mt-20' >
                    <PriceTable />
                </div>
                <Feedback />
                <Faq />

                <QrCode />
                <div id="download" className='scroll-mt-40 mt-0 md:mt-20' >
                    <Elevate />
                </div>
                <Footer />
                {/* <Contact /> */}





            </div >
        </>
    )
}

export default TotalApp
