"use client";

import Footer from "@/components/Footer";
{/*import Form from "@/components/Form";*/}
import FormSwipe from "@/components/FormSwipe";
import { useRef, useState, useEffect } from 'react';
const ReferralFormPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-[#FFE7DF]');

  const sectionBackgrounds: { [key: number]: string } = {
    0: 'bg-[#FFE7DF]',    // Form section
    1: 'bg-[#FFB9A3]',    // Footer
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
    <main className={`min-h-screen transition-colors duration-700 ${currentBgColor}`}>
      <section
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[0] = el;
        }}
      >
        <FormSwipe />
      </section>
      
      <section
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[1] = el;
        }}
      >
        <Footer />
      </section>
    </main>
  );
};

export default ReferralFormPage; 