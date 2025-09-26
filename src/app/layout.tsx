import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import "@/styles/layout-fix.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpaceFlow - Intelligent Procurement Orchestration',
  description: 'Streamline requests, embed visibility, and empower smarter sourcing with AI-driven procurement flows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Debug script for layout shift detection - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <Script src="/debug-cls.js" strategy="afterInteractive" />
        )}
      </body>
    </html>
  )
}
