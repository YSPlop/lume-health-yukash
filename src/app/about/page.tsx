"use client";

import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

const About = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-[#FFE7DF]');

  const sectionBackgrounds: { [key: number]: string } = {
    0: 'bg-[#FFE7DF]',    // Header section
    1: 'bg-[#FFE7DF]',    // Physiotherapy section
    2: 'bg-[#FFE7DF]',    // Occupational Therapy section
    3: 'bg-[#FFB9A3]',    // Footer
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.current.findIndex(ref => ref === entry.target);
            setCurrentBgColor(sectionBackgrounds[sectionIndex]);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const physiotherapyServices = [
    {
      title: "Home Visits",
      description: "Personalized physiotherapy care in the comfort of your home",
      link: "/services/home-visits",
      imageSrc: "/images/dog.jpg",
      imageAlt: "Home visits illustration"
    },
    {
      title: "Rehabilitation",
      description: "Comprehensive rehabilitation programs for various conditions",
      link: "/services/rehabilitation",
      imageSrc: "/images/dog.jpg",
      imageAlt: "Rehabilitation illustration"
    },
    {
      title: "Pain Management",
      description: "Expert techniques for chronic and acute pain relief",
      link: "/services/pain-management",
      imageSrc: "/images/dog.jpg",
      imageAlt: "Pain management illustration"
    }
  ];

  const occupationalTherapyServices = [
    {
      title: "Home Modifications",
      description: "Assessments and recommendations for safer living spaces",
      link: "/services/home-modifications",
      imageSrc: "/images/dog.jpg",
      imageAlt: "Home modifications illustration"
    },
    {
      title: "Daily Living Skills",
      description: "Support in developing independence in everyday activities",
      link: "/services/daily-living",
      imageSrc: "/images/dog.jpg",
      imageAlt: "Daily living skills illustration"
    },
    {
      title: "Assistive Technology",
      description: "Recommendations and training for supportive equipment",
      link: "/services/assistive-tech",
      imageSrc: "/images/dog.jpg",
      imageAlt: "Assistive technology illustration"
    }
  ];

  const ServiceCard = ({ title, description, link, imageSrc, imageAlt }: ServiceCardProps) => (
    <Link href={link}>
      <div className="pb-6 rounded-3xl bg-cardcolour hover:bg-[#FFB9A3] hover:border hover:border-cardcolour duration-300 ease-in-out cursor-pointer h-full">
        <div className="flex flex-col h-full">
          <div className="w-full aspect-[4/1.5] relative mb-4 rounded-t-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-body font-semibold mb-4 text-center px-6">{title}</h3>
          <p className="text-gray-600 text-sm text-center px-6">{description}</p>
        </div>
      </div>
    </Link>
  );

  return (
    <main className={`w-full min-h-screen transition-colors duration-700 ${currentBgColor}`}>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[0] = el;
        }}
        className="py-8 px-4 mx-auto max-w-7xl"
      >
        <div className="text-center mb-12">
          <span className="text-textcolour font-heading text-sm md:text-base">About Our Services</span>
          <h1 className="text-3xl md:text-4xl font-body leading-tight mt-3">
            Comprehensive NDIS Support Services
          </h1>
        </div>
      </section>

      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[1] = el;
        }}
        className="mb-16"
      >
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-body font-semibold mb-8">Physiotherapy Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {physiotherapyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[2] = el;
        }}
        className="mb-16"
      >
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-body font-semibold mb-8">Occupational Therapy Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {occupationalTherapyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[3] = el;
        }}
      >
        <Footer />
      </section>
    </main>
  );
};

export default About;