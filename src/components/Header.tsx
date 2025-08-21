import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { trackPhoneCall } from "@/utils/analytics";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/assets/apcpa_logo.webp"
                alt="AP CPA PLLC"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Call Button */}
          <Button
            asChild
            className="bg-[#3B7FB4] hover:bg-[#336a96] text-white"
          >
            <a
              href="tel:+17133382520"
              className="flex items-center"
              onClick={trackPhoneCall}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
