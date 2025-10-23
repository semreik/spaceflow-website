"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { TourModal } from "@/components/ui/TourModal"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [showTourModal, setShowTourModal] = React.useState(false)

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-bg overflow-hidden pt-16 md:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main headline with pop animation */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.6, -0.05, 0.01, 0.99],
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-3 md:mb-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
              Intelligent Procurement
              <span className="block">Orchestration</span>
            </h1>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-base sm:text-lg md:text-xl text-subtle mb-6 md:mb-8 max-w-3xl mx-auto text-center px-4"
          >
            Streamline requests, embed visibility, and empower smarter sourcing 
            with AI-driven procurement flows.
          </motion.p>



          {/* CTA Button */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex justify-center mt-6 md:mt-8"
          >
            <Button 
              size="lg" 
              className="min-w-[200px] bg-accent text-accent-contrast hover:bg-accent/90"
              onClick={() => setShowTourModal(true)}
            >
              Tour SpaceFlow
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Tour Modal */}
      <TourModal isOpen={showTourModal} onClose={() => setShowTourModal(false)} />
    </section>
  )
}
