import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Website Disclaimer - AP CPA PLLC Legal Disclaimer</title>
        <meta
          name="description"
          content="Website Disclaimer for AP CPA PLLC. Important legal information about our website content, professional advice, and liability limitations."
        />
        <meta
          name="keywords"
          content="AP CPA PLLC disclaimer, website disclaimer, legal disclaimer, professional advice disclaimer, liability limitations"
        />
        <link rel="canonical" href="https://apcpapllc.com/disclaimer" />
        <meta
          property="og:title"
          content="Website Disclaimer - AP CPA PLLC Legal Disclaimer"
        />
        <meta
          property="og:description"
          content="Website Disclaimer for AP CPA PLLC. Important legal information about our website content, professional advice, and liability limitations."
        />
        <meta property="og:url" content="https://apcpapllc.com/disclaimer" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3B7FB4] to-[#336a96] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Website Disclaimer
              </h1>
              <p className="text-xl text-blue-100">
                Important information about our website content
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Website Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    <strong>Effective Date:</strong> 08/01/2025
                  </p>

                  <div className="space-y-6">
                    <p className="text-gray-600">
                      The information provided on the AP CPA PLLC website
                      (apcpapllc.com) is for general informational purposes
                      only. While we make every effort to keep the information
                      accurate and up to date, we make no guarantees or
                      warranties of any kind, express or implied, about the
                      completeness, accuracy, reliability, suitability, or
                      availability of the website or the information, products,
                      or services contained on the website.
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        1. No Professional Advice
                      </h3>
                      <p className="text-gray-600">
                        The content on this website does not constitute
                        accounting, tax, legal, investment, or other
                        professional advice. You should not act or refrain from
                        acting on the basis of any content included on this site
                        without seeking appropriate professional advice tailored
                        to your situation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        2. No Client Relationship
                      </h3>
                      <p className="text-gray-600">
                        Your use of this website, including the submission of
                        any forms, emails, or messages, does not establish a
                        certified public accountant–client relationship with AP
                        CPA PLLC. Such a relationship is only formed after we
                        confirm our engagement in writing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        3. Limitation of Liability
                      </h3>
                      <p className="text-gray-600">
                        To the fullest extent permitted by law, AP CPA PLLC will
                        not be liable for any loss or damage, including without
                        limitation indirect or consequential loss or damage,
                        arising out of or in connection with the use of this
                        website.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        4. External Links
                      </h3>
                      <p className="text-gray-600">
                        This website may contain links to other websites. We are
                        not responsible for the content or reliability of any
                        third-party websites, and the inclusion of such links
                        does not imply endorsement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        5. No Guarantee of Results
                      </h3>
                      <p className="text-gray-600">
                        Past results or outcomes described in this website do
                        not guarantee a similar result in current or future
                        matters. Each client's circumstances are unique, and
                        results will vary.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        6. Changes to Content
                      </h3>
                      <p className="text-gray-600">
                        We may update or change the content on this website at
                        any time without prior notice.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">7. Contact</h3>
                      <p className="text-gray-600">
                        If you have questions about this disclaimer, please
                        contact us:
                      </p>
                      <div className="text-gray-600 mt-2">
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

export default DisclaimerPage;
