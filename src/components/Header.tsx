import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { trackPhoneCall } from "@/utils/analytics";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              {/* Mobile Logo */}
              <img
                src="/assets/apcpa_logo_mobile.webp"
                alt="AP CPA PLLC"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105 md:hidden"
              />
              {/* Desktop Logo */}
              <img
                src="/assets/apcpa_logo.webp"
                alt="AP CPA PLLC"
                className="hidden md:block h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <a
              href="/"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B7FB4] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 relative group py-2"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B7FB4] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B7FB4] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 relative group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B7FB4] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button & Call Button */}
          <div className="flex items-center space-x-2">
            {/* Call Button - Always visible but smaller on mobile */}
            <Button
              asChild
              size="sm"
              className="bg-[#3B7FB4] hover:bg-[#336a96] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-3 py-2 md:px-4 md:py-2"
            >
              <a
                href="tel:+17133382520"
                className="flex items-center min-h-[44px] min-w-[44px] justify-center"
                onClick={trackPhoneCall}
              >
                <Phone className="h-4 w-4 md:mr-2" />
                <span className="hidden sm:inline">Call Us</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 min-h-[44px] min-w-[44px]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-sm border-b border-gray-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
                  onClick={closeMenu}
                >
                  Services
                </a>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-[#3B7FB4] font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
