import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "/shirt1.jpg", "/img6.jpg", "/shirt5.jpg", "/img11.jpg",
    "/img5.jpg", "/img24.jpg", "/img7.jpg", "/img10.jpg",
    "/img9.png", "/img8.jpg", "/shirt10.jpg", "/img12.jpg"
];

const PrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full cursor-pointer transition"
    >
        <FaChevronLeft className="text-white text-xl" />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full cursor-pointer transition"
    >
        <FaChevronRight className="text-white text-xl" />
    </div>
);

const SliderComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="w-full max-w-[1100px] mx-auto mt-12 px-4 relative">
            <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-200 relative">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="px-2">
                            <img
                                src={src}
                                alt={`Slide ${index}`}
                                className="w-full h-[250px] object-cover rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
