import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import "@/styles/layout-fix.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpaceFlow - Intelligent Procurement Orchestration',
  description: 'Streamline requests, embed visibility, and empower smarter sourcing with AI-driven procurement flows.',
  other: {
    'color-scheme': 'dark light',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <style>{`html, body { background-color: #000000 !important; }`}</style>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Force dark mode before any paint - prevents white flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
        {/* Debug script for layout shift detection - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <Script src="/debug-cls.js" strategy="afterInteractive" />
        )}
      </body>
    </html>
  )
}
