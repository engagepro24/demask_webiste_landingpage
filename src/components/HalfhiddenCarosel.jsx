import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import end1 from "../assets/end1.png";
import end2 from "../assets/end2.png";
import end3 from "../assets/end3.png";
import end4 from "../assets/end4.png";
import end5 from "../assets/end5.png";

const HalfhiddenCarosel = () => {
    const items = [end1, end2, end3, end4, end5];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,                 // 1 full + 1 half
            partialVisibilityGutter: 80
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 60
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 40
        }
    };

    return (
        <div className="w-full">
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={true}     // 👈 SHOW HALF IMAGE

                autoPlay={true}
                autoPlaySpeed={1}
                customTransition="transform 10000ms linear"
                transitionDuration={10000}

                arrows={false}
                draggable={false}
                swipeable={false}
                keyBoardControl={false}
                pauseOnHover={false}
                showDots={false}

                containerClass="p-0 m-0"
                sliderClass="p-0 m-0"
                itemClass="p-0 flex justify-center item-center gap-5    "
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full mt-8 mx-3">
                        <img className="w-32 lg:w-full h-full block" src={item} alt="" />

                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HalfhiddenCarosel;
