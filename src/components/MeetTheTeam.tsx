import React from 'react';
import Image from 'next/image';

const MeetTheTeam: React.FC = () => {
  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Team Images */}
        <div className="flex flex-row items-center justify-center md:justify-start">
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] h-[225px] sm:h-[300px] md:h-[340px] lg:h-[380px] -mt-8 sm:-mt-12 md:-mt-16 -mr-4 sm:-mr-6 md:-mr-8">
            <Image
              src="/images/han.png"
              alt="Han"
              fill
              sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 280px"
              className="object-contain"
              priority
            />  
          </div>
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] h-[225px] sm:h-[300px] md:h-[340px] lg:h-[380px]">
            <Image
              src="/images/natalie.png"
              alt="Nat"
              fill
              sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 280px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <span className="text-textcolour font-heading text-sm md:text-base">Meet the Team</span>
          <h2 className="text-3xl md:text-4xl font-body leading-tight">
            Our Talented and Experienced Team
          </h2>
          <p className="text-gray-600 leading-relaxed font-body text-sm md:text-base">
            At fundsmate, we work hard to secure the best possible outcomes for our customers. 
            Our experienced team cooperates to guarantee that you have a top-notch experience.
          </p>
          <button className="w-full md:w-auto bg-cardcolour text-black px-6 py-3 rounded-full hover:bg-accentcolour hover:text-black transition-colors">
            Meet the team
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;