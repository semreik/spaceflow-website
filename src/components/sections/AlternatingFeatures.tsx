"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/cn"
import { 
  MessageSquare, 
  Workflow, 
  Users, 
  Shield, 
  BarChart3, 
  FileText, 
  UserPlus,
  Receipt,
  TrendingUp,
  AlertTriangle,
  FileCheck,
  ChevronDown,
  Package,
  CheckCircle,
  Sparkles
} from "lucide-react"

const features = [
  {
    id: "intake-module",
    accentColor: "#64748B",
    tagline: "Intake & Approvals Module",
    title: "Smart Procurement Workflow",
    subtitle: "From request to approval in one seamless flow",
    description: "Natural language procurement requests with intelligent approval routing. Submit requests in plain language, track approvals in real-time, and accelerate your procurement cycle.",
    benefits: [
      "Plain language request submission",
      "Automatic routing and categorization",
      "Real-time status visibility",
      "Automated delay escalation",
      "Mobile approval capability",
      "Predictive timeline estimates",
      "Zero training required",
      "Instant request validation"
    ],
    stats: {
      before: "5-7 days cycle",
      after: "1-2 days cycle"
    },
    mockUI: "combined-intake-approval",
    sections: [
      {
        title: "Conversational procurement requests",
        description: "Natural language processing captures request details automatically. System routes to appropriate approvers based on spend thresholds and categories.",
        mockUI: "chat"
      },
      {
        title: "Real-time approval tracking",
        description: "Live status updates at each approval stage. Automated escalation prevents delays. Mobile approvals keep workflows moving.",
        mockUI: "workflow"
      }
    ],
    isCore: true
  },
  {
    id: "vendor-module",
    accentColor: "#8B5CF6",
    tagline: "Vendor Management Suite",
    title: "Complete Vendor Lifecycle Management",
    subtitle: "From onboarding to risk monitoring in one platform",
    description: "Comprehensive vendor management covering catalog, onboarding, and risk monitoring. Single source for all vendor information with automated compliance and performance tracking.",
    benefits: [
      "Pre-negotiated rates access",
      "Automated document collection",
      "Built-in compliance verification",
      "Digital supplier portal",
      "Real-time risk scoring",
      "Financial health monitoring",
      "Performance history tracking",
      "Contract renewal alerts",
      "Progress tracking dashboard",
      "Automated risk alerts"
    ],
    stats: {
      before: "2-3 weeks onboarding",
      after: "2-3 days onboarding"
    },
    mockUI: "combined-vendor",
    sections: [
      {
        title: "Centralized vendor catalog",
        description: "Single source for vendor information, negotiated rates, compliance status, and performance metrics. Contract renewal tracking included.",
        mockUI: "vendor"
      },
      {
        title: "Streamlined supplier onboarding",
        description: "Digitize and automate the entire supplier onboarding process. From initial registration to compliance verification, our platform ensures new suppliers are ready to transact quickly and compliantly.",
        mockUI: "onboarding"
      },
      {
        title: "Proactive risk monitoring",
        description: "Continuous monitoring of supplier risk factors including financial health, compliance status, and performance metrics. Get alerts on potential issues before they affect your operations.",
        mockUI: "risk"
      }
    ],
    isCore: true
  },
  {
    id: "rfx-module",
    accentColor: "#475569",
    tagline: "RFx & Bid Management",
    title: "Complete RFx Lifecycle Management",
    subtitle: "From RFP creation to bid analysis in one platform",
    description: "End-to-end RFx management with no-code creation and intelligent bid analysis. Create, distribute, and evaluate proposals with AI-powered insights and automated scoring.",
    benefits: [
      "Drag-and-drop RFP builder",
      "Automated vendor distribution",
      "Response scoring automation",
      "Automated bid data extraction",
      "Side-by-side comparison matrix",
      "Risk scoring and red flags",
      "Negotiation insights and leverage",
      "Collaborative evaluation workflows"
    ],
    stats: {
      before: "2 weeks to create",
      after: "2 hours to launch"
    },
    mockUI: "combined-rfx",
    sections: [
      {
        title: "No-code RFP/RFQ creation",
        description: "Create professional RFPs, RFQs, and RFIs using drag-and-drop templates. Automatically score responses and collaborate with stakeholders throughout the evaluation process.",
        mockUI: "rfx"
      },
      {
        title: "Smart bid analysis & comparison",
        description: "Automatically extract and normalize bid data across different formats. Compare pricing, terms, and qualifications side-by-side. AI-powered insights highlight risks, opportunities, and negotiation leverage points.",
        mockUI: "bids"
      }
    ],
    isCore: true
  },
  {
    id: "purchase-orders",
    icon: FileCheck,
    accentColor: "#6366F1",
    tagline: "Purchase Orders",
    title: "Automated PO generation",
    subtitle: "From request to PO in minutes",
    description: "Automatically generate purchase orders from approved requests. Our system ensures accuracy, maintains compliance, and integrates seamlessly with your existing ERP systems.",
    benefits: [
      "Auto-generation from approvals",
      "Three-way matching automation",
      "ERP integration ready",
      "Digital signature workflows"
    ],
    stats: {
      before: "Manual creation",
      after: "Auto-generated"
    },
    mockUI: "purchase-order"
  }
]

