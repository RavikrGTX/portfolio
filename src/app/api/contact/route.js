import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'RECIPIENT_EMAIL'];

function getMailConfig() {
  const missing = requiredEnv.filter(key => !process.env[key]?.trim());

  if (missing.length > 0) {
    return { error: `Missing email configuration: ${missing.join(', ')}` };
  }

  const port = Number(process.env.SMTP_PORT.trim());

  if (!Number.isInteger(port)) {
    return { error: 'SMTP_PORT must be a valid number' };
  }

  return {
    host: process.env.SMTP_HOST.trim(),
    port,
    secure: port === 465,
    user: process.env.SMTP_USER.trim(),
    pass: process.env.SMTP_PASSWORD.trim(),
    recipient: process.env.RECIPIENT_EMAIL.trim(),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getFriendlyMailError(error) {
  if (error?.code === 'EAUTH') {
    return 'Email authentication failed. For Gmail, use a valid App Password in SMTP_PASSWORD.';
  }

  if (error?.code === 'ETIMEDOUT' || error?.code === 'ECONNECTION') {
    return 'Could not connect to the email server. Please check SMTP_HOST and SMTP_PORT.';
  }

  return 'Failed to send email. Please try again.';
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanEmail = email.trim();

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const config = getMailConfig();

    if (config.error) {
      return NextResponse.json(
        { error: config.error },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    const cleanName = name.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${config.user}>`,
      to: config.recipient,
      subject: `Ravi's Portfolio Contact: ${cleanSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #000000; border-bottom: 2px solid #000000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
            <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #333333;">${escapeHtml(cleanMessage)}</p>
          </div>
          <p style="margin-top: 20px; color: #666666; font-size: 12px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
      replyTo: cleanEmail,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: getFriendlyMailError(error) },
      { status: 500 }
    );
  }
}
