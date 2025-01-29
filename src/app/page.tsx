"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import ClientsWeSeeX from "@/components/ClientsWeSeeX";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-bgcolour');
  const [threshold, setThreshold] = useState<number>(0.8);

  const sectionBackgrounds: { [key: number]: string } = {
    0: 'bg-[#FFB9A3]',     // Hero
    1: 'bg-[#FFD0C1]',    // MeetTheTeam
    2: 'bg-[#FFE7DF]',    // OurServices
    3: 'bg-[#FFE7DF]',    // ClientsWeSee
    4: 'bg-[#FFD0C1]',    // Logos
    5: 'bg-[#FFD0C1]',     // Footer
  };

  useEffect(() => {
    const handleResize = () => {
      // Set different threshold values based on screen width
      // Assuming mobile breakpoint is 768px
      setThreshold(window.innerWidth < 768 ? 0.3 : 0.8);
    };

    // Set initial threshold
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('translate-y-10');
            
            const sectionIndex = sectionRefs.current.findIndex(ref => ref === entry.target);
            setCurrentBgColor(sectionBackgrounds[sectionIndex]);
          }
        });
      },
      {
        threshold: threshold,
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
  }, [threshold]); // Add threshold as a dependency

  return (
    <main className={`w-full min-h-screen transition-colors duration-700 ${currentBgColor}`}>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[0] = el;
        }}
      >
        <Hero />
      </section>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[1] = el;
        }}
      >
        <MeetTheTeam />
      </section>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[2] = el;
        }}
      >
        <OurServices />
      </section>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[3] = el;
        }}
      >
        <ClientsWeSeeX />
      </section>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[4] = el;
        }}
      >
        <Logos />
      </section>

      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[5] = el;
        }}
      >
        <Footer />
      </section>
    </main>
  );
}
