import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalClasses = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed inset-0 md:-mt-10 z-10 transition-transform duration-300 transform ${modalClasses}`}
    >
      <div className="absolute inset-0"></div>
      <div className="flex justify-end items-end h-screen">
        <div className="relative bg-white mb-10 p-6 rounded-lg z-20 shadow-md">
          {children}
          <button
            onClick={closeModal}
            className="absolute -top-4 md:top-0 right-0 p-10 -m-1 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
