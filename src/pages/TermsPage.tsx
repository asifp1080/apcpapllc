import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - AP CPA PLLC Website Terms and Conditions</title>
        <meta
          name="description"
          content="Terms of Use for AP CPA PLLC website. Read our website terms and conditions, intellectual property rights, and user responsibilities."
        />
        <meta
          name="keywords"
          content="AP CPA PLLC terms of use, website terms, terms and conditions, legal terms, website policy"
        />
        <link rel="canonical" href="https://apcpapllc.com/terms" />
        <meta
          property="og:title"
          content="Terms of Use - AP CPA PLLC Website Terms and Conditions"
        />
        <meta
          property="og:description"
          content="Terms of Use for AP CPA PLLC website. Read our website terms and conditions, intellectual property rights, and user responsibilities."
        />
        <meta property="og:url" content="https://apcpapllc.com/terms" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3B7FB4] to-[#336a96] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Use
              </h1>
              <p className="text-xl text-blue-100">
                Please read these terms carefully before using our website
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Website Terms of Use
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    <strong>Effective Date:</strong> 08/01/2025
                  </p>

                  <p className="text-gray-600 mb-6">
                    Welcome to the website of AP CPA PLLC (&quot;we,&quot;
                    &quot;our,&quot; or &quot;us&quot;). By accessing or using
                    our website (apcpapllc.com), you agree to comply with and be
                    bound by these Terms of Use. If you do not agree, please do
                    not use this website.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        1. Use of Website
                      </h3>
                      <p className="text-gray-600 mb-3">
                        You agree to use this website only for lawful purposes
                        and in accordance with these Terms.
                      </p>
                      <p className="text-gray-600 mb-3">
                        You may not use this website in any way that could
                        damage, disable, overburden, or impair our servers or
                        networks.
                      </p>
                      <p className="text-gray-600">
                        Unauthorized attempts to gain access to any part of the
                        website, accounts, or systems are prohibited.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        2. Intellectual Property
                      </h3>
                      <p className="text-gray-600 mb-3">
                        All content on this website, including text, images,
                        graphics, logos, and layout, is the property of AP CPA
                        PLLC (or licensed to us) and is protected by copyright,
                        trademark, and other intellectual property laws.
                      </p>
                      <p className="text-gray-600 mb-3">
                        You may view, download, or print pages from this website
                        for personal, non-commercial use only.
                      </p>
                      <p className="text-gray-600">
                        You may not reproduce, distribute, modify, transmit, or
                        otherwise use content for commercial purposes without
                        our prior written permission.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        3. No Professional Advice
                      </h3>
                      <p className="text-gray-600">
                        The information provided on this website is for general
                        informational purposes only and does not constitute
                        accounting, tax, legal, or financial advice. Please see
                        our Website Disclaimer for details.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        4. User Submissions
                      </h3>
                      <p className="text-gray-600 mb-3">
                        If you submit information through our website (e.g.,
                        contact forms), you agree that:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>
                          You will provide accurate and complete information.
                        </li>
                        <li>
                          You will not submit false, misleading, or harmful
                          content.
                        </li>
                        <li>
                          We may use information submitted in accordance with
                          our Privacy Policy.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        5. Third-Party Links
                      </h3>
                      <p className="text-gray-600">
                        Our website may contain links to third-party websites.
                        We are not responsible for the content, accuracy, or
                        practices of any linked sites. Accessing third-party
                        links is at your own risk.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        6. Limitation of Liability
                      </h3>
                      <p className="text-gray-600">
                        To the fullest extent permitted by law, AP CPA PLLC
                        disclaims all liability for damages arising from your
                        use of this website, including direct, indirect,
                        incidental, or consequential damages.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        7. Indemnification
                      </h3>
                      <p className="text-gray-600">
                        You agree to indemnify and hold harmless AP CPA PLLC and
                        its employees from any claims, liabilities, damages, or
                        expenses (including attorney fees) resulting from your
                        use of the website or violation of these Terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        8. Changes to Terms
                      </h3>
                      <p className="text-gray-600">
                        We may update these Terms of Use at any time. Changes
                        will be posted on this page with a new effective date.
                        By continuing to use the site after updates, you accept
                        the revised Terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        9. Governing Law
                      </h3>
                      <p className="text-gray-600">
                        These Terms of Use shall be governed by and construed in
                        accordance with the laws of the State of Texas, without
                        regard to conflict of law principles.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        10. Contact Us
                      </h3>
                      <p className="text-gray-600 mb-3">
                        For questions about these Terms, please contact:
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

export default TermsPage;
