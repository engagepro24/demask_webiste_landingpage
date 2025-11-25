import React from 'react'

import worldImage from "../assets/worldImage.png"
import phone3 from "../assets/phone3.png"
import phone2 from "../assets/phone2.png"
import phone1 from "../assets/phone1.png"
import keyimage from "../assets/keyimage.png"
import phoneimagethree from "../assets/phoneimagethree.png"
import phoneimagethree3 from "../assets/phoneimagethree3.png"
import keyimage2 from "../assets/keyimage2.png"
import keyimage3 from "../assets/keyimage3.png"
import backgroundkey1 from "../assets/backgroundkey1.svg"
import backgroundkey2 from "../assets/backgroundkey2.svg"
import foxhourse from "../assets/foxhourse.png"

function SidePhone() {
    return (
        <div>

            <div className='mt-10 w-[90%] md:max-w-7xl mx-auto' >
                <div className='flex justify-center ' >
                    <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-2xl' >
                        <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
                   uppercase tracking-[0.3em] font-semibold 
                   drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                            Core Highlights of the De-mask Platform
                        </p>
                    </div>


                </div>
                <div className='flex justify-center  mt-6' >
                    <div className='text-white text-lg md:text-2xl  lg:text-4xl ' >
                        Our Key Features
                    </div>
                </div>
                <div className='flex justify-center  mt-6' >
                    <div className='text-white h5  text-center w-[100%] md:w-[70%] lg:w-[50%]' >
                        Discover the core capabilities that make De-mask exceptional. Each feature is crafted to elevate your virtual events and deliver a seamless experience for every participant.
                    </div>
                </div>


                <div className='grid grid-cols-12 gap-5 mt-5' >
                    <div className='col-span-12 relative md:col-span-8 h-10 bg-gradient-to-br overflow-hidden from-[#31353F] to-[#0A0D14]  h-[300px]  sm:h-[400px] md:h-[500px] lg:h-[400px]   rounded-2xl
                  ' >
                        <div  >
                            <div className=' pt-8 px-6 ' >
                                <div className='h5  text-white ' >
                                    Robust Security

                                </div>
                                <div className='h5 !font-normal text-white ' >
                                    Advanced protection to keep your meetings and user data safe at all times.

                                </div>
                            </div>
                        </div>
                        * <div className='absolute bottom-0 left-0 z-40' >
                            <img className="h-50 sm:h-60 md:h-75" src={phoneimagethree3} alt="" />
                        </div>

                        <div className='absolute bottom-0 left-0 z-10' >
                            <img className="h-30 md:h-80" src={backgroundkey1} alt="" />
                        </div>
                        <div className='absolute bottom-0 right-0 z-10'  >
                            <img className="h-30 md:h-80" src={backgroundkey2} alt="" />
                        </div>


                        {/* <div className="absolute bottom-0 left-[30%] z-30">
                            <img className="h-30 md:h-70" src={keyimage} alt="" />
                        </div>

                        <div className="absolute bottom-0 left-[5%] z-20">
                            <img className="h-30 md:h-70" src={keyimage2} alt="" />
                        </div>

                        <div className="absolute bottom-0 right-[0%] z-40">
                            <img className="h-30 md:h-70" src={keyimage3} alt="" />
                        </div> */}

                    </div>
                    <div className='col-span-12 md:col-span-4 h-10 h-[400px] md:h-[500px] lg:h-[400px]   ' >
                        <div className=' h-full flex flex-col gap-5 ' >
                            <div className='h-[60%]  bg-gradient-to-br from-[#31353F] to-[#0A0D14] rounded-2xl' >
                                <div className='h5 h-full flex flex-col justify-end p-8' >
                                    <div className='h4  text-white' >Scalable Solutions</div>
                                    <div className='text-white h5 mt-2' >
                                        Easily handle events of any size with flexible, high-performance infrastructure.
                                    </div>

                                </div>

                            </div>

                            <div class="h-[40%] bg-[linear-gradient(to_bottom,#a979e9,#a979e9,#a979e9,#a979e9,#a979e9,#ac7eea,#b084ea,#b389eb,#ba95ec,#c1a0ed,#c8acee,#cfb7ef)] rounded-2xl">

                                <div className='h5 h-full flex flex-col justify-center p-8' >
                                    <div className='h5  text-white' >User-Friendly Interface</div>
                                    <div className='text-white h5 mt-2 md:mt-1 lg:mt-2 ' >
                                        A clean, intuitive design that makes hosting and joining meetings effortless.
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=' h-[400px] sm:h-[550px] md:h-[500px] col-span-12 md:col-span-4 h-10  bg-gradient-to-br from-[#31353F] to-[#0A0D14] rounded-2xl ' >
                        <div className=' h-[400px] sm:h-[550px] md:h-[500px] relative '>
                            <div className='absolute bottom-0' >
                                <img className='w-full' src={worldImage} alt="" />
                            </div>
                            <div className=' pt-8 px-6 ' >
                                <div className='h4  text-white ' >
                                    End-to-End Encryption

                                </div>
                                <div className='h5 !font-normal text-white' >
                                    Secure every interaction with strong encryption for complete communication privacy.

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 relative md:col-span-8 h-10 bg-gradient-to-br from-[#31353F] to-[#0A0D14] h-[500px]  rounded-2xl ' >
                        <div  >
                            <div className=' pt-8 px-6 ' >
                                <div className='h4  text-white ' >
                                    Multi-Factor Authentication

                                </div>
                                <div className='h5 !font-normal text-white ' >
                                    Add extra verification layers to keep <br /> accounts and event access fully protected.

                                </div>
                            </div>
                        </div>

                        <div className='absolute bottom-4 right-4' >
                            <img src={foxhourse} alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default SidePhone