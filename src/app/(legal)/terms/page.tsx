import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-text mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg text-subtle space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using SpaceFlow&apos;s services, you accept and agree to be bound by the terms and provision
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily access and use SpaceFlow&apos;s services for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in SpaceFlow&apos;s services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">3. Service Description</h2>
                <p>
                  SpaceFlow provides procurement software services including but not limited to purchase order management,
                  supplier management, spend analytics, and workflow automation. We reserve the right to modify, suspend,
                  or discontinue any part of the service at any time. You may not use our services if you&apos;re under 18 years of age.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">4. Account Responsibilities</h2>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the security of your account and password</li>
                  <li>Restricting access to your computer and account</li>
                  <li>All activities that occur under your account or password</li>
                  <li>Ensuring that all information you provide is accurate and current</li>
                </ul>
                <p className="mt-3">
                  You&apos;re responsible for maintaining the security of your account and password. SpaceFlow can&apos;t and won&apos;t be liable
                  for any loss or damage from your failure to comply with this security obligation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">5. Payment Terms</h2>
                <p>
                  Subscription fees are billed in advance on a monthly or annual basis and are non-refundable.
                  We reserve the right to change our pricing at any time, with 30 days notice for existing customers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">6. Disclaimer</h2>
                <p>
                  The materials on SpaceFlow&apos;s services are provided on an &apos;as is&apos; basis. SpaceFlow makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                  of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">7. Limitations</h2>
                <p>
                  In no event shall SpaceFlow or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                  to use SpaceFlow&apos;s services, even if SpaceFlow or a SpaceFlow authorized representative has been notified
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware,
                  United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">9. Changes to Terms</h2>
                <p>
                  SpaceFlow reserves the right to revise these terms of service at any time without notice. By using this service,
                  you are agreeing to be bound by the then current version of these terms of service.
                  We reserve the right to refuse service to anyone for any reason at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions regarding these Terms of Service, please contact us at:
                </p>
                <address className="not-italic">
                  SpaceFlow, Inc.<br />
                  1111B S Governors Ave, Suite 37693<br />
                  Dover, DE 19904<br />
                  Email: support@spaceflow.tech
                </address>
              </section>

              <section>
                <p className="text-sm text-subtle mt-8">
                  Last updated: September 25, 2024
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
