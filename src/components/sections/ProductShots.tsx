"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

interface ProductShotsProps {
  images?: string[]
  children?: React.ReactNode
}

export function ProductShots({ images, children }: ProductShotsProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            See it in action
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            Experience the power of modern procurement with our intuitive interface
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {children ? (
            <div className="rounded-lg overflow-hidden shadow-2 bg-bg">
              {children}
            </div>
          ) : images && images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-2 bg-muted aspect-video flex items-center justify-center"
                >
                  <span className="text-subtle">Product Screenshot {index + 1}</span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: num * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-2 bg-muted aspect-video flex items-center justify-center"
                >
                  <span className="text-subtle">Product Screenshot {num}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
