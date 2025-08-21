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
  ArrowRight,
  FileText,
  BookOpen,
  DollarSign,
  CheckSquare,
  LineChart,
  Shield,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const ServicesPage = () => {
  const services = [
    {
      id: "tax-preparation",
      title: "Tax Preparation",
      description:
        "Comprehensive tax preparation services for individuals and businesses with a focus on maximizing deductions and ensuring compliance.",
      icon: FileText,
      details: [
        "Individual tax returns (Form 1040)",
        "Business tax returns (1120, 1120S, 1065)",
        "Tax planning and strategy",
        "Amended returns and prior year corrections",
        "Multi-state tax filing",
        "Tax extension preparation",
      ],
    },
    {
      id: "bookkeeping",
      title: "Bookkeeping",
      description:
        "Accurate and timely bookkeeping services to help you track income, expenses, and financial performance.",
      icon: BookOpen,
      details: [
        "Monthly financial statements",
        "Accounts payable and receivable management",
        "Bank reconciliation",
        "General ledger maintenance",
        "QuickBooks setup and training",
        "Financial reporting and analysis",
      ],
    },
    {
      id: "payroll",
      title: "Payroll Services",
      description:
        "Complete payroll processing, tax filing, and compliance services for businesses of all sizes.",
      icon: DollarSign,
      details: [
        "Payroll processing and direct deposit",
        "Payroll tax calculations and filings",
        "W-2 and 1099 preparation",
        "State unemployment tax management",
        "Workers' compensation reporting",
        "New hire reporting",
      ],
    },
    {
      id: "compliance",
      title: "Business Compliance",
      description:
        "Stay compliant with state and federal regulations with our comprehensive business compliance services.",
      icon: CheckSquare,
      details: [
        "Business entity formation",
        "Annual report filings",
        "Registered agent services",
        "Sales tax registration and filing",
        "Business license assistance",
        "Compliance calendar management",
      ],
    },
    {
      id: "advisory",
      title: "Advisory Services",
      description:
        "Strategic financial advice and planning to help your business grow and succeed.",
      icon: LineChart,
      details: [
        "Financial planning and analysis",
        "Cash flow management",
        "Business valuation",
        "Merger and acquisition support",
        "Internal controls assessment",
        "Strategic business planning",
      ],
    },
    {
      id: "irs-representation",
      title: "IRS Representation",
      description:
        "Professional representation before the IRS and state tax authorities to resolve tax issues.",
      icon: Shield,
      details: [
        "IRS audit representation",
        "Tax dispute resolution",
        "Offer in compromise negotiations",
        "Installment agreement setup",
        "Penalty abatement requests",
        "Tax lien and levy resolution",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Accounting Services - Tax Preparation, Bookkeeping & More | AP CPA
          PLLC
        </title>
        <meta
          name="description"
          content="Comprehensive accounting services in Houston, TX. Tax preparation, bookkeeping, payroll, business compliance, advisory services, and IRS representation. Professional CPA services for individuals and businesses."
        />
        <meta
          name="keywords"
          content="tax preparation Houston, bookkeeping services Houston, payroll services Houston, business compliance Houston, advisory services Houston, IRS representation Houston, accounting services Houston, CPA services Houston"
        />
        <link rel="canonical" href="https://apcpapllc.com/services" />
        <meta
          property="og:title"
          content="Accounting Services - Tax Preparation, Bookkeeping & More | AP CPA PLLC"
        />
        <meta
          property="og:description"
          content="Comprehensive accounting services in Houston, TX. Tax preparation, bookkeeping, payroll, business compliance, advisory services, and IRS representation."
        />
        <meta property="og:url" content="https://apcpapllc.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Accounting Services",
            provider: {
              "@type": "ProfessionalService",
              name: "AP CPA PLLC",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6161 Savoy Dr #610",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77036",
                addressCountry: "US",
              },
              telephone: "+17133382520",
            },
            serviceType: "Accounting Services",
            areaServed: "Houston, TX",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Accounting Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tax Preparation",
                    description:
                      "Comprehensive tax preparation services for individuals and businesses",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bookkeeping",
                    description: "Accurate and timely bookkeeping services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Payroll Services",
                    description: "Complete payroll processing and compliance",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#3B7FB4] via-[#336a96] to-[#2d5a82] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Our Services
              </h1>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-blue-50 mb-10 font-light leading-relaxed">
                Comprehensive accounting and tax services for individuals, small
                businesses, and organizations
              </p>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
                We provide professional, accurate, and timely services to help
                you manage your finances, stay compliant with regulations, and
                achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 gradient-text">
                What We Offer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3B7FB4] to-[#336a96] mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our experienced team provides a full range of accounting
                services tailored to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    id={service.id}
                    className="group h-full hover-lift bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B7FB4]/10 to-[#3B7FB4]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-[#3B7FB4]" />
                        </div>
                        <CardTitle className="text-2xl font-serif text-gray-800 group-hover:text-[#3B7FB4] transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-8">
                        {service.details
                          .slice(0, 4)
                          .map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-start group/item"
                            >
                              <ArrowRight className="h-4 w-4 text-[#3B7FB4] mr-3 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                              <span className="text-gray-600 leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          ))}
                        {service.details.length > 4 && (
                          <div className="text-sm text-gray-500 italic pl-7">
                            +{service.details.length - 4} more services
                          </div>
                        )}
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-[#3B7FB4] to-[#336a96] hover:from-[#336a96] hover:to-[#2d5a82] text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                      >
                        <a
                          href={`#${service.id}`}
                          className="flex items-center justify-center group/button"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 gradient-text">
                Who We Serve
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3B7FB4] to-[#336a96] mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our services are designed to meet the diverse needs of our
                clients across different sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="group text-center hover-lift bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B7FB4]/10 to-[#3B7FB4]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-10 h-10 text-[#3B7FB4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-serif text-gray-800 group-hover:text-[#3B7FB4] transition-colors duration-300">
                    Individuals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Personal tax preparation, tax planning, IRS representation,
                    and financial advisory services for individuals and
                    families.
                  </p>
                </CardContent>
              </Card>

              <Card className="group text-center hover-lift bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B7FB4]/10 to-[#3B7FB4]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-10 h-10 text-[#3B7FB4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-serif text-gray-800 group-hover:text-[#3B7FB4] transition-colors duration-300">
                    Small Businesses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Comprehensive accounting, bookkeeping, payroll, tax
                    services, and business compliance support for small and
                    medium-sized businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="group text-center hover-lift bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B7FB4]/10 to-[#3B7FB4]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-10 h-10 text-[#3B7FB4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-serif text-gray-800 group-hover:text-[#3B7FB4] transition-colors duration-300">
                    Organizations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Specialized accounting, advisory services, and compliance
                    support for non-profits, partnerships, and other business
                    entities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <FAQAccordion
                title="Frequently Asked Questions"
                description="Find answers to common questions about our accounting and tax services."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#3B7FB4] via-[#336a96] to-[#2d5a82] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Ready to Get Started?
              </h2>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-blue-50 mb-12 font-light leading-relaxed">
                Contact us today to discuss your accounting and tax needs. We're
                here to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button
                  asChild
                  className="bg-white text-[#3B7FB4] hover:bg-gray-100 hover:scale-105 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a href="/contact" className="flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#3B7FB4] hover:scale-105 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a href="tel:+17133382520" className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call (713) 338-2520
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
