"use client";

import React from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6"
            fill="none"
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="/" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-green-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">Home</a>
          <a href="/about" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-green-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">About</a>
          <a href="/services" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-green-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">Services</a>
          <a href="/blog" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-green-500 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">Blog</a>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute w-full bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-4 px-8 py-4">
          <a href="/" className="w-full text-center py-2">Home</a>
          <a href="/about" className="w-full text-center py-2">About</a>
          <a href="/services" className="w-full text-center py-2">Services</a>
          <a href="/blog" className="w-full text-center py-2">Blog</a>
          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
