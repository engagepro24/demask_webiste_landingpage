

import React, { useState } from 'react'
// import blurimage1 from "../assets/blurimage1.svg"
// import blurimage2 from "../assets/blurimage2.svg"
// import fourimage1 from "../assets/fourimage1.png"
// import fourimage2 from "../assets/fourimage2.png"
// import fourimage4 from "../assets/fourimage4.png"
import backgroundpriceblur from "../assets/backgroudpriceblur.svg"

function PriceTable() {

    const [active, setActive] = useState("Monthly");

    const tabs = [
        "Monthly",
        "Annual 20%",
    ];


    const monthlyPlans = [
        {
            title: "Free",
            price: "$0",
            billing: "per user/month",
            features: [
                { label: "Participants", value: "10" },
                { label: "Meeting Duration", value: "30-min/per meet" },
                { label: "Concurrent meeting", value: "1" },
                { label: "Recordings", value: "7 days" },
                { label: "Storages", value: "5 GB" },
                { label: "Support", value: "Basic (24hrs)" }
            ],
            button: "Purchase now"
        },
        {
            title: "Pro",
            price: "$10",
            design: "change",
            billing: "per user/month",
            features: [
                { label: "Participants", value: "30" },
                { label: "Meeting Duration", value: "60-min/per meet" },
                { label: "Concurrent meeting", value: "3" },
                { label: "Recordings", value: "15 days" },
                { label: "Storages", value: "20 GB" },
                { label: "Support", value: "Priority" }
            ],
            button: "Purchase now"
        },
        {
            title: "Enterprise",
            price: "$20",
            billing: "per user/month",
            features: [
                { label: "Participants", value: "50" },
                { label: "Meeting Duration", value: "90-min/per meet" },
                { label: "Concurrent meeting", value: "5" },
                { label: "Recordings", value: "30 days" },
                { label: "Storages", value: "50 GB" },
                { label: "Support", value: "Premium" }
            ],
            button: "Purchase now"
        }
    ];

    const annualPlans = [
        {
            title: "Free",
            price: "$0",
            billing: "per user/year",
            features: [
                { label: "Participants", value: "100" },
                { label: "Meeting Duration", value: "30-min/per meet" },
                { label: "Concurrent meeting", value: "1" },
                { label: "Recordings", value: "7 days" },
                { label: "Storages", value: "5 GB" },
                { label: "Support", value: "Basic (24hrs)" }
            ],
            button: "Purchase now"
        },
        {
            title: "Pro (Save 20%)",
            price: "$96", // = $10 * 12 * 0.8
            design: "change",
            billing: "per user/year",
            features: [
                { label: "Participants", value: "300" },
                { label: "Meeting Duration", value: "60-min/per meet" },
                { label: "Concurrent meeting", value: "3" },
                { label: "Recordings", value: "15 days" },
                { label: "Storages", value: "20 GB" },
                { label: "Support", value: "Priority" }
            ],
            button: "Purchase now"
        },
        {
            title: "Enterprise (Save 20%)",
            price: "$192",
            billing: "per user/year",
            features: [
                { label: "Participants", value: "500" },
                { label: "Meeting Duration", value: "90-min/per meet" },
                { label: "Concurrent meeting", value: "5" },
                { label: "Recordings", value: "30 days" },
                { label: "Storages", value: "50 GB" },
                { label: "Support", value: "Premium" }
            ],
            button: "Purchase now"
        }
    ];




    return (
        <div className='mt-10 w-[90%] md:max-w-7xl mx-auto' >
            <div className='flex justify-center ' >
                <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                    <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                        PRICING SECTION
                    </p>
                </div>


            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white text-lg md:text-2xl  lg:text-4xl ' >
                    Comprehensive pricing overview
                </div>
            </div>
            <div className='flex justify-center  mt-6' >
                <div className='text-white h5  text-center w-[100%] md:w-[70%] lg:w-[50%]' >
                    We understand the importance of productivity and efficiency in today's fast-paced world
                </div>
            </div>

            <div className="mt-10">
                <div className="bg-[#20232D] rounded-xl p-2 w-[90%] md:w-[300px] mx-auto relative overflow-hidden">

                    {/* Animated background slider */}
                    <div
                        className={`absolute top-2 bottom-2 w-[50%] rounded-lg bg-black transition-all duration-300`}
                        style={{
                            left: active === "Monthly" ? "2%" : "48%",
                        }}
                    ></div>

                    <div className="grid grid-cols-2 text-[15px] text-white relative z-10">
                        {tabs.map((tab) => (
                            <div
                                key={tab}
                                onClick={() => setActive(tab)}
                                className={`
           py-2 w-full mx-auto rounded-xl cursor-pointer text-center 
           transition-all duration-300
           ${active === tab ? "text-white" : "text-gray-300"}
        `}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-10' >
                <div class="  rounded-xl">
                    <div className="flex justify-center">
                        <div
                            key={active}
                            className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 md:pt-10 w-full animate-fadeSlide"
                        >
                            {(active === "Monthly" ? monthlyPlans : annualPlans).map((plan, index) => (

                                <div
                                    key={index}
                                    className="flex  "
                                >


                                    <div className="w-full rounded-xl border border-[#20232D] bg-[#0A0D14] text-white">
                                        <div className="flex flex-col">

                                            {/* TOP SECTION */}
                                            <div className="bg-[linear-gradient(102.5deg,#31353F_0%,#0A0D14_100%)] rounded-2xl relative overflow-hidden">
                                                {
                                                    plan?.design &&
                                                    <img className='absolute bottom-0 right-0 z-10' src={backgroundpriceblur} alt="" />
                                                }
                                                <div className='absolute top-5  right-10 ' >
                                                    {
                                                        plan?.design && <div className='border border-[#BFA2F6]/50 p-2 bg-black rounded-xl' >

                                                            <p class="bg-gradient-to-tr from-[white] to-[#A76BFF] bg-clip-text text-transparent 
       uppercase  font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-[12px] ">
                                                                Most Preferred
                                                            </p>
                                                        </div>
                                                    }


                                                </div>
                                                <div className="flex flex-col justify-around p-5 space-y-1">
                                                    <div className="text-xl font-semibold">{plan.title}</div>

                                                    {
                                                        !plan?.design ?
                                                            <div className="text-3xl font-bold">{plan.price}</div>
                                                            :
                                                            <p class="bg-gradient-to-tr from-[#C89BFF] to-[#A76BFF] bg-clip-text text-transparent 
       uppercase  font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-3xl ">
                                                                {plan.price}
                                                            </p>

                                                    }


                                                    <div className="text-sm text-gray-300">{plan.billing}</div>
                                                </div>
                                            </div>

                                            {/* MIDDLE FEATURES SECTION */}
                                            <div className="mx-auto w-[80%] py-5 space-y-4">
                                                {plan.features.map((f, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex justify-between border-[#20232D] pb-2"
                                                    >
                                                        <div>{f.label}</div>
                                                        <div className="font-semibold">{f.value}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* BUTTON */}
                                            <div className="pb-5 mt-10">
                                                <div className={`${plan?.design == "change" ? "bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] text-center text-white" : " bg-black text-white border rounded-2xl border-gray-500 "} mx-auto w-[90%] rounded-md py-2 text-center  cursor-pointer  transition`}>
                                                    {plan.button}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PriceTable