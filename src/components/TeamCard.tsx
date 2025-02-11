'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHeart, FaBriefcase } from "react-icons/fa";

interface TeamProps {
    name: string;
    qualifications: string[];
    role: string;
    interests: string[];
    description: {
        professional: string;
        personal?: string;
    };
    image: string;
    switchCard: boolean;
}

const TeamCard = ({
    name, 
    qualifications, 
    role, 
    interests, 
    description, 
    image, 
    switchCard
}: TeamProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[1200px] mx-auto bg-cardcolour p-8 flex flex-col lg:flex-row gap-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <motion.div 
                className={`lg:w-1/3 flex flex-col justify-between items-center ${switchCard ? "lg:order-1" : "lg:order-1"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-full h-[400px] relative rounded-2xl overflow-hidden mb-4">
                    <Image 
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                    />
                </div>
                <div className="w-full bg-[#FFF5F2] p-4 rounded-lg border border-[#FFB9A3]">
                    <div className="flex items-center gap-2 mb-2">
                        <FaHeart className="text-[#FFB9A3] text-xl" />
                        <p className="font-semibold">Interests</p>
                    </div>
                    <p>{interests.join(", ")}</p>
                </div>
            </motion.div>
            
            <div className={`lg:w-2/3 flex flex-col justify-between ${switchCard ? "lg:order-1" : "lg:order-2"}`}>
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl font-heading leading-tight mb-2"
                    >
                        {name}
                    </motion.h1>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2">
                            <FaBriefcase className="text-[#FFB9A3] text-xl" />
                            <p className="text-lg font-semibold text-gray-800 font-body">{role}</p>
                        </div>
                    </div>

                    <div className="space-y-4 text-gray-700 mb-8 leading-relaxed font-body">
                        <p>{description.professional}</p>
                        
                        {description.personal && (
                            <p className="italic text-gray-600">{description.personal}</p>
                        )}
                    </div>
                </div>

                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FFB9A3] text-black px-8 py-3 rounded-full hover:bg-[#FFA787] transition-colors w-fit font-body border border-textcolour"
                >
                    Book Appointment
                </motion.button>
            </div>
        </motion.div>
    )
}

export default TeamCard;