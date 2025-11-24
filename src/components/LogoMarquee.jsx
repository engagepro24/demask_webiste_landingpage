import React from "react";
import logo1 from '../assets/logo1.png'
// import logo1 from '../assets/logo1.png'
// import sliderlogo2 from '../assets/sliderlogo2.png'
// import sliderlogo3 from '../assets/sliderlogo3.png'
// import sliderlogo4 from '../assets/sliderlogo4.png'
// import sliderlogo5 from '../assets/sliderlogo5.png'
// import sliderlogo6 from '../assets/sliderlogo6.png'
// import sliderlogo7 from '../assets/sliderlogo7.png'
// import sliderlogo8 from '../assets/sliderlogo8.png'
// import sliderlogo9 from '../assets/sliderlogo9.png'


const logos1 = [logo1, logo1, logo1];
const logos2 = [logo1, logo1, logo1];
const logos3 = [logo1, logo1, logo1];

export default function LogoMarquee() {
    return (
        <article className="wrapper rotate-[320deg]">

            {/* First marquee */}
            <div className="marquee">
                <div className="marquee_group">
                    {[...logos1, ...logos1, ...logos1, ...logos1, ...logos1, ...logos1, ...logos1, ...logos1].map((logo, idx) => (
                        <img key={idx} src={logo} alt={`logo-${idx}`} className="logo" />
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