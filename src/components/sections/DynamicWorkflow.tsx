"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

interface WorkflowStage {
  id: string
  type: 'input' | 'form' | 'process' | 'parallel' | 'complete'
  content?: any
  delay?: number
}

// Workflow connection line component - neural network style
function WorkflowConnection({ startRef, endRef, delay = 0 }: { 
  startRef: React.RefObject<HTMLDivElement>;
  endRef: React.RefObject<HTMLDivElement>;
  delay?: number 
}) {
  const [path, setPath] = React.useState("")
  
  React.useEffect(() => {
    if (startRef.current && endRef.current) {
      const startRect = startRef.current.getBoundingClientRect()
      const endRect = endRef.current.getBoundingClientRect()
      const container = startRef.current.closest('.relative')
      const containerRect = container?.getBoundingClientRect()
      
      if (containerRect) {
        const startX = startRect.left + startRect.width / 2 - containerRect.left
        const startY = startRect.bottom - containerRect.top
        const endX = endRect.left + endRect.width / 2 - containerRect.left
        const endY = endRect.top - containerRect.top
        
        // Create a curved path like neural connections
        const controlY = (startY + endY) / 2
        const pathString = `M ${startX} ${startY} Q ${startX} ${controlY}, ${endX} ${endY}`
        setPath(pathString)
      }
    }
  }, [startRef, endRef])
  
  if (!path) return null
  
  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <motion.path
        d={path}
        stroke="rgba(147, 51, 234, 0.3)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          duration: 2, 
          delay,
          ease: "easeOut"
        }}
      />
      {/* Animated dot along the path */}
      <motion.circle
        r="3"
        fill="rgba(147, 51, 234, 0.8)"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 2,
          delay: delay + 0.5,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 3
        }}
        style={{
          offsetPath: `path('${path}')`
        }}
      />
    </svg>
  )
}

// Individual workflow node component
function WorkflowNode({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 200
      }}
    >
      <div className="bg-[var(--workflow-bg)] backdrop-blur-sm border border-[var(--workflow-border)] rounded-lg px-5 py-3 hover:bg-[var(--workflow-accent)]/10 hover:border-[var(--workflow-accent)]/40 transition-all duration-200">
        <span className="text-sm text-text font-medium">{label}</span>
      </div>
    </motion.div>
  )
}

