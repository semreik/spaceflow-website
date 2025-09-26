"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

const integrations = [
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Outlook", category: "Email" },
  { name: "SAP", category: "ERP" },
  { name: "Oracle", category: "ERP" },
  { name: "NetSuite", category: "ERP" },
  { name: "Salesforce", category: "CRM" },
  { name: "Jira", category: "Project Management" },
  { name: "ServiceNow", category: "ITSM" },
  { name: "Workday", category: "HCM" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Coupa", category: "Procurement" }
]

export function Integrations() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="integrations" className="py-20 md:py-24 bg-black/30 border-t border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise-Ready Integrations
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">
            Seamlessly connect with your existing enterprise stack. No disruption, just enhancement.
          </p>
        </motion.div>

        {/* Continuous scroll animation - no boxes */}
        <div className="relative">
          {/* First row - scrolling left */}
          <div className="overflow-hidden mb-8">
            <motion.div 
              className="flex gap-8 md:gap-12"
              animate={{
                x: prefersReducedMotion ? 0 : ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...integrations.slice(0, 6), ...integrations.slice(0, 6)].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-base font-medium text-white/70 hover:text-white/90 transition-colors whitespace-nowrap">
                      {integration.name}
                    </span>
                    <span className="text-xs text-white/30 whitespace-nowrap">
                      {integration.category}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolling right */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 md:gap-12"
              animate={{
                x: prefersReducedMotion ? 0 : ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...integrations.slice(6), ...integrations.slice(6)].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-base font-medium text-white/70 hover:text-white/90 transition-colors whitespace-nowrap">
                      {integration.name}
                    </span>
                    <span className="text-xs text-white/30 whitespace-nowrap">
                      {integration.category}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional integrations text */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-white/40">
            And many more integrations including Google Workspace, ServiceNow, Workday, and 100+ other platforms
          </p>
        </motion.div>
      </div>
    </section>
  )
}
