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
    0: 'bg-[#FDCFB4]',    // Header section
    1: 'bg-[#FDCFB4]',    // Physiotherapy section
    2: 'bg-[#FDCFB4]',    // Occupational Therapy section
    3: 'bg-[#FFB9A3]',    // Footer
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // MD breakpoint in Tailwind
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
        threshold: isMobile ? 0.3 : 0.7, // Lower threshold for mobile, higher for desktop
      }
    );

    // Add window resize listener to update observer on screen size changes
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      observer.disconnect();
      
      // Recreate observer with new threshold
      const newObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionIndex = sectionRefs.current.findIndex(ref => ref === entry.target);
              setCurrentBgColor(sectionBackgrounds[sectionIndex]);
            }
          });
        },
        {
          threshold: isMobile ? 0.3 : 0.7,
        }
      );

      sectionRefs.current.forEach((section) => {
        if (section) newObserver.observe(section);
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Initial observation
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const physiotherapyServices = [
    {
      title: "Aged Care Physiotherapy",
      description: "Aged care physiotherapy helps older adults maintain mobility, independence, and quality of life at home. Lume Health provides home-based therapy for safety, pain management, and personalized care. We treat conditions like arthritis, stroke, Parkinson’s, and mobility decline to support active aging.",
      link: "/services/home-visits",
      imageSrc: "/images/about/physio/aged-care.png",
      imageAlt: "Aged Care Physiotherapy illustration"
    },
    {
      title: "Neuro Physiotherapy",
      description: "Neurological physiotherapy enhances mobility, function, and quality of life for those with neurological conditions. Lume Health provides home-based therapy, ensuring safe, tailored care in familiar environments while involving family support. We treat conditions like stroke, spinal cord injury, MS, and Parkinson’s disease.",
      link: "/services/rehabilitation",
      imageSrc: "/images/about/physio/neuro.png",
      imageAlt: "Neuro Physiotherapy illustration"
    },
    {
      title: "Hydrotherapy",
      description: "Hydrotherapy uses warm water to support movement, reduce joint stress, and aid rehabilitation. Lume Health offers tailored aquatic therapy to improve mobility, strength, and pain management, especially for those struggling with land-based exercises. Ideal for conditions like arthritis, post-surgery recovery, neurological disorders, and spinal cord injuries.",
      link: "/services/hydrotherapy",
      imageSrc: "/images/about/physio/hydro.png",
      imageAlt: "Hydrotherapy illustration"
    },
    {
      title: "Paediatric Physiotherapy",
      description: "Paediatric physiotherapy supports children’s movement, strength, and development through early intervention. Lume Health offers home-based therapy for comfort, real-life skill-building, and family involvement. We treat conditions like cerebral palsy, developmental delays, muscular dystrophy, and coordination disorders, helping children reach their full potential.",
      link: "/services/paediatric-physiotherapy",
      imageSrc: "/images/about/physio/paediatric.png",
      imageAlt: "Pediatric Physiotherapy illustration"
    },
    {
      title: "Post Hospital Rehabilitation",
      description: "Post-hospital rehab restores strength, mobility, and independence after surgery, illness, or injury. Lume Health provides home-based therapy for comfort, tailored recovery, and family involvement. We treat conditions like joint replacements, stroke, cardiac issues, and major trauma to support a safe, effective return to daily life.",
      link: "/services/post-hospital-rehab",
      imageSrc: "/images/about/physio/post-hospital.png", 
      imageAlt: "Post Hospital Rehabilitation illustration"
    }
  ];

  const occupationalTherapyServices = [
    {
      title: "Daily Living skills",
      description: "Lume Health's occupational therapy services focus on helping children develop essential daily living skills. From personal care tasks such as dressing, toileting and feeding, we prioritise independence and implement tailored interventions that support children in building confidence and self-sufficiency in their everyday routines.",
      link: "/services/daily-living",
      imageSrc: "/images/about/occupational-therapy/daily-living-skills.png",
      imageAlt: "Daily living skills illustration"
    },
    {
      title: "School Readiness",
      description: "Our occupational therapist provides school readiness skills to prepare children for school transition and developing key skills such as fine motor development, attention, social interaction, and following instructions. We provide individualized strategies to ensure children are ready to thrive in an academic setting.",
      link: "/services/school-readiness",
      imageSrc: "/images/about/occupational-therapy/school-readiness.png",
      imageAlt: "School readiness illustration"
    },
    {
      title: "Sensory Modulation",
      description: "We help children manage and respond to sensory input through personalised sensory processing interventions. Our occupational therapists design strategies to help children regulate sensory experiences, improving their ability to engage in daily activities, focus at school, and participate in social environments.",
      link: "/services/sensory-modulation",
      imageSrc: "/images/about/occupational-therapy/sensory-modulation.png",
      imageAlt: "Sensory processing illustration"
    }
  ];

  const ServiceCard = ({ title, description, link, imageSrc, imageAlt }: ServiceCardProps) => (
    <Link href={link}>
      <div className="relative rounded-3xl bg-cardcolour hover:bg-[#FFB9A3] duration-300 ease-in-out cursor-pointer group border border-gray-400">
        <div className="w-full h-full">
          <div className="w-full h-full aspect-[4/3] relative rounded-t-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          {/* Regular view */}
          <div className="card__info p-6">
            <h3 className="text-xl font-body font-semibold text-center">{title}</h3>
          </div>
          {/* Hover view */}
          <div className="absolute inset-0 bg-cardcolour rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 flex flex-col justify-center">
            {/* <h3 className="text-xl font-body font-semibold mb-4 text-center">{title}</h3> */}
            <p className="text-gray-600 text-lg lg:text-lg text-center">{description}</p>
          </div>
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
          <h1 className="text-3xl md:text-4xl font-body leading-tight mt-3">
            About our Services
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