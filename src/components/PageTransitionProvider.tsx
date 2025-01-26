'use client'

import { AnimatePresence } from "framer-motion"
import PageTransition from "./PageTransition"
import { usePathname } from "next/navigation"

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={pathname}>
        {children}
      </PageTransition>
    </AnimatePresence>
  )
}
