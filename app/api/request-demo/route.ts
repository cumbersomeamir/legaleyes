import { NextRequest, NextResponse } from 'next/server';

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // 3 submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, phone, role, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize input (basic - in production, use a library like DOMPurify)
    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '');

    const demoRequest = {
      name: sanitize(name),
      email: sanitize(email),
      company: sanitize(company),
      phone: phone ? sanitize(phone) : null,
      role: role ? sanitize(role) : null,
      message: message ? sanitize(message) : null,
      submittedAt: new Date().toISOString(),
      ip: ip,
    };

    // TODO: Implement actual submission logic
    // This is a placeholder - replace with your actual implementation
    // Example: Save to database, send email notification, create CRM lead, etc.

    // In production, you would:
    // 1. Save to database (PostgreSQL, MongoDB, etc.)
    // 2. Send email notification (SendGrid, AWS SES, etc.)
    // 3. Create lead in CRM (Salesforce, HubSpot, etc.)
    // 4. Send to webhook (Zapier, Make, etc.)

    console.log('Demo request received:', demoRequest);

    return NextResponse.json(
      { 
        success: true,
        message: 'Demo request submitted successfully. We will contact you within 24 hours.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

