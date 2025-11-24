import React from "react";
// import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

import locationicon from "../assets/locationicon.png"
import phoneimage from "../assets/image.png"
import groupimage from "../assets/Group.png"
import tickimage from "../assets/tickimage.png"
import instaimage from "../assets/instaimage.png"
import linkimage from "../assets/linkimage.png"
import ximage from "../assets/ximage.png"

function Contact({ pageData }) {
    return (
        <div className={`${pageData ? "" : "bg-[#0A0D14]"}  text-white py-20 px-5 md:px-10 relative`}>

            {/* ---- TOP SECTION ---- */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">

                {/* LEFT TEXT */}
                <div className="col-span-5" >
                    <div class=" 
                         h1  bg-gradient-to-b from-[#0A0D14]  to-[#FFFFFF] leading-8 md:leading-12  bg-clip-text  tracking-[0.2em] text-transparent uppercase
                        ">
                        Reach Out
                    </div>
                    <p className="text-gray-300 mt-5 h5 leading-relaxed">
                        Have a question or need assistance?
                        Reach out to our dedicated support team.
                        We're here to help with any inquiries you may have.
                    </p>

                    {/* Bullet points */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 border border-gray-600  rounded-full p-1.5">
                                <img src={tickimage} alt="" />
                            </div>
                            <p className="text-gray-300">Personalized assistance</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 border border-gray-600  rounded-full p-1.5">
                                <img src={tickimage} alt="" />
                            </div>
                            <p className="text-gray-300">Timely response</p>
                        </div>

                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 bg-white/10 border border-gray-600  rounded-full p-1.5">
                                <img src={tickimage} alt="" />
                            </div>
                            <p className="text-gray-300">Comprehensive support</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-10">


                        <div class="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] h-12 w-12 rounded-lg flex justify-center items-center">
                            <img className="h-7 w-7" src={linkimage} alt="" />
                        </div>
                        <div class="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] h-12 w-12 rounded-lg flex justify-center items-center">
                            <img className="h-7 w-7" src={ximage} alt="" />
                        </div>
                        <div class="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] h-12 w-12 rounded-lg flex justify-center items-center">
                            <img className="h-7 w-7" src={instaimage} alt="" />
                        </div>


                        {/* <div className="bg-[#1A1D24] p-3 rounded-xl cursor-pointer hover:bg-[#252932]">
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                        <div className="bg-[#1A1D24] p-3 rounded-xl cursor-pointer hover:bg-[#252932]">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="bg-[#1A1D24] p-3 rounded-xl cursor-pointer hover:bg-[#252932]">
                            <i className="fa-brands fa-instagram"></i>
                        </div> */}
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-[rgba(255,255,255,0.05)] col-span-7 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl">

                    {/* Name + Email */}
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-[#1A1D24] border border-white/10 p-3 rounded-xl text-white outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[#1A1D24] border border-white/10 p-3 rounded-xl text-white outline-none"
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        rows="6"
                        placeholder="Message"
                        className="bg-[#1A1D24] border border-white/10 p-3 mt-5 rounded-xl w-full text-white outline-none"
                    ></textarea>

                    {/* Submit */}
                    <button
                        className="w-full bg-gradient-to-r from-[#8A3FFC] to-[#C06CFF] text-white py-3 mt-6 rounded-xl font-semibold"
                    >
                        Submit now
                    </button>
                </div>
            </div>

            {/* ---- BOTTOM INFO BOXES ---- */}
            <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-7">

                {/* Box 1 - Email */}
                <div className="bg-[#1A1D24] border border-white/10 rounded-xl p-6 flex flex-col gap-5">
                    <div class="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] h-12 w-12 rounded-lg flex justify-center items-center">
                        <img className="h-7 w-7" src={groupimage} alt="" />
                    </div>
                    <div>
                        <p className="text-white text-sm">Email us</p>
                        <p className=" text-gray-400">demasksupport@gmail.com</p>
                    </div>
                </div>

                {/* Box 2 - Phone */}
                <div className="bg-[#1A1D24] border border-white/10 rounded-xl p-6 flex  flex-col gap-5">
                    {/* <img src={locationicon} alt="" /> */}
                    <div class="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] h-12 w-12 rounded-lg flex  justify-center items-center">
                        <img className="h-7 w-7" src={phoneimage} alt="" />
                    </div>
                    <div>
                        <p className="text-white text-sm">Call us</p>
                        <p className=" text-gray-400 ">(123) 456-7890</p>
                    </div>
                </div>

                {/* Box 3 - Location */}
                <div className="bg-[#1A1D24] border border-white/10 rounded-xl p-6 flex flex-col gap-5">
                    <div class="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] h-12 w-12 rounded-lg flex  justify-center items-center">
                        <img className="h-7 w-7" src={locationicon} alt="" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Our location</p>
                        <p className="text-white">Crosby Street, New York, US</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
