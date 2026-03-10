import React from "react";

const Logout = ({
                    children,
                    onClick,
                    width = "w-full",
                    height = "h-10",
                }) => (
    <button
        onClick={onClick}
        className={`${width} ${height} relative overflow-hidden rounded-xl font-semibold
                text-gray-200 ring-1 ring-white/20 backdrop-blur-sm
                bg-gradient-to-br from-transparent to-transparent
                before:absolute before:inset-0 before:-z-10
                before:bg-gradient-to-br before:from-red-600 before:to-red-500
                before:opacity-0 hover:before:opacity-100
                before:transition-opacity before:duration-300
                shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.6)]
                transition-all duration-300`}
    >
        {children}
    </button>
);

export default Logout;
