"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

export function ProductShowcase() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms for each screen
  const leftScreenY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const centerScreenY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const rightScreenY = useTransform(scrollYProgress, [0, 1], [50, -50])

  const screens = [
    {
      id: "purchase",
      title: "Purchase Requirements",
      items: ["✓ Requestor", "✓ Items", "✓ Vendor", "✓ Department"],
      position: "left"
    },
    {
      id: "intake",
      title: "Intake-to-Procure",
      subtitle: "Use AI to guide employees through any purchase request process",
      mainContent: {
        query: "Search or ask for AI...",
        title: "1287: Digital transformation consulting",
        overview: "Overview | Review | Purchase details | Documents | Surveys | Vendor",
        details: [
          { label: "ServiceNow", sublabel: "Service Consultant", value: "SAP Ariba" },
          { label: "Lucidly", sublabel: "Service Consultant", value: "Ariba Downstream" }
        ],
        reviews: [
          { label: "Procurement review", status: "✓ Completed Jul 20" },
          { label: "Security review", status: "✓ Completed Aug 5" },
          { label: "Legal review", status: "✓ Completed" },
          { label: "Vendor onboarding", status: "⚬ Not started" },
          { label: "Contract execution", status: "⚬ Not started" }
        ]
      },
      position: "center"
    },
    {
      id: "analytics",
      title: "Analytics",
      metrics: [
        { label: "Annual Spend", value: "£400K", change: "+5%" },
        { label: "Department", value: "£400K", sublabel: "£213.5K (53.4%) vs Procurement" },
        { label: "Category", value: "228", change: "+14%" }
      ],
      chart: true,
      position: "right"
    }
  ]

  return (
    <section ref={containerRef} className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Complete procurement orchestration
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            From intake to approval, manage every step with intelligent automation
          </p>
        </motion.div>

        {/* Three screens layout inspired by Omnea */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 lg:gap-8 perspective-1000">
            
            {/* Left Screen */}
            <motion.div
              style={{ y: prefersReducedMotion ? 0 : leftScreenY }}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -100, rotateY: 25 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-sm transform-gpu"
            >
              <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-6 shadow-2">
                <h3 className="text-sm font-semibold text-text mb-4">{screens[0].title}</h3>
                <div className="space-y-3">
                  {screens[0].items?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-subtle">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center Screen - Main */}
            <motion.div
              style={{ y: prefersReducedMotion ? 0 : centerScreenY }}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl z-10 transform-gpu"
            >
              <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg shadow-2 overflow-hidden">
                {/* Header */}
                <div className="border-b border-glass-border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <input 
                      type="text" 
                      placeholder={screens[1].mainContent?.query}
                      className="flex-1 bg-transparent border border-glass-border rounded px-3 py-1 text-sm placeholder-subtle"
                      readOnly
                    />
                  </div>
                  <h3 className="font-semibold text-text">{screens[1].mainContent?.title}</h3>
                </div>
                
                {/* Tabs */}
                <div className="border-b border-glass-border px-4 py-2">
                  <div className="flex gap-4 text-xs text-subtle">
                    {screens[1].mainContent?.overview?.split(' | ').map((tab, idx) => (
                      <span key={idx} className={idx === 0 ? "text-text font-semibold" : ""}>
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {screens[1].mainContent?.details?.map((detail, idx) => (
                      <div key={idx} className="bg-muted rounded p-3">
                        <div className="text-xs text-subtle">{detail.sublabel}</div>
                        <div className="text-sm font-medium text-text">{detail.label}</div>
                        <div className="text-xs text-subtle mt-1">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-text mb-3">Reviews</h4>
                    {screens[1].mainContent?.reviews?.map((review, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-subtle">{review.label}</span>
                        <span className={review.status.includes('✓') ? "text-success" : "text-subtle"}>
                          {review.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Screen */}
            <motion.div
              style={{ y: prefersReducedMotion ? 0 : rightScreenY }}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 100, rotateY: -25 }}
              whileInView={{ opacity: 1, x: 0, rotateY: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-sm transform-gpu"
            >
              <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-6 shadow-2">
                <h3 className="text-sm font-semibold text-text mb-4">{screens[2].title}</h3>
                <div className="space-y-4">
                  {screens[2].metrics?.map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-subtle">{metric.label}</span>
                        <div className="text-right">
                          <span className="text-lg font-bold text-text">{metric.value}</span>
                          {metric.change && (
                            <span className="text-xs text-success ml-1">{metric.change}</span>
                          )}
                        </div>
                      </div>
                      {metric.sublabel && (
                        <div className="text-xs text-subtle mt-1">{metric.sublabel}</div>
                      )}
                    </div>
                  ))}
                  {/* Simple chart representation */}
                  <div className="mt-4 h-24 bg-muted rounded-lg flex items-end justify-around p-2">
                    {[40, 65, 45, 70, 55, 80].map((height, idx) => (
                      <div
                        key={idx}
                        className="w-4 bg-accent rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
