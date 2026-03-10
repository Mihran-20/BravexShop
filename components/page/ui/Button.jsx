import React from 'react';

const Button = ({ children = "Login", disabled = false, ...props }) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`w-full px-6 py-3 rounded-lg text-lg font-semibold transform transition-all duration-300
                ${disabled
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-[#ffc26f] to-[#d18e42] text-black hover:scale-105 shadow-lg"
            }`}
        >
            {children}
        </button>
    );
};


export default Button;
