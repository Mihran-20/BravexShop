import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Foother = () => {
    return (
        <div className="bg-[#141414] text-white">
            <div className="w-full h-[60vh] flex justify-evenly items-center py-12 px-6">
                <div className="w-[40vh] h-[20vh] flex flex-col items-start">
                    <h1 className="text-[18px] font-mono text-[#FFC26F]">10% OFF WHEN YOU SIGN UP</h1>
                    <p className="text-[14px] mt-4 text-gray-300 max-w-[300px]">Stay in the loop with the latest style news and get an exclusive 10% off when you subscribe to our emails.</p>
                    <div className="w-full mt-6 flex gap-4">
                        <input type="email" className="pl-4 py-2 rounded-xl border bg-[#2c2c2c] text-white placeholder-gray-400 w-[240px]" placeholder="your@address.com"/>
                        <button className="w-[120px] py-2 px-4 rounded-xl bg-[#FFC26F] text-black font-semibold transition-all duration-300 hover:bg-[#FFB84D]">
                            Sign Up
                        </button>
                    </div>
                    <div className="w-[170px] mt-6 flex text-[30px] justify-between items-center text-[#FFC26F]">
                        <FaInstagram className="cursor-pointer hover:text-[#FFB84D]" />
                        <FaFacebook className="cursor-pointer hover:text-[#FFB84D]" />
                        <FaTwitter className="cursor-pointer hover:text-[#FFB84D]" />
                        <FaYoutube className="cursor-pointer hover:text-[#FFB84D]" />
                    </div>
                </div>
                <div className="w-[35vh] h-[15vh]">
                    <h1 className="text-[16px] font-bold font-mono text-[#FFC26F]">NEED HELP?</h1>
                    <p className="font-mono text-gray-300">For any enquiries please visit Bravex </p>
                    <h1 className="text-[16px] font-bold font-mono text-[#FFC26F]">Change Location</h1>
                    <h1 className="text-[14px] text-gray-300 underline cursor-pointer hover:font-bold transition">Հայաստան 🇦🇲</h1>
                </div>
            </div>
            <div className="w-full h-[50px] bg-[#1a1a1a] flex justify-center items-center">
                <h1 className="text-gray-400 text-sm">© 2025 Bravex. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Foother;
