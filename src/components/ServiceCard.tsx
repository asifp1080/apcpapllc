import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
}

const ServiceCard = ({
  title = "Tax Preparation",
  description = "Comprehensive tax preparation services for individuals and businesses with a focus on maximizing deductions and ensuring compliance.",
  icon,
  link = "/services",
  className = "",
}: ServiceCardProps) => {
  const defaultIcon = (
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B7FB4]/10 to-[#3B7FB4]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#3B7FB4]"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    </div>
  );

  return (
    <Card
      className={`group h-full hover-lift bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden ${className}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-6 mb-4">
          {icon || defaultIcon}
        </div>
        <CardTitle className="text-2xl font-serif text-gray-800 group-hover:text-[#3B7FB4] transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col pt-0">
        <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-lg">
          {description}
        </p>
        <Button
          asChild
          variant="link"
          className="p-0 h-auto text-[#3B7FB4] hover:text-[#336a96] self-start font-semibold text-lg"
        >
          <a href={link} className="flex items-center group/link">
            Learn More
            <ArrowRight className="ml-3 h-5 w-5 group-hover/link:translate-x-2 transition-transform duration-300" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
