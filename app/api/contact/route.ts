import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Sva polja su obavezna' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nevalidan email format' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure this with your email service)
    // For now, we'll use a test configuration
    // In production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to you (business owner)
    const mailToOwner = {
      from: process.env.SMTP_FROM || 'noreply@blackboxtesting.rs',
      to: process.env.CONTACT_EMAIL || 'contact@blackboxtesting.rs',
      subject: `Nova poruka sa sajta: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Nova kontakt poruka</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Naslov:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Poruka:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Ova poruka je poslata sa kontakt forme na Black Box Testing sajtu.
          </p>
        </div>
      `,
    }

    // Auto-reply to the user
    const mailToUser = {
      from: process.env.SMTP_FROM || 'noreply@blackboxtesting.rs',
      to: email,
      subject: 'Hvala na poruci - Black Box Testing',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Black Box Testing</h1>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #374151;">Poštovani/a ${name},</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Hvala vam što ste nas kontaktirali! Primili smo vašu poruku i javićemo vam se u najkraćem mogućem roku.
            </p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Vaša poruka:</h3>
              <p><strong>Naslov:</strong> ${subject}</p>
              <p style="color: #4b5563;">${message}</p>
            </div>
            <p style="color: #4b5563; line-height: 1.6;">
              U međuvremenu, možete nas kontaktirati i putem:
            </p>
            <ul style="color: #4b5563;">
              <li>Email: contact@blackboxtesting.rs</li>
              <li>Telefon: +381 XX XXX XXXX</li>
            </ul>
            <p style="color: #4b5563; line-height: 1.6;">
              Srdačan pozdrav,<br>
              <strong>Black Box Testing Tim</strong>
            </p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
            © ${new Date().getFullYear()} Black Box Testing. Sva prava zadržana.
          </p>
        </div>
      `,
    }

    // Send emails
    // Note: In development without SMTP credentials, this will fail
    // For testing, you can comment this out or use a test email service
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailToOwner)
      await transporter.sendMail(mailToUser)
    } else {
      // Log to console in development
      console.log('📧 Email would be sent (no SMTP configured):')
      console.log('To:', mailToOwner.to)
      console.log('From:', name, '-', email)
      console.log('Subject:', subject)
      console.log('Message:', message)
    }

    return NextResponse.json(
      { message: 'Poruka uspešno poslata!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Greška pri slanju poruke. Molimo pokušajte ponovo.' },
      { status: 500 }
    )
  }
}

