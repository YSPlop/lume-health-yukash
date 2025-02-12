"use client";

import Footer from "@/components/Footer";
{/*import Form from "@/components/Form";*/}
import FormSwipe from "@/components/FormSwipe";
import { useRef, useState, useEffect, useMemo, Suspense } from 'react';

const ReferralFormPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-[#FFE7DF]');

  const sectionBackgrounds: Record<number, string> = useMemo(() => ({
    0: 'bg-[#FFCBA9]',    // Form section
    1: 'bg-[#FFB9A3]',    // Footer
  }), []);

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
        threshold: 0.8,
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
  }, [sectionBackgrounds]);

  return (
    <main className={`transition-colors duration-700 pt-10 ${currentBgColor}`}>
      <section
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[0] = el;
        }}
        className="pb-10 min-h-screen"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <FormSwipe />
        </Suspense>
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