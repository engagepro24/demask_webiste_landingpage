


import React, { useState } from 'react'
import blurimage1 from "../assets/blurimage1.svg"
import blurimage3 from "../assets/blurimage3.svg"
import backgroundtabimage from "../assets/backgroundtabimage.svg"
import backgroundtabblur2 from "../assets/backgroundtabblur2.svg"
import fourimage1 from "../assets/fourimage1.png"
import fourimage2 from "../assets/fourimage2.png"
import fourimage4 from "../assets/fourimage4.png"

function FourToggle() {

    const [active, setActive] = useState("Get started");

    const tabs = [
        "Get started",
        "Smart Scheduling",
        "Live Collaboration",
        "Host Controls",
    ];



    return (
        <div className="mt-10 w-[90%] md:max-w-7xl mx-auto relative">

            {/* Background Image (behind everything) */}
            <div className="absolute -left-40 z-0">
                <img src={backgroundtabimage} alt="" />
            </div>
            <div className="absolute -bottom-70 -right-40 z-0">
                <img src={backgroundtabblur2} alt="" />
            </div>

            {/* All content stays above background */}
            <div className="relative z-20">

                {/* Heading Label */}
                <div className="flex justify-center">
                    <div className="border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl">
                        <p className="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
                    uppercase tracking-[0.3em] font-semibold drop-shadow-[0_0_10px_rgba(172,98,255,0.5)]
                    text-[10px] md:text-[12px] lg:text-sm">
                            TAB CONTENT SECTION
                        </p>
                    </div>
                </div>

                {/* Main Title */}
                <div className="flex justify-center mt-6">
                    <div className="text-white text-lg md:text-2xl lg:text-4xl">
                        Features and Enhancements
                    </div>
                </div>

                {/* Description */}
                <div className="flex justify-center mt-6">
                    <div className="text-white h5 text-center w-[100%] md:w-[70%] lg:w-[50%]">
                        Discover the powerful capabilities De-Mask offers for seamless virtual events.
                        Each feature is crafted to deliver a smooth, efficient, and professional meeting
                        experience for every user.
                    </div>
                </div>

                {/* TAB SECTION */}
                <div className="mt-10 z-20">
                    <div className="mt-10">
                        <div className="bg-[#20232D] rounded-2xl p-2 w-[90%] md:w-[730px] mx-auto relative overflow-hidden">

                            {/* Sliding Background */}
                            <div
                                className="absolute top-2 bottom-2 w-[24%] rounded-xl bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] transition-all duration-300"
                                style={{
                                    left:
                                        active === tabs[0] ? "1.5%" :
                                            active === tabs[1] ? "26%" :
                                                active === tabs[2] ? "50.5%" :
                                                    "75%",
                                }}
                            ></div>

                            {/* Tabs */}
                            <div className="grid grid-cols-4 text-white relative z-10">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab}
                                        onClick={() => setActive(tab)}
                                        className={`py-3 text-center cursor-pointer transition-all duration-300
            ${active === tab ? "text-white" : "text-gray-300"}
          `}
                                    >
                                        {tab}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* IMAGES BELOW */}
                <div className="mt-10 z-20">
                    <div className="bg-[linear-gradient(109.88deg,#31353F_0%,#0A0D14_100%)] rounded-xl ">
                        <div className="flex justify-center">
                            <div
                                key={active}
                                className="grid grid-cols-2 md:grid-cols-3 pt-5 md:pt-10 px-5 md:px-20 gap-5 animate-fadeSlide">
                                <img src={fourimage1} alt="" />
                                <img src={fourimage2} alt="" />
                                <img src={fourimage4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FourToggle