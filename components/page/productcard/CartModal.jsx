import React from "react";
import { useCart } from "./CartContext.jsx";

const CartModal = ({ onClose }) => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-[480px] rounded-3xl bg-[#1b1b1b]/90 text-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.8)] ring-1 ring-white/10
                      transition-all duration-300 hover:shadow-[0_12px_60px_rgba(0,0,0,0.9)]">
                {/* header */}
                <h2 className="py-4 text-center text-3xl font-extrabold tracking-wide text-brand-gold">My Basket</h2>
                <div className="px-8 pb-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-brand-primary/40">
                    {cartItems.length === 0 ? (
                        <p className="py-16 text-center text-gray-500">No items in the cart yet</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="mb-6 flex items-center gap-4 border-b border-white/10 pb-5 last:mb-0 last:border-none">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-20 rounded-2xl object-cover shadow-inner"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-400">Size – {item.size}</p>
                                    <p className="text-sm text-gray-400">Qty × {item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="rounded-full bg-red-500/20 p-2 text-red-400 transition hover:bg-red-500/40 hover:text-red-200"
                                    aria-label="remove"
                                >
                                    &#10005;
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* footer */}
                <div className="flex items-center justify-between gap-4 border-t border-white/10 px-8 py-6">
                    <button
                        onClick={onClose}
                        className="rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 px-6 py-2 font-medium text-gray-200
                       hover:from-gray-600 hover:to-gray-500 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
