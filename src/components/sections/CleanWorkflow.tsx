"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

export function CleanWorkflow() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const [stage, setStage] = React.useState(0)
  const [userInput, setUserInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [loopCount, setLoopCount] = React.useState(0)
  
  // Detect if mobile or small screen
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-start animation when in view
  React.useEffect(() => {
    if (isInView && !prefersReducedMotion && stage === 0) {
      setTimeout(() => {
        setIsTyping(true)
        const texts = [
          "I need software development services for our mobile app",
          "Looking for management consulting and strategic planning",
          "Request for electrical contracting and installation services",
          "Need construction equipment rental for our building project",
          "Require legal services for contract review and compliance"
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
      setTimeout(() => setStage(2), 2500) // Show form filled
    } else if (stage === 2) {
      setTimeout(() => setStage(3), 2500) // Show first layer
    } else if (stage === 3) {
      setTimeout(() => setStage(4), 3000) // Show second layer
    } else if (stage === 4) {
      setTimeout(() => setStage(5), 3000) // Show third layer
    } else if (stage === 5) {
      setTimeout(() => setStage(6), 3000) // Show final
    } else if (stage === 6) {
      // Reset after complete
      setTimeout(() => {
        setStage(0)
        setUserInput("")
        setLoopCount(prev => prev + 1)
      }, 4000)
    }
  }, [stage])

  const suppliers = ["Microsoft Azure", "McKinsey & Company", "Schneider Electric", "Caterpillar", "Baker McKenzie"]
  const categories = ["Software Development", "Management Consulting", "Electrical Services", "Construction Equipment", "Legal Services"]

  // Reduced motion: Show static version
  if (prefersReducedMotion) {
    return (
      <section ref={containerRef} className="relative pt-2 md:pt-3 pb-12 md:pb-16 bg-bg overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 md:mb-3">
            <h2 className="text-2xl md:text-4xl font-bold text-text mb-2 md:mb-3">
              Intelligent workflow orchestration
            </h2>
            <p className="text-base md:text-xl text-subtle max-w-2xl mx-auto px-4">
              AI guides requests through dynamic approval paths
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto mt-8">
            {/* Static request */}
            <div className="w-full max-w-lg mx-auto bg-surface backdrop-blur-sm border border-glass-border rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-subtle/40" />
                <span className="text-sm text-subtle">Natural language request</span>
              </div>
              <div className="bg-muted border border-glass-border rounded p-4">
                <p className="text-text font-mono text-sm">
                  I need software development services for our mobile app
                </p>
              </div>
            </div>

            {/* Static workflow cards */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="bg-white/[0.01] backdrop-blur-md rounded-xl ring-1 ring-blue-500/30 shadow-xl shadow-blue-500/5 p-4">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/20">
                    SC
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white/90">Procurement Review</div>
                    <div className="text-xs text-white/40 mt-0.5">Procurement</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.01] backdrop-blur-md rounded-xl p-4">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold bg-white/5 text-white/40">
                    LP
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white/90">Budget Approval</div>
                    <div className="text-xs text-white/40 mt-0.5">Finance</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white/5 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative pt-2 md:pt-3 pb-12 md:pb-16 bg-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-2 md:mb-3"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-text mb-2 md:mb-3">
            Intelligent workflow orchestration
          </h2>
          <p className="text-base md:text-xl text-subtle max-w-2xl mx-auto px-4">
            Watch AI guide requests through dynamic approval paths
          </p>
        </motion.div>

        {/* Fixed height container to prevent layout shifts */}
        <div className="relative max-w-6xl mx-auto" style={{ height: isMobile ? '1250px' : '850px', position: 'relative' }}>
          {/* User Input Box */}
          <div className="absolute top-0 left-0 right-0" style={{ height: isMobile ? '130px' : '120px' }}>
            <AnimatePresence>
              {stage >= 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex justify-center items-center"
                >
                  <div className={`w-full ${isMobile ? 'max-w-sm mx-auto' : 'max-w-lg mx-auto'} bg-surface backdrop-blur-sm border border-glass-border rounded-lg ${isMobile ? 'p-4' : 'p-6'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-[var(--workflow-accent)] animate-pulse' : 'bg-subtle/40'}`} />
                    <span className="text-sm text-subtle">Natural language request</span>
                  </div>
                  <div className="bg-muted border border-glass-border rounded p-4 min-h-[60px]">
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

          {/* AI Form */}
          <div className="absolute" style={{ top: isMobile ? '170px' : '180px', left: 0, right: 0, height: isMobile ? '280px' : '250px' }}>
            <AnimatePresence>
              {stage >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex justify-center items-center"
                >
                <div className={`w-full ${isMobile ? 'max-w-sm mx-auto' : 'max-w-md mx-auto'} bg-surface backdrop-blur-sm border border-glass-border rounded-lg ${isMobile ? 'p-4' : 'p-6'}`}>
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
                      <div className="h-9 bg-muted border border-glass-border rounded px-3 py-2">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 1 }} className="text-sm text-text">
                          {categories[loopCount % categories.length]}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                      <label className="text-xs text-subtle block mb-1">CATEGORY/SUBCATEGORY</label>
                      <div className="h-9 bg-muted border border-glass-border rounded px-3 py-2">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 1.2 }} className="text-sm text-text">
                          {categories[loopCount % categories.length]}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                      <label className="text-xs text-subtle block mb-1">PREFERRED SUPPLIER</label>
                      <div className="h-9 bg-muted border border-glass-border rounded px-3 py-2">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: stage >= 1 ? 1 : 0 }} transition={{ delay: 1.4 }} className="text-sm text-text">
                          {suppliers[loopCount % suppliers.length]}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.button
                      animate={{ opacity: stage >= 2 ? 1 : 0.3 }}
                      className="w-full py-2 bg-[var(--workflow-accent)] text-white rounded text-sm font-medium transition-opacity"
                    >
                      {stage >= 2 ? 'Submitted ✓' : 'Submit'}
                    </motion.button>
                  </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Horizontal Workflow Timeline */}
          <div className="absolute" style={{ bottom: '0', left: '0', right: '0', height: isMobile ? '450px' : '300px', top: isMobile ? '650px' : '480px' }}>
            <AnimatePresence>
              {stage >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  {/* Desktop: Horizontal scrolling timeline */}
                  <div className="hidden md:block h-full">
                    <div className="pl-32 pr-8 h-full flex items-start pt-8">
                    <AnimatePresence mode="wait">
                      {/* Phase 1: Initial Submission */}
                      {stage === 2 && (
                        <motion.div
                          key="phase-0"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center gap-4 justify-center"
                          style={{ minHeight: '200px' }}
                        >
                          <WorkflowCard
                            title="Request Submitted"
                            status="complete"
                            owner="You"
                            delay={0}
                            visible={true}
                            phase="Initiation"
                            details={[
                              "Request ID: #PRQ-2024-3847",
                              `Category: ${categories[loopCount % categories.length]}`,
                              "Estimated value: $250,000"
                            ]}
                          />
                        </motion.div>
                      )}

                      {/* Phase 2: Compliance & Risk */}
                      {stage === 3 && (
                        <motion.div
                          key="phase-1"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '200px' }}
                        >
                          <div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs font-mono text-white/20 uppercase mb-4"
                            >
                              Phase 1: Compliance & Risk Assessment
                            </motion.div>
                            <div className="flex items-center gap-4 justify-center">
                            <WorkflowCard
                              title="Procurement Review"
                              status="active"
                              owner="S. Chen"
                              department="Procurement"
                              delay={0.3}
                              visible={true}
                              details={[
                                "Checking vendor compliance",
                                "Validating budget codes",
                                "Reviewing contract terms"
                              ]}
                            />

                            <Connector visible={true} delay={0.6} />

                            <WorkflowCard
                              title="Commercial Review"
                              status="active"
                              owner="M. Torres"
                              department="Commercial"
                              delay={0.5}
                              visible={true}
                              details={[
                                "Market rate validation",
                                "Cost-benefit analysis",
                                "Alternative vendor check"
                              ]}
                            />

                            <Connector visible={true} delay={0.8} />

                            <WorkflowCard
                              title="Security Review"
                              status="active"
                              owner="IT Security"
                              department="IT Security"
                              delay={0.7}
                              visible={true}
                              details={[
                                "Data access requirements",
                                "Security clearance check",
                                "Compliance verification"
                              ]}
                            />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Phase 3: Legal & Finance */}
                      {stage === 4 && (
                        <motion.div
                          key="phase-2"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '200px' }}
                        >
                          <div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs font-mono text-white/20 uppercase mb-4"
                            >
                              Phase 2: Legal & Financial Approval
                            </motion.div>
                            <div className="flex items-center gap-4 justify-center">
                            <WorkflowCard
                              title="Legal Review"
                              status="active"
                              owner="J. Smith"
                              department="Legal"
                              delay={0.3}
                              visible={true}
                              details={[
                                "Contract clause review",
                                "Liability assessment",
                                "IP rights verification"
                              ]}
                            />

                            <Connector visible={true} delay={0.6} />

                            <WorkflowCard
                              title="Budget Approval"
                              status="active"
                              owner="L. Park"
                              department="Finance"
                              delay={0.5}
                              visible={true}
                              details={[
                                "Budget availability: Confirmed",
                                "Cost center: R&D-2024",
                                "Approval limit: $500K"
                              ]}
                            />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Phase 4: Execution */}
                      {(stage === 5 || stage === 6) && (
                        <motion.div
                          key="phase-3"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '200px' }}
                        >
                          <div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs font-mono text-white/20 uppercase mb-4"
                            >
                              Phase 3: Execution
                            </motion.div>
                            <div className="flex items-center gap-4 justify-center">
                            <WorkflowCard
                              title="Supplier Onboarding"
                              status={stage >= 6 ? "complete" : "active"}
                              owner="K. Wilson"
                              department="Operations"
                              delay={0.3}
                              visible={true}
                              details={[
                                "Vendor registration complete",
                                "Banking details verified",
                                "Insurance certificates received"
                              ]}
                            />

                            <Connector visible={stage >= 6} delay={0.6} />

                            <WorkflowCard
                              title="Purchase Order Created in SAP Ariba"
                              status={stage >= 6 ? "complete" : "pending"}
                              owner="R. Martinez"
                              department="Legal"
                              delay={0.5}
                              visible={stage >= 6}
                              isLast={true}
                              phase="Complete"
                              details={stage >= 6 ? [
                                "PO #2024-3847 created",
                                "Contract signed by all parties",
                                "Project kickoff: Next Monday"
                              ] : undefined}
                            />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                  {/* Mobile: Same slide animation pattern */}
                  <div className="md:hidden h-full">
                    <div className="px-4 h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {/* Phase 1: Initial Submission */}
                      {stage === 2 && (
                        <motion.div
                          key="mobile-phase-0"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '350px' }}
                          className="w-full flex justify-center"
                        >
                          <WorkflowCard
                            title="Request Submitted"
                            status="complete"
                            owner="You"
                            delay={0}
                            visible={true}
                            phase="Initiation"
                            mobile={true}
                            details={[
                              "Request ID: #PRQ-2024-3847",
                              `Category: ${categories[loopCount % categories.length]}`,
                              "Estimated value: $250,000"
                            ]}
                          />
                        </motion.div>
                      )}

                      {/* Phase 2: Compliance & Risk */}
                      {stage === 3 && (
                        <motion.div
                          key="mobile-phase-1"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '350px' }}
                          className="w-full flex flex-col items-center justify-center"
                        >
                          <motion.div className="text-xs font-mono text-white/20 uppercase mb-3 text-center">
                            Phase 1: Compliance & Risk
                          </motion.div>
                          <div className="space-y-3 w-full max-w-sm">
                            <WorkflowCard
                              title="Procurement Review"
                              status="active"
                              owner="S. Chen"
                              department="Procurement"
                              delay={0.3}
                              visible={true}
                              mobile={true}
                              details={[
                                "Checking vendor compliance",
                                "Validating budget codes",
                                "Reviewing contract terms"
                              ]}
                            />
                            <WorkflowCard
                              title="Commercial Review"
                              status="active"
                              owner="M. Torres"
                              department="Commercial"
                              delay={0.5}
                              visible={true}
                              mobile={true}
                              details={[
                                "Market rate validation",
                                "Cost-benefit analysis",
                                "Alternative vendor check"
                              ]}
                            />
                            <WorkflowCard
                              title="Security Review"
                              status="active"
                              owner="IT Security"
                              department="IT Security"
                              delay={0.7}
                              visible={true}
                              mobile={true}
                              details={[
                                "Data access requirements",
                                "Security clearance check",
                                "Compliance verification"
                              ]}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Phase 3: Legal & Finance */}
                      {stage === 4 && (
                        <motion.div
                          key="mobile-phase-2"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '350px' }}
                          className="w-full flex flex-col items-center justify-center"
                        >
                          <motion.div className="text-xs font-mono text-white/20 uppercase mb-3 text-center">
                            Phase 2: Legal & Financial
                          </motion.div>
                          <div className="space-y-3 w-full max-w-sm">
                            <WorkflowCard
                              title="Legal Review"
                              status="active"
                              owner="J. Smith"
                              department="Legal"
                              delay={0.3}
                              visible={true}
                              mobile={true}
                              details={[
                                "Contract clause review",
                                "Liability assessment",
                                "IP rights verification"
                              ]}
                            />
                            <WorkflowCard
                              title="Budget Approval"
                              status="active"
                              owner="L. Park"
                              department="Finance"
                              delay={0.5}
                              visible={true}
                              mobile={true}
                              details={[
                                "Budget availability: Confirmed",
                                "Cost center: R&D-2024",
                                "Approval limit: $500K"
                              ]}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Phase 4: Execution */}
                      {(stage === 5 || stage === 6) && (
                        <motion.div
                          key="mobile-phase-3"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{ minHeight: '350px' }}
                          className="w-full flex flex-col items-center justify-center"
                        >
                          <motion.div className="text-xs font-mono text-white/20 uppercase mb-3 text-center">
                            Phase 3: Execution
                          </motion.div>
                          <div className="space-y-3 w-full max-w-sm">
                            <WorkflowCard
                              title="Supplier Onboarding"
                              status={stage >= 6 ? "complete" : "active"}
                              owner="K. Wilson"
                              department="Operations"
                              delay={0.3}
                              visible={true}
                              mobile={true}
                              details={[
                                "Vendor registration complete",
                                "Banking details verified",
                                "Insurance certificates received"
                              ]}
                            />
                            <WorkflowCard
                              title="Purchase Order Created in SAP Ariba"
                              status={stage >= 6 ? "complete" : "pending"}
                              owner="R. Martinez"
                              department="Legal"
                              delay={0.5}
                              visible={stage >= 6}
                              mobile={true}
                              isLast={true}
                              phase="Complete"
                              details={stage >= 6 ? [
                                "PO #2024-3847 created",
                                "Contract signed by all parties",
                                "Project kickoff: Next Monday"
                              ] : undefined}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// Simplified Radix-style Workflow Card
function WorkflowCard({ 
  title, 
  status = "pending",
  owner,
  department,
  delay = 0,
  visible = false,
  mobile = false,
  isLast = false,
  details,
  phase
}: { 
  title: string; 
  status?: "pending" | "active" | "complete";
  owner?: string;
  department?: string;
  delay?: number;
  visible?: boolean;
  mobile?: boolean;
  isLast?: boolean;
  details?: string[];
  phase?: string;
}) {
  if (!visible) return null;

  // Get initials from owner name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative ${mobile ? 'w-full' : 'max-w-[280px]'}`}
    >
      {/* Card Container - Frosted glass effect */}
      <div className={`
        relative bg-white/[0.01] backdrop-blur-md rounded-xl
        ${status === 'active' ? 'ring-1 ring-blue-500/30 shadow-xl shadow-blue-500/5' : ''}
        ${status === 'complete' ? 'opacity-60' : ''}
        transition-all duration-300
        before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent before:pointer-events-none
      `}>
        {/* Subtle border gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] pointer-events-none" />
        
        {/* Card Content */}
        <div className="relative p-4 z-10">
          {/* Header with Avatar */}
          <div className="flex gap-3 items-start">
            {/* Avatar */}
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold backdrop-blur-sm
              ${status === 'active' ? 'bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/20' : 
                status === 'complete' ? 'bg-green-500/15 text-green-300' :
                'bg-white/5 text-white/40'}
            `}>
              {owner ? getInitials(owner) : '?'}
            </div>
            
            {/* Title and Meta */}
            <div className="flex-1">
              <div className="text-sm font-semibold text-white/90">
                {title}
              </div>
              <div className="text-xs text-white/40 mt-0.5">
                {department || 'Processing'}
              </div>
            </div>

            {/* Status Icon */}
            <div className="flex-shrink-0">
              {status === 'complete' ? (
                <div className="w-5 h-5 rounded-full bg-green-500/15 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : status === 'active' ? (
                <div className="w-5 h-5 rounded-full bg-blue-500/15 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-white/5 backdrop-blur-sm" />
              )}
            </div>
          </div>
          
          {/* Details - only show for active items */}
          {status === 'active' && details && details.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3, delay: delay + 0.3 }}
              className="mt-3 pt-3 border-t border-white/[0.03] space-y-1.5"
            >
              {details.slice(0, 3).map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-300/40 mt-1.5 flex-shrink-0" />
                  <span className="text-xs text-white/40 leading-relaxed">{detail}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Connector Component
function Connector({ visible = false, delay = 0 }: { visible?: boolean; delay?: number }) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative"
    >
      <div className="h-px bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 w-16" />
      <motion.div
        className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          delay: delay + 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

// Individual workflow node component - Enterprise style (keeping for backwards compatibility)
function WorkflowNode({ 
  label, 
  delay = 0, 
  status = "pending",
  category = "review",
  step = 0,
  total = 0
}: { 
  label: string; 
  delay?: number;
  status?: "pending" | "active" | "complete";
  category?: string;
  step?: number;
  total?: number;
}) {
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case "compliance": return "text-blue-400 border-blue-400/20";
      case "finance": return "text-green-400 border-green-400/20";
      case "legal": return "text-purple-400 border-purple-400/20";
      case "it": return "text-orange-400 border-orange-400/20";
      case "operations": return "text-cyan-400 border-cyan-400/20";
      default: return "text-white/60 border-white/10";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: "easeOut"
      }}
      className="relative"
    >
      <div className={`
        flex items-center gap-4 py-3 px-4
        ${status === "complete" ? "opacity-60" : ""}
        ${status === "active" ? "border-l-2 border-white/40 pl-6" : ""}
      `}>
        {/* Status indicator */}
        <div className="flex-shrink-0">
          {status === "complete" ? (
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white/40 text-xs">✓</span>
            </div>
          ) : status === "active" ? (
            <div className="w-5 h-5 rounded-full border-2 border-white/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full border border-white/20" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${
              status === "active" ? "text-white" : "text-white/70"
            }`}>
              {label}
            </span>
            {step > 0 && (
              <span className="text-xs text-white/30 font-mono">
                {step}/{total}
              </span>
            )}
          </div>
        </div>
        
        {/* Category tag */}
        {category !== "review" && (
          <div className={`text-xs px-2 py-1 rounded border ${getCategoryColor(category)}`}>
            {category.toUpperCase()}
          </div>
        )}
      </div>
    </motion.div>
  )
}
