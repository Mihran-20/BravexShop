import React from 'react';
import SliderComponent from "../../slider/Slider.jsx";
import Slidersummer from "../../slider/Slidersummer.jsx";
import Line from "../../line/Line.jsx";
import Foother from "../../foother/Foother.jsx";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <img src="start.jpg" alt="start" className="w-full h-[800px] object-cover"/>
                <div className="absolute top-[55%] left-[5%] max-w-[600px] px-4">
                    <h1 className="text-white text-[45px] font-bold leading-tight drop-shadow-lg">JUST IN: LOEWE PAULA’S IBIZA</h1>
                    <p className="text-white font-semibold mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80">
                        Playful sophistication meets heritage craftsmanship – get in the groove of spring with the new collection
                    </p>
                    <button className="cursor-pointer w-[220px] h-[50px] mt-[25px] border-2 border-white font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:bg-[#0000008c] hover:border-[#FFC26F] hover:text-[#FFC26F] focus:ring-2 focus:ring-[#FFC26F]">
                        Shop now
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-around items-center py-12 px-6 gap-10 bg-gradient-to-r from-[#1a1a1a] to-[#333333]">
                <div className="w-[50vh] h-[35vh] flex flex-col items-center justify-center text-center bg-[#FFC26F] text-white rounded-xl shadow-xl">
                    <h1 className="text-3xl mt-[20px] font-semibold">What's new today</h1>
                    <p className="text-[120px] font-bold">482</p>
                    <p className="font-mono">Discover what just landed at Bravex</p>
                    <button className="cursor-pointer mb-[10px] w-[200px] h-[45px] border-2 border-white mt-5 font-semibold transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white focus:ring-2 focus:ring-[#FFC26F]">
                        Shop Now
                    </button>
                </div>
                <div className="w-[110vh] h-[35vh] flex justify-center items-center">
                    <SliderComponent />
                </div>
            </div>

            {/* Featured Categories Section */}
            <div className="w-full h-[105vh] flex justify-evenly items-center gap-4 mt-12 bg-[#0f0f0f] py-8">
                <div className="flex flex-col items-center justify-center text-center text-white">
                    <img src="boy1.jpg" alt="boy1" className="w-full rounded-xl shadow-lg"/>
                    <h1 className="mt-4 text-xl font-bold">THE BLAZERS TO WEAR NOW</h1>
                    <p className="text-sm mt-2 underline cursor-pointer hover:text-[#FFC26F]">Shop designer styles</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center text-white">
                    <img src="boy2.jpg" alt="boy2" className="w-full rounded-xl shadow-lg"/>
                    <h1 className="mt-4 text-xl font-bold">POLO SHIRTS: SPRING'S IT STAPLE</h1>
                    <p className="text-sm mt-2 underline cursor-pointer hover:text-[#FFC26F]">Shop now</p>
                </div>
            </div>

            {/* Summer Collection Section */}
            <div className="w-full h-[40vh] flex justify-around items-center bg-[#1e1e1e] py-12">
                <div className="w-[110vh] h-[30vh] flex justify-center items-center rounded-xl shadow-xl">
                    <Slidersummer />
                </div>
                <div className="w-[50vh] h-[30vh] flex flex-col items-start justify-evenly text-white">
                    <h1 className="text-[25px] font-mono">Set your sights on summer</h1>
                    <h1 className="text-[16px] font-mono opacity-80">Prep your wardrobe ahead of the warmer season with our edit</h1>
                    <button className="cursor-pointer w-[200px] h-[45px] border-2 border-[#FFC26F] text-[#FFC26F] font-bold transition-all duration-300 hover:bg-[#FFC26F] hover:text-black hover:scale-105">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Latest Collections */}
            <div className="w-full h-[90vh] flex justify-between items-center mt-[30px] py-8">
                <div className="w-auto h-[85vh] flex flex-col justify-center text-white">
                    <img src="model1.jpg" alt="model1" className="w-auto h-[80vh] rounded-xl shadow-xl"/>
                    <h1 className="text-[25px] font-mono mt-4">BAGS: CELINE HOMME AND MORE</h1>
                    <p className="text-[13px] mt-2 underline cursor-pointer hover:text-[#FFC26F]">Shop new-in bags</p>
                </div>
                <div className="w-auto h-[85vh] flex flex-col justify-center text-white">
                    <img src="model2.jpg" alt="model2" className="w-auto h-[80vh] rounded-xl shadow-xl"/>
                    <h1 className="text-[25px] font-mono mt-4">TRANS-SEASONAL JACKETS</h1>
                    <p className="text-[13px] mt-2 underline cursor-pointer hover:text-[#FFC26F]">Shop SS25 styles</p>
                </div>
                <div className="w-auto h-[85vh] flex flex-col justify-center text-white">
                    <img src="model3.png" alt="model3" className="w-auto h-[80vh] rounded-xl shadow-xl"/>
                    <h1 className="text-[25px] font-mono mt-4">MONCLER: DISCOVER THE NEW COLLECTION</h1>
                    <p className="text-[13px] mt-2 underline cursor-pointer hover:text-[#FFC26F]">Shop SS25</p>
                </div>
            </div>

            <Line/>

            {/* The Journal Section */}
            <div className="w-full h-[110vh] flex flex-col items-center bg-[#0f0f0f]">
                <img src="all.jpg" alt="all" className="w-[180vh] h-[90vh] object-cover rounded-xl shadow-lg"/>
                <div className="w-full h-[20vh] flex justify-evenly items-center">
                    <div className="w-[70vh] h-[12vh] flex flex-col justify-evenly text-center">
                        <h2 className="font-mono text-[15px] text-[#FFC26F]">THE JOURNAL</h2>
                        <h1 className="font-black font-mono text-[30px] text-[#FFC26F]">10 Essential Pieces No Man Should Be Without This Spring</h1>
                    </div>
                    <div className="w-[70vh] h-[12vh] flex flex-col justify-evenly items-start">
                        <h2 className="font-mono text-[14px] text-[#FFC26F] opacity-80">MR PORTER’s definitive edit of the building blocks you need for a versatile, long-lasting and reliable warm-weather wardrobe. Read more in The Journal</h2>
                        <h1 className="font-mono text-[14px] text-[#FFC26F] underline cursor-pointer">Read more</h1>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full bg-[#141414] py-16 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-10 text-[#FFD580]">What Our Customers Say</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial Card */}
                    <div
                        className="bg-gradient-to-tr from-[#1f1f1f] to-[#2c2c2c] p-6 rounded-xl shadow-xl border border-[#FFD580]/10 hover:scale-105 transition">
                        <p className="text-sm text-gray-300 mb-4">
                            “Amazing quality and fast delivery! The shoes I ordered exceeded my expectations.”
                        </p>
                        <h4 className="font-semibold text-[#FFD580]">– Alex M.</h4>
                    </div>
                    <div
                        className="bg-gradient-to-tr from-[#1f1f1f] to-[#2c2c2c] p-6 rounded-xl shadow-xl border border-[#FFD580]/10 hover:scale-105 transition">
                        <p className="text-sm text-gray-300 mb-4">
                            “Customer service was top notch. I had a size issue and they solved it within a day.”
                        </p>
                        <h4 className="font-semibold text-[#FFD580]">– Sarah K.</h4>
                    </div>
                    <div
                        className="bg-gradient-to-tr from-[#1f1f1f] to-[#2c2c2c] p-6 rounded-xl shadow-xl border border-[#FFD580]/10 hover:scale-105 transition">
                        <p className="text-sm text-gray-300 mb-4">
                            “Stylish, durable, and true to size. I’ll definitely shop here again.”
                        </p>
                        <h4 className="font-semibold text-[#FFD580]">– David R.</h4>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full bg-[#1a1a1a] py-16 px-6 text-white text-center">
                <h2 className="text-3xl font-bold mb-10 text-[#FFC26F]">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto text-left space-y-6">

                    <details className="bg-[#2a2a2a] p-5 rounded-xl shadow-md cursor-pointer">
                        <summary className="font-semibold text-lg text-[#FFC26F]">How long does shipping take?</summary>
                        <p className="mt-3 text-gray-300">Shipping usually takes 3-7 business days, depending on your
                            location.</p>
                    </details>

                    <details className="bg-[#2a2a2a] p-5 rounded-xl shadow-md cursor-pointer">
                        <summary className="font-semibold text-lg text-[#FFC26F]">Can I return or exchange an item?
                        </summary>
                        <p className="mt-3 text-gray-300">Yes! We offer a 14-day return or exchange policy for unworn
                            items.</p>
                    </details>

                    <details className="bg-[#2a2a2a] p-5 rounded-xl shadow-md cursor-pointer">
                        <summary className="font-semibold text-lg text-[#FFC26F]">Do you ship internationally?</summary>
                        <p className="mt-3 text-gray-300">Currently, we only ship within the US, but we're expanding
                            soon!</p>
                    </details>

                    <details className="bg-[#2a2a2a] p-5 rounded-xl shadow-md cursor-pointer">
                        <summary className="font-semibold text-lg text-[#FFC26F]">What payment methods do you accept?</summary>
                        <p className="mt-3 text-gray-300">We accept Visa, MasterCard, PayPal, and crypto via MetaMask or Binance.</p>
                    </details>

                </div>
            </div>

            <Foother/>

        </div>
    );
};

export default Home;
