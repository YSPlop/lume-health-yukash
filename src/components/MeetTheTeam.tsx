"use client"
import React from 'react';
import Image from 'next/image';

const MeetTheTeam: React.FC = () => {
  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl md:max-w-[70vw] mx-auto">
      <div className="grid xl:grid-cols-2 gap-8 md:gap-[100px] items-center">
        {/* Team Images */}
        <div className="flex flex-row items-center justify-center xl:justify-end">
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] 2xl:w-[320px] 4xl:w-[480px] h-[225px] sm:h-[300px] md:h-[340px] lg:h-[380px] 2xl:h-[420px] 4xl:h-[580px] -mt-8 sm:-mt-12 md:-mt-16 -mr-4 sm:-mr-6 md:-mr-8 4xl:-mr-16">
            <Image
              src="/images/han.png"
              alt="Han"
              fill
              sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, (max-width: 1536px) 280px, (max-width: 2560px) 480px"
              className="object-contain"
              priority
            />  
          </div>
          {/* include more space between nat and han!!! */}
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] 2xl:w-[320px] 4xl:w-[480px] h-[225px] sm:h-[300px] md:h-[340px] lg:h-[380px] 2xl:h-[420px] 4xl:h-[580px]">
            <Image
              src="/images/natalie.png"
              alt="Nat"
              fill
              sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 280px, (max-width: 1920px) 280px, (max-width: 2560px) 480px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 xl:space-y-6 text-center xl:text-left">
          <h2 className="text-3xl xl:text-4xl 4xl:text-6xl font-body">
            Meet the team
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify font-body text-sm xl:text-base 4xl:text-[1.5rem] 4xl:leading-[1.25] pb-10">
            At Lume Health, our team is made up of experienced and dedicated allied health professionals passionate about providing personalised and evidence-based care. 
            With a focus on supporting individuals across all ages and needs, we work collaboratively to deliver high-quality, mobile services that make a positive impact 
            on your health and well-being.  
          </p>
          <a href = "/team">
            <button className="w-full xl:w-auto bg-cardcolour text-black px-6 4xl:px-10  py-2 4xl:py-4 rounded-full hover:bg-accentcolour hover:text-black transition-colors text-base 4xl:text-[1.5rem] 4xl:leading-[1.25]">
              Meet the team
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;