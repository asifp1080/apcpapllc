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
import { Award, Users, MapPin, Heart } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, ensuring accuracy and quality in all our services.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Our clients are at the center of everything we do. We build lasting relationships based on trust and results.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Deep understanding of Houston and Texas business environment, regulations, and opportunities.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards and maintain complete confidentiality.",
    },
  ];

  const memberships = [
    "American Institute of Certified Public Accountants (AICPA)",
    "Texas Society of Certified Public Accountants (TSCPA)",
    "Houston Society of Certified Public Accountants",
    "National Association of Tax Professionals (NATP)",
  ];

  return (
    <>
      <Helmet>
        <title>
          About AP CPA PLLC - Professional Accounting Firm in Houston, TX
        </title>
        <meta
          name="description"
          content="Learn about AP CPA PLLC, a trusted accounting firm in Houston, TX with over 20 years of experience. Meet our team, mission, values, and professional memberships."
        />
        <meta
          name="keywords"
          content="about AP CPA PLLC, Houston CPA firm, accounting firm Houston, Aftab Pirmohammad CPA, professional accounting services Houston, AICPA member Houston, TSCPA member"
        />
        <link rel="canonical" href="https://apcpapllc.com/about" />
        <meta
          property="og:title"
          content="About AP CPA PLLC - Professional Accounting Firm in Houston, TX"
        />
        <meta
          property="og:description"
          content="Learn about AP CPA PLLC, a trusted accounting firm in Houston, TX with over 20 years of experience. Meet our team, mission, values, and professional memberships."
        />
        <meta property="og:url" content="https://apcpapllc.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "AP CPA PLLC",
              description:
                "Professional accounting firm in Houston, TX with over 20 years of experience providing comprehensive accounting and tax services.",
              foundingDate: "2004",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6161 Savoy Dr #610",
                addressLocality: "Houston",
                addressRegion: "TX",
                postalCode: "77036",
                addressCountry: "US",
              },
              telephone: "+17133382520",
              email: "contactus@apcpapllc.com",
              employee: {
                "@type": "Person",
                name: "Aftab Pirmohammad",
                jobTitle: "Managing Partner & Principal CPA",
                hasCredential: "Certified Public Accountant",
              },
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
                About AP CPA PLLC
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Your trusted accounting partner in Houston, Texas
              </p>
              <p className="text-lg text-blue-50 max-w-3xl mx-auto">
                With over 20 years of experience, we provide professional
                accounting services with a personal touch, helping individuals
                and businesses achieve their financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Firm Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/assets/office-team.webp"
                  alt="AP CPA PLLC Team"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  AP CPA PLLC was founded with a simple mission: to provide
                  exceptional accounting and tax services that help our clients
                  succeed. Located in the heart of Houston, we have been serving
                  individuals, small businesses, and organizations for over two
                  decades.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of experienced professionals combines technical
                  expertise with personalized service to deliver solutions that
                  meet your unique needs. We stay current with the latest
                  regulations and best practices to ensure you receive accurate,
                  compliant, and strategic financial guidance.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you need help with tax preparation, bookkeeping,
                  payroll, or business advisory services, we're committed to
                  building long-term relationships based on trust, reliability,
                  and results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are guided by our commitment to excellence, integrity, and
                client success.
              </p>
            </div>

            <div className="mb-12">
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 text-center">
                    To provide accurate, compliant, and responsive accounting
                    services that empower our clients to make informed financial
                    decisions and achieve their goals. We are committed to
                    building lasting relationships through professional
                    excellence, personalized attention, and unwavering
                    integrity.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals leading AP CPA PLLC.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3">
                      <img
                        src="/assets/aftab-pirmohammad.webp"
                        alt="Aftab Pirmohammad, CPA"
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2">
                        Aftab Pirmohammad, CPA
                      </h3>
                      <p className="text-[#3B7FB4] font-semibold mb-4">
                        Managing Partner & Principal CPA
                      </p>
                      <p className="text-gray-600 mb-4">
                        Aftab brings extensive experience in public accounting,
                        financial reporting, and advisory services. With a
                        background in both corporate and small business
                        accounting, he has worked with clients across
                        industries, providing trusted guidance in tax planning,
                        compliance, and financial management.
                      </p>
                      <p className="text-gray-600 mb-4">
                        He specializes in helping businesses and individuals
                        navigate complex tax regulations, improve financial
                        efficiency, and achieve long-term financial goals. Aftab
                        is a licensed CPA and continues to stay current on
                        evolving tax laws and accounting standards.
                      </p>
                      <p className="text-gray-600">
                        Beyond his professional expertise, Aftab is committed to
                        building strong client relationships through integrity,
                        transparency, and a personalized approach. His
                        professional philosophy centers on empowering clients
                        with the knowledge and strategies they need to make
                        informed financial decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Memberships & Affiliations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Memberships
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We maintain active memberships in leading professional
                organizations to stay current with industry standards and best
                practices.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {memberships.map((membership, index) => (
                      <li key={index} className="flex items-center">
                        <Award className="h-5 w-5 text-[#3B7FB4] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{membership}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Community Involvement
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in giving back to the Houston community that has
                supported our growth.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    At our firm, we believe in giving back to the Houston
                    community that has supported our growth. We actively
                    participate in charitable initiatives, sponsor local events,
                    and support small businesses through mentorship and
                    professional development programs.
                  </p>
                  <p className="text-lg text-gray-600">
                    Our team is proud to contribute time and resources to
                    educational workshops, nonprofit organizations, and
                    community outreach efforts. By engaging with and supporting
                    the Houston community, we strive to make a meaningful impact
                    both professionally and personally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#3B7FB4] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our experience and expertise can help you
              achieve your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-[#3B7FB4] hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3B7FB4] font-semibold"
              >
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
