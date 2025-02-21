import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWheelchair, FaUserFriends } from 'react-icons/fa';
import Image from 'next/image';

// Button styles control
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

// Button padding controls
const buttonPaddingY = `
    py-2
    sm:py-3
    md:py-2
    lg:py-4
    xl:py-5
`;

const buttonSizeClassName = `
    text-[3.5vw]
    sm:text-[2.3vw]
    md:text-[2vw]
    lg:text-[1.6vw]
    xl:text-[1.2vw]
`;
// This is always +0.2 of the buttonSizeClassName
const iconSizeClassName = `
    text-[3.2vw]
    sm:text-[2.5vw]
    md:text-[2.2vw]
    lg:text-[1.8vw]
    xl:text-[1.2vw]
`;

// Main component styles control
const headingSizeClassName = `
    text-[6vw]
    sm:text-[4.5vw]
    md:text-[5vw]
    lg:text-[4.5vw]
    xl:text-7xl
`;
const paragraphSizeClassName = `
    text-[3.8vw]
    sm:text-[3.5vw]
    md:text-[4vw]
    lg:text-2xl
    xl:text-2xl
`;
const imageSizeClassName = `
    w-[80%]
    sm:w-[70%]
    md:w-[60%]
    lg:w-[80%]
    xl:w-[45%]
    2xl:w-[35%]
    3xl:w-[40%]
`;



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
        <Link href={href} className="flex-1 w-full">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                    relative
                    w-full
                    ${buttonPaddingY}
                    ${buttonStyles[style].bgColor} ${buttonStyles[style].textColor} 
                    rounded-full
                    font-semibold
                    flex items-center justify-center
                    gap-2
                    text-sm md:text-base
                    `
                }
            >
                <span className={`absolute inset-0 ${buttonStyles[style].hoverBgColor} scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center`} />
                <span className={`
                    relative
                    z-10 flex
                    items-center justify-center
                    gap-2
                    group-hover:text-white
                    transition-colors
                    duration-500
                    ease-out
                    `
                }>
                    <Icon className={`${iconSizeClassName}`} />
                    <p className={`${buttonSizeClassName}`}>{children}</p>
                </span>
            </motion.button>
        </Link>
    );
};

const HeroX = () => {

    return (
        <section className="min-h-[calc(100vh-100px)] sm:min-h-full xl:min-h-[calc(100vh-100px)] p-2 md:p-6 pt-4 md:pt-6">
            <div className="min-h-full lg:max-w-[90%] mx-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-3 md:p-6">
                <div className="px-4 lg:px-8 py-2 md:py-4">
                    <div className="flex flex-col justify-center">
                        <div className="px-2 flex flex-col">
                            <h1 className={`text-center font-heading ${headingSizeClassName}`}>
                                Quality Allied Health Services, <br /> Right at Your Door.
                            </h1>
                            <p className={`pt-5 lg:pt-10 lg:pb-10 pb-5 text-gray-600 font-body text-center ${paragraphSizeClassName}`}>
                                Lume Health offers mobile allied health services throughout Melbourne, catering to all ages and stages of life.
                            </p>
                            <Image
                                src="/images/nat-hero-cropped-2.PNG"
                                alt="Mortgage consultation illustration"
                                width={1000}
                                height={1000}
                                className={`mx-auto ${imageSizeClassName}`}
                            />
                            <div className="flex flex-col xl:flex-row justify-evenly items-center w-full lg:max-w-none mx-auto lg:mx-0 gap-3 md:gap-6 mt-2 md:mt-4">
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
                </div>
            </div>
        </section>
    );
};

export default HeroX;