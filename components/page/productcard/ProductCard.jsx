import React, { useState } from "react";
import { useCart } from "./CartContext.jsx";

const ProductCard = ({ image, title, price, sizes, hideSizes = false }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = () => {
        if (!selectedSize && !hideSizes) {
            alert("Please select a size first!");
            return;
        }
        addToCart({
            id: Math.random(),
            title,
            image,
            size: selectedSize,
            quantity,
        });
        setSelectedSize(null);
        setQuantity(1);
    };

    return (
        <div className="bg-[#1a1a1a] text-white shadow-xl rounded-2xl p-5 w-full max-w-sm flex flex-col h-full transition-all transform hover:scale-105 hover:shadow-2xl">
            <img
                src={image}
                alt={title}
                className="w-full h-80 object-cover rounded-xl transition-transform transform hover:scale-110"
            />

            <div className="mt-4 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-[#FFC26F]">{title}</h2>
                <p className="text-lg text-gray-300 mt-1">{price} USD</p>

                {!hideSizes && (
                    <div className="mt-4">
                        <span className="font-medium block mb-2 text-[#FFC26F]">Choose Size:</span>
                        <div className="flex gap-2 flex-wrap">
                            {sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-1 rounded-lg text-sm font-medium border transition-all duration-300 ${
                                        selectedSize === size
                                            ? "bg-[#FFC26F] text-black"
                                            : "bg-[#2d2d2d] text-gray-300 hover:bg-[#3f3f3f] hover:text-[#FFC26F]"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-4">
                    <span className="font-medium block mb-2 text-[#FFC26F]">Quantity:</span>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={decreaseQuantity}
                            className="px-3 py-1 text-lg bg-[#2d2d2d] text-white hover:bg-[#3f3f3f] rounded-lg"
                        >
                            –
                        </button>
                        <span className="text-lg">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-3 py-1 text-lg bg-[#2d2d2d] text-white hover:bg-[#3f3f3f] rounded-lg"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <button
                        onClick={handleAddToCart}
                        className={`w-full py-2 rounded-xl font-semibold transition-all duration-300 ${
                            hideSizes || selectedSize
                                ? "bg-[#4ade80] text-black hover:bg-[#22c55e]"
                                : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                        disabled={!hideSizes && !selectedSize}
                    >
                        {hideSizes
                            ? `Add ${quantity}x to Cart`
                            : selectedSize
                                ? `Add ${quantity}x Size ${selectedSize}`
                                : "Select Size"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
