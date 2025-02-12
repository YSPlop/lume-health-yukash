"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import ClientsWeSeeX from "@/components/ClientsWeSeeX";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-[#FFE7DF]');
  const [threshold, setThreshold] = useState(0.8);

  const sectionBackgrounds: Record<number, string> = useMemo(() => ({
    0: 'bg-[#FFB9A3]',     // Hero
    1: 'bg-[#FFCBA9]',     // MeetTheTeam
    2: 'bg-[#FFCBA9]',     // OurServices
    3: 'bg-[#FFCBA9]',     // ClientsWeSee
    4: 'bg-[#FDCFB4]',     // Logos (warmer)
    5: 'bg-[#FDCFB4]',     // Footer (warmer)
  }), []);

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
    const currentRefs = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = currentRefs.findIndex(ref => ref === entry.target);
            setCurrentBgColor(sectionBackgrounds[sectionIndex]);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    currentRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [threshold, sectionBackgrounds]);

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
