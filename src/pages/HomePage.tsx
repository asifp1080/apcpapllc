import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import MapLocation from "../components/MapLocation";

const HomePage = () => {
  // Sample service data
  const services = [
    {
      id: 1,
      title: "Tax Preparation",
      description:
        "Comprehensive tax preparation services for individuals and businesses with a focus on maximizing deductions and ensuring compliance.",
      icon: "FileText",
      link: "/services#tax-preparation",
    },
    {
      id: 2,
      title: "Bookkeeping",
      description:
        "Accurate and timely bookkeeping services to help you track income, expenses, and financial performance.",
      icon: "BookOpen",
      link: "/services#bookkeeping",
    },
    {
      id: 3,
      title: "Payroll Services",
      description:
        "Complete payroll processing, tax filing, and compliance services for businesses of all sizes.",
      icon: "DollarSign",
      link: "/services#payroll",
    },
    {
      id: 4,
      title: "Business Compliance",
      description:
        "Stay compliant with state and federal regulations with our comprehensive business compliance services.",
      icon: "CheckSquare",
      link: "/services#compliance",
    },
    {
      id: 5,
      title: "Advisory Services",
      description:
        "Strategic financial advice and planning to help your business grow and succeed.",
      icon: "LineChart",
      link: "/services#advisory",
    },
    {
      id: 6,
      title: "IRS Representation",
      description:
        "Professional representation before the IRS and state tax authorities to resolve tax issues.",
      icon: "Shield",
      link: "/services#irs-representation",
    },
  ];

  // Service Card component (inline since we're having import issues)
  const ServiceCard = ({ title, description, icon, link }) => {
    // Function to render the appropriate icon
    const renderIcon = (iconName) => {
      switch (iconName) {
        case "FileText":
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
          );
        case "BookOpen":
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
          );
        case "DollarSign":
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          );
        case "CheckSquare":
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
          );
        case "LineChart":
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
          );
        case "Shield":
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          );
        default:
          return (
            <div className="w-10 h-10 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
          );
      }
    };

    return (
      <Card className="h-full hover:shadow-md transition-shadow bg-white">
        <CardHeader>
          <div className="flex items-center gap-4">
            {renderIcon(icon)}
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant="link"
            className="p-0 h-auto text-[#3B7FB4] hover:text-[#336a96]"
          >
            <a href={link} className="flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <>
      <Helmet>
        <title>AP CPA PLLC - Certified Public Accountants in Houston, TX</title>
        <meta
          name="description"
          content="Professional accounting and tax services in Houston, TX. AP CPA PLLC provides comprehensive tax preparation, bookkeeping, payroll, and business advisory services with over 20 years of experience."
        />
        <meta
          name="keywords"
          content="CPA Houston, accounting services Houston, tax preparation Houston, bookkeeping Houston, payroll services Houston, business advisory Houston, IRS representation Houston, certified public accountant Houston TX"
        />
        <link rel="canonical" href="https://apcpapllc.com/" />
        <meta
          property="og:title"
          content="AP CPA PLLC - Certified Public Accountants in Houston, TX"
        />
        <meta
          property="og:description"
          content="Professional accounting and tax services in Houston, TX. AP CPA PLLC provides comprehensive tax preparation, bookkeeping, payroll, and business advisory services with over 20 years of experience."
        />
        <meta property="og:url" content="https://apcpapllc.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#3B7FB4] to-[#336a96] text-white py-20 md:py-32 overflow-hidden">
          <Carousel className="absolute inset-0">
            <CarouselContent>
              <CarouselItem className="relative">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                  src="/assets/cpa-consultation.webp"
                  alt="Professional CPA Consultation"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        AP CPA PLLC
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Expert Financial Consultation
                      </p>
                      <p className="text-lg mb-8 text-blue-50 max-w-2xl">
                        Our experienced CPAs provide personalized financial
                        guidance and strategic planning to help you make
                        informed decisions for your business and personal
                        finances.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          className="bg-white text-[#3B7FB4] hover:bg-gray-100 font-semibold"
                        >
                          <a href="/services">View Our Services</a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-[#3B7FB4] font-semibold transition-colors bg-transparent"
                        >
                          <a href="/contact">Contact Information</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="relative">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                  src="/assets/office-team.webp"
                  alt="Professional Accounting Team"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        AP CPA PLLC
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Comprehensive Accounting Services
                      </p>
                      <p className="text-lg mb-8 text-blue-50 max-w-2xl">
                        From tax preparation and bookkeeping to payroll services
                        and business compliance, our full-service team delivers
                        accurate, timely solutions for all your accounting
                        needs.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          className="bg-white text-[#3B7FB4] hover:bg-gray-100 font-semibold"
                        >
                          <a href="/services">View Our Services</a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-[#3B7FB4] font-semibold transition-colors bg-transparent"
                        >
                          <a href="/contact">Contact Information</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="relative">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                  src="/assets/houston-skyline.webp"
                  alt="Houston Texas Skyline"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        AP CPA PLLC
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Trusted Professionals in Houston, TX
                      </p>
                      <p className="text-lg mb-8 text-blue-50 max-w-2xl">
                        With over 20 years of experience serving the Houston
                        community, we combine local expertise with professional
                        excellence to deliver exceptional accounting services
                        you can trust.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          className="bg-white text-[#3B7FB4] hover:bg-gray-100 font-semibold"
                        >
                          <a href="/services">View Our Services</a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-[#3B7FB4] font-semibold transition-colors bg-transparent"
                        >
                          <a href="/contact">Contact Information</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4 text-white border-white hover:bg-white hover:text-[#3B7FB4] z-30" />
            <CarouselNext className="right-4 text-white border-white hover:bg-white hover:text-[#3B7FB4] z-30" />
          </Carousel>
        </section>

        {/* At a Glance Facts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-[#3B7FB4] mb-2">20+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-[#3B7FB4] mb-2">6+</h3>
                <p className="text-gray-600">Services Offered</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-[#3B7FB4] mb-2">
                  Houston, TX
                </h3>
                <p className="text-gray-600">Primary Location</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-[#3B7FB4] mb-2">CPA</h3>
                <p className="text-gray-600">Licensed & Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive range of accounting and tax services
                to meet your personal and business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="group">
                <a href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Snippet with Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <Carousel className="w-full max-w-lg mx-auto h-[400px]">
                  <CarouselContent className="h-full">
                    <CarouselItem className="h-full">
                      <div className="relative h-full flex items-center justify-center">
                        <img
                          src="/assets/cpa-consultation-new.webp"
                          alt="Professional CPA Consultation"
                          className="rounded-lg shadow-lg max-w-full max-h-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <div className="relative h-full flex items-center justify-center">
                        <img
                          src="/assets/office-team.webp"
                          alt="Professional Accounting Team"
                          className="rounded-lg shadow-lg max-w-full max-h-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <div className="relative h-full flex items-center justify-center">
                        <img
                          src="/assets/aftab-pirmohammad.webp"
                          alt="Aftab Pirmohammad, CPA"
                          className="rounded-lg shadow-lg max-w-full max-h-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <div className="lg:w-1/2">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          Our Approach
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                          At AP CPA PLLC, we believe in providing accurate,
                          compliant, and responsive accounting services. Our
                          team of experienced professionals is dedicated to
                          helping you navigate complex financial matters with
                          confidence and clarity.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                          We take the time to understand your unique situation
                          and provide personalized solutions that meet your
                          specific needs. Our commitment to excellence and
                          attention to detail ensures that you receive the
                          highest quality service.
                        </p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          Expert Team
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                          Our dedicated team of certified professionals brings
                          years of experience in accounting, tax preparation,
                          and business advisory services. We stay current with
                          the latest regulations and best practices to serve you
                          better.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                          From individual tax returns to complex business
                          compliance, our team has the expertise to handle your
                          financial needs with precision and care. We're
                          committed to building long-term relationships based on
                          trust and results.
                        </p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          Leadership Excellence
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                          Led by experienced CPA professionals, AP CPA PLLC
                          combines technical expertise with personalized
                          service. Our leadership team brings decades of
                          combined experience in public accounting and business
                          advisory services.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                          We understand that every client's situation is unique,
                          which is why we take a consultative approach to
                          understand your goals and provide tailored solutions
                          that drive results for your business or personal
                          financial objectives.
                        </p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <div className="mt-8">
                  <Button asChild>
                    <a href="/about">Learn More About Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're conveniently located in Houston, TX. Visit us during
                business hours or contact us to schedule an appointment.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <MapLocation />
              </div>

              <div className="lg:w-1/2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Reach out to us with any questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-[#3B7FB4] mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                          href="tel:+17133382520"
                          className="text-gray-600 hover:text-[#3B7FB4]"
                        >
                          (713) 338-2520
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-[#3B7FB4] mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:contactus@apcpapllc.com"
                          className="text-gray-600 hover:text-[#3B7FB4]"
                        >
                          contactus@apcpapllc.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-[#3B7FB4] mt-0.5" />
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">
                          6161 Savoy Dr #610
                          <br />
                          Houston, TX 77036
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-[#3B7FB4] mt-0.5" />
                      <div>
                        <h4 className="font-medium">Office Hours</h4>
                        <div className="text-gray-600">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
