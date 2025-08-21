// Vercel Serverless Function for contact form submission
// This handles contact form submissions with validation and security

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse the request body
    const data = req.body;

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
      return res.status(400).json({
        error: "Missing required fields",
        missingFields,
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate privacy consent
    if (!data.privacyConsent) {
      return res.status(400).json({ error: "Privacy consent is required" });
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
        req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "unknown",
      userAgent: req.headers["user-agent"] || "unknown",
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return res.status(200).json({
      success: true,
      message: "Thank you for your inquiry. We will get back to you soon.",
      submissionId: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      error: "Internal server error",
      message:
        "There was an error processing your request. Please try again later.",
    });
  }
}
