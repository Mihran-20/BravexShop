import React from "react";

const Input = ({ text, type, register, validation, error }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[#ffc26f] font-semibold capitalize tracking-wide">
                {text}
            </label>
            <input
                type={type}
                {...register(text, validation)}
                className={`
                    px-4 py-2 rounded-xl bg-[#1f1f1f] text-white border
                    border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffc26f] focus:border-[#ffc26f]
                    transition-all duration-200 placeholder-gray-400
                    ${error ? "border-red-500" : ""}
                `}
                placeholder={`Enter your ${text}`}
            />
            {error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
