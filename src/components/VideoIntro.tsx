'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const VideoIntro = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset video state when pathname changes
    setIsVideoFinished(true);
  }, [pathname]);

  useEffect(() => {
    // Add event listener for page unload
    const handleUnload = () => {
      localStorage.removeItem('hasSeenVideo');
    };

    window.addEventListener('beforeunload', handleUnload);

    // Check if user has already seen the video
    const hasSeenVideo = localStorage.getItem('hasSeenVideo');
    const referrer = document.referrer;
    const isExternalReferrer = referrer && !referrer.includes(window.location.origin);
    
    if (hasSeenVideo || !isExternalReferrer) {
      setIsVideoFinished(true);
    } else {
      const timer = setTimeout(() => {
        setIsVideoFinished(true);
        localStorage.setItem('hasSeenVideo', 'true');
      }, 5000); // Changed to 5000ms (5 seconds)

      return () => clearTimeout(timer);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isVideoFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5 }}
          className="fixed inset-0 w-full h-full z-40 flex justify-center items-center bg-[#FFE7DF]"
        >
          <video
            autoPlay
            muted
            playsInline
            className="w-screen h-screen object-cover"
            onEnded={() => {
              setIsVideoFinished(true);
              localStorage.setItem('hasSeenVideo', 'true');
            }}
          >
            <source src="/Intro.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro; 