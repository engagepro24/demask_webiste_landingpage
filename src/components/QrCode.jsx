import React from "react";
import Qrcode from "../assets/Qrcode.png";
import phone from "../assets/phone.png";
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";

function QrCode({ pageData }) {
    return (
        <div className={`${pageData ? "mt-0" : "mt-16 md:mt-20 "} bg-[#0A0D14]  px-5`}>
            <div
                className="
    max-w-7xl mx-auto rounded-3xl p-6 md:p-10 
    flex flex-col md:flex-row items-center gap-10 
    relative overflow-hidden
">
                {/* LEFT — PHONE IMAGE */}
                <div className="w-full md:w-[500px] flex justify-center md:justify-start ">
                    <img
                        src={phone}
                        className="object-contain max-h-full]"
                        alt="phone"
                    />
                </div>

                {/* RIGHT — TEXT + QR */}
                <div
                    className="
                    border border-4 border-white
      w-full grid grid-cols-1 md:grid-cols-2 
       rounded-2xl  
      gap-6 p-6 md:p-8 bg-white/5 backdrop-blur-xl
    "
                >
                    {/* TEXT SECTION */}
                    <div className="flex flex-col justify-center space-y-5 ">
                        <div>
                            <h2 className="h3 text-white leading-snug">
                                Start Your De-mask <br />
                                Experience Today
                            </h2>

                            <p className="text-gray-300 mt-3 text-sm md:text-base">
                                Available on iOS and Android for effortless access
                                to your meetings anytime, anywhere.
                            </p>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex gap-4 mt-2">
                            <div className="w-12 h-12 bg-white/10 rounded-full p-2 flex items-center justify-center">
                                <img src={apple} className="w-6 h-6" alt="apple" />
                            </div>

                            <div className="w-12 h-12 bg-white/10 rounded-full p-2 flex items-center justify-center">
                                <img src={playstore} className="w-6 h-6" alt="playstore" />
                            </div>
                        </div>
                    </div>

                    {/* QR CODE SECTION */}
                    <div className="flex justify-center items-center">
                        <img
                            src={Qrcode}
                            className="
          h-[180px] w-[180px] sm:h-[230px] sm:w-[230px] 
          rounded-xl shadow-xl
        "
                            alt="qr code"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QrCode;
