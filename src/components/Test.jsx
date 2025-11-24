import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";

const Test = () => {
    const items = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 6 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 4 }
    };

    return (
        <div className="w-full">
            <Carousel
                responsive={responsive}
                infinite={true}

                // 👇 This makes it move forward continuously
                autoPlay={true}
                autoPlaySpeed={1}  // DO NOT use 0 (breaks forward-only movement)

                // 👇 Super-smooth linear scrolling
                customTransition="transform 10000ms linear"
                transitionDuration={10000}

                arrows={false}
                draggable={false}
                swipeable={false}
                keyBoardControl={false}
                pauseOnHover={false}
                showDots={false}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}

                // 👇 No gaps, no margins
                containerClass="p-0 m-0"
                sliderClass="p-0 m-0"
                itemClass="p-0 m-0"
            >
                {items.map((item, index) => (
                    <div key={index} className="p-0 mt-2 lg:mt-10">
                        <img className="w-12 lg:w-28 h-auto block" src={item} alt="" />
                    </div>
                ))}
            </Carousel>

        </div>
    );
};

export default Test;
