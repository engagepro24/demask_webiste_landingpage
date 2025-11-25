import React from 'react'
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"

function GlobalImpact() {


    const cardsData = [
        {
            id: 1,
            bg: "bg-gradient-to-br from-[#0E121C] to-[#31353F]",
            value: "1.2M+",
            valueStyle:
                "bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent uppercase tracking-[0.1em] font-semibold drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h2",
            title: "Active Meeting Participants",
        },
        {
            id: 2,
            bg: "bg-gradient-to-br from-[#0E121C] to-[#31353F]",
            value: "8.4M+",
            valueStyle:
                "bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent uppercase tracking-[0.1em] font-semibold drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h2",
            title: "Total Conferences Hosted",
        },
        {
            id: 3,
            bg: "bg-gradient-to-br from-[#0E121C] to-[#31353F]",
            value: "560K+",
            valueStyle:
                "bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent uppercase tracking-[0.1em] font-semibold drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h2",
            title: "Organizations Connected Globally",
        },
        {
            id: 4,
            bg: "bg-gradient-to-br from-[#0E121C] to-[#31353F]",
            value: "3.7M+",
            valueStyle:
                "bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent uppercase tracking-[0.1em] font-semibold drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h2",
            title: "Hours of Meetings Streamed",
        }
    ];


    return (
        <div className='mt-10 w-[90%] md:max-w-7xl mx-auto' >
            <div className='flex justify-center ' >
                <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                    <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                        Numbers
                    </p>
                </div>


            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white text-lg md:text-2xl  lg:text-4xl ' >
                    Discover Our Global Impact
                </div>
            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white h5  text-center' >
                    Explore the milestones and achievements that highlight De-Mask’s excellence in hosting seamless virtual meetings worldwide.
                </div>
            </div>

            <div className=' mt-10' >
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5' >
                    {cardsData.map((item) => (
                        <div
                            key={item.id}
                            className={`${item.bg} h-[100px] md:h-[180px] w-full rounded-lg`}
                        >
                            <div className="flex flex-col h-full justify-between text-white py-5 pl-5">
                                <div>
                                    <p className={item.valueStyle}>{item.value}</p>
                                </div>
                                <div className="h5">{item.title}</div>
                            </div>
                        </div>
                    ))}



                </div>

            </div>
        </div>
    )
}

export default GlobalImpact