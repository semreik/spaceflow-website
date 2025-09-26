"use client"

import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"

interface WorkflowNode {
  id: string
  label: string
  type: 'start' | 'process' | 'decision' | 'end' | 'form'
  position: { x: number; y: number }
  connections?: string[]
  status?: 'completed' | 'active' | 'pending'
  description?: string
  fields?: string[]
}

const workflowNodes: WorkflowNode[] = [
  {
    id: 'start',
    label: 'Pre-filling request with AI',
    type: 'form',
    position: { x: 50, y: 200 },
    connections: ['review1', 'review2', 'review3'],
    status: 'active',
    fields: ['WORKFLOW', 'CATEGORY/SUBCATEGORY', 'PREFERRED SUPPLIER']
  },
  {
    id: 'review1',
    label: 'Procurement review',
    type: 'process',
    position: { x: 350, y: 100 },
    connections: ['commercial'],
    status: 'pending'
  },
  {
    id: 'review2',
    label: 'Commercial review',
    type: 'process',
    position: { x: 350, y: 200 },
    connections: ['legal'],
    status: 'pending'
  },
  {
    id: 'review3',
    label: 'Security review',
    type: 'process',
    position: { x: 350, y: 300 },
    connections: ['it_review'],
    status: 'pending'
  },
  {
    id: 'commercial',
    label: 'FP&A budget approval',
    type: 'process',
    position: { x: 600, y: 50 },
    connections: ['supplier'],
    status: 'pending'
  },
  {
    id: 'legal',
    label: 'Legal review',
    type: 'process',
    position: { x: 600, y: 150 },
    connections: ['supplier'],
    status: 'pending'
  },
  {
    id: 'it_review',
    label: 'IT review',
    type: 'process',
    position: { x: 600, y: 250 },
    connections: ['security_final'],
    status: 'pending'
  },
  {
    id: 'supplier',
    label: 'Supplier onboarding',
    type: 'decision',
    position: { x: 850, y: 100 },
    connections: ['order_form', 'po_creation'],
    status: 'pending'
  },
  {
    id: 'security_final',
    label: 'Security review agent',
    type: 'process',
    position: { x: 850, y: 250 },
    connections: ['po_creation'],
    status: 'pending',
    description: 'Analyzing SOW...'
  },
  {
    id: 'order_form',
    label: 'Order form data extracted',
    type: 'decision',
    position: { x: 1100, y: 50 },
    connections: ['complete'],
    status: 'pending'
  },
  {
    id: 'po_creation',
    label: 'Create PO in SAP Ariba',
    type: 'process',
    position: { x: 1100, y: 150 },
    connections: ['complete'],
    status: 'pending'
  },
  {
    id: 'complete',
    label: 'Complete',
    type: 'end',
    position: { x: 1350, y: 100 },
    status: 'pending'
  }
]

export function WorkflowSection() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeNode, setActiveNode] = React.useState<string>('start')
  const [hoveredNode, setHoveredNode] = React.useState<string | null>(null)

  const getNodeById = (id: string) => workflowNodes.find(node => node.id === id)

  const renderConnection = (fromId: string, toId: string, index: number) => {
    const from = getNodeById(fromId)
    const to = getNodeById(toId)
    if (!from || !to) return null

    // Adjust connection points based on node type
    const fromX = from.type === 'form' ? from.position.x + 280 : from.position.x + 180
    const fromY = from.type === 'form' ? from.position.y : from.position.y + 20
    
    const path = `M ${fromX} ${fromY} 
                  C ${fromX + 40} ${fromY}, 
                    ${to.position.x - 40} ${to.position.y + 20}, 
                    ${to.position.x} ${to.position.y + 20}`

    return (
      <motion.path
        key={`${fromId}-${toId}`}
        d={path}
        stroke="rgba(0, 0, 0, 0.1)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ 
          duration: 1.2, 
          delay: index * 0.15,
          ease: "easeOut"
        }}
      />
    )
  }

  const renderNode = (node: WorkflowNode, index: number) => {
    const isActive = node.id === activeNode
    const isHovered = node.id === hoveredNode
    
    // Special rendering for the form node
    if (node.type === 'form' && node.id === 'start') {
      return (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ 
            left: node.position.x,
            top: node.position.y - 50,
            width: '280px'
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <h3 className="text-sm font-medium text-text">{node.label}</h3>
            </div>
            {node.fields && (
              <div className="space-y-3">
                {node.fields.map((field, idx) => (
                  <div key={idx}>
                    <label className="text-xs text-subtle block mb-1">{field}</label>
                    <div className="h-8 bg-white/[0.02] border border-white/[0.05] rounded" />
                  </div>
                ))}
                <button className="w-full mt-4 py-2 bg-accent text-accent-contrast rounded text-sm font-medium hover:bg-accent/90 transition-colors">
                  Submit
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )
    }

    // Regular node rendering
    return (
      <motion.div
        key={node.id}
        className="absolute"
        style={{ 
          left: node.position.x,
          top: node.position.y,
          width: '180px'
        }}
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: node.status === 'pending' ? 0.4 : 1, 
          scale: isHovered ? 1.02 : 1 
        }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.08,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
        onMouseEnter={() => setHoveredNode(node.id)}
        onMouseLeave={() => setHoveredNode(null)}
        onClick={() => setActiveNode(node.id)}
      >
        <div className={`
          relative px-4 py-3 rounded-lg backdrop-blur-sm
          transition-all duration-300 cursor-pointer
          ${isActive 
            ? 'bg-white/[0.08] border border-accent' 
            : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04]'
          }
        `}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm font-medium text-text">{node.label}</div>
              {node.description && (
                <div className="text-xs text-subtle mt-1">{node.description}</div>
              )}
            </div>
            {node.status === 'completed' && (
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                <div className="w-2 h-2 bg-accent-contrast rounded-full" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section ref={containerRef} className="relative py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Intelligent workflow orchestration
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto">
            Dynamic routing and parallel processing for faster approvals
          </p>
        </motion.div>

        {/* Workflow Container - No border, integrated into page */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-x-auto overflow-y-visible pb-8">
              <div className="relative min-w-[1450px] h-[450px]">
                {/* SVG for connections */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="1450"
                  height="450"
                >
                  {isInView && workflowNodes.flatMap((node, index) =>
                    (node.connections || []).map((toId, connIndex) =>
                      renderConnection(node.id, toId, index + connIndex)
                    )
                  )}
                </svg>

                {/* Workflow nodes */}
                {isInView && workflowNodes.map((node, index) => renderNode(node, index))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
