import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-text mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg text-subtle space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">1. Information We Collect</h2>
                <p>
                  At SpaceFlow, we collect information you provide directly to us, such as when you create an account,
                  use our services, make a purchase, request customer support, or communicate with us.
                </p>
                <p>
                  The types of information we may collect include your name, email address, postal address,
                  phone number, company information, payment information, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                  except as described in this Privacy Policy. We may share your information in certain situations, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With service providers who assist in our business operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect the security of your personal information.
                  However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt out of certain
                  communications from us. To exercise these rights, please contact us at support@spaceflow.tech.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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
