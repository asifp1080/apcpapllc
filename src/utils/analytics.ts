// Google Analytics 4 utility functions

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, any>,
    ) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent("phone_call", {
    event_category: "Contact",
    event_label: "Phone Call",
    value: 1,
  });
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent("email_click", {
    event_category: "Contact",
    event_label: "Email Click",
    value: 1,
  });
};

// Track service page visits
export const trackServiceView = (serviceName: string) => {
  trackEvent("service_view", {
    event_category: "Services",
    event_label: serviceName,
    value: 1,
  });
};

// Track form interactions
export const trackFormStart = (formName: string) => {
  trackEvent("form_start", {
    event_category: "Form",
    event_label: formName,
    value: 1,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", {
    event_category: "Form",
    event_label: formName,
    value: 1,
  });
};

export const trackFormError = (formName: string, errorType?: string) => {
  trackEvent("form_error", {
    event_category: "Form",
    event_label: formName,
    error_type: errorType,
    value: 0,
  });
};
