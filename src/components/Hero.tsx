import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const stats = [
    {
      value: '24k',
      label: 'Number of successful loan origination through data-driven approach'
    },
    {
      value: '80%',
      label: 'Cost savings due to the implementation of AI in loan origination process'
    },
    {
      value: '9/10',
      label: 'Customer satisfaction score. Our users report that they feel heard, understood, and supported.'
    }
  ];

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-cardcolour backdrop-blur-sm p-4 md:p-6">
        <div className="px-12 py-5">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="px-2">
              <span className="text-purple-700 font-medium mb-4 block">About Us</span>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                Transforming mortgage origination through data-driven innovation
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                Our mortgage origination company is committed to providing a seamless and stress-free experience for our clients. To achieve this goal, we utilize cutting-edge artificial intelligence tools at every step of the mortgage process.
              </p>
              <p className="text-gray-600 text-sm">
                These tools help us to streamline the process and significantly reduce cycle time, allowing you to secure your mortgage quickly and efficiently. By leveraging advanced technology, we can offer a hassle-free experience that saves you time and effort.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative px-2">
              <Image 
                src="/images/hero.png" 
                alt="Mortgage consultation illustration"
                width={500}
                height={300}
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 px-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-textcolour text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
