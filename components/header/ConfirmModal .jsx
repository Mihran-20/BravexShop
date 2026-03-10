import React from 'react';

const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[350px] text-center">
                <h2 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h2>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
