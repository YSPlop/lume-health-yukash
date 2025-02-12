'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoIntro = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  useEffect(() => {
    // Check if user has already seen the video
    const hasSeenVideo = localStorage.getItem('hasSeenVideo');
    
    if (hasSeenVideo) {
      setIsVideoFinished(true);
    } else {
      const timer = setTimeout(() => {
        setIsVideoFinished(true);
        // Set flag in localStorage after video finishes
        localStorage.setItem('hasSeenVideo', 'true');
      }, 4000); // Adjust this time to match your video duration

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {!isVideoFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 w-full h-full z-50 bg-cardcolour flex justify-center items-center"
        >
          <video
            autoPlay
            muted
            playsInline
            className="w-[80vw] h-[80vh] object-contain"
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