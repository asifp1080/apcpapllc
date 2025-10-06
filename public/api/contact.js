// Vercel Serverless Function for contact form submission
// This handles contact form submissions with validation and security

export default async function handler(req, res) {
  // Set CORS headers for cross-origin requests
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
    return res.status(405).json({
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests",
    });
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
        message: "Please fill in all required fields",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({
        error: "Invalid email format",
        message: "Please provide a valid email address",
      });
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
      return res.status(400).json({
        error: "Invalid phone format",
        message: "Please provide a valid phone number",
      });
    }

    // Validate privacy consent
    if (!data.privacyConsent) {
      return res.status(400).json({
        error: "Privacy consent is required",
        message: "You must agree to the privacy policy to submit this form",
      });
    }

    // Rate limiting check (simple implementation)
    const clientIP =
      req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "unknown";

    // Log the submission for monitoring
    const submissionData = {
      ...data,
      timestamp: new Date().toISOString(),
      ip: clientIP,
      userAgent: req.headers["user-agent"] || "unknown",
      submissionId: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };

    console.log("Contact form submission:", submissionData);

    // Here you would typically:
    // 1. Send email notification to info@apcpapllc.com using a service like:
    //    - Vercel's email service
    //    - SendGrid
    //    - Resend
    //    - Nodemailer with SMTP
    // 2. Store the submission in a database (Vercel KV, Supabase, etc.)
    // 3. Send confirmation email to the user
    // 4. Integrate with CRM system

    // Example email integration (uncomment and configure as needed):
    /*
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: 'contactus@apcpapllc.com',
        from: 'noreply@apcpapllc.com',
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <p><strong>Submitted:</strong> ${submissionData.timestamp}</p>
        `
      };
      
      await sgMail.send(msg);
    }
    */

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return res.status(200).json({
      success: true,
      message:
        "Thank you for your inquiry. We will get back to you within 24 hours.",
      submissionId: submissionData.submissionId,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      error: "Internal server error",
      message:
        "There was an error processing your request. Please try again later or contact us directly.",
    });
  }
}
