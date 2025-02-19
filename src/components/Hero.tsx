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
        className={`relative w-[90%] xl:py-3 lg:py-2.5 md:py-2 py-1.5 ${buttonStyles[style].bgColor} ${buttonStyles[style].textColor} rounded-full font-semibold flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden group`}
      >
        <span className={`absolute inset-0 ${buttonStyles[style].hoverBgColor} scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center`} />
        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
          <Icon className="lg:text-[1.2vw] md:text-[1.4vw] sm:text-[1.8vw] text-[3.5vw]" />
          <p className="lg:text-[1vw] md:text-[1.2vw] sm:text-[1.6vw] text-[3.5vw]">{children}</p>
        </span>
      </motion.button>
    </Link>
  );
};

const Hero = () => {
  return (
    <section className="h-[calc(100vh-400px)] p-2 md:p-6 pt-4 md:pt-6">
      <div className="h-full max-w-[80%] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-3 md:p-6 flex flex-col">
        <div className="h-full px-4 lg:px-8 py-2 md:py-4 flex flex-col">
          <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6">

            {/* Text Content */}
            <div className="px-2 flex flex-col">
              {/* Heading tagline */}
              <h1 className={`3xl:text-[2.8vw] lg:text-[3.2vw] md:text-[3vw] text-[7vw] font-heading mb-2 md:mb-3 text-center ${styles.tagline}`}>
                Quality Allied <span className="hidden"><br /></span> Health Services, <br /> Right at <span className="hidden"><br /></span> Your Door.
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 text-[3.5vw] sm:text-[2.2vw] md:text-[1.6vw] lg:text-[1.3vw] xl:text-[1.2vw] leading-[1.4] 3xl:text-[1vw] font-body text-center">
                Lume Health offers mobile allied health services throughout Melbourne, catering to all ages and stages of life.
              </p>

            </div>

            {/* Image */}
            <div className="relative px-2 flex justify-center items-center">
              <Image 
                src="/images/nat-hero-cropped-2.PNG" 
                alt="Mortgage consultation illustration"
                width={1000}
                height={600}
                className="mx-auto rounded-xl w-[280px] h-[220px] sm:w-[600px] sm:h-[400px] md:w-[450px] md:h-[300px] lg:w-[550px] lg:h-[380px] xl:w-[600px] xl:h-[420px] 2xl:w-[700px] 2xl:h-[480px] 3xl:w-[650px] 3xl:h-[460px] object-cover"
              />
            </div>
            
          </div>

          {/* Buttons */}
          <div className="grid sm:grid-cols-3 gap-3 md:gap-6 mt-2 md:mt-4 px-2 pb-2">
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
