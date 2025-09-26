"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"

const features = [
  {
    title: "Intelligent Automation",
    description: "AI-native intake guides employees through any purchase request with smart routing and automated approvals.",
    icon: "→",
    highlights: ["Smart routing", "Auto-approvals", "AI recommendations"]
  },
  {
    title: "Complete Control",
    description: "Embed governance and compliance into every purchase with configurable rules and real-time policy enforcement.",
    icon: "✓",
    highlights: ["Policy engine", "Compliance tracking", "Audit-ready"]
  },
  {
    title: "Total Visibility",
    description: "Real-time insights into spend, savings, and supplier performance with advanced analytics and reporting.",
    icon: "◉",
    highlights: ["Live analytics", "Spend insights", "Performance metrics"]
  }
]

export function ValueProps() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="features" className="py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Everything you need to modernize procurement
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            From requisition to payment, streamline every step of your procurement process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 border-2 border-accent rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl text-accent">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-subtle">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-sm text-subtle">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
