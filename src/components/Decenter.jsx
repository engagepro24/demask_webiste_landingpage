

import React from 'react'

import phonefrontback from "../assets/phonefrontback.png"
import threephone from "../assets/threephone.png"
import DemaskImage1 from "../assets/DemaskImage1.png"
import DemaskImage2 from "../assets/DemaskImage2.png"
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"

import blurimage3 from "../assets/blurimage3.svg"
import { useNavigate } from 'react-router-dom'
function Decenter() {


    const navigate = useNavigate()
    return (
        <div className='bg-[#0E121C]  mt-16 md:mt-20 relative'  >

            <div className=' max-w-7xl mx-auto relative' >

                <div className="grid grid-cols-1 md:grid-cols-2 p-10  " >
                    <div className="order-2 md:order-1 pt-5 md:pt-10 p-0 sm:p-10 relative z-20 " >
                        <div className='flex flex-col justify-center h-full' >

                            <div className='flex relative ' >

                                <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                                    <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h6  ">
                                        SECURITY
                                    </p>
                                </div>
                            </div>
                            <div className='h2 text-white my-4' >
                                Decentralized Data Security
                            </div>
                            <div className='h5 text-white' >
                                Our system safeguards your virtual events with strong encryption, ensuring all data remains protected and tamper-proof.
                            </div>

                            <div className='mt-6' >
                                <div onClick={() => navigate("/contact")} className=' cursor-pointer bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] py-3 w-[120px] rounded-2xl text-center text-white' >
                                    Get started
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="order-1 md:order-2">
                        <img className='h-full w-full' src={DemaskImage1} alt="" />

                    </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-10  " >
                    <div className="  ">
                        <img className='h-full w-full' src={DemaskImage2} alt="" />

                    </div>
                    <div className=" pt-5 md:pt-10 p-0 sm:p-10 relative " >
                        <div
                            className='
                              -bottom-[20%]
                              z-10
                             -right-30
                              absolute  
                              rotate-180
                            '
                        >
                            <img className='h-100 w-100' src={blurimage3} alt="" />

                        </div>
                        <div className='flex  relative' >


                            <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                                <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h6  ">
                                    ACCESS MANAGEMENT
                                </p>
                            </div>
                        </div>
                        <div className='h2 text-white my-4' >
                            Advanced Access Control
                        </div>


                        <div className=' rounded-md mt-8' >
                            <div className='flex justify-around gap-5 px-5 pt-4' >
                                <div className='w-[40px]' >
                                    <div style={{
                                        height: "35px",
                                        width: "35px",
                                        borderRadius: "50%"
                                    }} className=' bg-[#A35DFF] ' >

                                    </div>
                                </div>
                                <div>
                                    <div className='h5 text-white' >
                                        Role-Based Permissions
                                    </div>
                                    <div className='h5 text-white mt-2' >
                                        Assign precise access levels to hosts, speakers, and participants for secure, organized events.
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className=' rounded-md mt-8' >
                            <div className='flex justify-around gap-5 px-5 pt-4' >
                                <div className='w-[40px]' >
                                    <div style={{
                                        height: "35px",
                                        width: "35px",
                                        borderRadius: "50%"
                                    }} className=' bg-[#A35DFF] ' >

                                    </div>
                                </div>
                                <div>
                                    <div className='h5 text-white' >
                                        Automated Authorization
                                    </div>
                                    <div className='h5 text-white mt-2' >
                                        Simplify onboarding with automated approval and entry processes for seamless participation.
                                    </div>
                                </div>

                            </div>

                        </div>





                    </div>



                </div>

            </div>


        </div >

    )
}

export default Decenter