"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = React.useState(false);
  const pathname = usePathname();
  const aboutDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        // Remove the setIsAboutOpen line since we don't use it anymore
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
    // Remove the setIsAboutOpen line
  }, [pathname]);

  const aboutServices = {
    physiotherapy: [
      { href: '/services/aged-care-physiotherapy', label: 'Aged Care Physiotherapy' },
      { href: '/services/neuro-physiotherapy', label: 'Neuro Physiotherapy' },
      { href: '/services/hydrotherapy', label: 'Hydrotherapy' },
      { href: '/services/paediatric-physiotherapy', label: 'Paediatric Physiotherapy' },
      { href: '/services/post-hospital-rehab', label: 'Post Hospital Rehabilitation' },
    ],
    occupationalTherapy: [
      { href: '/services/daily-living-skills', label: 'Daily Living Skills' },
      { href: '/services/school-readiness', label: 'School Readiness' },
      { href: '/services/sensory-modulation', label: 'Sensory Modulation' },
    ],
  };

  // Shared styles
  const styles = {
    underlineAnimation: `relative text-base xl:text-lg 3xl:text-xl after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-bgcolour after:left-0 after:bottom-0 after:transition-transform after:duration-300 after:origin-left`,
    getUnderlineState: (isActive: boolean) => 
      `${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100`,
    contactButton: `px-6 py-2 rounded-full bg-bgcolour text-black hover:bg-opacity-90 transition-all duration-300`,
    getContactButtonState: (isActive: boolean) =>
      `${isActive ? 'bg-opacity-90' : ''}`,
    mobileLink: (isActive: boolean) =>
      `block ${isActive ? 'text-gray-600' : ''}`,
  };

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
      className={`px-6 py-2 rounded-full bg-bgcolour text-black hover:bg-opacity-90 transition-all duration-300 ${pathname === '/contact' ? 'bg-opacity-90' : ''}`}
    >
      Contact Us
    </Link>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300 ${
        isScrolled ? 'bg-white/75 backdrop-blur-sm' : 'bg-[cardcolour]'
      }`}>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-8">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex items-center space-x-8">
            <Link 
              href="/"
              className={`${styles.underlineAnimation} ${styles.getUnderlineState(pathname === '/')}`}
            >
              Home
            </Link>

            <Link 
              href="/team"
              className={`${styles.underlineAnimation} ${styles.getUnderlineState(pathname === '/team')}`}
            >
              About Us
            </Link>

            {/* About Dropdown */}
            <div ref={aboutDropdownRef} className="relative group">
              <Link
                href="/about"
                className={`flex items-center gap-1 ${styles.underlineAnimation} ${styles.getUnderlineState(pathname.startsWith('/about'))}`}
              >
                Our Services
                <ChevronDown className={`h-4 w-4 transition-transform group-hover:rotate-180`} />
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-cardcolour rounded-lg shadow-lg py-2 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="px-4 py-2 font-bold text-sm text-black">Physiotherapy</div>
                {aboutServices.physiotherapy.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {service.label}
                  </Link>
                ))}
                <div className="px-4 py-2 font-bold text-sm text-black">Occupational Therapy</div>
                {aboutServices.occupationalTherapy.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/referral-form"
              className={`${styles.underlineAnimation} ${styles.getUnderlineState(pathname === '/referral-form')}`}
            >
              Referral Form
            </Link>

            <Link 
              href="/contact"
              className={`${styles.underlineAnimation} ${styles.getUnderlineState(pathname === '/contact')}`}
            >
              Contact
            </Link>
          </div>

          <ContactButton />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex px-4 pt-3">
          <div className="w-1/4">
            <Logo />
          </div>
          
          <div className="w-1/2 flex justify-center items-center">
            <Link 
              href="/contact"
              className={`${styles.contactButton} text-white text-base font-medium shadow-sm ${styles.getContactButtonState(pathname === '/contact')}`}
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
          className={`md:hidden absolute w-full bg-cardcolour transition-all duration-300 ease-in-out backdrop-blur-md ${
            isOpen
              ? 'translate-y-0 opacity-100 visible'
              : 'translate-y-[-10px] opacity-0 invisible'
          }`}
        >
          <div className="px-8 py-4 space-y-4">
            <Link 
              href="/"
              className={styles.mobileLink(pathname === '/')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link 
              href="/team"
              className={styles.mobileLink(pathname === '/team')}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile About Section */}
            <div>
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className={`w-full flex items-center justify-between ${styles.mobileLink(pathname.startsWith('/about'))}`}
              >
                <span>Our Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                isMobileAboutOpen ? 'max-h-[500px]' : 'max-h-0'
              }`}>
                <Link
                  href="/about"
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Overview
                </Link>
                
                <div className="font-semibold text-sm text-gray-500 py-2">Physiotherapy</div>
                {aboutServices.physiotherapy.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
                
                <div className="font-semibold text-sm text-gray-500 py-2">Occupational Therapy</div>
                {aboutServices.occupationalTherapy.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/referral-form"
              className={styles.mobileLink(pathname === '/referral-form')}
              onClick={() => setIsOpen(false)}
            >
              Referral Form
            </Link>

            <Link 
              href="/contact"
              className={styles.mobileLink(pathname === '/contact')}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-[100px] bg-cardcolour"></div>
    </>
  );
};

export default Navigation;
