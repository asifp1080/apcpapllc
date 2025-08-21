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
    <div className="w-12 h-12 rounded-full bg-[#3B7FB4]/10 flex items-center justify-center">
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
      className={`h-full hover:shadow-lg transition-shadow duration-300 bg-white ${className}`}
    >
      <CardHeader>
        <div className="flex items-center gap-4 mb-2">
          {icon || defaultIcon}
        </div>
        <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        <Button
          asChild
          variant="link"
          className="p-0 h-auto text-[#3B7FB4] hover:text-[#336a96] self-start"
        >
          <a href={link} className="flex items-center group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
