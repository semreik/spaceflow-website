"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

export function NeuralWorkflow() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const [stage, setStage] = React.useState(0)
  const [userInput, setUserInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [loopCount, setLoopCount] = React.useState(0)

  // Auto-start animation when in view
  React.useEffect(() => {
    if (isInView && !prefersReducedMotion && stage === 0) {
      setTimeout(() => {
        setIsTyping(true)
        const texts = [
          "I need consulting services for digital transformation",
          "Looking for marketing software solutions",
          "Request for cloud infrastructure setup"
        ]
        const text = texts[loopCount % texts.length]
        let index = 0
        
        const typeInterval = setInterval(() => {
          setUserInput(text.slice(0, index))
          index++
          if (index > text.length) {
            clearInterval(typeInterval)
            setIsTyping(false)
            setTimeout(() => setStage(1), 1000)
          }
        }, 60)
      }, 1000)
    }
  }, [isInView, prefersReducedMotion, loopCount, stage])

  // Progress through stages
  React.useEffect(() => {
    if (stage === 1) {
      setTimeout(() => setStage(2), 3000) // Show form filled
    } else if (stage === 2) {
      setTimeout(() => setStage(3), 2000) // Show first layer
    } else if (stage === 3) {
      setTimeout(() => setStage(4), 2000) // Show second layer
    } else if (stage === 4) {
      setTimeout(() => setStage(5), 2000) // Show third layer
    } else if (stage === 5) {
      setTimeout(() => setStage(6), 2000) // Show final
    } else if (stage === 6) {
      // Reset after complete
      setTimeout(() => {
        setStage(0)
        setUserInput("")
        setLoopCount(prev => prev + 1)
      }, 4000)
    }
  }, [stage])

  const suppliers = ["McKinsey & Company", "Deloitte", "Accenture"]
  const categories = ["Consulting / Advisory", "Software / SaaS", "Infrastructure / Cloud"]

  // Reduced motion: Show static version
  if (prefersReducedMotion) {
    return (
      <section ref={containerRef} className="relative py-24 bg-bg overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Intelligent workflow orchestration
            </h2>
            <p className="text-xl text-subtle max-w-2xl mx-auto">
              AI guides requests through dynamic approval paths
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Static workflow visualization */}
            <div className="max-w-lg mx-auto bg-[var(--workflow-bg)] backdrop-blur-sm border border-[var(--workflow-border)] rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-subtle" />
                <span className="text-sm text-subtle">Natural language request</span>
              </div>
              <div className="bg-black/10 border border-[var(--workflow-border)] rounded p-4">
                <p className="text-text font-mono text-sm">
                  I need consulting services for digital transformation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/[0.95] backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg">
                <span className="text-sm text-gray-800 font-medium">Procurement review</span>
              </div>
              <div className="bg-white/[0.95] backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg ring-2 ring-[var(--workflow-accent)]/30">
                <span className="text-sm text-gray-800 font-medium">Commercial review</span>
              </div>
              <div className="bg-white/[0.95] backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg">
                <span className="text-sm text-gray-800 font-medium">Security review</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Intelligent workflow orchestration
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            Watch AI guide requests through dynamic approval paths
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* User Input Box */}
          <AnimatePresence>
            {stage >= 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mb-8"
              >
                <div className="max-w-lg mx-auto bg-[var(--workflow-bg)] backdrop-blur-sm border border-[var(--workflow-border)] rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-[var(--workflow-accent)] animate-pulse' : 'bg-subtle'}`} />
                    <span className="text-sm text-subtle">Natural language request</span>
                  </div>
                  <div className="bg-black/10 border border-[var(--workflow-border)] rounded p-4 min-h-[60px]">
                    <p className="text-text font-mono text-sm">
                      {userInput}
                      {isTyping && <span className="animate-pulse text-[var(--workflow-accent)]">|</span>}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Form */}
          <AnimatePresence>
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-12"
              >
                <div className="max-w-md mx-auto bg-[var(--workflow-bg)] backdrop-blur-sm border border-[var(--workflow-border)] rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div 
                      className="w-2 h-2 bg-[var(--workflow-accent)] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-text">AI Pre-filling request</span>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                      <label className="text-xs text-subtle block mb-1">WORKFLOW</label>
                      <div className="h-9 bg-black/10 border border-[var(--workflow-border)] rounded px-3 py-2">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 1 }} className="text-sm text-text">
                          Professional Services
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                      <label className="text-xs text-subtle block mb-1">CATEGORY/SUBCATEGORY</label>
                      <div className="h-9 bg-black/10 border border-[var(--workflow-border)] rounded px-3 py-2">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 1.2 }} className="text-sm text-text">
                          {categories[loopCount % categories.length]}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                      <label className="text-xs text-subtle block mb-1">PREFERRED SUPPLIER</label>
                      <div className="h-9 bg-black/10 border border-[var(--workflow-border)] rounded px-3 py-2">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 1.4 }} className="text-sm text-text">
                          {suppliers[loopCount % suppliers.length]}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.button
                      animate={{ opacity: stage >= 2 ? 1 : 0.3 }}
                      className="w-full py-2 bg-[var(--workflow-accent)] text-white rounded text-sm font-medium"
                    >
                      {stage >= 2 ? 'Submitted ✓' : 'Submit'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Workflow Visualization - Zip Style */}
          <div className="relative">
            {/* SVG Canvas for connections */}
            <svg className="absolute inset-0 w-full" height="400" style={{ zIndex: 0 }}>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="rgba(147, 51, 234, 0.4)" />
                </marker>
              </defs>
              
              <AnimatePresence>
                {stage >= 3 && (
                  <g>
                    {/* Connections from form to first layer */}
                    <motion.path
                      d="M 400 0 Q 400 40, 200 80"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M 400 0 Q 400 40, 400 80"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M 400 0 Q 400 40, 600 80"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    />
                  </g>
                )}
                
                {stage >= 4 && (
                  <g>
                    {/* Connections from first to second layer */}
                    <motion.path
                      d="M 200 120 Q 200 160, 250 200"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M 400 120 Q 400 160, 400 200"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M 600 120 Q 600 160, 550 200"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    />
                  </g>
                )}
                
                {stage >= 5 && (
                  <g>
                    {/* Converging to third layer */}
                    <motion.path
                      d="M 250 240 Q 300 280, 350 320"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M 400 240 Q 400 280, 350 320"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M 550 240 Q 500 280, 450 320"
                      stroke="rgba(147, 51, 234, 0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    />
                  </g>
                )}
              </AnimatePresence>
            </svg>

            {/* Workflow Nodes positioned absolutely */}
            <div className="relative" style={{ height: '400px' }}>
              {/* First Layer */}
              <AnimatePresence>
                {stage >= 3 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '120px', top: '60px' }}
                    >
                      <WorkflowNode label="Procurement review" delay={0} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '320px', top: '60px' }}
                    >
                      <WorkflowNode label="Commercial review" delay={0.2} isHighlighted />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '520px', top: '60px' }}
                    >
                      <WorkflowNode label="Security review" delay={0.4} isHighlighted />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Second Layer */}
              <AnimatePresence>
                {stage >= 4 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '170px', top: '180px' }}
                    >
                      <WorkflowNode label="Legal review" delay={0} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '320px', top: '180px' }}
                    >
                      <WorkflowNode label="IT review" delay={0.2} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '470px', top: '180px' }}
                    >
                      <WorkflowNode label="FP&A budget approval" delay={0.4} hasAvatar />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Third Layer */}
              <AnimatePresence>
                {stage >= 5 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '270px', top: '300px' }}
                    >
                      <WorkflowNode label="Supplier onboarding" delay={0} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute"
                      style={{ left: '470px', top: '300px' }}
                    >
                      <WorkflowNode label="Order form extracted" delay={0.2} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Individual workflow node component - Zip style
function WorkflowNode({ 
  label, 
  delay = 0, 
  isHighlighted = false,
  hasAvatar = false 
}: { 
  label: string; 
  delay?: number;
  isHighlighted?: boolean;
  hasAvatar?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className={`
        relative bg-white/[0.95] backdrop-blur-sm rounded-lg px-4 py-2.5 
        shadow-lg hover:shadow-xl transition-all duration-200
        ${isHighlighted ? 'ring-2 ring-[var(--workflow-accent)]/30' : ''}
      `}>
        <div className="flex items-center gap-2">
          {hasAvatar && (
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
              👤
            </div>
          )}
          {isHighlighted && (
            <div className="w-6 h-6 rounded bg-yellow-100 flex items-center justify-center">
              <span className="text-xs">⭐</span>
            </div>
          )}
          <span className="text-sm text-gray-800 font-medium">{label}</span>
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center ml-auto">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
