import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWheelchair, FaUserFriends } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="p-2 md:p-6 lg:p-8 pt-6 md:pt-10 min-h-screen">
      <div className="max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-3 md:p-6 min-h-[75vh]">
        <div className="px-2 md:px-12 py-3 md:py-5 flex flex-col justify-center h-full">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            {/* Left Content */}
            <div className="px-2">
              {/* <span className="text-textcolour font-heading mb-2 md:mb-4 block text-center md:text-left">About Us</span> */}
              <h1 className="text-2xl md:text-5xl font-heading mb-3 md:mb-6 text-center md:text-left">
                Quality Allied Health Services, Right at Your Door.
              </h1>
              <p className="text-gray-600 text-xs md:text-sm font-body mb-2 md:mb-4 text-center md:text-left">
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
          <div className="grid md:grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-16 px-2">
            <Link href="/contact" className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full px-4 md:px-8 py-3 md:py-4 bg-blue-100 text-blue-600 rounded-full font-semibold flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden group"
              >
                <span className="absolute inset-0 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
                  <FaPhoneAlt className="text-lg md:text-xl" />
                  Contact Us
                </span>
              </motion.button>
            </Link>
            <Link href="/referral-form?type=ndis" className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full px-4 md:px-8 py-3 md:py-4 bg-green-100 text-green-600 rounded-full font-semibold flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden group"
              >
                <span className="absolute inset-0 bg-green-500 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
                  <FaWheelchair className="text-lg md:text-xl" />
                  NDIS Referral
                </span>
              </motion.button>
            </Link>
            <Link href="/referral-form?type=private" className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full px-4 md:px-8 py-3 md:py-4 bg-purple-100 text-purple-600 rounded-full font-semibold flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden group"
              >
                <span className="absolute inset-0 bg-purple-500 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
                  <FaUserFriends className="text-lg md:text-xl" />
                  Private Referral
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
