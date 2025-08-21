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
  Award,
  Users,
  MapPin,
  Heart,
  Shield,
  Target,
  Clock,
  CheckCircle,
} from "lucide-react";

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
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards and maintain complete confidentiality.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Meticulous attention to detail in every calculation, report, and recommendation we provide.",
    },
  ];

  const firmStats = [
    {
      icon: Clock,
      number: "20+",
      label: "Years of Experience",
      description: "Serving Houston businesses and individuals",
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Trusted by businesses across industries",
    },
    {
      icon: CheckCircle,
      number: "99%",
      label: "Client Retention",
      description: "Long-term partnerships built on results",
    },
    {
      icon: Award,
      number: "4",
      label: "Professional Memberships",
      description: "Active in leading CPA organizations",
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
        <section className="relative bg-gradient-to-br from-[#3B7FB4] via-[#336a96] to-[#2a5a7a] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 animate-fade-in">
                <Award className="w-4 h-4 mr-2" />
                Trusted CPA Firm Since 2004
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
                About{" "}
                <span className="gradient-text bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  AP CPA PLLC
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Your trusted accounting partner in Houston, Texas
              </p>
              <p className="text-lg text-blue-50 max-w-4xl mx-auto leading-relaxed animate-fade-in">
                With over 20 years of experience, we provide professional
                accounting services with a personal touch, helping individuals
                and businesses achieve their financial goals through expert
                guidance and unwavering integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Firm Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {firmStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group hover-lift">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="text-4xl font-bold text-[#3B7FB4] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Firm History */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src="/assets/office-team.webp"
                    alt="AP CPA PLLC Team"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover hover-lift"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#3B7FB4] to-[#336a96] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    Est.
                    <br />
                    2004
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center px-4 py-2 bg-[#3B7FB4]/10 rounded-full text-[#3B7FB4] font-medium mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Houston, Texas
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    AP CPA PLLC was founded with a simple yet powerful mission:
                    to provide exceptional accounting and tax services that
                    genuinely help our clients succeed. Located in the heart of
                    Houston, we have been serving individuals, small businesses,
                    and organizations for over two decades.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our team of experienced professionals combines deep
                    technical expertise with personalized service to deliver
                    solutions that meet your unique needs. We stay current with
                    the latest regulations and best practices to ensure you
                    receive accurate, compliant, and strategic financial
                    guidance.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you need help with tax preparation, bookkeeping,
                    payroll, or business advisory services, we're committed to
                    building long-term relationships based on trust,
                    reliability, and measurable results.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-[#3B7FB4] hover:bg-[#336a96] text-white px-8 py-3 rounded-lg font-semibold"
                  >
                    <a href="/services">Explore Our Services</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#3B7FB4]/10 rounded-full text-[#3B7FB4] font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Our Foundation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Mission & <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are guided by our unwavering commitment to excellence,
                integrity, and client success.
              </p>
            </div>

            <div className="mb-16">
              <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover-lift">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-8">
                      <Target className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-gray-900">
                      Our Mission
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                      To provide accurate, compliant, and responsive accounting
                      services that empower our clients to make informed
                      financial decisions and achieve their goals. We are
                      committed to building lasting relationships through
                      professional excellence, personalized attention, and
                      unwavering integrity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="text-center h-full border-0 shadow-lg hover-lift bg-white/90 backdrop-blur-sm group"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-gray-900">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#3B7FB4]/10 rounded-full text-[#3B7FB4] font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Leadership <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the experienced professionals leading AP CPA PLLC with
                expertise, integrity, and dedication.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 relative">
                      <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden">
                        <img
                          src="/assets/aftab-pirmohammad.webp"
                          alt="Aftab Pirmohammad, CPA"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                    <div className="lg:w-3/5 p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
                          Aftab Pirmohammad, CPA
                        </h3>
                        <div className="flex items-center mb-4">
                          <div className="w-1 h-8 bg-gradient-to-b from-[#3B7FB4] to-[#336a96] rounded-full mr-4"></div>
                          <p className="text-xl font-semibold text-[#3B7FB4]">
                            Managing Partner & Principal CPA
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1 bg-[#3B7FB4]/10 text-[#3B7FB4] rounded-full text-sm font-medium">
                            CPA Licensed
                          </span>
                          <span className="px-3 py-1 bg-[#3B7FB4]/10 text-[#3B7FB4] rounded-full text-sm font-medium">
                            20+ Years Experience
                          </span>
                          <span className="px-3 py-1 bg-[#3B7FB4]/10 text-[#3B7FB4] rounded-full text-sm font-medium">
                            Tax Specialist
                          </span>
                        </div>
                      </div>

                      <div className="space-y-6 text-gray-700">
                        <p className="text-lg leading-relaxed">
                          Aftab brings extensive experience in public
                          accounting, financial reporting, and advisory
                          services. With a background in both corporate and
                          small business accounting, he has worked with clients
                          across industries, providing trusted guidance in tax
                          planning, compliance, and financial management.
                        </p>
                        <p className="text-lg leading-relaxed">
                          He specializes in helping businesses and individuals
                          navigate complex tax regulations, improve financial
                          efficiency, and achieve long-term financial goals.
                          Aftab is a licensed CPA and continues to stay current
                          on evolving tax laws and accounting standards.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Beyond his professional expertise, Aftab is committed
                          to building strong client relationships through
                          integrity, transparency, and a personalized approach.
                          His professional philosophy centers on empowering
                          clients with the knowledge and strategies they need to
                          make informed financial decisions.
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 mr-2 text-[#3B7FB4]" />
                          Member of AICPA, TSCPA, and Houston Society of CPAs
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Memberships & Affiliations */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#3B7FB4]/10 rounded-full text-[#3B7FB4] font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Professional Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Professional <span className="gradient-text">Memberships</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We maintain active memberships in leading professional
                organizations to stay current with industry standards and best
                practices.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover-lift">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {memberships.map((membership, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-lg font-semibold text-gray-900 leading-relaxed">
                            {membership}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#3B7FB4]/10 rounded-full text-[#3B7FB4] font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Giving Back
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Community <span className="gradient-text">Involvement</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in giving back to the Houston community that has
                supported our growth.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B7FB4]/5 to-[#336a96]/5"></div>
                    <div className="relative p-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B7FB4] to-[#336a96] flex items-center justify-center text-white mx-auto mb-8">
                        <Heart className="h-10 w-10" />
                      </div>
                      <div className="space-y-8 max-w-4xl mx-auto">
                        <p className="text-xl text-gray-700 leading-relaxed">
                          At our firm, we believe in giving back to the Houston
                          community that has supported our growth. We actively
                          participate in charitable initiatives, sponsor local
                          events, and support small businesses through
                          mentorship and professional development programs.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                          Our team is proud to contribute time and resources to
                          educational workshops, nonprofit organizations, and
                          community outreach efforts. By engaging with and
                          supporting the Houston community, we strive to make a
                          meaningful impact both professionally and personally.
                        </p>
                      </div>
                      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                            <Users className="h-6 w-6" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Mentorship Programs
                          </h4>
                          <p className="text-sm text-gray-600">
                            Supporting small business growth
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                            <Award className="h-6 w-6" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Educational Workshops
                          </h4>
                          <p className="text-sm text-gray-600">
                            Financial literacy initiatives
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-4">
                            <Heart className="h-6 w-6" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Charitable Initiatives
                          </h4>
                          <p className="text-sm text-gray-600">
                            Local nonprofit support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#3B7FB4] via-[#336a96] to-[#2a5a7a] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
                <Users className="w-4 h-4 mr-2" />
                Let's Connect
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Ready to Work{" "}
                <span className="gradient-text bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Together?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our experience and expertise can help you
                achieve your financial goals and build a stronger financial
                future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  asChild
                  className="bg-white text-[#3B7FB4] hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="/contact">Get in Touch</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#3B7FB4] font-semibold px-8 py-4 text-lg rounded-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <a href="/services">View Our Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
