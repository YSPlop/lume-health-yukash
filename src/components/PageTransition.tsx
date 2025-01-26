"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;