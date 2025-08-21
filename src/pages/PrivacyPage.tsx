import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - AP CPA PLLC Data Protection and Privacy</title>
        <meta
          name="description"
          content="Privacy Policy for AP CPA PLLC. Learn how we collect, use, and protect your personal information and data privacy practices."
        />
        <meta
          name="keywords"
          content="AP CPA PLLC privacy policy, data protection, privacy practices, personal information, data security"
        />
        <link rel="canonical" href="https://apcpapllc.com/privacy" />
        <meta
          property="og:title"
          content="Privacy Policy - AP CPA PLLC Data Protection and Privacy"
        />
        <meta
          property="og:description"
          content="Privacy Policy for AP CPA PLLC. Learn how we collect, use, and protect your personal information and data privacy practices."
        />
        <meta property="og:url" content="https://apcpapllc.com/privacy" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3B7FB4] to-[#336a96] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100">
                Your privacy is important to us
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    <strong>Effective Date:</strong> 08/01/2025
                  </p>

                  <p className="text-gray-600 mb-6">
                    AP CPA PLLC (&quot;we,&quot; &quot;our,&quot; or
                    &quot;us&quot;) respects your privacy and is committed to
                    protecting the personal information you share with us. This
                    Privacy Policy explains how we collect, use, and safeguard
                    your information when you interact with our website
                    (apcpapllc.com) and our services.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        1. Information We Collect
                      </h3>
                      <p className="text-gray-600 mb-3">
                        We may collect the following types of information:
                      </p>
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">
                          Personal Information You Provide
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>
                            Name, email address, phone number, mailing address.
                          </li>
                          <li>
                            Information you provide via our contact forms,
                            emails, or phone calls.
                          </li>
                          <li>
                            Documents or records you share for tax, accounting,
                            or advisory services.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Automatically Collected Information
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>
                            IP address, browser type, device information, and
                            usage data when you visit our website.
                          </li>
                          <li>
                            Cookies and similar technologies (used only to
                            improve website performance and user experience).
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        2. How We Use Your Information
                      </h3>
                      <p className="text-gray-600 mb-3">
                        We use your information to:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Provide accounting, tax, and advisory services.</li>
                        <li>
                          Communicate with you regarding your inquiries,
                          appointments, or ongoing work.
                        </li>
                        <li>
                          Send important updates related to services, deadlines,
                          or compliance requirements.
                        </li>
                        <li>
                          Improve our website, services, and client experience.
                        </li>
                        <li>Comply with legal and regulatory obligations.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        3. How We Share Your Information
                      </h3>
                      <p className="text-gray-600 mb-3">
                        We do not sell or rent your personal information. We may
                        share it only in the following situations:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>With your consent.</li>
                        <li>
                          With trusted third-party vendors who help us provide
                          services (e.g., secure email, data storage, payment
                          processors).
                        </li>
                        <li>
                          When required by law, regulation, or legal process.
                        </li>
                        <li>
                          To protect our rights, safety, or property, or that of
                          our clients and partners.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        4. Data Security
                      </h3>
                      <p className="text-gray-600">
                        We implement administrative, technical, and physical
                        safeguards to protect your information. However, no
                        transmission over the internet or electronic storage
                        method is 100% secure. While we strive to protect your
                        data, we cannot guarantee absolute security.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        5. Data Retention
                      </h3>
                      <p className="text-gray-600">
                        We retain your personal information for as long as
                        necessary to provide services and comply with legal,
                        tax, or regulatory requirements. When no longer needed,
                        data is securely deleted or anonymized.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        6. Your Rights
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Depending on applicable law, you may have the right to:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>
                          Access and request a copy of your personal
                          information.
                        </li>
                        <li>Correct inaccurate or incomplete information.</li>
                        <li>
                          Request deletion of your information (subject to legal
                          obligations).
                        </li>
                        <li>Opt-out of non-essential communications.</li>
                      </ul>
                      <p className="text-gray-600 mt-3">
                        To exercise these rights, please contact us using the
                        details below.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        7. Cookies & Tracking Technologies
                      </h3>
                      <p className="text-gray-600">
                        Our website may use cookies to enhance user experience
                        and analyze site performance. You may disable cookies in
                        your browser settings, but some site features may not
                        function properly.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        8. Third-Party Links
                      </h3>
                      <p className="text-gray-600">
                        Our website may contain links to third-party websites.
                        We are not responsible for the privacy practices or
                        content of those websites.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        9. Children's Privacy
                      </h3>
                      <p className="text-gray-600">
                        Our services are not directed to children under 13. We
                        do not knowingly collect information from children.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        10. Changes to This Policy
                      </h3>
                      <p className="text-gray-600">
                        We may update this Privacy Policy from time to time.
                        Updates will be posted on this page with a new effective
                        date.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        11. Contact Us
                      </h3>
                      <p className="text-gray-600 mb-3">
                        If you have questions about this Privacy Policy or how
                        we handle your data, please contact us:
                      </p>
                      <div className="text-gray-600">
                        <p>AP CPA PLLC</p>
                        <p>6161 Savoy Dr #610</p>
                        <p>Houston, TX 77036</p>
                        <p>Phone: (713) 338-2520</p>
                        <p>Email: contactus@apcpapllc.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;
