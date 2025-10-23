"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

const features = [
  {
    id: "smart-intake",
    category: "INTELLIGENT_INTAKE",
    title: "Conversational procurement requests",
    description: "Submit requests in plain language — no forms needed",
    accentColor: "#64748B"
  },
  {
    id: "dynamic-approvals",
    category: "SMART_APPROVALS",
    title: "Real-time approval tracking",
    description: "Track every approval in one place",
    accentColor: "#6366F1"
  },
  {
    id: "vendor-catalog",
    category: "VENDOR_MANAGEMENT",
    title: "Centralized vendor catalog",
    description: "All vendors, rates, and contracts in one system",
    accentColor: "#8B5CF6"
  },
  {
    id: "bid-analysis",
    category: "BID_INTELLIGENCE",
    title: "Smart bid analysis & comparison",
    description: "Compare complex proposals at a glance",
    accentColor: "#10B981"
  },
  {
    id: "rfx-management",
    category: "RFX_MANAGEMENT",
    title: "No-code RFP/RFQ creation",
    description: "Build and send RFPs in minutes, not days",
    accentColor: "#F59E0B"
  }
]

export function AlternatingFeatures() {
  const prefersReducedMotion = useReducedMotion()
  const [expandedTab, setExpandedTab] = React.useState<string | null>(null)

  const handleTabClick = (featureId: string) => {
    setExpandedTab(expandedTab === featureId ? null : featureId)
  }

  return (
    <section id="features" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Everything you need to transform procurement
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
              From intake to payment, SpaceFlow handles the entire procurement lifecycle with AI-powered automation
            </p>
          </motion.div>
        </div>

        {/* Feature Cards - Frosted Glass Style */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => handleTabClick(feature.id)}
                className="w-full text-left"
              >
                <div className={`
                  relative overflow-hidden rounded-2xl
                  bg-white/[0.01] backdrop-blur-xl
                  border border-white/[0.05]
                  hover:bg-white/[0.02]
                  transition-all duration-500
                  ${expandedTab === feature.id ? 'bg-white/[0.02]' : ''}
                `}>
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                  
                  <div className="relative p-6 z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-xs font-mono text-white/30 uppercase tracking-wider mb-3">
                          {feature.category}
                        </div>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      
                      <motion.div 
                        className="ml-4 text-white/20 group-hover:text-white/30 transition-colors"
                        animate={{ rotate: expandedTab === feature.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedTab === feature.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-white/[0.05]"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <h4 className="text-sm font-medium text-white/70">Key Benefits</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <div className="w-1 h-1 rounded-full bg-white/30 mt-2" />
                                  <span className="text-sm text-white/50">Automated workflow routing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1 h-1 rounded-full bg-white/30 mt-2" />
                                  <span className="text-sm text-white/50">Real-time status tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="w-1 h-1 rounded-full bg-white/30 mt-2" />
                                  <span className="text-sm text-white/50">Mobile-first experience</span>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-sm font-medium text-white/70">Impact Metrics</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-white/40">Time saved</span>
                                  <span className="text-white/60 font-mono">75%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-white/40">Cost reduction</span>
                                  <span className="text-white/60 font-mono">30%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-white/40">Compliance</span>
                                  <span className="text-white/60 font-mono">99%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <motion.button
                            className="mt-6 text-xs text-white/30 hover:text-white/50 transition-colors flex items-center gap-1"
                            whileHover={{ x: 5 }}
                          >
                            <span>Learn more</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
