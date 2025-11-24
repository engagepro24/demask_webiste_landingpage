import React from 'react';

import worldImage from "../assets/worldImage.png";
import foxhourse from "../assets/foxhourse.png";
import end1 from "../assets/end1.png";
import end2 from "../assets/end2.png";
import end3 from "../assets/end3.png";
import end4 from "../assets/end4.png";
import end5 from "../assets/end5.png";
import HalfhiddenCarosel from './HalfhiddenCarosel';

function Elevate({ pageData }) {
    return (
        <div>
            <div className={`${pageData ? "mt-0" : "mt-10"}  mx-auto`}>

                {/* Top Button */}
                <div className="flex justify-center">
                    <div className="border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-2xl">
                        <p
                            className="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
              uppercase tracking-[0.3em] font-semibold 
              drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm"
                        >
                            Let’s start
                        </p>
                    </div>
                </div>

                {/* Heading */}
                <div className="flex justify-center mt-6">
                    <div className="text-white text-lg md:text-2xl lg:text-4xl">
                        Elevate Your Meetings
                    </div>
                </div>

                {/* Subtitle */}
                <div className="flex justify-center mt-6">
                    <div className="text-white h5 text-center w-[100%] md:w-[70%] lg:w-[50%]">
                        Host seamless, high-quality virtual conferences with ease.
                        Your smarter communication experience begins now!
                    </div>
                </div>
                <div className='flex justify-center items-center mt-5' >

                    <div className='bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] py-3 w-[180px] rounded-2xl text-center text-white' >
                        Download Our App
                    </div>
                </div>
                <div className='relative' >
                    <HalfhiddenCarosel />
                    <div className='h-100 w-[5%]  bg-black absolute top-0 left-0 ' >  </div>
                    <div className='h-100 w-[10%]  bg-black absolute top-0 left-0 blur-xl' >  </div>
                    <div className='h-100 w-[5%]  bg-black absolute top-0 right-0 ' >  </div>
                    <div className='h-100 w-[10%]  bg-black absolute top-0 right-0 blur-xl' >  </div>
                    <div className='h-0 w-screen  bg-black absolute bottom-0 right-0 ' >  </div>
                    <div className='h-10 md:h-20 w-screen  bg-black absolute -bottom-10 right-0 blur-xl ' >  </div>
                </div>
                {/* <div className="grid grid-cols-5 gap-5 mt-10">
                    <img src={end1} alt="" className="w-auto h-auto" />
                    <img src={end2} alt="" className="w-auto h-auto" />
                    <img src={end3} alt="" className="w-auto h-auto" />
                    <img src={end4} alt="" className="w-auto h-auto" />
                    <img src={end5} alt="" className="w-auto h-auto" />
                </div> */}


            </div>
        </div >
    );
}

export default Elevate;
