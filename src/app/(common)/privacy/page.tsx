import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy policy | Mova',
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
            <h1 className="rw-h3 mb-8 text-left">Privacy Policy</h1>
            <div className="prose lg:prose-lg">
              <p className="text-gray-500 mb-2">Last Updated: Febrary 24, 2025</p>
              
              <h2 className="rw-h4 my-8">1. Information We Collect</h2>
              <h3 className="rw-h5 my-6">1.1 Information You Provide</h3>
              <p className="rw-bodycopy2 my-3">
                We collect information you provide directly, including account details, profile information, content you create, and communications with us.
              </p>

              <h3 className="rw-h5 my-6">1.2 Automatic Collection</h3>
              <p className="rw-bodycopy2 my-3">
                We automatically collect log data, device information, usage patterns, and (with permission) location data.
              </p>

              <h3 className="rw-h5 my-6">1.3 Third-Party Sources</h3>
              <p className="rw-bodycopy2 my-3">
                We may receive information about you from other users, partners or public databases.
              </p>

              <h2 className="rw-h4 my-8">2. How We Use Information</h2>
              <p className="rw-bodycopy2 my-3">
                We use collected information to provide and improve services, process transactions, communicate with you, personalize content, and ensure security.
              </p>

              <h2 className="rw-h4 my-8">3. Information Sharing</h2>
              <p className="rw-bodycopy2 my-3">
                We may share information with service providers, for legal compliance, business transfers, or in aggregated/anonymized form.
              </p>

              <h2 className="rw-h4 my-8">4. Data Retention</h2>
              <p className="rw-bodycopy2 my-3">
                We retain personal information as needed to provide services, comply with laws, resolve disputes, and enforce agreements.
              </p>

              <h2 className="rw-h4 my-8">5. Your Rights</h2>
              <p className="rw-bodycopy2 my-3">
                Depending on location, you may have rights to access, correct, delete, restrict processing, or object to use of your data.
              </p>

              <h2 className="rw-h4 my-8">6. Security</h2>
              <p className="rw-bodycopy2 my-3">
                We implement reasonable measures to protect your information from unauthorized access or disclosure.
              </p>

              <h2 className="rw-h4 my-8">7. Children&apos;s Privacy</h2>
              <p className="rw-bodycopy2 my-3">
                Our service is not directed to children under 13 and we do not knowingly collect their information.
              </p>

              <h2 className="rw-h4 my-8">8. Policy Changes</h2>
              <p className="rw-bodycopy2 my-3">
                We may update this policy and will notify you by posting the revised version with a new &quot;Last Updated&quot; date.
              </p>

              <h2 className="rw-h4 my-8">9. Contact Us</h2>
              <p className="rw-bodycopy2 my-3">
                For questions about this policy, contact us at support@mova.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
