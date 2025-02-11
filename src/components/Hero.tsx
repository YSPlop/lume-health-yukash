import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWheelchair, FaUserFriends } from 'react-icons/fa';

const buttonStyles = {
  contact: {
    bgColor: 'bg-[#B18697]',
    textColor: 'text-white',
    hoverBgColor: 'bg-[#7D4F5E]',
    icon: FaPhoneAlt
  },
  ndis: {
    bgColor: 'bg-[#8F9F82]',
    textColor: 'text-white',
    hoverBgColor: 'bg-[#7A876E]',
    icon: FaWheelchair
  },
  private: {
    bgColor: 'bg-[#E4BBCB]',
    textColor: 'text-white',
    hoverBgColor: 'bg-[#BF7F96]',
    icon: FaUserFriends
  }
};

const HeroButton = ({ 
  href, 
  style, 
  children 
}: { 
  href: string, 
  style: keyof typeof buttonStyles, 
  children: React.ReactNode 
}) => {
  const Icon = buttonStyles[style].icon;
  return (
    <Link href={href} className="text-center">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-full px-4 md:px-8 py-3 md:py-4 ${buttonStyles[style].bgColor} ${buttonStyles[style].textColor} rounded-full font-semibold flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden group`}
      >
        <span className={`absolute inset-0 ${buttonStyles[style].hoverBgColor} scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center`} />
        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
          <Icon className="text-lg md:text-xl" />
          {children}
        </span>
      </motion.button>
    </Link>
  );
};

const Hero = () => {
  return (
    <section className="p-2 md:p-6 lg:p-8 pt-6 md:pt-10 min-h-screen">
      <div className="max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-3 md:p-6 flex flex-col">
        <div className="px-2 md:px-12 py-3 md:py-5 flex flex-col justify-between h-full">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            {/* Left Content */}
            <div className="px-2">
              <h1 className="text-3xl md:text-7xl lg:text-7xl font-heading mb-4 md:mb-8 text-center md:text-left leading-tight">
                Quality Allied Health Services, Right at Your Door.
              </h1>
              <p className="text-gray-600 text-sm md:text-lg font-body mb-2 md:mb-4 text-center md:text-left">
                Lume Health offers mobile allied health services throughout Melbourne, catering to all ages and stages of life.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative px-2">
              <Image 
                src="/images/hero-5.png" 
                alt="Mortgage consultation illustration"
                width={500}
                height={300}
                className="w-full h-auto shrink md:shrink-0 object-cover rounded-xl md:rounded-2xl"
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="grid md:grid-cols-3 gap-3 md:gap-8 mt-auto px-2">
            <HeroButton href="/contact" style="contact">
              Contact Us
            </HeroButton>
            <HeroButton href="/referral-form?type=ndis" style="ndis">
              NDIS Referral
            </HeroButton>
            <HeroButton href="/referral-form?type=private" style="private">
              Private Referral
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