function ChatMockUI({ color = "#64748B" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Gradient glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: color }} />
      
      <div className="p-8 space-y-6">
        {/* Sarah's message */}
        <div className="flex items-start gap-3">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4" 
            alt="Sarah"
            className="w-10 h-10 rounded-full border-2 border-white/10"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-white/90">Sarah Chen</span>
              <span className="text-xs text-white/40">2 min ago</span>
            </div>
            <div className="bg-white/[0.05] backdrop-blur rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm border border-white/[0.08]">
              <p className="text-sm text-white/80">Hey! We need Figma licenses for the design team. It&apos;s getting urgent - we&apos;re sharing passwords 😅</p>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}>
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-white/90">SpaceFlow</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                <span className="text-xs text-white/40">typing</span>
              </div>
            </div>
            <div className="bg-white/[0.08] backdrop-blur rounded-2xl rounded-tl-sm px-4 py-3 border border-white/[0.08]">
              <p className="text-sm text-white/80 mb-3">Got it! Let me set that up. How many seats do you need?</p>
              
              {/* Quick options */}
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/70 hover:bg-white/15 transition-colors border border-white/10">
                  5-10 seats
                </button>
                <button className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/70 hover:bg-white/15 transition-colors border border-white/10">
                  10-25 seats
                </button>
                <button className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/70 hover:bg-white/15 transition-colors border border-white/10">
                  25+ seats
                </button>
              </div>
            </div>
            
            {/* Auto-detected info */}
            <div className="mt-3 flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" style={{ color }} />
                Auto-routing to IT + Finance
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                Design Team (12 people)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowMockUI({ color = "#6366F1" }) {
  const steps = [
    { name: "Request submitted", user: "Alex Kumar", time: "Yesterday", status: "completed" },
    { name: "Manager review", user: "Lisa Park", time: "Today at 10:30 AM", status: "completed" },
    { name: "IT security check", user: "Marcus Webb", time: "Today at 11:45 AM", status: "completed" },
    { name: "Finance approval", user: "Jennifer Liu", time: "In progress", status: "active" },
    { name: "Legal contract review", user: "David Chen", time: "Pending", status: "pending" }
  ]

  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
      
      <div className="p-6">
        {/* Header with alert */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-xs text-white">!</span>
            </div>
            <span className="text-sm text-amber-300">Finance approval pending — budget exceeded by 15%</span>
            <button className="ml-auto text-xs text-amber-300 hover:text-amber-200">VIEW →</button>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-white/40 border-b border-white/[0.05] pb-3">
            <span className="text-white/70 font-medium">Workflow</span>
            <span>History</span>
            <span>Comments (3)</span>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white/10" style={{
                background: step.status === "completed" ? "#10B981" : 
                           step.status === "active" ? color : "transparent"
              }}>
                {step.status === "completed" && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {step.status === "active" && (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
                {step.status === "pending" && (
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                )}
              </div>
              
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <p className={cn(
                    "text-sm font-medium",
                    step.status === "completed" ? "text-white/70" :
                    step.status === "active" ? "text-white/90" : "text-white/50"
                  )}>
                    {step.name}
                  </p>
                  <p className={cn(
                    "text-xs",
                    step.status === "completed" ? "text-white/40" :
                    step.status === "active" ? "text-white/50" : "text-white/30"
                  )}>
                    {step.time}
                  </p>
                </div>
                
                <span className={cn(
                  "text-xs",
                  step.status === "completed" ? "text-white/50" :
                  step.status === "active" ? "text-blue-300" : "text-white/30"
                )}>
                  {step.user}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

function VendorMockUI({ color = "#64748B" }) {
  const vendors = [
    {
      name: "General Electric",
      category: "Industrial",
      inherentRisk: "Moderate",
      residualRisk: "Low",
      totalSpend: "$2.4M",
      owner: "S. Chen",
      tier: "Tier 1",
      logo: "GE"
    },
    {
      name: "Siemens AG",
      category: "Automation",
      inherentRisk: "Significant",
      residualRisk: "Moderate",
      totalSpend: "$1.8M",
      owner: "M. Torres",
      tier: "Tier 1",
      logo: "SI"
    },
    {
      name: "Honeywell",
      category: "Controls",
      inherentRisk: "Moderate",
      residualRisk: "Low",
      totalSpend: "$980K",
      owner: "L. Park",
      tier: "Tier 2",
      logo: "HO"
    }
  ]

  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}22, transparent)` }} />

      <div className="p-3 sm:p-4 lg:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white/90 truncate">Vendor Portfolio</h3>
          <span className="text-xs text-white/40 flex-shrink-0 ml-2">Industrial Equipment</span>
        </div>

        {/* Ultra-compact mobile layout for very small screens */}
        <div className="block xs:hidden space-y-2">
          {vendors.map((vendor, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs font-medium text-white/70 flex-shrink-0">
                  {vendor.logo}
                </div>
                <span className="text-white/90 text-xs font-medium truncate flex-1">{vendor.name}</span>
                <span className="text-xs text-white/60 flex-shrink-0">{vendor.tier}</span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/40">Category:</span>
                  <span className="text-white/70 truncate ml-1">{vendor.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Risk:</span>
                  <span className="text-white/70 truncate ml-1">{vendor.inherentRisk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Spend:</span>
                  <span className="text-white/90 font-medium ml-1">{vendor.totalSpend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Owner:</span>
                  <span className="text-white/70 truncate ml-1">{vendor.owner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-friendly card layout for small screens */}
        <div className="hidden xs:block sm:hidden space-y-2.5">
          {vendors.map((vendor, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-medium text-white/70 flex-shrink-0">
                  {vendor.logo}
                </div>
                <span className="text-white/90 text-sm font-medium truncate flex-1">{vendor.name}</span>
                <span className="text-xs text-white/60 flex-shrink-0">{vendor.tier}</span>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                <div>
                  <span className="text-white/40">Category: </span>
                  <span className="text-white/70">{vendor.category}</span>
                </div>
                <div>
                  <span className="text-white/40">Risk: </span>
                  <span className="text-white/70">{vendor.inherentRisk}</span>
                </div>
                <div>
                  <span className="text-white/40">Spend: </span>
                  <span className="text-white/90 font-medium">{vendor.totalSpend}</span>
                </div>
                <div>
                  <span className="text-white/40">Owner: </span>
                  <span className="text-white/70 truncate">{vendor.owner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table layout */}
        <div className="hidden sm:block space-y-3">
          {/* Header */}
          <div className="grid grid-cols-12 gap-2 pb-2 border-b border-white/[0.05] text-xs text-white/40 font-medium">
            <div className="col-span-3">Supplier</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Risk Level</div>
            <div className="col-span-2">Total Spend</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-1">Tier</div>
          </div>

          {/* Rows */}
          {vendors.map((vendor, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 py-2 px-2 rounded-lg hover:bg-white/[0.02] transition-colors items-center">
              <div className="col-span-3 flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-medium text-white/70 flex-shrink-0">
                  {vendor.logo}
                </div>
                <span className="text-white/80 text-sm truncate">{vendor.name}</span>
              </div>

              <div className="col-span-2 text-white/60 text-sm truncate">{vendor.category}</div>

              <div className="col-span-2">
                <span className={cn(
                  "px-2 py-1 rounded text-xs font-medium inline-block",
                  vendor.inherentRisk === "Moderate" ? "bg-slate-500/20 text-slate-300" :
                  vendor.inherentRisk === "Significant" ? "bg-slate-600/20 text-slate-400" :
                  "bg-slate-400/20 text-slate-300"
                )}>
                  {vendor.inherentRisk}
                </span>
              </div>

              <div className="col-span-2 text-white/80 font-medium text-sm">{vendor.totalSpend}</div>

              <div className="col-span-2 flex items-center gap-1 min-w-0">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 flex-shrink-0">
                  {vendor.owner.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-white/60 text-xs truncate">{vendor.owner}</span>
              </div>

              <div className="col-span-1 text-white/60 text-sm">{vendor.tier}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BidsMockUI({ color = "#475569" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white/90">Steel Fabrication RFQ-2024-112</h3>
          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${color}22`, color }}>
            3 bids received
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white/90">ArcelorMittal</span>
              <span className="text-sm font-semibold text-white/90">$1,245,000</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>Lead time: 6 weeks</span>
              <span>•</span>
              <span>Score: 92/100</span>
              <span className="ml-auto px-2 py-0.5 rounded bg-slate-500/20 text-slate-300">Best value</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white/90">US Steel</span>
              <span className="text-sm font-semibold text-white/90">$1,189,000</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>Lead time: 8 weeks</span>
              <span>•</span>
              <span>Score: 85/100</span>
              <span className="ml-auto text-white/40">Lowest price</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white/90">Nucor Corporation</span>
              <span className="text-sm font-semibold text-white/90">$1,320,000</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>Lead time: 4 weeks</span>
              <span>•</span>
              <span>Score: 88/100</span>
              <span className="ml-auto text-white/40">Fastest delivery</span>
            </div>
          </div>
        </div>
        
        <button className="w-full px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors" style={{ background: color }}>
          View detailed comparison
        </button>
      </div>
    </div>
  )
}