export function DynamicWorkflow() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const [currentStage, setCurrentStage] = React.useState(0)
  const [userInput, setUserInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [formData, setFormData] = React.useState({
    workflow: "",
    category: "",
    supplier: ""
  })
  const [visibleNodes, setVisibleNodes] = React.useState<string[]>([])
  const [loopCount, setLoopCount] = React.useState(0)
  
  // Refs for all nodes to draw connections
  const formRef = React.useRef<HTMLDivElement>(null)
  const procurementRef = React.useRef<HTMLDivElement>(null)
  const commercialRef = React.useRef<HTMLDivElement>(null)
  const securityRef = React.useRef<HTMLDivElement>(null)
  const legalRef = React.useRef<HTMLDivElement>(null)
  const itRef = React.useRef<HTMLDivElement>(null)
  const fpaRef = React.useRef<HTMLDivElement>(null)
  const supplierRef = React.useRef<HTMLDivElement>(null)
  const orderRef = React.useRef<HTMLDivElement>(null)
  const poRef = React.useRef<HTMLDivElement>(null)
  const completeRef = React.useRef<HTMLDivElement>(null)

  // Function to reset and restart the workflow
  const resetWorkflow = () => {
    setCurrentStage(0)
    setUserInput("")
    setIsTyping(false)
    setFormData({ workflow: "", category: "", supplier: "" })
    setVisibleNodes([])
    setLoopCount(prev => prev + 1)
  }

  // Start the workflow when in view or when loop restarts
  React.useEffect(() => {
    if ((isInView || loopCount > 0) && !prefersReducedMotion) {
      // Start typing animation
      setTimeout(() => {
        setIsTyping(true)
        const texts = [
          "I need consulting services for digital transformation",
          "Looking for marketing software solutions",
          "Request for cloud infrastructure setup"
        ]
        const text = texts[loopCount % texts.length]
        let index = 0
        const interval = setInterval(() => {
          setUserInput(text.slice(0, index))
          index++
          if (index > text.length) {
            clearInterval(interval)
            setTimeout(() => {
              setCurrentStage(1)
            }, 500)
          }
        }, 50)
      }, 1000)
    }
  }, [isInView, loopCount, prefersReducedMotion])

  // Progress through stages
  React.useEffect(() => {
    if (currentStage === 1) {
      // AI fills the form with different data each loop
      const suppliers = ["McKinsey & Company", "Deloitte", "Accenture"]
      const categories = ["Consulting / Advisory", "Software / SaaS", "Infrastructure / Cloud"]
      
      setTimeout(() => {
        setFormData({
          workflow: "Professional Services",
          category: categories[loopCount % categories.length],
          supplier: suppliers[loopCount % suppliers.length]
        })
        setTimeout(() => {
          setCurrentStage(2)
        }, 1500)
      }, 1000)
    } else if (currentStage === 2) {
      // Show workflow nodes progressively
      const nodes = [
        'procurement', 'commercial', 'security',
        'legal', 'it', 'fp&a',
        'supplier', 'order',
        'po', 'complete'
      ]
      
      nodes.forEach((node, index) => {
        setTimeout(() => {
          setVisibleNodes(prev => [...prev, node])
          
          // Reset after complete
          if (node === 'complete') {
            setTimeout(() => {
              resetWorkflow()
            }, 3000)
          }
        }, index * 400)
      })
    }
  }, [currentStage, loopCount])

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
            Watch AI orchestrate your workflow
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            From natural language to complete procurement in seconds
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Stage 1: User Input - Fixed position */}
          <div className="flex justify-center mb-8">
            <AnimatePresence>
              {isInView && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-lg"
                >
                  <div className="bg-[var(--workflow-bg)] backdrop-blur-sm border border-[var(--workflow-border)] rounded-lg p-6">
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
          </div>

          {/* Stage 2: AI Form Filling - Fixed position */}
          <div className="flex justify-center mb-12">
            <AnimatePresence>
              {currentStage >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full max-w-md"
                >
                  <div className="bg-[var(--workflow-bg)] backdrop-blur-sm border border-[var(--workflow-border)] rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div 
                        className="w-2 h-2 bg-[var(--workflow-accent)] rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium text-text">AI Pre-filling request</span>
                    </div>
                  
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="text-xs text-subtle block mb-1">WORKFLOW</label>
                      <div className="h-9 bg-black/10 border border-[var(--workflow-border)] rounded px-3 py-2">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="text-sm text-text"
                        >
                          {formData.workflow}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="text-xs text-subtle block mb-1">CATEGORY/SUBCATEGORY</label>
                      <div className="h-9 bg-black/10 border border-[var(--workflow-border)] rounded px-3 py-2">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                          className="text-sm text-text"
                        >
                          {formData.category}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="text-xs text-subtle block mb-1">PREFERRED SUPPLIER</label>
                      <div className="h-9 bg-black/10 border border-[var(--workflow-border)] rounded px-3 py-2">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 }}
                          className="text-sm text-text"
                        >
                          {formData.supplier}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: currentStage >= 2 ? 1 : 0.3 }}
                      transition={{ delay: 1.6 }}
                      className="w-full py-2 bg-[var(--workflow-accent)] text-white rounded text-sm font-medium"
                    >
                      {currentStage >= 2 ? 'Submitted ✓' : 'Submit'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          {/* Stage 3: Workflow Nodes with Connections */}
          {currentStage >= 2 && (
            <div className="relative">
              {/* Connection lines using divs with borders */}
              <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                  {/* Vertical lines connecting layers */}
                  {visibleNodes.includes('procurement') && (
                    <motion.div
                      className="absolute left-[30%] top-0 w-0.5 h-20 bg-gradient-to-b from-[var(--workflow-accent)] to-transparent"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.6 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  )}
                  {visibleNodes.includes('commercial') && (
                    <motion.div
                      className="absolute left-[50%] top-0 w-0.5 h-20 bg-gradient-to-b from-[var(--workflow-accent)] to-transparent"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.6 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  )}
                  {visibleNodes.includes('security') && (
                    <motion.div
                      className="absolute left-[70%] top-0 w-0.5 h-20 bg-gradient-to-b from-[var(--workflow-accent)] to-transparent"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.6 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  )}
                  
                  {/* Lines between first and second layer */}
                  {visibleNodes.includes('legal') && (
                    <motion.div
                      className="absolute left-[30%] top-20 w-0.5 h-20 bg-[var(--workflow-accent)]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  )}
                  {visibleNodes.includes('it') && (
                    <motion.div
                      className="absolute left-[50%] top-20 w-0.5 h-20 bg-[var(--workflow-accent)]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                  )}
                  {visibleNodes.includes('fp&a') && (
                    <motion.div
                      className="absolute left-[70%] top-20 w-0.5 h-20 bg-[var(--workflow-accent)]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    />
                  )}
                  
                  {/* Converging lines to third layer */}
                  {visibleNodes.includes('supplier') && (
                    <motion.div
                      className="absolute left-[40%] top-40 w-0.5 h-20 bg-[var(--workflow-accent)]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  )}
                  {visibleNodes.includes('order') && (
                    <motion.div
                      className="absolute left-[60%] top-40 w-0.5 h-20 bg-[var(--workflow-accent)]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                  )}
                  
                  {/* Final convergence */}
                  {visibleNodes.includes('po') && (
                    <motion.div
                      className="absolute left-[50%] top-60 w-0.5 h-20 bg-[var(--workflow-accent)]"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 80, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="relative space-y-8" style={{ zIndex: 1 }}>
                {/* First Layer - Initial Reviews */}
                <div className="flex justify-center gap-6">
                  <AnimatePresence>
                    {visibleNodes.includes('procurement') && (
                      <WorkflowNode label="Procurement review" delay={0} />
                    )}
                    {visibleNodes.includes('commercial') && (
                      <WorkflowNode label="Commercial review" delay={0.1} />
                    )}
                    {visibleNodes.includes('security') && (
                      <WorkflowNode label="Security review" delay={0.2} />
                    )}
                  </AnimatePresence>
                </div>

                {/* Second Layer - Secondary Reviews */}
                <div className="flex justify-center gap-6">
                  <AnimatePresence>
                    {visibleNodes.includes('legal') && (
                      <WorkflowNode label="Legal review" delay={0} />
                    )}
                    {visibleNodes.includes('it') && (
                      <WorkflowNode label="IT review" delay={0.1} />
                    )}
                    {visibleNodes.includes('fp&a') && (
                      <WorkflowNode label="FP&A budget approval" delay={0.2} />
                    )}
                  </AnimatePresence>
                </div>

                {/* Third Layer - Processing */}
                <div className="flex justify-center gap-6">
                  <AnimatePresence>
                    {visibleNodes.includes('supplier') && (
                      <WorkflowNode label="Supplier onboarding" delay={0} />
                    )}
                    {visibleNodes.includes('order') && (
                      <WorkflowNode label="Order form extracted" delay={0.1} />
                    )}
                  </AnimatePresence>
                </div>

                {/* Final Layer - Completion */}
                <div className="flex justify-center gap-6">
                  <AnimatePresence>
                    {visibleNodes.includes('po') && (
                      <WorkflowNode label="Create PO in SAP Ariba" delay={0} />
                    )}
                    {visibleNodes.includes('complete') && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="bg-[var(--workflow-accent)]/10 border border-[var(--workflow-accent)] rounded-lg px-6 py-3">
                          <span className="text-sm font-medium text-[var(--workflow-accent)]">Complete ✓</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
