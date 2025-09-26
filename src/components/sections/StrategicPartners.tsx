"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

const partners = [
  "Microsoft Founders Hub",
  "InvenDO", 
  "Driventure",
  "NVIDIA Inception",
  "Sterling Road"
]

export function StrategicPartners() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-12 md:py-16 bg-black border-t border-white/[0.05] mt-12 md:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em]">
            Strategic Partners & Investors
          </p>
        </motion.div>

        {/* Partners list - clean text-based design */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 md:gap-12"
              animate={{
                x: prefersReducedMotion ? 0 : ["-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex-shrink-0"
                >
                  <span className="text-sm md:text-base font-medium text-white/20 hover:text-white/40 transition-colors whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
