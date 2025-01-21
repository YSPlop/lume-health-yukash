import React from 'react';
import Image from 'next/image';

const MeetTheTeam: React.FC = () => {
  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Team Images */}
        <div className="flex flex-row items-center justify-center md:justify-start">
          <div className="relative w-[200px] md:w-[280px] h-[300px] md:h-[380px] -mt-16 -mr-8">
            <Image
              src="/images/Han.png"
              alt="Han"
              fill
              className="object-contain"
              priority
            />  
          </div>
          <div className="relative w-[200px] md:w-[280px] h-[300px] md:h-[380px]">
            <Image
              src="/images/Natalie.png"
              alt="Nat"
              fill
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