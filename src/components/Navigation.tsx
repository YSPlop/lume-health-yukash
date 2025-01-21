"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/referral-form', label: 'Referral Form' },
    { href: '/contact', label: 'Contact' },
  ];

  const Logo = () => (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={90}
      height={30}
      className="object-contain"
    />
  );

  const ContactButton = () => (
    <Link 
      href="/contact"
      className={`px-6 py-2 rounded-full bg-bgcolour text-white hover:bg-opacity-90 transition-all duration-300 ${pathname === '/contact' ? 'bg-opacity-90' : ''}`}
    >
      Contact Us
    </Link>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300 ${
        isScrolled ? 'bg-white/75 backdrop-blur-sm' : 'bg-cardcolour'
      }`}>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-8">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex items-center space-x-8">
            {navigationLinks.map(({ href, label }) => (
              <Link 
                key={href}
                href={href}
                className={`relative hover:text-gray-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-bgcolour after:left-0 after:bottom-0 ${pathname === href ? 'after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
              >
                {label}
              </Link>
            ))}
          </div>

          <ContactButton />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex px-4 py-3">
          <div className="w-1/4">
            <Logo />
          </div>
          
          <div className="w-1/2 flex justify-center items-center">
            <Link 
              href="/contact"
              className={`px-6 py-2 rounded-full bg-bgcolour text-white hover:bg-opacity-90 transition-all duration-300 text-base font-medium shadow-sm ${pathname === '/contact' ? 'bg-opacity-90' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
          
          <div className="w-1/4 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute w-full bg-white/95 transition-all duration-300 ease-in-out backdrop-blur-md ${
            isOpen
              ? 'max-h-[500px] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="px-8 py-4 space-y-4">
            {navigationLinks.map(({ href, label }) => (
              <Link 
                key={href}
                href={href}
                className={`block hover:text-gray-600 ${pathname === href ? 'text-gray-600' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-[100px] bg-cardcolour"></div>
    </>
  );
};

export default Navigation;
