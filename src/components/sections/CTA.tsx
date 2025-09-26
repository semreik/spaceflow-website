"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/motion"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export function CTA() {
  const prefersReducedMotion = useReducedMotion()
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        // Reset status after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
        console.error('Failed to submit:', data)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-bg border-t border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Ready to transform your procurement?
          </h2>
          <p className="text-xl text-subtle mb-8">
            Join thousands of companies already saving time and money with SpaceFlow.
            Start your free 30-day trial today.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-glass backdrop-blur-sm border-glass-border text-text placeholder-subtle"
              required
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-accent text-accent-contrast hover:bg-accent/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get Started Free'}
            </Button>
          </form>

          {submitStatus === 'success' && (
            <p className="text-sm text-text mt-4 font-semibold">
              ✓ Thank you! We&apos;ll be in touch soon.
            </p>
          )}
          
          {submitStatus === 'error' && (
            <p className="text-sm text-text mt-4 font-semibold">
              ✗ Something went wrong. Please try again.
            </p>
          )}

          {submitStatus === 'idle' && (
            <p className="text-sm text-subtle mt-4">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
