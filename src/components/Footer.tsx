import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/assets/apcpa_logo.webp"
                alt="AP CPA PLLC"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional accounting and tax services in Houston, TX. We
              provide accurate, compliant, and responsive financial solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#3B7FB4]" />
                <div>
                  <p>6161 Savoy Dr #610</p>
                  <p>Houston, TX 77036</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#3B7FB4]" />
                <a
                  href="tel:+17133382520"
                  className="hover:text-[#3B7FB4] transition-colors"
                  onClick={trackPhoneCall}
                >
                  (713) 338-2520
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#3B7FB4]" />
                <a
                  href="mailto:contactus@apcpapllc.com"
                  className="hover:text-[#3B7FB4] transition-colors"
                  onClick={trackEmailClick}
                >
                  contactus@apcpapllc.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a
                href="/terms"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="/privacy"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/disclaimer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Website Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AP CPA PLLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
