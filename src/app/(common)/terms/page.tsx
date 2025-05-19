import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of service | ReelMagic',
  icons: {
    icon: '/assets/icons/logo.ico'
  }
}
export default function Page() {
  return (
    <main>
      <section className="bg-black pt-28 lg:pt-48 pb-16">
        <div className="rw-container text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="rw-h3 mb-8 text-left">Terms of Service</h1>
            <div className="prose lg:prose-lg">
                <p className="text-gray-500 mb-2">Last Updated: Febrary 24, 2025</p>
                
                <h2 className="rw-h4 my-8">1. Acceptance of Terms</h2>
                <p className="rw-bodycopy2 my-3">
                By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, please do not use our Service.
                </p>

                <h2 className="rw-h4 my-8">2. Service Description</h2>
                <p className="rw-bodycopy2 my-3">
                ReelMagic provides AI-powered creative tools and services including but not limited to:
                </p>
                <ul className="rw-bodycopy2 my-3 list-disc pl-6 space-y-2">
                <li>Video generation and editing tools</li>
                <li>Image generation and processing features</li>
                <li>Audio synthesis and editing services</li>
                <li>Multimodal content creation platform</li>
                </ul>

                <h2 className="rw-h4 my-8">3. User Accounts</h2>
                <p className="rw-bodycopy2 my-3">
                3.1 Certain features require account registration. You agree to provide accurate and complete information.
                </p>
                <p className="rw-bodycopy2 my-3">
                3.2 You are responsible for maintaining your account credentials and all activities under your account.
                </p>
                <p className="rw-bodycopy2 my-3">
                3.3 Notify us immediately of any unauthorized account use.
                </p>

                <h2 className="rw-h4 my-8">4. User Data & Privacy</h2>
                <p className="rw-bodycopy2 my-3">
                4.1 Our Privacy Policy explains how we collect, use and disclose your information.
                </p>
                <p className="rw-bodycopy2 my-3">
                4.2 We comply with applicable data protection laws including GDPR and CCPA.
                </p>

                <h2 className="rw-h4 my-8">5. Subscriptions & Payments</h2>
                <p className="rw-bodycopy2 my-3">
                5.1 We offer various subscription plans including monthly and annual options.
                </p>
                <p className="rw-bodycopy2 my-3">
                5.2 Subscriptions auto-renew unless canceled before renewal date.
                </p>

                <h2 className="rw-h4 my-8">6. User Conduct</h2>
                <p className="rw-bodycopy2 my-3">
                You agree not to use the Service for:
                </p>
                <ul className="rw-bodycopy2 my-3 list-disc pl-6 space-y-2">
                <li>Any unlawful purposes</li>
                <li>Money laundering activities</li>
                <li>Fraudulent behavior</li>
                <li>Any violations of these Terms or applicable laws</li>
                </ul>

                <h2 className="rw-h4 my-8">7. Intellectual Property</h2>
                <p className="rw-bodycopy2 my-3">
                7.1 The Service and its original content are proprietary to ReelMagic.
                </p>
                <p className="rw-bodycopy2 my-3">
                7.2 No reproduction, modification or derivative works without explicit permission.
                </p>

                <h2 className="rw-h4 my-8">8. Limitation of Liability</h2>
                <p className="rw-bodycopy2 my-3">
                ReelMagic and its affiliates shall not be liable for any indirect, incidental or consequential damages resulting from Service use.
                </p>

                <h2 className="rw-h4 my-8">9. Terms Modification</h2>
                <p className="rw-bodycopy2 my-3">
                We reserve the right to modify these Terms. Continued use constitutes acceptance of modified Terms.
                </p>

                <h2 className="rw-h4 my-8">10. Contact Us</h2>
                <p className="rw-bodycopy2 my-3">
                For questions about these Terms, please contact us at support@ReelMagic.com.
                </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
