import React, { useState } from "react";
import { IoIosMan } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Logout from "../page/Logout/Logout.jsx";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal .jsx";
import { FaBasketShopping } from "react-icons/fa6";
import CartModal from "../page/productcard/CartModal.jsx";
import {useCart} from "../page/productcard/CartContext.jsx";

const Header = () => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { cartItems } = useCart();


    const handleLogout = () => {
        localStorage.removeItem("token");
        setShowConfirm(false);
        navigate("/login");
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <header className="w-full h-[80px] bg-white font-bold flex justify-between items-center shadow-md">
            <h1 className="text-black text-[40px] ml-[30px] font-black">Bravex</h1>

            <div className="w-[600px] h-[100px] flex justify-between items-center gap-10 mr-[20px] relative">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full h-[40px] rounded-4xl border-2 border-gray-300 pl-[40px] pr-[20px] text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Search for products"
                    />
                    <CiSearch className="absolute text-[22px] left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>

                <IoIosMan
                    className="text-[50px] cursor-pointer text-gray-600 hover:text-black transition"
                />


                {/* Cart Icon */}
                <div className="relative">
                    <FaBasketShopping
                        className="text-[30px] cursor-pointer text-gray-600 hover:text-black transition"
                        onClick={() => setShowCartModal(true)}
                    />
                    {cartItems.length > 0 && (
                        <span
                            className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    )}
                </div>


                {/* Logout Button */}
                <Logout width="w-[100px]" onClick={() => setShowConfirm(true)}>
                    LogOut
                </Logout>
            </div>

            {/* ConfirmModal for Logout */}
            <ConfirmModal
                isOpen={showConfirm}
                onCancel={() => setShowConfirm(false)}
                onConfirm={handleLogout}
            />

            {/* Cart Modal */}
            {showCartModal && (
                <CartModal
                    onClose={() => setShowCartModal(false)} // Close cart modal
                />
            )}
        </header>
    );
};

export default Header;