function AnalyticsMockUI({ color = "#06B6D4" }) {
  return (
    <div className="bg-surface/50 backdrop-blur-sm rounded-lg border border-glass-border overflow-hidden">
      <div className="bg-glass border-b border-glass-border px-4 py-3">
        <span className="text-sm font-medium text-text">Spend Analytics</span>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-text">$2.4M</span>
            <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">-18%</span>
          </div>
          <div className="text-xs text-subtle">Total spend this quarter</div>
        </div>
        <div className="relative h-32 mb-4">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M 10 70 Q 30 50 50 55 T 90 45 Q 110 40 130 35 T 170 25 Q 180 22 190 20"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <path
              d="M 10 70 Q 30 50 50 55 T 90 45 Q 110 40 130 35 T 170 25 Q 180 22 190 20 L 190 100 L 10 100 Z"
              fill="url(#gradient)"
            />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-text">$420K</div>
            <div className="text-xs text-subtle">Savings YTD</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-text">89%</div>
            <div className="text-xs text-subtle">Contract compliance</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-text">3.2 days</div>
            <div className="text-xs text-subtle">Avg cycle time</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RfxMockUI({ color = "#475569" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white/90">Creating RFP: Logistics Services</h3>
            <p className="text-sm text-white/50">Using template: Transportation & Warehousing</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">
            Auto-saved
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white/60" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white/90">Basic Information</p>
              <p className="text-xs text-white/40">Title, description, deadlines</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white/60" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white/90">Requirements</p>
              <p className="text-xs text-white/40">42 requirements added from template</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${color}33`, border: `1px solid ${color}` }}>
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white/90">Evaluation Criteria</p>
              <p className="text-xs text-white/40">Setting scoring weights...</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white/30">Vendor Selection</p>
              <p className="text-xs text-white/20">Choose recipients</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white/70 hover:bg-white/[0.08] transition-colors">
            Save as draft
          </button>
          <button className="flex-1 px-4 py-2 rounded-lg text-sm text-white font-medium transition-colors" style={{ background: color }}>
            Preview RFP
          </button>
        </div>
      </div>
    </div>
  )
}

function OnboardingMockUI({ color = "#64748B" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white/90">New Supplier Onboarding</h3>
          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${color}22`, color }}>
            In Progress
          </span>
        </div>
        
        <div className="space-y-4">
          {[
            { step: "Basic Information", status: "completed", time: "2 min ago" },
            { step: "Compliance Documents", status: "completed", time: "5 min ago" },
            { step: "Banking Details", status: "active", time: "In progress" },
            { step: "Contract Terms", status: "pending", time: "Pending" },
            { step: "Final Review", status: "pending", time: "Pending" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                item.status === "completed" ? "bg-white/10" : 
                item.status === "active" ? "" : "bg-white/[0.03]"
              )} style={{ 
                background: item.status === "active" ? `${color}33` : undefined,
                border: item.status === "active" ? `1px solid ${color}` : undefined
              }}>
                {item.status === "completed" ? (
                  <CheckCircle className="w-4 h-4 text-white/60" />
                ) : item.status === "active" ? (
                  <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                )}
              </div>
              <div className="flex-1">
                <p className={cn(
                  "text-sm font-medium",
                  item.status === "completed" ? "text-white/50" :
                  item.status === "active" ? "text-white/90" : "text-white/30"
                )}>
                  {item.step}
                </p>
                <p className="text-xs text-white/40">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PurchaseOrderMockUI({ color = "#475569" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white/90">PO #2024-3847</h3>
            <p className="text-sm text-white/50">Auto-generated from approved request</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">
            Ready to send
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-white/40 mb-1">Vendor</p>
              <p className="text-sm text-white/80">3M Company</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Total Amount</p>
              <p className="text-sm font-semibold text-white/90">$285,000.00</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Delivery Date</p>
              <p className="text-sm text-white/80">March 15, 2024</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Payment Terms</p>
              <p className="text-sm text-white/80">2/10 Net 30</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white/70 hover:bg-white/[0.08] transition-colors">
            Preview PDF
          </button>
          <button className="flex-1 px-4 py-2 rounded-lg text-sm text-white font-medium transition-colors" style={{ background: color }}>
            Send to Vendor
          </button>
        </div>
      </div>
    </div>
  )
}

function InvoiceMockUI({ color = "#64748B" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white/90">Invoice Processing</h3>
            <p className="text-sm text-white/50">AI extracted • 98% confidence</p>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${color}22`, color }}>
            Auto-matched
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">Invoice #</p>
            <p className="text-sm font-medium text-white/80">INV-2024-8923</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">Amount</p>
            <p className="text-sm font-medium text-white/80">$12,450.00</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">PO Match</p>
            <p className="text-sm font-medium" style={{ color }}>✓ Matched</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">Due Date</p>
            <p className="text-sm font-medium text-white/80">Apr 15, 2024</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <span className="text-sm text-white/70">Early payment discount available</span>
          <span className="text-sm font-medium" style={{ color }}>Save $245</span>
        </div>
      </div>
    </div>
  )
}

function SavingsMockUI({ color = "#475569" }) {
  // Mock data for the graph
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const savings = [85, 92, 108, 124, 118, 142] // in thousands
  const maxSaving = Math.max(...savings)
  
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}22, transparent)` }} />
      
      <div className="p-6">
        {/* Header with tabs */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white/90">Procurement Analytics</h3>
            <select className="bg-white/[0.05] border border-white/[0.08] rounded px-2 py-1 text-xs text-white/70">
              <option>Last 6 months</option>
              <option>Year to date</option>
              <option>All time</option>
            </select>
          </div>
          <div className="flex items-center gap-4 text-xs border-b border-white/[0.05] pb-2">
            <span className="text-white/70 font-medium border-b-2 border-white/50 pb-2">Overview</span>
            <span className="text-white/40">Categories</span>
            <span className="text-white/40">Vendors</span>
            <span className="text-white/40">Contracts</span>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">Total Saved</p>
            <p className="text-lg font-bold text-white/90">$742K</p>
            <p className="text-xs text-emerald-400">↑ 23.4%</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">Avg. Discount</p>
            <p className="text-lg font-bold text-white/90">14.2%</p>
            <p className="text-xs text-white/50">47 vendors</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs text-white/40 mb-1">ROI</p>
            <p className="text-lg font-bold text-white/90">312%</p>
            <p className="text-xs text-amber-400">↑ 8.7%</p>
          </div>
        </div>
        
        {/* Bar Chart */}
        <div className="mb-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <p className="text-xs text-white/50 mb-3">Monthly Savings Trend ($K)</p>
          <div className="flex items-end justify-between gap-2 h-24">
            {months.map((month, idx) => (
              <div key={month} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-white/[0.05] rounded-t relative flex items-end" style={{ height: '80px' }}>
                  <div 
                    className="w-full bg-gradient-to-t from-slate-500/40 to-slate-400/60 rounded-t transition-all duration-300 hover:from-slate-500/50 hover:to-slate-400/70"
                    style={{ height: `${(savings[idx] / maxSaving) * 100}%` }}
                  >
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-white/60">{savings[idx]}</span>
                  </div>
                </div>
                <span className="text-xs text-white/40">{month}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Category Breakdown */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs text-white/50 mb-2">Top Categories</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">Software</span>
                <span className="text-xs text-white/90">$234K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">Hardware</span>
                <span className="text-xs text-white/90">$189K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">Services</span>
                <span className="text-xs text-white/90">$156K</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <p className="text-xs text-white/50 mb-2">Quick Actions</p>
            <div className="space-y-2">
              <button className="w-full text-left text-xs text-white/70 hover:text-white/90">→ Review Q2 contracts</button>
              <button className="w-full text-left text-xs text-white/70 hover:text-white/90">→ Optimize tail spend</button>
              <button className="w-full text-left text-xs text-white/70 hover:text-white/90">→ Export report</button>
            </div>
          </div>
        </div>
        
        {/* Status bar */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <span className="text-xs text-white/40">Last updated: 2 min ago</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs text-white/50">Live tracking</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RiskMockUI({ color = "#78716C" }) {
  return (
    <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Gradient glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: color }} />

      <div className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
        {/* Risk Alert Message */}
        <div className="flex items-start gap-2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=System&backgroundColor=ef4444"
            alt="System Alert"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/10 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-white/90 truncate">Risk Monitor</span>
              <span className="text-xs text-white/40 flex-shrink-0">Just now</span>
            </div>
            <div className="bg-white/[0.05] backdrop-blur rounded-xl rounded-tl-sm px-2 sm:px-3 py-2 border border-white/[0.08]">
              <p className="text-xs text-white/80 leading-relaxed">⚠️ High risk vendor detected: TechCorp Solutions missing SOC2 certification. Immediate review required.</p>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-white/90 truncate">SpaceFlow AI</span>
              <span className="text-xs text-white/40 flex-shrink-0">Analyzing...</span>
            </div>
            <div className="bg-white/[0.05] backdrop-blur rounded-xl rounded-tl-sm px-2 sm:px-3 py-2 border border-white/[0.08]">
              <p className="text-xs text-white/80 mb-2 leading-relaxed">I've identified 3 critical risks across your vendor portfolio. Here's what needs attention:</p>

              <div className="space-y-1.5 mb-2">
                <div className="flex items-start gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0 mt-1"></div>
                  <span className="text-white/70 leading-relaxed">TechCorp Solutions - Missing compliance docs</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0 mt-1"></div>
                  <span className="text-white/70 leading-relaxed">DataFlow Inc - Outdated security assessment</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400/60 flex-shrink-0 mt-1"></div>
                  <span className="text-white/70 leading-relaxed">SecureVault Ltd - Contract renewal due</span>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row xs:items-center gap-1.5 text-xs text-white/50">
                <span className="truncate">Overall risk score: 98% compliant</span>
                <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-white/60 text-center xs:text-left flex-shrink-0">3 items need review</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 pt-1">
          <button className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-white/70 hover:bg-white/[0.08] transition-colors">
            <span>Generate report</span>
          </button>
          <button className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-white font-medium transition-colors" style={{ background: `${color}88` }}>
            <span>Review risks</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function getMockUI(type: string, color: string) {
  switch (type) {
    case "chat":
      return <ChatMockUI color={color} />
    case "workflow":
      return <WorkflowMockUI color={color} />
    case "vendor":
      return <VendorMockUI color={color} />
    case "bids":
      return <BidsMockUI color={color} />
    case "rfx":
      return <RfxMockUI color={color} />
    case "onboarding":
      return <OnboardingMockUI color={color} />
    case "purchase-order":
      return <PurchaseOrderMockUI color={color} />
    case "invoice":
      return <InvoiceMockUI color={color} />
    case "savings":
      return <SavingsMockUI color={color} />
    case "risk":
      return <RiskMockUI color={color} />
    default:
      return null
  }
}

export function AlternatingFeatures() {
  const prefersReducedMotion = useReducedMotion()
  const [activeFeature, setActiveFeature] = React.useState<string | null>(null)
  const [expandedTab, setExpandedTab] = React.useState<string | null>(null)

  const handleTabClick = (featureId: string) => {
    if (expandedTab === featureId) {
      setExpandedTab(null)
      setActiveFeature(null)
    } else {
      setExpandedTab(featureId)
      setActiveFeature(featureId)
    }
  }

  return (
    <section 
      className="py-20 bg-black relative overflow-hidden"
      style={{ 
        contain: 'layout paint',
        isolation: 'isolate'
      }}
    >
      {/* Subtle gradient background - absolute positioned */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black pointer-events-none" 
        style={{ willChange: 'opacity' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - No animation on layout properties */}
        <div className="text-center mb-8">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, transform: 'translateY(20px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SpaceFlow
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
              Transform your source to pay processes in one best-of-suite platform.
            </p>
          </motion.div>
        </div>

        {/* Features List - Fixed container with layout containment */}
        <div 
          className="max-w-4xl mx-auto relative" 
          style={{ 
            minHeight: '800px',
            contain: 'layout',
            willChange: 'contents'
          }}
        >
          <div className="space-y-1">
            {features.map((feature, index) => {
              const isExpanded = expandedTab === feature.id
              
              return (
                <motion.div
                  key={feature.id}
                  initial={prefersReducedMotion ? {} : { opacity: 0, transform: 'translateY(20px)' }}
                  whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="relative group"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Authentic Feature Card */}
                  <button
                    onClick={() => handleTabClick(feature.id)}
                    className={cn(
                    "w-full text-left transition-all duration-300",
                    "relative overflow-hidden",
                    isExpanded && "mb-1"
                  )}
                >
                  <div className={cn(
                    "relative border-l-2 pl-6 py-4 transition-all duration-300 cursor-pointer",
                    isExpanded 
                      ? "border-l-white/40" 
                      : "border-l-white/20 hover:border-l-white/30"
                  )}
                  style={{
                    background: isExpanded 
                      ? `linear-gradient(90deg, ${feature.accentColor}08 0%, transparent 60%)`
                      : `linear-gradient(90deg, ${feature.accentColor}03 0%, transparent 40%)`
                  }}>
                    {/* Accent side bar */}
                    <div 
                      className={cn(
                        "absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300",
                        isExpanded ? "opacity-80" : "opacity-0 group-hover:opacity-50"
                      )}
                      style={{ background: feature.accentColor }}
                    />
                    
                    {/* Subtle glow effect on hover */}
                    <div 
                      className={cn(
                        "absolute inset-0 transition-opacity duration-300 pointer-events-none",
                        "opacity-0 group-hover:opacity-100"
                      )}
                      style={{
                        background: `radial-gradient(circle at 10% 50%, ${feature.accentColor}06, transparent 50%)`
                      }}
                    />
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex-1">
                        {/* Module identifier with accent color */}
                        <div className="flex items-center gap-3 mb-1">
                          <div 
                            className="w-2 h-2 rounded-full transition-colors duration-300"
                            style={{ 
                              backgroundColor: isExpanded ? feature.accentColor : 'rgba(255,255,255,0.3)',
                              opacity: isExpanded ? 0.8 : 0.5
                            }}
                          />
                          <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                            {feature.tagline.replace(/\s+/g, '_').toLowerCase()}
                          </span>
                          {/* Click indicator */}
                          <span className="text-xs text-white/20 font-mono ml-auto">
                            {isExpanded ? '▼' : '▶'}
                          </span>
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-medium text-white/90 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/50">
                          {feature.subtitle}
                        </p>
                      </div>
                      
                      {/* Interactive expand button */}
                      <div className="ml-4 flex items-center gap-2">
                        <span className="text-xs text-white/30 font-mono hidden sm:block">
                          {isExpanded ? 'collapse' : 'expand'}
                        </span>
                        <motion.div
                          animate={{ 
                            rotate: isExpanded ? 90 : 0,
                            scale: isExpanded ? 1.1 : 1
                          }}
                          transition={{ duration: 0.3 }}
                          className="p-1 rounded border border-white/20 hover:border-white/40 transition-colors"
                          style={{
                            backgroundColor: isExpanded ? `${feature.accentColor}20` : 'transparent'
                          }}
                        >
                          <div className="w-2 h-2 border-r border-b border-white/60 rotate-45 transform origin-center" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content - Using visibility to keep space */}
                <div 
                  className="overflow-hidden transition-opacity duration-300"
                  style={{
                    visibility: isExpanded ? 'visible' : 'hidden',
                    opacity: isExpanded ? 1 : 0,
                    maxHeight: isExpanded ? '2000px' : '0',
                    transition: 'opacity 0.3s, visibility 0.3s, max-height 0.3s',
                    willChange: 'opacity'
                  }}
                >
                  <div className="pl-6 pt-2 pb-4">
                    <div className="border-l-2 border-white/[0.08] pl-6 space-y-4">
                          {/* Description */}
                          <p className="text-white/60 leading-relaxed text-sm">
                            {feature.description}
                          </p>

                          {/* Benefits - Simple list */}
                          <div className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + idx * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                                <span className="text-sm text-white/60">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Stats - Simple inline */}
                          <div className="flex items-center gap-4 pt-2 text-xs">
                            <span className="text-white/40">
                              Before: <span className="text-white/50 font-mono">{feature.stats.before}</span>
                            </span>
                            <span className="text-white/20">→</span>
                            <span className="text-white/40">
                              After: <span className="text-white/70 font-mono">{feature.stats.after}</span>
                            </span>
                          </div>

                          {/* Sections for combined modules or Mock UI Preview */}
                          {feature.sections ? (
                            <div className="space-y-6 mt-6">
                              {feature.sections.map((section, sIdx) => (
                                <motion.div
                                  key={sIdx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + sIdx * 0.1 }}
                                  className="space-y-3"
                                >
                                  <div className="border-l-2 border-white/10 pl-4">
                                    <h4 className="text-white/80 font-medium mb-2">{section.title}</h4>
                                    <p className="text-white/50 text-sm mb-4">{section.description}</p>
                                    <div className="rounded-lg overflow-hidden">
                                      {getMockUI(section.mockUI, feature.accentColor)}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 }}
                              className="mt-4"
                            >
                              {getMockUI(feature.mockUI, feature.accentColor)}
                            </motion.div>
                          )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
