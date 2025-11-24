import React from 'react'

import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import logo8 from "../assets/logo8.png"
import Test from './Test'

function Beleive() {
    return (
        <div>


            <div className='flex justify-center pt-10  ' >
                <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                    <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                        1K+ PROTOCOL TRUSTED US
                    </p>
                </div>


            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white text-lg md:text-2xl  lg:text-4xl ' >
                    They believed us
                </div>
            </div>

            <div className='w-[90%] md:max-w-7xl mx-auto mt-5 relative' >
                <Test />
                {/* <div className='h-30 w-10 absolute bg-black top-0' ></div> */}
                <div className='h-25 w-[2%]  bg-black absolute top-0 left-0 ' >  </div>
                <div className='h-25 w-[8%]  bg-black absolute top-0 left-0 blur-lg' >  </div>
                <div className='h-25 w-[2%]  bg-black absolute top-0 right-0 ' >  </div>
                <div className='h-25 w-[8%]  bg-black absolute top-0 right-0 blur-lg' >  </div>
            </div>

            {/* <div className=" w-full">
                <div className=""></div> */}
            <div className="max-w-7xl mx-auto mt-0 md:mt-8 marquee-wrapper">
                <div className="marquee-track gap-10">
                    {/* ORIGINAL LIST */}

                    {/* <div className="flex gap-10">
                        <img className="h-5 w-20" src={logo1} />
                        <img className="h-5 w-20" src={logo2} />
                        <img className="h-5 w-20" src={logo3} />
                        <img className="h-5 w-20" src={logo4} />
                        <img className="h-5 w-20" src={logo5} />
                        <img className="h-5 w-20" src={logo6} />
                        <img className="h-5 w-20" src={logo7} />
                        <img className="h-5 w-20" src={logo8} />
                    </div> */}


                </div>
            </div>




        </div>
    )
}

export default Beleive