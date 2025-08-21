import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MapLocation from "@/components/MapLocation";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact AP CPA PLLC - Houston Accounting Firm | (713) 338-2520
        </title>
        <meta
          name="description"
          content="Contact AP CPA PLLC in Houston, TX. Call (713) 338-2520 or visit us at 6161 Savoy Dr #610, Houston, TX 77036. Professional accounting and tax services."
        />
        <meta
          name="keywords"
          content="contact AP CPA PLLC, Houston CPA contact, accounting firm Houston contact, 6161 Savoy Dr Houston, (713) 338-2520, info@apcpapllc.com"
        />
        <link rel="canonical" href="https://apcpapllc.com/contact" />
        <meta
          property="og:title"
          content="Contact AP CPA PLLC - Houston Accounting Firm | (713) 338-2520"
        />
        <meta
          property="og:description"
          content="Contact AP CPA PLLC in Houston, TX. Call (713) 338-2520 or visit us at 6161 Savoy Dr #610, Houston, TX 77036. Professional accounting and tax services."
        />
        <meta property="og:url" content="https://apcpapllc.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "AP CPA PLLC",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6161 Savoy Dr #610",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77036",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.72386597564055,
                longitude: -95.49860492392756,
              },
              telephone: "+17133382520",
              email: "info@apcpapllc.com",
              openingHours: "Mo-Fr 09:00-17:00",
              url: "https://apcpapllc.com",
            },
          })}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3B7FB4] to-[#336a96] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Get in touch with our team of accounting professionals
              </p>
              <p className="text-lg text-blue-50 max-w-3xl mx-auto">
                We're here to answer your questions and help you with all your
                accounting and tax needs. Contact us today to schedule a
                consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reach out to us using any of the methods below. We look forward
                to hearing from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+17133382520"
                    className="text-[#3B7FB4] hover:text-[#336a96] font-semibold"
                  >
                    (713) 338-2520
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Click to call</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@apcpapllc.com"
                    className="text-[#3B7FB4] hover:text-[#336a96] font-semibold"
                  >
                    info@apcpapllc.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Send us an email</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    6161 Savoy Dr #610
                    <br />
                    Houston, TX 77036
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Visit our office</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600">
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p>Sat - Sun: Closed</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Business hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-1/2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="lg:w-1/2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Location</CardTitle>
                    <CardDescription>
                      Visit us at our Houston office location.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <MapLocation />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">What to Expect</CardTitle>
                  <CardDescription>
                    Here's what happens when you contact us
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                        <span className="font-bold text-lg">1</span>
                      </div>
                      <h3 className="font-semibold mb-2">Initial Contact</h3>
                      <p className="text-gray-600 text-sm">
                        We'll respond to your inquiry within 24 hours to
                        schedule an initial consultation.
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                        <span className="font-bold text-lg">2</span>
                      </div>
                      <h3 className="font-semibold mb-2">Consultation</h3>
                      <p className="text-gray-600 text-sm">
                        We'll discuss your needs, answer questions, and provide
                        recommendations for your situation.
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                        <span className="font-bold text-lg">3</span>
                      </div>
                      <h3 className="font-semibold mb-2">Get Started</h3>
                      <p className="text-gray-600 text-sm">
                        Once we agree on the scope of work, we'll begin
                        providing the services you need.
                      </p>
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

export default ContactPage;
