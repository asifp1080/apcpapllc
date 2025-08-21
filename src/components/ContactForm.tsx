import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmitSuccess?: () => void;
  className?: string;
}

const ContactForm = ({
  onSubmitSuccess,
  className = "",
}: ContactFormProps = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Submit form data to backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          privacyConsent: data.privacyConsent,
          timestamp: new Date().toISOString(),
          source: "website_contact_form",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Track form submission with Google Analytics
      if (typeof gtag !== "undefined") {
        gtag("event", "form_submit", {
          event_category: "Contact",
          event_label: "Contact Form",
          value: 1,
        });
      }

      console.log("Form submitted successfully:", result);
      setSubmitStatus("success");
      form.reset();

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Set specific error message based on error type
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setErrorMessage(
          "Unable to connect to our servers. Please check your internet connection and try again.",
        );
      } else if (
        error instanceof Error &&
        error.message.includes("HTTP error")
      ) {
        setErrorMessage(
          "There was a server error processing your request. Please try again later or contact us directly.",
        );
      } else {
        setErrorMessage(
          "There was an error submitting your form. Please try again later.",
        );
      }

      // Track form submission error with Google Analytics
      if (typeof gtag !== "undefined") {
        gtag("event", "form_error", {
          event_category: "Contact",
          event_label: "Contact Form Error",
          value: 0,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: "tax-preparation", label: "Tax Preparation" },
    { value: "bookkeeping", label: "Bookkeeping & Accounting" },
    { value: "payroll", label: "Payroll Support" },
    { value: "business-compliance", label: "Business Tax & Compliance" },
    { value: "irs-representation", label: "IRS Representation" },
    { value: "advisory", label: "Advisory Services" },
    { value: "other", label: "Other Services" },
  ];

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${className}`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>

      {submitStatus === "success" && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-800">
            Thank you for your message! We'll get back to you as soon as
            possible.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert className="mb-6 bg-red-50 border-red-200">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-800">
            {errorMessage || "Something went wrong. Please try again."}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Interest</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the{" "}
                    <a
                      href="/privacy"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </FormLabel>
                  <FormDescription className="text-xs">
                    Your information will only be used to respond to your
                    inquiry.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full md:w-auto bg-[#3B7FB4] hover:bg-[#336a96]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
