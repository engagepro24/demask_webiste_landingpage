






import React from 'react'

import phonefrontback from "../assets/phonefrontback.png"
import threephone from "../assets/threephone.png"
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"

import blurimage3 from "../assets/blurimage3.svg"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {


    const faqData = [
        {
            question: "What is a De-mask?",
            answer:
                "Demask is cutting-edge software designed for hosting large-scale meetings globally with advanced video conferencing features."
        },
        {
            question: "How do I set up a large-scale meeting on De-mask?",
            answer:
                "You can create scheduled or instant meetings with a single click and manage participants easily."
        },
        {
            question: "Is De-mask optimized for mobile and tablets?",
            answer:
                "Yes, it works seamlessly across all devices including mobile, tablets, and desktops."
        },
        {
            question: "What features make De-mask ideal for global conferences?",
            answer:
                "De-mask offers scalability, HD video, screen sharing, real-time chat, polls, and advanced moderation tools."
        },
        {
            question: "Why choose De-mask for virtual events?",
            answer:
                "It provides reliability, security, high-quality audio/video, and a user-friendly experience for all participants."
        }
    ];

    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className='bg-[#0A0D14] mt-16 md:mt-20 relative'  >

            {/* <div className='border border-[#31353F] ' > */}
            <div class="bg-[linear-gradient(102.5deg,#31353F_0%,#0A0D14_100%)] p-6 max-w-7xl mx-auto relative rounded-3xl min-h-[250px]">
                <div className="grid grid-cols-12  " >
                    <div className=" col-span-12 md:col-span-4 pt-5 md:pt-10 p-0 sm:p-10 relative z-20 " >
                        <div
                            className='
                              -top-[15%]
                              z-10
                             -left-6    
                              absolute  
                            '
                        >
                            <img className='h-100 w-100' src={blurimage3} alt="" />

                        </div>
                        <div className='flex relative ' >

                            <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl rounded-lg' >
                                <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] h6  ">
                                    Faq
                                </p>
                            </div>
                        </div>
                        <div className='h2 text-white my-4' >
                            Frequently <br />
                            Asked <br />
                            Questions
                        </div>
                        <div className='h5 border border-gray-700 bg-[#31353F] p-5 rounded-lg' >
                            <div className='flex flex-col gap-2' >
                                <div className='h5 text-white'>Still have questions?</div>
                                <div className='h6 text-white' >
                                    If the solution eludes you,  <br />
                                    kindly engage with our customer support.

                                </div>
                                <div class="duration-300hover:text-black mx-auto w-full cursor-pointer rounded-xl border border-white/30 bg-black py-2 text-center text-white transition-all">Get In Touch</div>


                            </div>
                        </div>





                    </div>


                    <div className="col-span-12 md:col-span-8 pt-10 md:pt-16">

                        {faqData.map((item, index) => (
                            <div key={index} className="border border-[#31353F] rounded-xl mb-4 overflow-hidden">

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full cursor-pointer flex justify-between items-center px-5 py-4 text-left text-white bg-[#20232D] hover:bg-[#1b1e25] transition"
                                >

                                    <span className={`${openIndex === index ? "text-[#BC89FF]" : "text-white"} h5 font-medium `}>
                                        {item.question}
                                    </span>

                                    <span className="text-xl text-gray-300 transition-transform duration-300"
                                        style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
                                        <IoIosArrowUp />
                                    </span>
                                </button>

                                {/* Animated Answer */}
                                <div
                                    className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
      `}
                                >
                                    <div className="px-5 py-4 text-white bg-[#20232D] border-t border-[#31353F] h5  ">
                                        {item.answer}
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>



                </div>

            </div>


        </div >

    )
}

export default Faq