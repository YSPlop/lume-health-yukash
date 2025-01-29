import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWheelchair, FaUserFriends } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="p-2 md:p-6 lg:p-8 pt-6 md:pt-10 min-h-screen">
      <div className="max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-3 md:p-6 min-h-[85vh]">
        <div className="px-2 md:px-12 py-3 md:py-5">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            {/* Left Content */}
            <div className="px-2">
              {/* <span className="text-textcolour font-heading mb-2 md:mb-4 block text-center md:text-left">About Us</span> */}
              <h1 className="text-3xl md:text-5xl font-heading mb-3 md:mb-6 text-center md:text-left">
                Quality Allied Health Services, Right at Your Door.
              </h1>
              <p className="text-gray-600 text-xs md:text-sm font-body mb-2 md:mb-4 text-center md:text-left">
                Our mortgage origination company is committed to providing a seamless and stress-free experience for our clients. To achieve this goal, we utilize cutting-edge artificial intelligence tools at every step of the mortgage process.
              </p>
              <p className="text-gray-600 text-xs md:text-sm font-body text-center md:text-left">
                These tools help us to streamline the process and significantly reduce cycle time, allowing you to secure your mortgage quickly and efficiently. By leveraging advanced technology, we can offer a hassle-free experience that saves you time and effort.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative px-2">
              <Image 
                src="/images/hero-2.png" 
                alt="Mortgage consultation illustration"
                width={500}
                height={300}
                className="w-full h-[300px] md:h-auto object-cover rounded-xl md:rounded-2xl"
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="grid md:grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-16 px-2">
            <Link href="/contact" className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 md:px-8 py-3 md:py-4 bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white rounded-full transition-colors font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaPhoneAlt className="text-lg md:text-xl" />
                Contact Us
              </motion.button>
            </Link>
            <Link href="/referral-form?type=ndis" className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 md:px-8 py-3 md:py-4 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white rounded-full transition-colors font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaWheelchair className="text-lg md:text-xl" />
                NDIS Referral
              </motion.button>
            </Link>
            <Link href="/referral-form?type=private" className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 md:px-8 py-3 md:py-4 bg-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white rounded-full transition-colors font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaUserFriends className="text-lg md:text-xl" />
                Private Referral
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
