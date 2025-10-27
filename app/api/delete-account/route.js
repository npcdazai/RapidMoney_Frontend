import { NextResponse } from "next/server";

export const runtime = "nodejs";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const SMTP_ENDPOINT = process.env.NEXT_PUBLIC_SMTP_ENDPOINT;
const SMTP_USERNAME = process.env.NEXT_PUBLIC_SMTP_USERNAME;
const SMTP_PASSWORD = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
const CONTACT_EMAIL_RECIPIENT =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL_RECIPIENT || "support@rapidmoney.in";
const CONTACT_EMAIL_FROM =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL_FROM || "support@rapidmoney.in";

async function sendContactEmail(formData) {
  const { fullName, email, mobileNumber, message } = formData;

  // Check SMTP configuration
  if (!SMTP_ENDPOINT || !SMTP_USERNAME || !SMTP_PASSWORD) {
    console.error("SMTP Configuration Error:", {
      endpoint: SMTP_ENDPOINT ? "SET" : "MISSING",
      username: SMTP_USERNAME ? "SET" : "MISSING",
      password: SMTP_PASSWORD ? "SET" : "MISSING",
    });
    throw new Error("SMTP credentials are not configured.");
  }

  // Dynamically import nodemailer at runtime to prevent build-time module resolution errors
  let nodemailerModule;
  try {
    nodemailerModule = await import("nodemailer");
  } catch (err) {
    console.error("nodemailer import failed:", err?.message || err);
    throw new Error(
      "MISSING_NODEMAILER_MODULE: Please install nodemailer (e.g. `npm install nodemailer`) in the project."
    );
  }

  const nodemailer = nodemailerModule?.default || nodemailerModule;

  const transporter = nodemailer.createTransport({
    host: SMTP_ENDPOINT,
    port: 587,
    secure: false,
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log("Attempting to send email with config:", {
    host: SMTP_ENDPOINT,
    port: 587,
    from: CONTACT_EMAIL_FROM,
    to: CONTACT_EMAIL_RECIPIENT,
  });

  const mailOptions = {
    from: CONTACT_EMAIL_FROM,
    to: CONTACT_EMAIL_RECIPIENT,
    subject: `New Delete Form Submission from ${fullName}`,
    html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Contact Request Details</h2>
                <hr />
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                <hr />
                <h3>Message:</h3>
                <p>${message || "No message provided."}</p>
            </div>
        `,
  };

  try {
    // Verify connection
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent successfully:", info.messageId);
    return {
      message:
        "Thank you for reaching out! Your message has been successfully sent.\nOur team will get back to you within 24–48 hours.",
    };
  } catch (error) {
    console.error("Detailed SMTP Error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });
    throw new Error(
      `Something went wrong! \nWe couldn't send your message right now. Please try again in a few minutes`
    );
  }
}

export async function POST(request) {
  try {
    // Log environment variables status (without exposing values)
    console.log("SMTP Configuration Check:", {
      hasEndpoint: !!SMTP_ENDPOINT,
      hasUsername: !!SMTP_USERNAME,
      hasPassword: !!SMTP_PASSWORD,
      recipient: CONTACT_EMAIL_RECIPIENT,
      from: CONTACT_EMAIL_FROM,
    });

    const formData = await request.json();
    console.log("Received form data:", formData);

    if (!formData.fullName || !formData.email || !formData.mobileNumber) {
      return NextResponse.json(
        {
          status: "Error",
          message:
            "Missing required fields: Full Name, Email, and Mobile Number.",
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const result = await sendContactEmail(formData);

    return NextResponse.json(
      { status: "Success", message: result.message, data: null },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("API Error in POST handler:", error);
    console.error("Error stack:", error.stack);

    if (error.message.includes("SMTP credentials")) {
      return NextResponse.json(
        {
          status: "Error",
          message:
            "Email service is not configured. Please contact administrator.",
        },
        { status: 500, headers: corsHeaders }
      );
    }

    if (error.message.includes("MISSING_NODEMAILER_MODULE")) {
      return NextResponse.json(
        {
          status: "Error",
          message:
            "Server dependency missing: please run `npm install nodemailer` and restart the dev server.",
        },
        { status: 500, headers: corsHeaders }
      );
    }

    if (error.message.includes("Missing required fields")) {
      return NextResponse.json(
        { status: "Error", message: error.message },
        { status: 400, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        status: "Error",
        message:
          error.message || "Internal Server Error. Could not send message.",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS(request) {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
  return NextResponse.json(
    { message: "Method Not Allowed. This endpoint is for POST requests only." },
    { status: 405, headers: corsHeaders }
  );
}
