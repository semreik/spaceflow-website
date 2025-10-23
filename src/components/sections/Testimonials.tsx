"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"
import { Card, CardContent } from "@/components/ui/Card"

const testimonials = [
  {
    id: 1,
    quote: "SpaceFlow transformed our procurement process. What used to take weeks now takes days.",
    author: "Sarah Chen",
    role: "VP of Operations, TechCorp",
    rating: 5,
  },
  {
    id: 2,
    quote: "The intelligent intake system is a game-changer. It automatically routes requests to the right approvers.",
    author: "Michael Rodriguez",
    role: "Procurement Director, GlobalRetail",
    rating: 5,
  },
  {
    id: 3,
    quote: "We've reduced our procurement cycle time by 60% since implementing SpaceFlow. Incredible ROI.",
    author: "Emily Watson",
    role: "CFO, StartupHub",
    rating: 5,
  },
]

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="testimonials" className="py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Loved by procurement teams worldwide
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            See what our customers have to say about their experience with SpaceFlow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-warn"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-text mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-text">{testimonial.author}</div>
                    <div className="text-sm text-subtle">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
