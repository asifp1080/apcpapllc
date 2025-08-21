import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - AP CPA PLLC</title>
        <meta
          name="description"
          content="The page you're looking for could not be found. Return to AP CPA PLLC homepage or browse our accounting services."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        <section className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card>
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center text-[#3B7FB4] mx-auto mb-6">
                    <Search className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    404
                  </CardTitle>
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                    Page Not Found
                  </h1>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 mb-8">
                    Sorry, we couldn't find the page you're looking for. The
                    page may have been moved, deleted, or the URL may be
                    incorrect.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-[#3B7FB4] hover:bg-[#336a96]">
                      <a href="/" className="flex items-center">
                        <Home className="mr-2 h-4 w-4" />
                        Go Home
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => window.history.back()}
                    >
                      <button className="flex items-center">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                      </button>
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <a
                        href="/"
                        className="text-[#3B7FB4] hover:text-[#336a96] hover:underline"
                      >
                        Home
                      </a>
                      <a
                        href="/services"
                        className="text-[#3B7FB4] hover:text-[#336a96] hover:underline"
                      >
                        Services
                      </a>
                      <a
                        href="/about"
                        className="text-[#3B7FB4] hover:text-[#336a96] hover:underline"
                      >
                        About
                      </a>
                      <a
                        href="/contact"
                        className="text-[#3B7FB4] hover:text-[#336a96] hover:underline"
                      >
                        Contact
                      </a>
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

export default NotFoundPage;
