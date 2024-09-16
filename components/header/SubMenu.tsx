"use client";
// components/Submenu.tsx
import { useState } from "react";

const Submenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`text-black-300 hover:text-secondary font-graphik font-black hover:outline-1 hover:text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
          isOpen ? "text-secondary" : ""
        }`}
      >
        Solutions
        <svg
          className="w-5 h-5 ml-1 inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`origin-top-right absolute outline outline-1 outline-primary right-0 mt-0 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-1">
          <a className="hover:bg-secondary font-graphik cursor-pointer hover:text-white block px-4 py-2 text-sm">
            Vendor Assessment
          </a>
          <a className="hover:bg-secondary font-graphik cursor-pointer hover:text-white block px-4 py-2 text-sm">
            Frameworks
          </a>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
