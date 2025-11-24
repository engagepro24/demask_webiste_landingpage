import React, { useState } from 'react'
import DemaskLogo from "../assets/DemaskLogo.png"
import HeroImage from "../assets/HeroImage.png"
import blurimage1 from "../assets/blurimage1.svg"
import blurimage2 from "../assets/blurimage2.svg"
import blurimage3 from "../assets/blurimage3.svg"
import { IoClose, IoMenu } from "react-icons/io5";
import Contact from './Contact'
import QrCode from './QrCode'
import Elevate from './Elevate'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function ContactPage() {

    const navigate = useNavigate();

    const goToHomeSection = (id) => {
        navigate("/", { state: { sectionId: id } });
    };


    const [open, setOpen] = useState(false)

    const [active, setActive] = useState("Home");

    const menu = ["Home", "Services", "Contact", "About"];


    return (
        <div className='bg-[#0A0D14] h-auto min-h-full overflow-x-hidden' >
            <div className='min-h-screen h-full'  >
                <div className="w-full z-10 relative">
                    <div className="grid h-[500px] grid-cols-10 gap-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-full w-full bg-[linear-gradient(180deg,rgba(111,255,233,0.1)_0%,rgba(10,13,20,0.1)_100%)]"
                            ></div>
                        ))}
                    </div>
                    <div className=' absolute top-0 w-screen ' >
                        <div className="min-h-[500px] bg-black/80  ">

                            <div className='pt-40 text-white  ' >


                                <div className='' >
                                    <Contact pageData={true} />
                                </div>
                                <div  >
                                    <QrCode pageData={true} />
                                </div>
                                <div className='bg-black'  >
                                    <Elevate pageData={true} />
                                </div>
                                <div className='bg-black' >
                                    <Footer pageData={true} />
                                </div>


                                {/* <div
                                className='
                  -top-[25%]
                  z-20
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
                  rotate-180
                '
                            >
                                <img src={blurimage2} alt="" />

                            </div> */}

                            </div>

                        </div>

                    </div>
                </div>






                {/* mobile navbar */}
                <div className="lg:hidden fixed top-5 z-50 w-full px-5 text-white">
                    <div className="flex justify-between items-center  w-full rounded-lg px-3 py-2">


                        <div>
                            <img className="h-12 w-20 object-contain" src={DemaskLogo} alt="Logo" />
                        </div>

                        <div onClick={() => setOpen(true)} className="text-xl font-bold">
                            <IoMenu />
                        </div>

                    </div>
                </div>

                {/* SIDEBAR */}
                <div className={`fixed top-0 left-0 h-full w-[250px] bg-gray-800 text-white z-50 transform 
                 transition-transform duration-300 lg:hidden
                 ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* HEADER */}
                    <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
                        <img className="h-10" src={DemaskLogo} alt="Logo" />
                        <IoClose
                            className="text-2xl cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    </div>

                    {/* MENU ITEMS */}
                    <div className="px-5 py-5 space-y-4">
                        {menu.map((item) => (
                            <p
                                key={item}
                                onClick={() => setActive(item)}
                                className={`text-lg cursor-pointer px-3 py-2 rounded-lg transition 
                                ${active === item
                                        ? "bg-white text-black font-semibold"
                                        : "text-gray-300 hover:bg-gray-700"
                                    }`}
                            >
                                {item}
                            </p>
                        ))}

                        {/* CONTACT BUTTON */}
                        <div className='flex justify-center mt-10'>
                            <div className='bg-white h-8 px-4 flex justify-center items-center rounded-lg text-black text-lg font-semibold'>
                                Contact us
                            </div>
                        </div>
                    </div>
                </div>





                <div className='text-white fixed top-5 z-50  hidden lg:block' >
                    <div className='flex justify-center w-screen items-center gap-[10%] z-50 ' >
                        <div className='' >
                            <img className='h-20 w-30' src={DemaskLogo} alt="" />

                        </div>
                        <div className='bg-[#000000] flex justify-between lg:w-[500px] xl:w-[600px] z-50 px-10 py-2 rounded-full text-lg font-medium' >
                            <p onClick={() => goToHomeSection("home")}>Home</p>
                            <p onClick={() => goToHomeSection("about")}>About Us</p>
                            <p onClick={() => goToHomeSection("features")}>Features</p>
                            <p onClick={() => goToHomeSection("pricing")}>Pricing</p>
                            <p onClick={() => goToHomeSection("download")}>Download</p>


                        </div>
                        <div className='' >
                            <div className=' bg-white h-12 w-35 flex justify-center items-center rounded-full text-black text-lg font-bold' >
                                Contact us
                            </div>


                        </div>


                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactPage

