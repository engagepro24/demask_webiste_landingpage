import React from "react";
import Qrcode from "../assets/Qrcode.png";
import phone from "../assets/phone.png";
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";

function QrCode({ pageData }) {
    return (
        <div className={`${pageData ? "mt-0" : "mt-16 md:mt-20 "} bg-[#0A0D14]  px-5`}>
            <div className="
                      max-w-7xl mx-auto rounded-3xl p-6 md:p-10 
                      flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">

                {/* LEFT — PHONE IMAGE */}
                <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
                    <img
                        src={phone}
                        className=" object-contain"
                        alt="phone"
                    />
                </div>

                {/* RIGHT — TEXT + QR */}
                <div className="w-full grid grid-cols-1  md:grid-cols-2 border border-white rounded-lg gap-5">
                    <div className="flex flex-col h-full  justify-center p-5" >
                        <div>
                            <div className="h2 text-white">
                                Start Your De-mask <br />
                                Experience Today
                            </div>
                            <p className="text-gray-300 mt-2 text-sm md:text-base my-5">
                                Available on iOS and Android for effortless access
                                to your meetings anytime, anywhere.
                            </p>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white/10   rounded-full p-2">
                                <img src={apple} alt="" />
                            </div>
                            <div className="w-12 h-12 bg-white/10   rounded-full p-2">
                                <img src={playstore} alt="" />
                            </div>
                        </div>



                    </div>
                    {/* QR Code */}

                    <div className="mt-4 flex justify-center ">
                        <img
                            src={Qrcode}
                            className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-xl"
                            alt="qr code"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QrCode;
