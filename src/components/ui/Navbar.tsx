"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/cn"
import { Button } from "./Button"
import { TourModal } from "./TourModal"
import { motion } from "framer-motion"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [showBanner, setShowBanner] = React.useState(true)
  const [showTourModal, setShowTourModal] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          showBanner ? "top-0" : "top-0",
          isScrolled ? "bg-glass backdrop-blur-lg border-b border-glass-border" : "bg-transparent",
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
                <path 
                  d="M 30 25 L 50 15 L 70 25 L 70 45 L 50 35 L 30 45 Z M 30 55 L 50 65 L 70 55 L 70 75 L 50 85 L 30 75 Z" 
                  fill="currentColor" 
                  className="text-accent"
                />
              </svg>
              <span className="font-bold text-xl text-text">SpaceFlow</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-subtle hover:text-text transition-colors">
              Features
            </Link>
            <Link href="/#integrations" className="text-subtle hover:text-text transition-colors">
              Integrations
            </Link>
            <Link href="/#security" className="text-subtle hover:text-text transition-colors">
              Security
            </Link>
          </div>

          <div className="flex items-center">
            <Button size="sm" onClick={() => setShowTourModal(true)}>
              Get Started
            </Button>
          </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Promotional Banner */}
      {showBanner && (
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border-b border-accent/20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              <div className="flex-1" />
              <a 
                href="https://adif.abudhabi/london/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text hover:text-accent transition-colors"
              >
                <span>Meet us at the Abu Dhabi Investment Forum</span>
                <span className="text-accent">→</span>
              </a>
              <button
                onClick={() => setShowBanner(false)}
                className="flex-1 flex justify-end text-subtle hover:text-text transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Tour Modal */}
      <TourModal isOpen={showTourModal} onClose={() => setShowTourModal(false)} />
    </>
  )
}
