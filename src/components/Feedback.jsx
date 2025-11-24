



import React, { useState } from 'react'
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"
import fourimage1 from "../assets/fourimage1.png"
import fourimage2 from "../assets/fourimage2.png"
import fourimage4 from "../assets/fourimage4.png"
import TestmonialCar from './TestmonialCar'

function Feedback() {

    const [active, setActive] = useState("Get started");

    const tabs = [
        "Get started",
        "Smart Scheduling",
        "Live Collaboration",
        "Host Controls",
    ];



    return (
        <div className='mt-10 w-[100%]  mx-auto bg-[linear-gradient(180deg,#31353F_0%,#0A0D14_112.34%)] p-5 rounded-xl' >
            <div className='flex justify-center ' >
                <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                    <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                        TESTIMONIAL
                    </p>
                </div>


            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white text-lg md:text-2xl  lg:text-4xl ' >
                    User Feedback
                </div>
            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white h5  text-center w-[100%] md:w-[70%] lg:w-[50%]' >
                    Hear from our global community and discover how De-mask has elevated their virtual meeting and conference experiences.
                </div>
            </div>
            <TestmonialCar />



        </div>
    )
}

export default Feedback