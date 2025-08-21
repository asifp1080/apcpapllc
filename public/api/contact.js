// Contact form submission handler
// This is a placeholder implementation for demonstration
// In production, this would be replaced with a proper serverless function
// or backend API endpoint

// For Netlify Functions, this would go in netlify/functions/contact.js
// For Vercel, this would go in api/contact.js
// For other platforms, implement according to their serverless function structure

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "POST",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);

    // Basic validation
    const requiredFields = [
      "name",
      "email",
      "phone",
      "service",
      "message",
      "privacyConsent",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: "Missing required fields",
          missingFields,
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Validate privacy consent
    if (!data.privacyConsent) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Privacy consent is required" }),
      };
    }

    // Here you would typically:
    // 1. Send email notification to info@apcpapllc.com
    // 2. Store the submission in a database
    // 3. Send confirmation email to the user
    // 4. Integrate with CRM system

    // For now, we'll just log the submission and return success
    console.log("Contact form submission:", {
      ...data,
      timestamp: new Date().toISOString(),
      ip:
        event.headers["x-forwarded-for"] ||
        event.headers["x-real-ip"] ||
        "unknown",
      userAgent: event.headers["user-agent"] || "unknown",
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message: "Thank you for your inquiry. We will get back to you soon.",
        submissionId: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      }),
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Internal server error",
        message:
          "There was an error processing your request. Please try again later.",
      }),
    };
  }
};
