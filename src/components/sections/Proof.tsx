"use client"

import * as React from "react"
import { motion } from "framer-motion"

const features = [
  {
    id: "intake",
    icon: "📋",
    title: "Intelligent Intake",
    description: "Create the perfect front door for every request.",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30"
  },
  {
    id: "approvals",
    icon: "✅",
    title: "Approval Workflows",
    description: "Automatically involve the right people, processes, and systems.",
    color: "from-indigo-500/20 to-indigo-600/20",
    borderColor: "border-indigo-500/30"
  },
  {
    id: "catalog",
    icon: "📦",
    title: "Product Catalog",
    description: "Surface preferred suppliers to cut duplication and sprawl.",
    color: "from-emerald-500/20 to-emerald-600/20",
    borderColor: "border-emerald-500/30"
  },
  {
    id: "portal",
    icon: "👥",
    title: "Supplier Portal",
    description: "Collect data and due diligence in a portal suppliers love.",
    color: "from-cyan-500/20 to-cyan-600/20",
    borderColor: "border-cyan-500/30"
  },
  {
    id: "supplier-management",
    icon: "🏢",
    title: "Supplier Management",
    description: "Access all supplier data in one source of truth.",
    color: "from-rose-500/20 to-rose-600/20",
    borderColor: "border-rose-500/30"
  },
  {
    id: "orchestration",
    icon: "⚡",
    title: "Orchestration",
    description: "Create PRs and POs directly in finance systems.",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30"
  },
  {
    id: "renewals",
    icon: "🔄",
    title: "Renewals",
    description: "Never miss a renewal with a 360 view of every supplier.",
    color: "from-amber-500/20 to-amber-600/20",
    borderColor: "border-amber-500/30"
  },
  {
    id: "workflow-builder",
    icon: "🔧",
    title: "Workflow Builder",
    description: "Drag-and-drop workflows that orchestrate the perfect process.",
    color: "from-teal-500/20 to-teal-600/20",
    borderColor: "border-teal-500/30"
  },
  {
    id: "reporting",
    icon: "📊",
    title: "Reporting",
    description: "See spend, risk, and operational data in unified dashboards.",
    color: "from-slate-500/20 to-slate-600/20",
    borderColor: "border-slate-500/30"
  }
]

const partners = [
  { name: "Microsoft Founders Hub", logo: "Microsoft\nFounders Hub" },
  { name: "Sterling Road", logo: "STERLING ROAD" },
  { name: "InvenDO", logo: "InvenDO" },
  { name: "DriveVentures", logo: "driventure" },
  { name: "NVIDIA", logo: "NVIDIA" },
]

export function Proof() {
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null)

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">
              Everything you need to modernize procurement
            </h2>
            <p className="text-xl text-subtle max-w-3xl mx-auto">
              From requisition to payment, streamline every step of your procurement process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`
                    relative group text-left p-6 rounded-xl
                    bg-gradient-to-br ${feature.color}
                    border ${feature.borderColor}
                    hover:scale-[1.02] transition-all duration-200
                    cursor-pointer
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-subtle/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <span className="text-subtle/40 group-hover:text-text transition-colors mt-1">→</span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-glass-border pt-16"
        >
          <p className="text-center text-subtle mb-12">Backed by leading investors and partners</p>
          
          {/* Infinite scrolling partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-1`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-2`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

// Partner logo component
function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  // Special styling for each partner
  const getLogoStyle = () => {
    switch(name) {
      case "Microsoft Founders Hub":
        return "text-sm font-normal whitespace-pre-line text-subtle/60"
      case "Sterling Road":
        return "text-lg font-bold tracking-wider text-subtle/60 flex items-center gap-3"
      case "InvenDO":
        return "text-2xl font-light text-subtle/60"
      case "DriveVentures":
        return "text-xl italic text-subtle/60"
      case "NVIDIA":
        return "text-lg font-bold bg-subtle/10 px-3 py-1 text-subtle/60"
      default:
        return "text-lg text-subtle/60"
    }
  }

  // Special rendering for Sterling Road with circle logo
  if (name === "Sterling Road") {
    return (
      <div className={getLogoStyle()}>
        <div className="w-10 h-10 rounded-full bg-subtle/20 flex items-center justify-center">
          <div className="w-6 h-1 bg-subtle/60 rounded-full transform -rotate-45" />
        </div>
        <span>{logo}</span>
      </div>
    )
  }

  // Special rendering for NVIDIA with box
  if (name === "NVIDIA") {
    return (
      <div className="flex items-center gap-2">
        <div className={getLogoStyle()}>
          {logo}
        </div>
      </div>
    )
  }

  return (
    <div className={getLogoStyle()}>
      {logo}
    </div>
  )
}
