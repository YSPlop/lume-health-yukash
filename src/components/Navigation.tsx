"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300 ${
        isScrolled ? 'bg-white/75 backdrop-blur-sm' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={90}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <Link 
                key={href}
                href={href}
                className="relative hover:text-gray-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-cardcolour after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out backdrop-blur-md ${
            isOpen
              ? 'max-h-64 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-8 py-4 space-y-4">
            <Link href="/" className="block hover:text-gray-600">Home</Link>
            <Link href="/about" className="block hover:text-gray-600">About</Link>
            <Link href="/services" className="block hover:text-gray-600">Services</Link>
            <Link href="/contact" className="block hover:text-gray-600">Contact</Link>
          </div>
        </div>
      </nav>
      <div className="h-[100px]"></div>
    </>
  );
};

export default Navigation;
