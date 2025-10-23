"use client"
// @ts-nocheck

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"
import { 
  ChevronRight, 
  MessageSquare, 
  Shield, 
  Zap, 
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Package,
  DollarSign,
  GitBranch,
  Star,
  Award,
  Brain,
  Database,
  Workflow,
  Activity,
  FileSearch,
  FileCheck
} from "lucide-react"
import { cn } from "@/lib/cn"

const features = [
  {
    id: "smart-procurement-flow",
    icon: Brain,
    title: "Smart Procurement Flow",
    description: "AI-guided intake forms with intelligent approval routing based on spend, risk, and compliance requirements.",
    gradient: "from-emerald-500/10 via-transparent to-violet-500/10",
    accentColor: "emerald",
    cta: "See full workflow",
    mockUI: {
      type: "combined-intake-approval",
      intakeSection: {
        type: "chat",
        messages: [
          { role: "assistant", text: "Sarah Chen", subtext: "We need Figma Enterprise for the design team" },
          { role: "ai", text: "SpaceFlow AI • now", action: "Creating request... I'll route this to IT and Finance for approval" }
        ]
      },
      approvalSection: {
        type: "workflow-timeline",
        title: "⚠️ Finance approval pending — budget exceeded by 15%",
        steps: [
          { name: "Request submitted", user: "Alex Kumar", date: "Today at 9:15 AM", status: "completed", icon: CheckCircle },
          { name: "Manager review", user: "Lisa Park", date: "Today at 10:30 AM", status: "completed", icon: CheckCircle },
          { name: "IT security check", user: "Marcus Webb", date: "Today at 11:45 AM", status: "completed", icon: CheckCircle },
          { name: "Finance approval", user: "Jennifer Liu", date: "Reviewing now...", status: "active", icon: Activity },
          { name: "Legal contract review", user: "David Chen", date: "Pending", status: "pending", icon: Clock }
        ]
      }
    }
  },
  {
    id: "product-catalog",
    icon: FileSearch,
    title: "Vendor Catalog",
    description: "Pre-approved vendors with negotiated rates and compliance status.",
    gradient: "from-blue-500/10 via-transparent to-cyan-500/10",
    accentColor: "blue",
    cta: "Browse catalog",
    mockUI: {
      type: "vendor-detail",
      vendor: {
        name: "Slack",
        code: "VND-2024-089",
        completion: "Feb 28, 2024",
        priority: "Critical",
        risk: "Low Risk",
        owner: "Rachel Thompson",
        supplier: "Slack Technologies",
        product: "Business Plus Plan"
      },
      tabs: ["Overview", "Contracts", "Compliance", "Spend History", "Documents", "Renewals"]
    }
  },
  {
    id: "comprehensive-vendor-management",
    icon: Shield,
    title: "Comprehensive Vendor Management",
    description: "Complete vendor lifecycle management from onboarding to risk monitoring, with supplier portal and compliance tracking.",
    gradient: "from-amber-500/10 via-transparent to-red-500/10",
    accentColor: "amber",
    cta: "Manage vendors",
    mockUI: {
      type: "combined-vendor-management",
      supplierPortalSection: {
        type: "risk-matrix",
        title: "Security Assessment Timeline",
        subtitle: "Risk indicators",
        items: [
          { label: "SOC2 Type II valid", risk: "low", indicators: [false, false, false, false, true] },
          { label: "Pen test < 6 months old", risk: "low", indicators: [false, false, false, false, true] },
          { label: "GDPR compliance verified", risk: "medium", indicators: [false, false, false, true, true] },
          { label: "Insurance expires in 30 days", risk: "high", indicators: [true, false, false, false, false] }
        ]
      },
      riskManagementSection: {
        type: "security-check",
        title: "AWS Security & Compliance Status:",
        items: [
          { icon: CheckCircle, label: "SOC2 Type II compliant", status: "info" },
          { icon: CheckCircle, label: "ISO 27001 certified", status: "info" },
          { icon: AlertCircle, label: "GDPR assessment expires in 45 days", status: "warning" },
          { icon: AlertCircle, label: "Handles financial transaction data", status: "critical" }
        ]
      },
      onboardingSection: {
        type: "onboarding-progress",
        title: "New Supplier Onboarding",
        supplier: "TechCorp Solutions",
        progress: 75,
        steps: [
          { name: "Basic Information", status: "completed", time: "2 min ago" },
          { name: "Compliance Documents", status: "completed", time: "5 min ago" },
          { name: "Banking Details", status: "active", time: "In progress" },
          { name: "Contract Terms", status: "pending", time: "Pending" },
          { name: "Final Review", status: "pending", time: "Pending" }
        ]
      },
      proactiveRiskSection: {
        type: "risk-monitoring",
        title: "Risk Dashboard",
        alerts: [
          { vendor: "GlobalTech Inc", risk: "Financial distress detected", severity: "high", time: "2 hours ago" },
          { vendor: "SecureSoft", risk: "Compliance cert expiring", severity: "medium", time: "1 day ago" },
          { vendor: "DataFlow Systems", risk: "Performance decline", severity: "low", time: "3 days ago" }
        ],
        riskScore: {
          overall: 72,
          financial: 85,
          operational: 68,
          compliance: 91
        }
      }
    }
  },
  {
    id: "orchestration",
    icon: Zap,
    title: "ERP Integration",
    description: "Push PRs and POs directly into NetSuite, SAP, or Oracle.",
    gradient: "from-indigo-500/10 via-transparent to-blue-500/10",
    accentColor: "indigo",
    cta: "View integrations",
    mockUI: {
      type: "workflow-builder",
      title: "Zoom Enterprise License Purchase",
      blocks: [
        { type: "task", label: "Create PR", description: "Purchase requisition #PR-2024-156" },
        { type: "po", label: "Generate PO", description: "Auto-create in NetSuite" },
        { type: "rfx", label: "Contract", description: "3-year enterprise agreement" }
      ],
      templates: ["SaaS Procurement Template", "Hardware Purchase Flow", "Professional Services RFP"]
    }
  },
  {
    id: "renewals",
    icon: TrendingUp,
    title: "Contract Renewals",
    description: "Never miss contract renewals with auto-alerts and histories.",
    gradient: "from-pink-500/10 via-transparent to-rose-500/10",
    accentColor: "pink",
    cta: "Manage renewals",
    mockUI: {
      type: "security-summary",
      vendor: "Microsoft 365",
      code: "CTR-2024-001",
      sections: [
        {
          title: "Renewal Status",
          subtitle: "Action Required",
          concerns: [
            { icon: AlertCircle, label: "Contract expires in 32 days", status: "critical" },
            { icon: Clock, label: "Price increase: 12% YoY ($45K → $50.4K)", status: "warning" },
            { icon: CheckCircle, label: "Auto-renewal enabled", status: "info" },
            { icon: Activity, label: "Negotiation in progress with account manager", status: "info" }
          ]
        }
      ]
    }
  },
  {
    id: "workflow-builder",
    icon: GitBranch,
    title: "Approval Rules",
    description: "Set smart approval rules for spend, tier, and risk.",
    gradient: "from-cyan-500/10 via-transparent to-teal-500/10",
    accentColor: "cyan",
    cta: "Configure rules",
    mockUI: {
      type: "rules-builder",
      title: "Approval Rules Engine",
      subtitle: "Automatically route based on conditions",
      ruleName: "High-value software purchases require CTO approval",
      conditions: [
        { type: "category", operator: "=", value: "Software" },
        { connector: "AND" },
        { type: "amount", operator: ">", value: "$25,000" },
        { connector: "OR" },
        { type: "vendor_risk", operator: "=", value: "High" }
      ]
    }
  },
  {
    id: "reporting",
    icon: BarChart3,
    title: "Live Analytics",
    description: "View spend and vendor risk in real-time dashboards.",
    gradient: "from-purple-500/10 via-transparent to-indigo-500/10",
    accentColor: "purple",
    cta: "View dashboard",
    mockUI: {
      type: "analytics-chart",
      title: "Q1 Software Spend",
      metric: "$2.4M",
      change: "-18%",
      subtitle: "Saved $520K through consolidated licenses",
      data: [
        { value: 250, label: "Active contracts" },
        { value: 80, label: "Up for renewal", highlight: true }
      ]
    }
  },
  {
    id: "rfx-bid-management",
    icon: FileText,
    title: "RFx & Bid Management",
    description: "Complete RFP/RFQ lifecycle from no-code creation to automated bid analysis and supplier comparison.",
    gradient: "from-teal-500/10 via-transparent to-orange-500/10",
    accentColor: "teal",
    cta: "Manage RFx process",
    mockUI: {
      type: "combined-rfx-bid",
      rfxSection: {
        type: "rfx-builder",
        title: "Supplier assessment",
        sections: [
          { name: "General", status: "required", completion: "100%" },
          { name: "Legal", status: "required", completion: "100%" },
          { name: "Security", status: "required", completion: "75%" },
          { name: "ESG Policies", status: "required", completion: "50%" },
          { name: "Sustainability", status: "optional", completion: "0%" }
        ],
        activeSection: {
          title: "General",
          lastEdit: "Last edited: 10 Jan by Peter Kaminsky",
          aiMessage: "Fill in this form with SpaceFlow AI. Upload a contract for instant form fill.",
          fields: [
            { label: "What is your organisation's registered name?", value: "Pallet Tech", filled: true },
            { label: "Which country is your organisation in?", value: "Select", filled: false }
          ]
        }
      },
      bidSection: {
        type: "bid-comparison",
        title: "Marketing Agency RFP - 3 Bids Received",
        bids: [
          {
            supplier: "Creative Studio Co.",
            score: 92,
            price: "$125,000",
            delivery: "6 weeks",
            compliance: "100%",
            risk: "Low",
            strengths: ["Price competitive", "Fast delivery", "ISO certified"],
            recommended: true
          },
          {
            supplier: "Digital First Agency",
            score: 85,
            price: "$145,000",
            delivery: "8 weeks",
            compliance: "95%",
            risk: "Medium",
            strengths: ["Strong portfolio", "Good references"]
          },
          {
            supplier: "Global Marketing Ltd",
            score: 78,
            price: "$98,000",
            delivery: "10 weeks",
            compliance: "85%",
            risk: "High",
            strengths: ["Lowest price"]
          }
        ]
      }
    }
  },
  {
    id: "purchase-orders",
    icon: FileCheck,
    title: "Purchase Orders",
    description: "Automated PO generation from approved requests with ERP integration.",
    gradient: "from-indigo-500/10 via-transparent to-blue-500/10",
    accentColor: "indigo",
    cta: "Generate PO",
    mockUI: {
      type: "purchase-order",
      title: "PO #2024-3847",
      subtitle: "Auto-generated from approved request",
      vendor: "3M Company",
      amount: "$285,000.00",
      status: "Ready to send",
      items: [
        { description: "Industrial Adhesives", quantity: "500 units", price: "$185,000" },
        { description: "Safety Equipment", quantity: "200 units", price: "$100,000" }
      ]
    }
  }
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = React.useState(false)
  const Icon = feature.icon

  const renderMockUI = () => {
    switch (feature.mockUI.type) {
      case "combined-intake-approval":
        return (
          <div className="p-4 space-y-4">
            {/* Tabs for navigation */}
            <div className="flex gap-2 border-b border-gray-800">
              <div className="px-3 py-1 border-b-2 border-emerald-500 text-xs font-medium text-gray-200">Smart Procurement</div>
              <div className="px-3 py-1 text-xs text-gray-500">Workflow</div>
            </div>
            
            {/* Simple combined view */}
            <div className="space-y-4">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-3 shadow-lg">
                <span className="text-gray-300 text-sm">AI-guided procurement with intelligent approval routing</span>
              </div>
            </div>
          </div>
        )
        
      case "combined-vendor-management":
        return (
          <div className="p-4 space-y-4">
            {/* Tabs for navigation */}
            <div className="flex gap-2 border-b border-gray-800">
              <div className="px-3 py-1 border-b-2 border-amber-500 text-xs font-medium text-gray-200">Vendor Management</div>
              <div className="px-3 py-1 text-xs text-gray-500">Risk</div>
              <div className="px-3 py-1 text-xs text-gray-500">Onboarding</div>
            </div>
            
            {/* Simple combined view */}
            <div className="space-y-4">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-3 shadow-lg">
                <span className="text-gray-300 text-sm">Complete vendor lifecycle management from onboarding to risk monitoring</span>
              </div>
            </div>
          </div>
        )
        
      case "combined-rfx-bid":
        return (
          <div className="p-4 space-y-4">
            {/* Tabs for navigation */}
            <div className="flex gap-2 border-b border-gray-800">
              <div className="px-3 py-1 border-b-2 border-teal-500 text-xs font-medium text-gray-200">RFx Creation</div>
              <div className="px-3 py-1 text-xs text-gray-500">Bid Analysis</div>
            </div>
            
            {/* Simple combined view */}
            <div className="space-y-4">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-3 shadow-lg">
                <span className="text-gray-300 text-sm">Complete RFP/RFQ lifecycle from creation to bid analysis</span>
              </div>
            </div>
          </div>
        )
      case "chat":
        return (
          <div className="p-6 space-y-4 relative">
            {/* Scrollbar hint */}
            <div className="absolute right-2 top-2 bottom-2 w-1 bg-gray-700/20 rounded-full" />
            
            {'messages' in feature.mockUI && feature.mockUI.messages && (
              <>
                <div className="text-center">
                  <div className="text-gray-300 text-sm font-medium mb-1">{feature.mockUI.messages[0]?.text}</div>
                  <div className="text-gray-500 text-xs">{feature.mockUI.messages[0]?.subtext}</div>
                </div>
                
                <div className="text-left mt-6">
                  <div className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                    {feature.mockUI.messages[1]?.text}
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-3 shadow-lg">
                    <span className="text-gray-300 text-sm">{feature.mockUI.messages[1]?.action}</span>
                    <span className="inline-block w-0.5 h-4 bg-emerald-400 ml-1 animate-pulse" />
                  </div>
                </div>
              </>
            )}
          </div>
        )
      
      case "workflow-timeline":
        return (
          <div className="p-4 relative">
            {/* Top notification bar */}
            <div className="flex items-center gap-2 mb-4 p-2 bg-amber-500/10 border border-amber-500/20 rounded-md">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-200 flex-1">{feature.mockUI.title}</span>
              <span className="text-xs text-amber-400 hover:text-amber-300 cursor-pointer">VIEW →</span>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-4 mb-3 border-b border-gray-800">
              <span className="text-xs font-medium text-gray-200 pb-2 border-b-2 border-blue-400">Workflow</span>
              <span className="text-xs text-gray-500 pb-2">History</span>
              <span className="text-xs text-gray-500 pb-2">Comments (3)</span>
            </div>
            
            {/* Timeline with enhanced details */}
            <div className="relative">
              {feature.mockUI.steps?.map((step, idx) => {
                const StepIcon = step.icon
                const isActive = step.status === 'active'
                const isCompleted = step.status === 'completed'
                const isPending = step.status === 'pending'
                return (
                  <div key={idx} className={`flex gap-3 mb-3 ${isActive ? 'bg-blue-500/5 -mx-2 px-2 py-1 rounded' : ''}`}>
                    <div className="relative">
                      <div className={`p-1 rounded-full ${
                        isActive ? 'bg-blue-500/20' :
                        isCompleted ? 'bg-emerald-500/20' : 
                        'bg-gray-800'
                      }`}>
                        <StepIcon className={`w-3 h-3 ${
                          isActive ? 'text-blue-400' :
                          isCompleted ? 'text-emerald-400' : 'text-gray-600'
                        }`} />
                      </div>
                      {idx < (feature.mockUI.steps?.length || 0) - 1 && (
                        <div className={`absolute left-4 top-6 w-px h-8 ${
                          isCompleted ? 'bg-emerald-500/30' : 'bg-gray-700'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs ${
                          isActive ? 'text-gray-100 font-semibold' : 
                          isPending ? 'text-gray-500' : 'text-gray-300'
                        }`}>
                          {step.name}
                        </span>
                        <span className={`text-xs ${
                          isActive ? 'text-blue-400' : 'text-gray-500'
                        }`}>{step.user}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-0.5">{step.date}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Scrollbar */}
            <div className="absolute right-1 top-16 bottom-2 w-0.5 bg-gray-700/30 rounded-full" />
          </div>
        )
      
      case "vendor-detail":
        const vendor = typeof feature.mockUI.vendor === 'object' ? feature.mockUI.vendor : null
        return vendor ? (
          <div className="relative">
            {/* Header with vendor info */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800/30 to-transparent border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-100">
                    {vendor.name} <span className="text-gray-500 text-xs ml-1">{vendor.code}</span>
                  </div>
                  <div className="text-xs text-gray-500">{vendor.supplier}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Contract ends</div>
                <div className="text-xs text-gray-300 font-medium">{vendor.completion}</div>
              </div>
            </div>
            
            {/* Tabs with hover states */}
            <div className="flex gap-0 px-2 py-1 border-b border-gray-800 text-xs overflow-x-auto">
              {feature.mockUI.tabs?.map((tab, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-t transition-colors cursor-pointer ${
                  idx === 0 ? 'bg-gray-800/50 text-gray-200 border-b-2 border-blue-400' : 
                  'text-gray-500 hover:text-gray-400 hover:bg-gray-800/30'
                }`}>
                  {tab}
                </span>
              ))}
            </div>
            
            {/* Content with realistic spacing */}
            <div className="p-4 space-y-3.5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Product</div>
                  <div className="text-sm text-gray-200 font-medium">{vendor.product}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Owner</div>
                  <div className="text-xs text-gray-300">{vendor.owner}</div>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 mb-2">Priority Level</div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-1.5 h-4 rounded-sm ${
                        vendor.priority === 'Critical' && i <= 5 ? 'bg-red-500' :
                        vendor.priority === 'High' && i <= 4 ? 'bg-orange-500' :
                        vendor.priority === 'Medium' && i <= 3 ? 'bg-yellow-500' :
                        'bg-gray-700'
                      }`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-300 font-medium">{vendor.priority}</span>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 mb-2">Risk Assessment</div>
                <div className="flex gap-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded-md ${
                    vendor.risk === 'Low Risk' ? 'bg-emerald-500/20 text-emerald-400' :
                    vendor.risk === 'Medium Risk' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {vendor.risk}
                  </span>
                  <span className="inline-block px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md">
                    Last reviewed 2 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : <div className="p-4 text-gray-500">Preview</div>
      
      case "risk-matrix":
        return (
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div className="text-sm font-medium text-gray-300">{feature.mockUI.title}</div>
              <div className="text-sm text-gray-400">{feature.mockUI.subtitle}</div>
            </div>
            <div className="space-y-2">
              {feature.mockUI.items?.map((item, idx) => {
                const riskItem = 'risk' in item ? item : null
                return riskItem ? (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <span className="text-xs text-gray-300">{item.label}</span>
                    <div className="flex items-center gap-1">
                      {riskItem.indicators.map((active: boolean, i: number) => (
                        <div key={i} className={`w-6 h-6 rounded-full border ${
                          riskItem.risk === 'high' && i === 0 ? 'bg-red-500/20 border-red-500' :
                          riskItem.risk === 'medium-high' && i === 2 ? 'bg-amber-500/20 border-amber-500' :
                          riskItem.risk === 'medium' && i === 3 ? 'bg-amber-500/20 border-amber-500' :
                          riskItem.risk === 'low' && i === 4 ? 'bg-emerald-500/20 border-emerald-500' :
                          active ? 'bg-gray-600/20 border-gray-600' : 'border-gray-700'
                        } flex items-center justify-center`}>
                          {(riskItem.risk === 'low' && i === 4) || 
                           (riskItem.risk === 'medium' && (i === 3 || i === 4)) ||
                           (riskItem.risk === 'medium-high' && (i === 2 || i === 4)) ||
                           (riskItem.risk === 'high' && (i === 0 || i === 4)) ? (
                            <CheckCircle className="w-3 h-3 text-current" />
                          ) : (
                            <span className="text-xs text-gray-600">!</span>
                          )}
                        </div>
                      ))}
                      <Database className="w-4 h-4 text-gray-500 ml-1" />
                    </div>
                  </div>
                ) : null
              })}
            </div>
          </div>
        )
      
      case "security-check":
        return (
          <div className="p-4">
            <div className="text-xs text-gray-400 mb-3">{feature.mockUI.title}</div>
            <div className="space-y-2">
              {feature.mockUI.items?.map((item, idx) => {
                const securityItem = 'icon' in item ? item : null
                if (!securityItem) return null
                const ItemIcon = securityItem.icon
                return (
                  <div key={idx} className="flex items-start gap-2">
                    <div className={`p-1 rounded ${
                      securityItem.status === 'critical' ? 'bg-red-500/20' :
                      securityItem.status === 'warning' ? 'bg-amber-500/20' :
                      'bg-gray-700/30'
                    }`}>
                      <ItemIcon className={`w-3 h-3 ${
                        securityItem.status === 'critical' ? 'text-red-400' :
                        securityItem.status === 'warning' ? 'text-amber-400' :
                        'text-gray-400'
                      }`} />
                    </div>
                    <span className="text-xs text-gray-300">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      
      case "workflow-builder":
        return (
          <div>
            <div className="px-4 py-3 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400">● Published</span>
                <span className="text-xs text-gray-500">Last saved: 12 Mar 2025 by Sam Jones</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-48 border-r border-gray-800 p-3">
                <div className="text-xs font-medium text-gray-400 mb-3">Toolbox</div>
                <div className="space-y-2 mb-4">
                  <button className="w-full text-left px-3 py-2 bg-gray-800 rounded text-xs text-gray-300 hover:bg-gray-700">
                    Actions
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded text-xs text-gray-400 hover:bg-gray-800">
                    Integrations
                  </button>
                </div>
                <div className="text-xs text-gray-500 mb-2">Blocks</div>
                <div className="space-y-1">
                  {feature.mockUI.blocks?.map((block, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400 hover:bg-gray-800 rounded cursor-pointer">
                      <div className="w-4 h-4 bg-gray-700 rounded" />
                      <span>{block.label}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-4 mb-2">Templates</div>
                <div className="space-y-1">
                  {feature.mockUI.templates?.map((template, idx) => (
                    <div key={idx} className="px-2 py-1.5 text-xs text-gray-400 hover:bg-gray-800 rounded cursor-pointer">
                      {template}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 p-4">
                <div className="text-xs font-medium text-gray-300">{feature.mockUI.title}</div>
              </div>
            </div>
          </div>
        )
      
      case "security-summary":
        return (
          <div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200">
                    {typeof feature.mockUI.vendor === 'string' ? feature.mockUI.vendor : ''} <span className="text-gray-500">{feature.mockUI.code}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 px-4 py-2 border-b border-gray-800 text-xs">
              {['Overview', 'My tasks', 'Intake', 'Submissions', 'Documents', 'Risks'].map((tab, idx) => (
                <span key={idx} className={`px-3 py-1 rounded ${
                  idx === 5 ? 'bg-gray-800 text-gray-200' : 'text-gray-500'
                }`}>
                  {tab}
                </span>
              ))}
            </div>
            {feature.mockUI.sections?.map((section, sIdx) => (
              <div key={sIdx} className="p-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-300">{'subtitle' in section ? section.subtitle : ''}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">Key concerns about {typeof feature.mockUI.vendor === 'string' ? feature.mockUI.vendor : ''} security practices:</div>
                  <div className="space-y-2">
                    {'concerns' in section && section.concerns?.map((concern, idx) => {
                      const ConcernIcon = concern.icon
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`p-1 rounded ${
                            concern.status === 'critical' ? 'bg-red-500/20' :
                            concern.status === 'warning' ? 'bg-amber-500/20' :
                            'bg-gray-700/30'
                          }`}>
                            <ConcernIcon className={`w-3 h-3 ${
                              concern.status === 'critical' ? 'text-red-400' :
                              concern.status === 'warning' ? 'text-amber-400' :
                              'text-gray-400'
                            }`} />
                          </div>
                          <span className="text-xs text-gray-300">{concern.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      
      case "rules-builder":
        return (
          <div className="p-6">
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
              <div className="text-sm font-medium text-gray-300 mb-1">{feature.mockUI.title}</div>
              <div className="text-xs text-gray-500 mb-4">{feature.mockUI.subtitle}</div>
              
              <div className="mb-4">
                <label className="text-xs text-gray-400">Name</label>
                <div className="mt-1 px-3 py-2 bg-gray-900/50 border border-gray-700 rounded text-sm text-gray-300">
                  {feature.mockUI.ruleName}
                </div>
              </div>
              
              <div className="space-y-2">
                {feature.mockUI.conditions?.map((condition, idx) => (
                  <div key={idx}>
                    {condition.connector ? (
                      <div className="text-xs text-gray-500 my-2 pl-4">{condition.connector}</div>
                    ) : (
                      <div className="flex items-center gap-2 bg-gray-900/30 rounded p-2 border border-gray-700/50">
                        <span className="text-xs text-gray-400 min-w-[60px]">
                          {condition.type === 'value' ? 'Value' : 'Tier'}
                        </span>
                        <span className="text-xs text-gray-500 px-2">{condition.operator}</span>
                        <span className="text-xs text-gray-300 font-medium">{condition.value}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-4 py-2 text-xs text-gray-400 hover:text-gray-300">CANCEL</button>
                <button className="px-4 py-2 bg-purple-600 text-white text-xs rounded hover:bg-purple-700">SAVE</button>
              </div>
            </div>
          </div>
        )
      
      case "analytics-chart":
        return (
          <div className="p-4 relative">
            {/* Metric header with trend */}
            <div className="mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-gray-100">{feature.mockUI.metric}</span>
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                      feature.mockUI.change?.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400' : 
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {feature.mockUI.change}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{feature.mockUI.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{feature.mockUI.subtitle}</div>
                </div>
                <div className="flex gap-1">
                  <button className="p-1 text-gray-600 hover:text-gray-400 transition-colors">
                    <span className="text-xs">↗</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Enhanced chart with grid */}
            <div className="relative h-32 mb-2">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0,1,2,3].map(i => (
                  <div key={i} className="border-t border-gray-800/30" />
                ))}
              </div>
              
              {/* Chart */}
              <svg className="relative w-full h-full" viewBox="0 0 200 100">
                <defs>
                  <linearGradient id={`gradient-${feature.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 70 Q 30 50 50 55 T 90 45 Q 110 40 130 35 T 170 25 Q 180 22 190 20"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 10 70 Q 30 50 50 55 T 90 45 Q 110 40 130 35 T 170 25 Q 180 22 190 20 L 190 100 L 10 100 Z"
                  fill={`url(#gradient-${feature.id})`}
                />
                {/* Data points */}
                <circle cx="50" cy="55" r="3" fill="#8b5cf6" className="animate-pulse" />
                <circle cx="90" cy="45" r="3" fill="#8b5cf6" />
                <circle cx="130" cy="35" r="3" fill="#8b5cf6" />
                <circle cx="170" cy="25" r="3" fill="#8b5cf6" />
                <circle cx="190" cy="20" r="4" fill="#8b5cf6" stroke="#1f2937" strokeWidth="2" />
              </svg>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
              </div>
            </div>
            
            {/* Legend with hover effect */}
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-800/30">
              {feature.mockUI.data?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className={`w-2 h-2 rounded-full ${
                    item.highlight ? 'bg-purple-500 ring-2 ring-purple-500/30' : 'bg-gray-600'
                  }`} />
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )
      
      case "rfx-builder":
        return (
          <div className="flex h-full">
            {/* Sidebar with sections */}
            <div className="w-32 border-r border-gray-800 p-2">
              <div className="text-xs font-medium text-gray-400 mb-3 px-2">{feature.mockUI.title}</div>
              <div className="space-y-1">
                {feature.mockUI.sections?.map((section, idx) => (
                  <div 
                    key={idx} 
                    className={`px-2 py-1.5 rounded text-xs cursor-pointer transition-all ${
                      idx === 0 ? 'bg-gray-800/50 text-gray-200' : 'text-gray-500 hover:text-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        {'status' in section && section.status === 'required' && (
                          <div className="w-1 h-1 bg-red-500 rounded-full" />
                        )}
                        {'name' in section ? section.name : ('title' in section ? section.title : '')}
                      </span>
                      {'completion' in section && section.completion === '100%' && (
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 p-4">
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-200 mb-1">
                  {feature.mockUI.activeSection?.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {feature.mockUI.activeSection?.lastEdit}
                </p>
              </div>
              
              {/* AI helper */}
              <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-blue-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-blue-400">✨</span>
                  </div>
                  <p className="text-xs text-blue-300">
                    {feature.mockUI.activeSection?.aiMessage}
                  </p>
                </div>
              </div>
              
              {/* Form fields */}
              <div className="space-y-3">
                {feature.mockUI.activeSection?.fields?.map((field, idx) => (
                  <div key={idx}>
                    <label className="text-xs text-gray-400 block mb-1">
                      {idx + 1}. {field.label}
                    </label>
                    <div className={`h-8 px-3 py-2 rounded border ${
                      field.filled 
                        ? 'bg-gray-800/30 border-gray-700 text-gray-200 text-sm' 
                        : 'bg-gray-900/50 border-gray-700/50 text-gray-500 text-sm'
                    }`}>
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case "bid-comparison":
        return (
          <div className="p-3">
            <div className="text-xs font-medium text-gray-300 mb-3">{feature.mockUI.title}</div>
            <div className="space-y-2">
              {feature.mockUI.bids?.map((bid, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-lg border transition-all ${
                    bid.recommended 
                      ? 'bg-emerald-500/10 border-emerald-500/30' 
                      : 'bg-gray-800/30 border-gray-700/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-200">{bid.supplier}</span>
                      {bid.recommended && (
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`text-lg font-bold ${
                        bid.score >= 90 ? 'text-emerald-400' :
                        bid.score >= 80 ? 'text-yellow-400' :
                        'text-orange-400'
                      }`}>
                        {bid.score}
                      </div>
                      <span className="text-xs text-gray-500">/100</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-2 text-xs">
                    <div>
                      <span className="text-gray-500 block mb-0.5">Price</span>
                      <span className="text-gray-300 font-medium">{bid.price}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5">Delivery</span>
                      <span className="text-gray-300">{bid.delivery}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5">Compliance</span>
                      <span className="text-gray-300">{bid.compliance}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5">Risk</span>
                      <span className={`font-medium ${
                        bid.risk === 'Low' ? 'text-emerald-400' :
                        bid.risk === 'Medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>{bid.risk}</span>
                    </div>
                  </div>
                  
                  {bid.strengths && bid.strengths.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {bid.strengths.map((strength, sIdx) => (
                        <span key={sIdx} className="px-1.5 py-0.5 bg-gray-700/50 text-gray-400 text-xs rounded">
                          {strength}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      
      default:
        return (
          <div className="p-4 flex items-center justify-center h-full">
            <div className="text-xs text-gray-500">Preview</div>
          </div>
        )
    }
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card with gradient background */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-100`} />
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gray-900/90" />
        
        {/* Hover gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        
        {/* Card content */}
        <div className="relative z-10 backdrop-blur-sm">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} backdrop-blur-md transition-transform duration-200 group-hover:scale-105`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
              />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Mock UI Section */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            
            {/* Mock browser window with glassmorphism */}
            <div className="mx-6 mb-6 rounded-lg overflow-hidden border border-gray-700/50 bg-gray-900/40 backdrop-blur-md shadow-2xl">
              {/* Browser header */}
              <div className="bg-gray-900/60 backdrop-blur-sm px-3 py-2 flex items-center gap-2 border-b border-gray-700/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 hover:bg-red-500/70 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 hover:bg-yellow-500/70 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 hover:bg-green-500/70 transition-colors" />
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <div className="bg-gray-800/40 backdrop-blur rounded-md px-3 py-0.5 text-xs text-gray-400 font-mono">
                    app.spaceflow.ai
                  </div>
                  <div className="text-gray-600 text-xs">⟳</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 text-gray-600 text-xs">⋯</div>
                </div>
              </div>
              
              {/* Mock UI content with glass effect */}
              <div className="bg-gray-900/20 backdrop-blur-sm min-h-[200px] relative overflow-hidden">
                {renderMockUI()}
                
                {/* Subtle glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}

export function ModernFeatureCards() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="toolkit" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-black opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Feature cards grid - no header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
