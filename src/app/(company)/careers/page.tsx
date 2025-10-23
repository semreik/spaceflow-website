import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-text mb-8">Careers at SpaceFlow</h1>
            
            <div className="prose prose-lg text-subtle space-y-6">
              <p className="text-xl text-subtle mb-8">
                Thank you for your interest in joining our team!
              </p>
              
              <div className="bg-surface rounded-lg p-8 border border-glass-border">
                <h2 className="text-2xl font-semibold text-text mb-4">We&apos;re not hiring at the moment</h2>
                <p className="text-subtle mb-6">
                  While we don&apos;t have any open positions currently, we&apos;re always interested in connecting with talented individuals who are passionate about transforming procurement technology.
                </p>
                <p className="text-subtle">
                  If you&apos;d like to be considered for future opportunities, please drop us an email at:
                </p>
                <a href="mailto:hello@spaceflow.tech" className="inline-block mt-4 text-accent hover:text-accent/80 font-medium text-lg transition-colors">
                  hello@spaceflow.tech
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-glass-border">
                <p className="text-sm text-subtle">
                  We&apos;ll keep your information on file and reach out when positions become available that match your skills and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
