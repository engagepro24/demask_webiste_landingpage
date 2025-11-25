



import React, { useState } from 'react'
import feedbackimage1 from "../assets/feedbackimage1.svg"
import feedbackimage2 from "../assets/feedbackimage2.svg"
import blurimage2 from "../assets/blurimage2.svg"
import fourimage1 from "../assets/fourimage1.png"
import fourimage2 from "../assets/fourimage2.png"
import fourimage4 from "../assets/fourimage4.png"
import TestmonialCar from './TestmonialCar'

function Feedback() {

    const [active, setActive] = useState("Get started");





    return (
        <div className='mt-10 w-[100%]  mx-auto bg-[linear-gradient(180deg,#31353F_0%,#0E121C_112.34%)] p-5 rounded-xl' >

            <div className='relative' >

                <div
                    className='
                    -bottom-5
                                  z-20
                                  right-0
                                  absolute  
                                '
                >
                    <img src={feedbackimage1} alt="" />

                </div>

                <div
                    className='
                    -top-5
                                  z-20
                                  left-0
                                  absolute  
                                '
                >
                    <img src={feedbackimage2} alt="" />

                </div>

                <div className='flex justify-center pt-5 ' >
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
                    <div className='text-[#CDD0D5] h5  text-center w-[100%] md:w-[70%] lg:w-[50%]' >
                        Hear from our global community and discover how De-mask has elevated their virtual meeting and conference experiences.
                    </div>
                </div>
                <div className='h-120 md:h-135 z-40 ' >
                    <div className=' h-full' >

                        <TestmonialCar />
                        <div className='h-full w-[1%] bg-[linear-gradient(180deg,#31353F_0%,#0E121C_112.34%)] absolute top-0 left-0 ' >  </div>
                        <div className='h-full w-[4%] bg-[linear-gradient(180deg,#31353F_0%,#0E121C_112.34%)] absolute top-0 left-0 blur-lg' >  </div>
                        <div className='h-full w-[1%] bg-[linear-gradient(180deg,#31353F_0%,#0E121C_112.34%)] absolute top-0 right-0 ' >  </div>
                        <div className='h-full w-[4%] bg-[linear-gradient(180deg,#31353F_0%,#0E121C_112.34%)] absolute top-0 right-0 blur-lg' >  </div>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Feedback