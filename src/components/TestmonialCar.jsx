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

const TestmonialCar = () => {
    const items = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="w-full mt-10">
            <div className="flex flex-col" >
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
                        <div className="flex flex-col" >
                            <div class="bg-[radial-gradient(84%_29.47%_at_0%_0%,#2D303C_0%,#121317_100%)] p-6 rounded-xl w-[250px] min-h-[180px]">
                                <div className='h6 text-[#868796]' >
                                    Effortless image creation with
                                    stunning results. Highly
                                    recommend this app to bring
                                    their creative ideas to life.
                                </div>
                                <div className='flex items-center mt-4 gap-3' >
                                    <div>
                                        <img className='h-10 w-10 rounded-full' src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg" alt="" />
                                    </div>
                                    <div className='flex flex-col text-white h6' >
                                        <div>
                                            Emily R.
                                        </div>
                                        <div className='text-[#868796]' >
                                            Digital Artist
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    ))}
                </Carousel>
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
                    rtl={true}
                >
                    {items.map((item, index) => (
                        <div className="flex flex-col" >


                            <div class=" ml-[60%] mt-10 bg-[radial-gradient(84%_29.47%_at_0%_0%,#2D303C_0%,#121317_100%)] p-6 rounded-xl w-[250px] min-h-[180px]">
                                <div className='h6 text-[#868796]' >
                                    Effortless image creation with
                                    stunning results. Highly
                                    recommend this app to bring
                                    their creative ideas to life.
                                </div>
                                <div className='flex items-center mt-4 gap-3' >
                                    <div>
                                        <img className='h-10 w-10 rounded-full' src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg" alt="" />
                                    </div>
                                    <div className='flex flex-col text-white h6' >
                                        <div>
                                            Emily R.
                                        </div>
                                        <div className='text-[#868796]' >
                                            Digital Artist
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default TestmonialCar;

