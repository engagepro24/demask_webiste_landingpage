import React from 'react'

import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import logo8 from "../assets/logo8.png"

function Beleive() {
    return (
        <div>


            <div className='flex justify-center ' >
                <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                    <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                        1K+ PROTOCOL TRUSTED US
                    </p>
                </div>


            </div>
            <div className='flex justify-center  mt-4' >
                <div className='text-white text-lg md:text-2xl  lg:text-4xl ' >
                    They believed us
                </div>
            </div>



            <div className='max-w-7xl mx-auto mt-8' >
                <div className='flex flex-wrap gap-10 justify-center' >
                    <img className='h-5 w-20' src={logo1} alt="" />
                    <img className='h-5 w-20' src={logo2} alt="" />
                    <img className='h-5 w-20' src={logo3} alt="" />
                    <img className='h-5 w-20' src={logo4} alt="" />
                    <img className='h-5 w-20' src={logo5} alt="" />
                    <img className='h-5 w-20' src={logo6} alt="" />
                    <img className='h-5 w-20' src={logo7} alt="" />
                    <img className='h-5 w-20' src={logo8} alt="" />

                </div>

            </div>




        </div>
    )
}

export default Beleive