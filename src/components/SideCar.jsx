


import React from 'react'

import phonefrontback from "../assets/phonefrontback.png"
import threephone from "../assets/threephone.png"
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"

import blurimage3 from "../assets/blurimage3.svg"
import LogoMarquee from './LogoMarquee'
function SideCar() {
    return (
        <div className='bg-[#0E121C] mt-16 md:mt-20 '  >

            {/* <div className='border border-[#31353F] ' > */}
            <div class="bg-[linear-gradient(102.5deg,#31353F_0%,#0E121C_100%)] p-6 w-[90%] md:max-w-7xl mx-auto relative rounded-3xl min-h-[250px] relative   overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 " >
                    <div className="order-2 md:order-1 pt-5 md:pt-10 p-0 sm:p-10 z-20 " >
                        <div
                            className='
                              -top-[35%]
                              z-10
                             -left-6
                              absolute  
                            '
                        >
                            <img className='h-100 w-50' src={blurimage3} alt="" />

                        </div>
                        <div className='flex relative ' >

                            <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                                <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h6  ">
                                    GLOBAL CONNECTIVITY
                                </p>
                            </div>
                        </div>
                        <div className='h2 text-white my-4' >
                            Scalable 100% Private,
                            <br />
                            Decentralized Meetings
                        </div>
                        <div className='h5 text-white' >
                            Experience secure, blockchain-powered virtual meetings with full data ownership and end-to-end privacy.
                        </div>





                    </div>
                    <div className='order-2    '  >
                        <div className='absolute top-0 left-[20%]' >
                            <LogoMarquee />
                        </div>
                    </div>
                    {/* <div className="order-1 md:order-2">
                        <img className='h-[300px] w-full' src={phonefrontback} alt="" />

                    </div> */}


                </div>

            </div>


        </div >

    )
}

export default SideCar