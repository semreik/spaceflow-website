"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Sparkles, Heart, Filter, MessageSquare, Users, Zap, CheckCircle, Send, Paperclip, Search, Home, Settings, FileText, ChevronRight } from "lucide-react"

export default function SmartIntakeDemoPage() {
  const [message, setMessage] = React.useState("")
  const [currentStep, setCurrentStep] = React.useState(0)

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Drive adoption",
      description: "So intuitive that anyone can submit a comprehensive request with zero training required."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Enhance visibility",
      description: "Boost procurement transparency with a platform that teams love to engage with."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Decrease cycle time",
      description: "Ask the right questions, not all the questions. SpaceFlow captures the complete picture in minimal steps."
    }
  ]

  const chatMessages = [
    { type: "assistant", text: "Hi! I'm Emma from SpaceFlow. What can we help you with today?" },
    { type: "user", text: "I need Monday.com licenses" },
    { type: "assistant", text: "I'll help you with Monday.com licenses. Let me gather some details to process your request efficiently.", options: [
      { icon: "📊", label: "Explore existing products & services", description: "Browse the pre-approved tools in your company catalog" },
      { icon: "🛒", label: "New purchase", description: "Get approval for a new purchase from legal, budgeting etc." },
      { icon: "🔄", label: "Renewal request", description: "Get approval for a renewal of a product" }
    ]}
  ]

  const tasks = [
    { supplier: "Okta", workflow: "New purchase", stage: "Action needed", value: "$45,000", assignee: "JS" },
    { supplier: "Adobe CS", workflow: "New purchase", stage: "Action needed", value: "$12,000", assignee: "JS" },
    { supplier: "Google Business", workflow: "Renewal", stage: "Legal review", value: "", assignee: "JS" },
    { supplier: "Figma", workflow: "New purchase", stage: "Under PO", value: "", assignee: "PW" },
    { supplier: "Zoom", workflow: "New purchase", stage: "Complete", value: "", assignee: "" }
  ]

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-glass-border bg-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-subtle hover:text-text transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold text-text">Smart Intake Form Demo</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-subtle bg-accent/10 px-2 py-1 rounded">Live Demo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-text mb-6"
            >
              AI-Powered Intake for the Modern
              <span className="text-accent"> Director of Procurement</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-subtle"
            >
              Transform procurement requests into conversations. SpaceFlow&apos;s intelligent intake system understands context, asks the right questions, and eliminates endless forms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-8 h-full">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
                  <p className="text-subtle">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversational Interface Demo */}
      <section className="py-16 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-text mb-4">
                Make requests <span className="text-accent">conversational.</span>
              </h3>
              <p className="text-lg text-subtle mb-6">
                Transform requests into simple conversations with our procurement AI. SpaceFlow asks the right questions to capture complete requirements, making intake effortless for everyone and eliminating time-consuming follow-ups.
              </p>
            </div>
            <div className="bg-surface rounded-lg shadow-2xl border border-glass-border overflow-hidden">
              <div className="bg-glass border-b border-glass-border px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-text">New request</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="p-6 h-[500px] flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] ${msg.type === 'user' ? 'bg-accent text-white' : 'bg-glass'} rounded-lg p-3`}>
                        {msg.type === 'assistant' && (
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                              <span className="text-xs text-white font-bold">S</span>
                            </div>
                            <span className="text-xs text-subtle">SpaceFlow Assistant</span>
                          </div>
                        )}
                        <p className={`text-sm ${msg.type === 'user' ? 'text-white' : 'text-text'}`}>{msg.text}</p>
                        {msg.options && (
                          <div className="mt-3 space-y-2">
                            {msg.options.map((option, optIdx) => (
                              <button
                                key={optIdx}
                                className="w-full text-left p-3 bg-bg rounded-lg hover:bg-glass transition-colors group"
                                onClick={() => setCurrentStep(currentStep + 1)}
                              >
                                <div className="flex items-start gap-3">
                                  <span className="text-lg">{option.icon}</span>
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                                      {option.label}
                                    </p>
                                    <p className="text-xs text-subtle mt-1">{option.description}</p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 p-3 bg-glass rounded-lg">
                  <button className="text-subtle hover:text-text">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent text-text placeholder-subtle outline-none"
                  />
                  <button className="text-accent hover:text-accent/80">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-surface rounded-lg shadow-2xl border border-glass-border overflow-hidden">
                <div className="bg-glass border-b border-glass-border px-4 py-3 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-sm font-medium text-text">SpaceFlow</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <button className="text-accent border-b-2 border-accent pb-1">Home</button>
                    <button className="text-subtle hover:text-text">New Request</button>
                    <button className="text-subtle hover:text-text">Settings</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text mb-4">Your tasks</h4>
                    <div className="space-y-2">
                      {tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-glass rounded-lg hover:bg-glass-hover transition-colors">
                          <input type="checkbox" className="w-4 h-4 rounded border-glass-border" />
                          <div className="flex-1 grid grid-cols-5 gap-4 text-sm">
                            <span className="text-text font-medium">{task.supplier}</span>
                            <span className="text-subtle">{task.workflow}</span>
                            <span className={`${task.stage === 'Action needed' ? 'text-yellow-400' : task.stage === 'Complete' ? 'text-green-400' : 'text-accent'}`}>
                              {task.stage}
                            </span>
                            <span className="text-text">{task.value}</span>
                            <div className="flex items-center gap-2">
                              {task.assignee && (
                                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                                  <span className="text-xs text-accent">{task.assignee}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-text mb-4">Your requests</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-glass rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center">
                            <span className="text-purple-400">G</span>
                          </div>
                          <span className="text-sm text-text">Google Business</span>
                        </div>
                        <p className="text-xs text-subtle">Renewal</p>
                        <p className="text-xs text-purple-400 mt-1">Legal review</p>
                      </div>
                      <div className="p-4 bg-glass rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center">
                            <span className="text-pink-400">F</span>
                          </div>
                          <span className="text-sm text-text">Figma</span>
                        </div>
                        <p className="text-xs text-subtle">New purchase</p>
                        <p className="text-xs text-pink-400 mt-1">Under PO</p>
                      </div>
                      <div className="p-4 bg-glass rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                            <span className="text-blue-400">Z</span>
                          </div>
                          <span className="text-sm text-text">Zoom</span>
                        </div>
                        <p className="text-xs text-subtle">New purchase</p>
                        <p className="text-xs text-green-400 mt-1">Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-text mb-4">
                Enable intake in <span className="text-accent">existing tools.</span>
              </h3>
              <p className="text-lg text-subtle mb-6">
                Teams can submit and track requests without leaving Slack or Teams. They complete an embedded intake process in the chat tools they already use, and SpaceFlow updates them there too—so they always know exactly where their request stands.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-subtle">Connects to:</span>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 font-bold">T</span>
                  </div>
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 font-bold">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Engine */}
      <section className="py-16 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-text mb-4">
                Don't buy the <span className="text-accent">same thing twice.</span>
              </h3>
              <p className="text-lg text-subtle mb-6">
                SpaceFlow's AI recommendation engine identifies preferred suppliers and existing tooling with duplicate functionality to guide employees at intake, steering them towards what you're already paying for.
              </p>
            </div>
            <div className="bg-surface rounded-lg shadow-2xl border border-glass-border overflow-hidden">
              <div className="bg-glass border-b border-glass-border px-4 py-3">
                <span className="text-sm font-medium text-text">New request</span>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <button className="text-sm text-accent hover:text-accent/80 flex items-center gap-1">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">This is what you'll see when Smart Intake launches. Pretty cool, right?</p>
                    <p className="text-sm text-gray-600 mb-2">While you're waiting, here's a sneak peek at what Smart Intake will offer:</p>
                    <p className="text-sm text-subtle mb-2">
                      I need Monday.com licenses
                    </p>
                    <p className="text-sm text-text mb-3">
                      It's for the Strategy team. Needs to integrate with Slack. Around 50 users.
                    </p>
                  </div>
                  <div className="p-4 bg-glass rounded-lg">
                    <p className="text-sm font-medium text-text mb-3">
                      Got it, Thanks! Based on what your company already uses — plus a few top-rated external solutions — here are your best options:
                    </p>
                    <p className="text-xs text-subtle mb-3">
                      <li>🤖 AI-powered request classification - Our AI understands what you're asking for</li>
                      <li>📊 Real-time spend analytics - Know where your money's going</li>
                      <li>🔄 Automated approval workflows - No more chasing signatures</li>
                      You can click to explore any supplier or product below. If you'd like to request access to a tool we already use, just let us know and we'll handle the rest.
                    </p>
                    <p className="text-xs text-subtle">
                      Or let me know if you'd still prefer to proceed with a new supplier, Monday Inc.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-text mb-2">Recommended products for project management</div>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 bg-glass rounded-lg hover:bg-glass-hover transition-colors text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                            <span className="text-blue-400 font-bold text-sm">J</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text">Jira</p>
                            <p className="text-xs text-subtle">by Atlassian</p>
                            <p className="text-gray-600 mb-6">We're building something amazing for you.</p>
                          </div>
                        </div>
                      </button>
                      <button className="p-3 bg-glass rounded-lg hover:bg-glass-hover transition-colors text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center">
                            <span className="text-purple-400 font-bold text-sm">A</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text">Asana</p>
                            <p className="text-xs text-subtle">by Asana Inc</p>
                            <p className="text-xs text-green-400">Project management software</p>
                          </div>
                        </div>
                      </button>
                      <button className="p-3 bg-glass rounded-lg hover:bg-glass-hover transition-colors text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                            <span className="text-blue-400 font-bold text-sm">T</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text">Trello</p>
                            <p className="text-xs text-subtle">by Atlassian</p>
                          </div>
                        </div>
                      </button>
                      <button className="p-3 bg-glass rounded-lg hover:bg-glass-hover transition-colors text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-pink-500/20 rounded flex items-center justify-center">
                            <span className="text-pink-400 font-bold text-sm">N</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text">Notion</p>
                            <p className="text-xs text-subtle">by Notion Labs</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 p-3 bg-glass rounded-lg">
                  <input
                    type="text"
                    placeholder="Type your response..."
                    className="flex-1 bg-transparent text-text placeholder-subtle outline-none text-sm"
                  />
                  <button className="text-accent hover:text-accent/80">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Training Section */}
      <section className="py-16 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-surface rounded-lg shadow-2xl border border-glass-border overflow-hidden">
                <div className="bg-glass border-b border-glass-border px-4 py-3 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-sm font-medium text-text">SpaceFlow</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <button className="text-subtle hover:text-text">Home</button>
                    <button className="text-subtle hover:text-text">New Request</button>
                    <button className="text-accent border-b-2 border-accent pb-1">Settings</button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-6">
                    <div className="w-48 space-y-2">
                      <button className="w-full text-left px-3 py-2 bg-glass rounded-lg text-sm text-accent">General</button>
                      <button className="w-full text-left px-3 py-2 hover:bg-glass rounded-lg text-sm text-subtle">Vendors & Products</button>
                      <button className="w-full text-left px-3 py-2 hover:bg-glass rounded-lg text-sm text-subtle">Data & Security</button>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-text mb-4">General</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-subtle block mb-2">
                            Please select the country for this request: *
                          </label>
                          <p className="text-xs text-subtle mb-2">
                            This is the location where the product or service will be used. It may be different from your location.
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-subtle">Country:</span>
                            <select className="bg-glass border border-glass-border rounded px-3 py-1 text-sm text-text">
                              <option>Germany</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-subtle block mb-2">
                            Legal entity: *
                          </label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="text" 
                              value="W32 - Acme Europe GmbH"
                              className="bg-glass border border-glass-border rounded px-3 py-1 text-sm text-text flex-1"
                              readOnly
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-subtle block mb-2">
                            Where are you based? *
                          </label>
                          <p className="text-xs text-subtle mb-2">
                            This is the location where the product or service will be used. It may be different from your location.
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-subtle">Country:</span>
                            <select className="bg-glass border border-glass-border rounded px-3 py-1 text-sm text-text">
                              <option>Germany</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-subtle block mb-2">
                            Office: *
                          </label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="text" 
                              value="Berlin HQ"
                              className="bg-glass border border-glass-border rounded px-3 py-1 text-sm text-text flex-1"
                              readOnly
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-subtle block mb-2">
                            Who is your manager? *
                          </label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="text" 
                              placeholder="Start typing..."
                              className="bg-glass border border-glass-border rounded px-3 py-1 text-sm text-text flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-text mb-4">
                No training <span className="text-accent">needed.</span>
              </h3>
              <p className="text-lg text-subtle mb-6">
                SpaceFlow keeps intake intuitive: employees answer dynamic questions tailored to each request's risk and spend profile, while the platform auto-fills the fine details they may not know such as billing entity, business group, cost center, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-text mb-4">
              Ready to transform your procurement intake?
            </h3>
            <p className="text-lg text-subtle mb-8">
              Join leading companies using SpaceFlow to streamline their procurement processes.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Back to Home
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
