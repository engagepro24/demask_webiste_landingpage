import React from 'react'

import phonefrontback from "../assets/phonefrontback.png"
import threephone from "../assets/threephone.png"
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"

import backgroundgreenblur from "../assets/backgroundgreenblur.svg"
import { useNavigate } from 'react-router-dom'
function TwoThreePhone() {

    const navigate = useNavigate()

    return (
        <div className='bg-[#0E121C] mt-4 md:mt-20 relative z-40'  >
            {/* <div className='bg-[#0E121C] mt-16 md:mt-20 relative'  > */}

            <div className='border border-[#31353F] max-w-7xl mx-auto relative rounded-4xl overflow-hidden' >


                <div className="grid grid-cols-1 md:grid-cols-2 p-10  " >
                    <div className="order-2 md:order-1 pt-5 md:pt-10 p-0 sm:p-10 relative  " >
                        <div
                            className='
                           hidden  lg:block
                              -top-[7%]
                              z-10
                             -left-10
                              absolute  
                            '
                        >
                            <img className='h-100 w-100  z-10' src={backgroundgreenblur} alt="" />

                        </div>
                        <div className='flex relative ' >

                            <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                                <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h6  ">
                                    About App
                                </p>
                            </div>
                        </div>
                        <div className='h2 text-white my-4' >
                            De-Mask Virtual Events
                        </div>
                        <div className='h5 text-white' >
                            Power powerful global gatherings with seamless, high-quality virtual meeting technology.
                        </div>

                        <div className='bg-[#20232D] p-4 pl-8 rounded-md mt-8' >
                            <div className='h5 text-white' >
                                Effortless Large-Scale Hosting
                            </div>

                        </div>
                        <div className='bg-[#20232D] p-4 pl-8 rounded-md mt-3' >
                            <div className='h5 text-white' >
                                Advanced Video-Conferencing Features
                            </div>

                        </div>

                        <div className='bg-[#20232D] p-4 pl-8 rounded-md mt-3' >
                            <div className='h5 text-white' >
                                Smooth & Organized Event Management
                            </div>

                        </div>

                        <div className='mt-6' >
                            <div onClick={() => navigate("/contact")} className=' cursor-pointer bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] py-3 w-[120px] rounded-2xl text-center text-white' >
                                Get started
                            </div>
                        </div>



                    </div>
                    <div className="order-1 md:order-2">
                        <img className='h-full w-full' src={phonefrontback} alt="" />

                    </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-10  " >
                    <div className="  ">
                        <img className='h-full w-full' src={threephone} alt="" />

                    </div>
                    <div className=" pt-5 md:pt-10 p-0 sm:p-10 relative " >
                        <div
                            className='
                              -bottom-10
                              z-10
                             -right-10
                              absolute  
                              rotate-180
                            '
                        >
                            <img className='h-100 w-100' src={backgroundgreenblur} alt="" />

                        </div>
                        <div className='flex  relative' >


                            <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                                <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h6  ">
                                    SMART & SECURE
                                </p>
                            </div>
                        </div>
                        <div className='h2 text-white my-4' >
                            Instant Global
                            Meetings
                        </div>
                        <div className='h5 text-white' >
                            Experience smooth, high-quality virtual meetings and conferences hosted seamlessly across the world with advanced communication technology.
                        </div>

                        <div className='bg-[#20232D] p-4 pl-8 rounded-md mt-8' >
                            <div className='h5 text-white' >
                                Crystal-Clear HD Video & Audio
                            </div>

                        </div>
                        <div className='bg-[#20232D] p-4 pl-8 rounded-md mt-3' >
                            <div className='h5 text-white' >
                                Low-Latency Global Connectivity
                            </div>

                        </div>

                        <div className='bg-[#20232D] p-4 pl-8 rounded-md mt-3' >
                            <div className='h5 text-white' >
                                Real-Time Participant Management
                            </div>

                        </div>

                        <div className='mt-6' >
                            <div onClick={() => navigate("/contact")} className=' cursor-pointer bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] py-3 w-[120px] rounded-2xl text-center text-white' >
                                Get started
                            </div>
                        </div>



                    </div>



                </div>

            </div>


        </div >

    )
}

export default TwoThreePhone