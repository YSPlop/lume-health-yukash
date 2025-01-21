"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import Logos from "@/components/Logos";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

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
            setIsDarkBackground(sectionIndex === 1);
          }
        });
      },
      {
        threshold: 0.6,
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
    <main className={`w-full min-h-screen transition-colors duration-700 ${
      isDarkBackground ? 'bg-bgdarkcolour' : 'bg-bgcolour'
    }`}>
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
        <Logos />
      </section>
    </main>
  );
}
