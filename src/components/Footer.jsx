import React, { useState } from 'react'
import DemaskLogo from "../assets/DemaskLogo.png"
import instaimage from "../assets/instaimage.png"
import linkimage from "../assets/linkimage.png"
import ximage from "../assets/ximage.png"
import { useNavigate } from 'react-router-dom'
import { HiLink } from "react-icons/hi";

function Footer({ pageData }) {

    const navigate = useNavigate()



    const [active, setActive] = useState("Home");


    const menu = [
        { title: "Home", section: "home" },
        { title: "About Us", section: "about" },
        { title: "Features", section: "features" },
        { title: "Pricing", section: "pricing" },
        { title: "Downloads", section: "download" }
    ];



    const MovetoSection = (id) => {
        if (pageData == true) {
            navigate("/", { state: { sectionId: id } });
        }
        else {

            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }

        }
    };

    const iconurldata = [
        {
            name: "instagram",
            icon: instaimage,
            url: "https://instagram.com/yourprofile"
        },
        {
            name: "website",
            icon: linkimage,
            url: "https://example.com"
        },
        {
            name: "twitter",
            icon: ximage,
            url: "https://x.com/yourprofile"
        },
        {
            name: "custom",
            icon: "custom",
            url: "https://tgpsglobal.com/"
        }
    ]



    return (
        <div className="w-full bg-black text-white px-4 pt-10 md:pt-20">

            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[10%] py-6">

                {/* Logo */}
                <img className="h-16" src={DemaskLogo} alt="Logo" />

                {/* Menu */}
                <div className="bg-[#121317] flex flex-wrap justify-center gap-6 lg:gap-10 px-6 py-3 rounded-full text-sm md:text-base font-bold">

                    {menu.map((item) => (
                        <p
                            key={item.title}
                            onClick={() => {
                                setActive(item.title);
                                MovetoSection(item.section);
                                setOpen(false); // close sidebar
                            }}
                            className={` cursor-pointer 
        ${active === item.title
                                    ? " text-gray-400 "
                                    : "text-gray-300 hover:bg-gray-700"
                                }`}
                        >
                            {item.title}
                        </p>
                    ))}
                    {/* <span className="text-[#868796] cursor-pointer">Home</span>
                    <span className="text-[#868796] cursor-pointer">About Us</span>
                    <span className="text-[#868796] cursor-pointer">Features</span>
                    <span className="text-[#868796] cursor-pointer">Pricing</span>
                    <span className="text-[#868796] cursor-pointer">Downloads</span> */}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-3">
                    {iconurldata.map((icon, index) => {

                        console.log(icon, "think large")

                        return (
                            <div
                                key={index}
                                onClick={() => window.location.href = icon?.url}
                                // onClick={() => window.open("https://example.com", "_blank")}


                                className="bg-[#121317] border cursor-pointer border-gray-600 rounded-lg h-10 w-10 p-1.5 flex items-center justify-center"
                            >
                                {
                                    icon?.icon == "custom" ?
                                        <HiLink size={30} className='text-gray-200' />
                                        : <img src={icon?.icon} alt="" className="h-6 w-6" />

                                }

                            </div>
                        )
                    }
                    )}
                </div>



            </div>

            {/* <div className='w-screen' >
                <div className='flex justify-around' >
                    <div className='text-center' >
                        <div className='h5' >Corporate Office</div>

                        <p className='w-[70%] mx-auto text-center mt-4' >
                         
                            <div className=' my-2' >
                                1st Floor, GV Tower, 371/1, G.V. Residency, Uppilipalayam, Coimbatore, Tamil Nadu 641028
                            </div>
                            <div>
                                Ph: 0422 450 2296
                            </div>
                            <div>
                            </div>
                        </p>

                    </div>

                </div>

            </div> */}


            {/* LINE */}
            <div className="h-0.5 bg-[#262831] w-full my-6"></div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-center md:px-10 pb-8 gap-4">

                <div className="flex gap-5 text-sm md:text-base text-gray-300">
                    <span onClick={() => navigate("/privacy")} className="cursor-pointer">Privacy Policy</span>
                    <span onClick={() => navigate("/term")} className="cursor-pointer">Terms and Conditions</span>
                </div>

                <div className="text-gray-400 text-sm md:text-base">
                    All copyrights reserved @De-mask
                </div>

            </div>

        </div>
    )
}

export default Footer
