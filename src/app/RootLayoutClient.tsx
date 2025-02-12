'use client';

import Navigation from "@/components/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import VideoIntro from "@/components/VideoIntro";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {isHomePage && <VideoIntro />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isHomePage ? 2 : 0, duration: 5 }}
        className="relative z-50 bg-[#FFE7DF]"
      >
        <Navigation />
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
        <SpeedInsights />
      </motion.div>
    </>
  );
} 