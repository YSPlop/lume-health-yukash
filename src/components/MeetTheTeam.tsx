import React from 'react';
import Image from 'next/image';

const MeetTheTeam: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Team Images */}
        <div className="flex items-center">
          <div className="relative w-[280px] h-[380px] -mr-8 -mt-16">
            <Image
              src="/images/han.png" // Replace with your first capsule image
              alt="Team member with coffee mug"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[280px] h-[380px]">
            <Image
              src="/images/natalie.png" // Replace with your second capsule image
              alt="Team member in white blazer"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <span className="text-purple-600 font-medium">Meet the Team</span>
          <h2 className="text-4xl font-serif leading-tight">
            Our Talented and Experienced Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At fundsmate, we work hard to secure the best possible outcomes for our customers. 
            Our experienced team cooperates to guarantee that you have a top-notch experience.
          </p>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors">
            Meet the team
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;