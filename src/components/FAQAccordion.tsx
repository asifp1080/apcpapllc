import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
  className?: string;
}

const FAQAccordion = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our accounting and tax services.",
  faqs = [
    {
      question: "What services does AP CPA PLLC offer?",
      answer:
        "We offer a comprehensive range of accounting and tax services including individual tax preparation, business tax & compliance, bookkeeping & accounting, payroll support, sales & franchise tax, IRS/state notices & representation, and advisory/consulting services.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling our office at (713) 338-2520, emailing us at info@apcpapllc.com, or using the contact form on our website. We'll respond promptly to arrange a time that works for you.",
    },
    {
      question:
        "What documents should I bring to my tax preparation appointment?",
      answer:
        "For individual tax preparation, please bring your W-2s, 1099s, property tax statements, mortgage interest statements, receipts for deductible expenses, prior year tax returns, and any tax-related correspondence. For business clients, please bring your financial statements, payroll records, asset purchase information, and any other relevant financial documents.",
    },
    {
      question: "How far in advance should I file my taxes?",
      answer:
        "We recommend gathering your documents and scheduling your tax preparation appointment as early as possible, ideally at least several weeks before the filing deadline. This allows sufficient time for thorough preparation and addressing any unexpected issues that may arise.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Yes, we offer virtual consultations via phone or video conference for clients who prefer remote meetings. Our digital document sharing systems make it easy to exchange information securely without visiting our office.",
    },
  ],
  className = "",
}: FAQAccordionProps) => {
  return (
    <div className={`w-full bg-white ${className}`}>
      {/* FAQ Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        })}
      </script>

      <Card className="border-none shadow-none">
        <CardContent className="p-6">
          {title && (
            <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#3B7FB4]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQAccordion;
