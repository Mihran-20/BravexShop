import React from "react";

const UserProfileModal = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6 animate-fade-in">
                <h2 className="text-xl font-bold mb-4 text-center">Անձնական էջ</h2>
                <div className="space-y-3">
                    <p><span className="font-semibold">Անուն:</span> {user.name}</p>
                    <p><span className="font-semibold">Էլ․հասցե:</span> {user.email}</p>
                    <p><span className="font-semibold">Հեռախոս:</span> {user.phone || '—'}</p>
                </div>
                <button
                    className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 transition text-white py-2 rounded-lg font-semibold"
                    onClick={onClose}
                >
                    Փակել
                </button>
            </div>
        </div>
    );
};

export default UserProfileModal;
