import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWheelchair, FaUserFriends } from 'react-icons/fa';
import styles from '../styles/Hero.module.css';

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
        className={`relative w-[90%] xl:py-4 lg:py-3 md:py-2 py-2 ${buttonStyles[style].bgColor} ${buttonStyles[style].textColor} rounded-full font-semibold flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden group`}
      >
        <span className={`absolute inset-0 ${buttonStyles[style].hoverBgColor} scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center`} />
        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
          <Icon className="lg:text-[1.5vw] md:text-[1.6vw] sm:text-[2vw] text-[3vw]" />
          <p className="lg:text-[1.2vw] md:text-[1.4vw] sm:text-[2vw] text-[3vw]">{children}</p>
        </span>
      </motion.button>
    </Link>
  );
};

const Hero = () => {
  return (
    <section className="p-2 md:p-6 lg:p-8 pt-6 md:pt-10 3xl:min-h-screen">
      <div className="mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-3 md:p-6 flex flex-col md:max-h-[85vw] md:max-w-[70vw] ">
        <div className="px-4 lg:px-8 py-3 md:py-5 flex flex-col justify-between">
          <div className="grid md:grid-cols-2 gap-4 md:gap-0">
            {/* Left Content */}
            
            <div className="px-2 xl:mt-15 lg:mt-4 flex flex-col">
              <h1 className={`lg:text-[3.7vw] md:text-[3.4vw] text-[5vw] font-heading mb-4 md:mb-11 text-center md:text-left ${styles.tagline}`}>
                Quality Allied <span className="hidden md:inline"><br /></span> Health Services, <br /> Right at <span className="hidden md:inline"><br /></span> Your Door.
              </h1>
              <p className="text-gray-600 lg:text-[1.2vw] text-[2.4vw] md:text-[1.5vw] leading-[1.5] font-body text-center md:text-left">
                Lume Health offers mobile allied health services throughout Melbourne, catering to all ages and stages of life.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative px-2">
              <Image 
                src="/images/hero-5.png" 
                alt="Mortgage consultation illustration"
                width={1000}
                height={600}
                className="w-full h-auto shrink md:shrink-0 object-cover rounded-xl md:rounded-2xl"
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="grid sm:grid-cols-3 gap-3 md:gap-8 lg:mt-16 md:mt-10 mt-4 px-2">
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
