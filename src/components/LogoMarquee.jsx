import React from "react";
// import logo1 from '../assets/logo1.png'
import sliderlogo1 from '../assets/sliderlogo1.png'
import sliderlogo2 from '../assets/sliderlogo2.png'
import sliderlogo3 from '../assets/sliderlogo3.png'
import sliderlogo4 from '../assets/sliderlogo4.png'
import sliderlogo5 from '../assets/sliderlogo5.png'
import sliderlogo6 from '../assets/sliderlogo6.png'
import sliderlogo7 from '../assets/sliderlogo7.png'
import sliderlogo8 from '../assets/sliderlogo8.png'
import sliderlogo9 from '../assets/sliderlogo9.png'


const logos1 = [sliderlogo1, sliderlogo2, sliderlogo3];
const logos2 = [sliderlogo4, sliderlogo5, sliderlogo6];
const logos3 = [sliderlogo7, sliderlogo8, sliderlogo9];

export default function LogoMarquee() {
    return (
        <article className="wrapper rotate-130">

            {/* First marquee */}
            <div className="marquee">
                <div className="marquee_group ">
                    {[...logos1, ...logos1, ...logos1, ...logos1, ...logos1, ...logos1, ...logos1, ...logos1].map((logo, idx) => (
                        <img key={idx} src={logo} alt={`logo-${idx}`} className="logo " />
                    ))}
                </div>
            </div>

            {/* Second marquee (reverse) */}
            <div className="marquee marquee-reverse">
                <div className="marquee_group">
                    {[...logos2, ...logos2, ...logos2, ...logos2, ...logos2, ...logos2, ...logos2, ...logos2].map((logo, idx) => (
                        <img key={idx} src={logo} alt={`logo-${idx}`} className="logo" />
                    ))}
                </div>
            </div>

            {/* Third marquee */}
            <div className="marquee">
                <div className="marquee_group">
                    {[...logos3, ...logos3, ...logos3, ...logos3, ...logos3, ...logos3, ...logos3, ...logos3, ...logos3].map((logo, idx) => (
                        <img key={idx} src={logo} alt={`logo-${idx}`} className="logo" />
                    ))}
                </div>
            </div>

        </article>
    );
}