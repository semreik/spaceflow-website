"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/cn"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-surface border-t border-muted", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
                <path 
                  d="M 30 25 L 50 15 L 70 25 L 70 45 L 50 35 L 30 45 Z M 30 55 L 50 65 L 70 55 L 70 75 L 50 85 L 30 75 Z" 
                  fill="currentColor" 
                  className="text-accent"
                />
              </svg>
              <span className="font-bold text-xl text-text">SpaceFlow</span>
            </div>
            <p className="text-subtle text-sm mb-4">
              Streamline requests, embed visibility, and empower smarter sourcing with AI-driven procurement flows.
            </p>
            <div className="text-subtle text-sm space-y-1">
              <p>1111B S Governors Ave, Suite 37693</p>
              <p>Dover, DE 19904</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-text mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-subtle hover:text-text text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-text mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-subtle hover:text-text text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-subtle hover:text-text text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted">
          <div className="text-center">
            <p className="text-subtle text-sm mb-2">
              © {new Date().getFullYear()} SpaceFlow. All rights reserved.
            </p>
            <p className="text-subtle text-sm">
              Contact us at <a href="mailto:hello@spaceflow.tech" className="text-accent hover:text-accent/80 transition-colors">hello@spaceflow.tech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
