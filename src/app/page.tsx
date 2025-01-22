"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import ClientsWeSee from "@/components/ClientsWeSee";
import ClientsWeSeeX from "@/components/ClientsWeSeeX";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-bgcolour');

  const sectionBackgrounds: { [key: number]: string } = {
    0: 'bg-bgcolour',     // Hero
    1: 'bg-bgdarkcolour', // MeetTheTeam
    2: 'bg-slate-100',    // OurServices
    3: 'bg-bgdarkcolour', // ClientsWeSee
    4: 'bg-white',        // Logos
    5: 'bg-gray-900',     // Footer
  };

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
        threshold: 0.8,
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
        <ClientsWeSee />
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
