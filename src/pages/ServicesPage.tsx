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
        <section className="bg-gradient-to-r from-[#3B7FB4] to-[#336a96] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive accounting and tax services for individuals, small
                businesses, and organizations
              </p>
              <p className="text-lg text-blue-50 max-w-3xl mx-auto">
                We provide professional, accurate, and timely services to help
                you manage your finances, stay compliant with regulations, and
                achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experienced team provides a full range of accounting
                services tailored to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    id={service.id}
                    className="h-full hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-2xl">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-[#3B7FB4] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our services are designed to meet the diverse needs of our
                clients across different sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Individuals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Personal tax preparation, tax planning, IRS representation,
                    and financial advisory services for individuals and
                    families.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Small Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive accounting, bookkeeping, payroll, tax
                    services, and business compliance support for small and
                    medium-sized businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FAQAccordion
                title="Frequently Asked Questions"
                description="Find answers to common questions about our accounting and tax services."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#3B7FB4] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your accounting and tax needs. We're
              here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-[#3B7FB4] hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Contact Us</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3B7FB4] font-semibold"
              >
                <a href="tel:+17133382520">Call (713) 338-2520</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
