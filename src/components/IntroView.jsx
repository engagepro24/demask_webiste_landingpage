import React from 'react'
import DemaskLogo from "../assets/DemaskLogo.png"
import HeroImage from "../assets/HeroImage.png"
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"
import blurimage3 from "../assets/blurimage3.svg"


function IntroView() {
    return (

        <div className='min-h-screen h-full'  >
            <div className="absolute top-0 left-0 w-full z-10">
                <div className="grid h-[500px] grid-cols-10 gap-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-full w-full bg-[linear-gradient(180deg,rgba(111,255,233,0.1)_0%,rgba(10,13,20,0.1)_100%)]"
                        ></div>
                    ))}
                </div>
            </div>
            <div className="h-[500px] bg-black relative">
                <div className='text-white fixed top-5 ' >
                    <div className='flex justify-center w-screen items-center gap-[10%] z-50 ' >
                        <div className='' >
                            <img className='h-20 w-30' src={DemaskLogo} alt="" />

                        </div>
                        <div className='bg-[#000000] flex justify-between w-[600px] z-50 px-10 py-2 rounded-full text-lg font-bold' >
                            <div>Home</div>
                            <div>About Us</div>
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>Downlaods</div>

                        </div>
                        <div className='bg-black' >
                            <div className=' bg-white h-12 w-35 flex justify-center items-center rounded-full text-black text-lg font-bold' >
                                Contact us
                            </div>


                        </div>


                    </div>
                </div>

                <div className='pt-50 text-white ' >
                    <div className='flex justify-center ' >
                        <div className='border border-[#BFA2F6]/50 p-2 bg-[#BFA2F6]/20 rounded-xl' >
                            <p class="bg-gradient-to-r from-[#A76BFF] to-[#C89BFF] bg-clip-text text-transparent 
       uppercase tracking-[0.3em] font-semibold 
       drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                                ALL-IN-ONE – DECENTRALIZED MEETING
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center  mt-5' >
                        <p class=" 
                       w-[80%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%]
                   h1
                        bg-gradient-to-b from-[#0A0D14]  to-[#FFFFFF] to-[40%] text-center leading-8 md:leading-12  bg-clip-text  tracking-[0.2em] text-transparent uppercase ">
                            Host Seamless Global Conferences  with De-Mask Virtual Platform</p>
                    </div>

                    <div className='flex justify-center  w-screen mt-4' >
                        <div className='bg-[linear-gradient(90deg,#6D00FF_0%,#A35DFF_100%)] p-2 w-[150px] rounded-md text-center text-white' >
                            Get started
                        </div>
                    </div>

                </div>

            </div>

            {/* Hero Image section */}
            <div className='relative w-screen bg-black min-h-screen  ' >
                <div className='absolute -top-[10px] lg:-top-[30px]  z-40 ' >
                    <div className='w-screen mx-auto  ' >
                        <div className='max-w-7xl mx-auto border  shadow-gray-800 shadow-2xl' >
                            <img src={HeroImage} alt="" />
                        </div>
                    </div>
                </div>

                <div
                    className='
                  -top-[25%]
                  z-20
    left-1/2
              -translate-x-1/2 
                  absolute  
                '
                >
                    <img src={blurimage1} alt="" />

                </div>
                <div
                    className='
                  -top-[25%]
                  z-40
    -left-10
                  absolute  
                '
                >
                    <img src={blurimage2} alt="" />

                </div>
                <div
                    className='
                  -top-[50%]
                  z-20
    -right-30
                  absolute  
                '
                >
                    <img src={blurimage2} alt="" />

                </div>


                {/* <div class="
                z-20
    w-[403.32064880494727px]
    h-[402.82049560546875px]
    top-[-85.34px]
    left-1/2
    -translate-x-1/2
    opacity-100
    rounded-[403.07px]
    bg-[#9E77D2]/90
    shadow-[0_0_20px_#6f00ff]
    blur-3xl
    backdrop-blur-[10px]
    absolute
">
                </div> */}

                {/* <div class="
                z-20
    w-[403.32064880494727px]
    h-[402.82049560546875px]
    -translate-x-1/2
    opacity-100
    rounded-[403.07px]
    bg-[#9E77D2]/20
    shadow-[0_0_20px_#6f00ff]
    blur-3xl
    backdrop-blur-[10px]
    absolute
     left-0
    -bottom-150
">
                </div>

                <div class="
                z-20
    w-[403.32064880494727px]
    h-[402.82049560546875px]
    -translate-x-1/2
    opacity-100
    rounded-[403.07px]
    bg-[#A074F1]/90
    shadow-[0_0_20px_#6f00ff]
    blur-3xl
    backdrop-blur-[10px]
    absolute
    right-0
     
    bottom-0
">
                </div> */}




                <div>

                </div>
            </div>

        </div>
    )
}

export default IntroView