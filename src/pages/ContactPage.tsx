import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
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
        {/* Hero Section with CTA */}
        <section className="relative bg-gradient-to-br from-[#3B7FB4] via-[#336a96] to-[#2d5a7d] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                Let's Work Together
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to take control of your finances? Our expert team is here
                to provide personalized accounting solutions.
              </p>

              {/* Large CTA Button */}
              <div className="mb-12">
                <Button
                  size="lg"
                  className="bg-white text-[#3B7FB4] hover:bg-gray-50 text-lg px-12 py-6 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                  onClick={() => window.open("tel:+17133382520", "_self")}
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Quick Contact Options */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="tel:+17133382520"
                  className="flex items-center text-white/90 hover:text-white transition-colors group"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">(713) 338-2520</span>
                </a>
                <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                <a
                  href="mailto:info@apcpapllc.com"
                  className="flex items-center text-white/90 hover:text-white transition-colors group"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium">
                    info@apcpapllc.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the method that works best for you. We're committed to
                responding quickly and professionally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover-lift border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <Phone className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-serif">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href="tel:+17133382520"
                    className="text-[#3B7FB4] hover:text-[#336a96] font-semibold text-lg transition-colors"
                  >
                    (713) 338-2520
                  </a>
                  <p className="text-sm text-gray-500 mt-3">
                    Immediate assistance available
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <Mail className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-serif">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href="mailto:info@apcpapllc.com"
                    className="text-[#3B7FB4] hover:text-[#336a96] font-semibold text-lg transition-colors break-all"
                  >
                    info@apcpapllc.com
                  </a>
                  <p className="text-sm text-gray-500 mt-3">
                    We respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-serif">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 font-medium">
                    6161 Savoy Dr #610
                    <br />
                    Houston, TX 77036
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    Professional office setting
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <Clock className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-serif">
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-gray-700 font-medium">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Appointments available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below with your details and we'll get back
                    to you promptly with personalized assistance.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Map */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    Find Our Office
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Located in the heart of Houston, our office is easily
                    accessible with convenient parking available.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-0">
                  <MapLocation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Your Journey with Us
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Here's what you can expect when you choose AP CPA PLLC as your
                  trusted accounting partner.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover-lift border-0 shadow-lg bg-white">
                  <CardHeader className="pb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                      <span className="font-bold text-2xl">1</span>
                    </div>
                    <CardTitle className="text-xl font-serif">
                      Initial Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      We'll schedule a comprehensive consultation to understand
                      your unique financial situation and goals.
                    </p>
                    <div className="flex items-center justify-center mt-4 text-[#3B7FB4]">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">
                        Free consultation
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center hover-lift border-0 shadow-lg bg-white">
                  <CardHeader className="pb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                      <span className="font-bold text-2xl">2</span>
                    </div>
                    <CardTitle className="text-xl font-serif">
                      Customized Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      We'll develop a tailored approach that addresses your
                      specific needs and maximizes your financial potential.
                    </p>
                    <div className="flex items-center justify-center mt-4 text-[#3B7FB4]">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">
                        Personalized plan
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center hover-lift border-0 shadow-lg bg-white">
                  <CardHeader className="pb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                      <span className="font-bold text-2xl">3</span>
                    </div>
                    <CardTitle className="text-xl font-serif">
                      Ongoing Partnership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      We'll provide continuous support and guidance, ensuring
                      your financial success throughout the year.
                    </p>
                    <div className="flex items-center justify-center mt-4 text-[#3B7FB4]">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">
                        Year-round support
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-16">
                <Button
                  size="lg"
                  className="bg-[#3B7FB4] hover:bg-[#336a96] text-white text-lg px-10 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  onClick={() => window.open("tel:+17133382520", "_self")}
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now to Get Started
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Ready to take the next step? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
