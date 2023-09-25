import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import picture1 from "../../../../public/1.jpeg"
import picture2 from "../../../../public/2.jpg"
import picture3 from "../../../../public/3.png"
import picture4 from "../../../../public/4.jpeg"
import picture5 from "../../../../public/5.jpeg"

const pictureSliderShow = [
        picture1, picture2, picture3, picture4, picture5
];

function SliderShow() {
        const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
        };
        return (
                <div className="w-10/12 max-w-screen-xl mx-auto mt-10">
                        <Slider {...settings}>
                                {pictureSliderShow.map((e) => (
                                        <div className="h-[450px] relative">
                                                <Image
                                                        src={e}
                                                        alt={`Slide ${e}`}
                                                        layout="fill"
                                                        className="absolute top-0 left-0 w-full h-full"
                                                />

                                        </div>
                                ))}
                        </Slider>
                </div>

        );
}

export default SliderShow;
