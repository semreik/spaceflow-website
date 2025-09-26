"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

const certifications = [
  {
    id: "iso27001",
    name: "ISO 27001",
    description: "Information Security Management",
    logo: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
        <path d="M30 35 Q50 20 70 35 Q70 50 70 65 Q50 80 30 65 Q30 50 30 35" />
        <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">ISO</text>
        <text x="50" y="65" textAnchor="middle" fill="currentColor" fontSize="8">27001</text>
      </svg>
    ),
    status: "in-progress"
  },
  {
    id: "soc2",
    name: "SOC 2",
    description: "Service Organization Control",
    logo: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="45" fill="currentColor" fillOpacity="0.1" />
        <circle cx="50" cy="50" r="45" />
        <text x="50" y="35" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="300">AICPA</text>
        <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">SOC</text>
        <text x="50" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Type II</text>
        <path d="M20 75 Q50 85 80 75" strokeDasharray="2 2" />
      </svg>
    ),
    status: "in-progress"
  },
  {
    id: "gdpr",
    name: "GDPR",
    description: "General Data Protection Regulation",
    logo: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="45" />
        {/* EU stars in circle */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 50 + 30 * Math.cos(rad)
          const y = 50 + 30 * Math.sin(rad)
          return (
            <text key={i} x={x} y={y} textAnchor="middle" fill="currentColor" fontSize="10">
              ★
            </text>
          )
        })}
        <text x="50" y="55" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">
          GDPR
        </text>
      </svg>
    ),
    status: "in-progress"
  }
]

export function Security() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="security" className="py-24 bg-black border-t border-white/[0.05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Safe and secure
            </h2>
            <p className="text-lg text-white/60 max-w-3xl">
              SpaceFlow is designed with the highest commitment to trust, security, and compliance. 
              The security of procurement and supply chain data is crucial for many of our customers, 
              and SpaceFlow earns their trust.
            </p>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 mb-4">
                    {cert.logo}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-subtle mb-4">
                    {cert.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <svg className="w-5 h-5 text-gray-600 animate-spin" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                          fill="none"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">In Progress</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security features - no boxes */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Enterprise-Grade Security</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">256-bit AES encryption for data at rest and in transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Multi-factor authentication (MFA) and SSO support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Role-based access control (RBAC) with granular permissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Regular security audits and penetration testing</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Data Protection & Privacy</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Data residency options in multiple regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Automated data backup and disaster recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Complete audit trails and activity logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span className="text-white/60">Data retention and deletion policies</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Trust statement - no box */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16 pt-8 border-t border-white/[0.05]"
          >
            <p className="text-lg text-white/80 mb-2">
              Your data security is our top priority
            </p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto">
              We&apos;re actively working towards achieving ISO 27001, SOC 2 Type II, and GDPR compliance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
