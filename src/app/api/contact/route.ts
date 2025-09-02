// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // For development - using Resend's sandbox domain
    // No domain verification needed!
    
    // Email to you (notification)
    const notificationEmail = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend's sandbox domain
      to: ['ahmadfaiz500@gmail.com'], // Your email
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
          <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Contact Message</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">From your portfolio website</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #334155; margin: 0 0 15px 0; font-size: 18px;">👤 Contact Details</h2>
                <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> 
                  <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
                </p>
                <p style="margin: 5px 0; color: #475569;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background: white; border: 2px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                <h2 style="color: #334155; margin: 0 0 15px 0; font-size: 18px;">💬 Message</h2>
                <div style="color: #475569; line-height: 1.6; white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 6px;">${message}</div>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  💡 <strong>Quick Reply:</strong> Just reply to this email to respond directly to ${name}
                </p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  Sent from your development environment • ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    // Auto-reply email to the sender (only send if it's your email during development)
    let autoReplyEmail = null;
    
    // Only send auto-reply to your own email in development
    if (email === 'ahmadfaiz500@gmail.com') {
      autoReplyEmail = await resend.emails.send({
        from: 'Faisal Ahmed <delivered@resend.dev>', // Resend's sandbox domain
        to: [email],
        subject: '✨ Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
          <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🙏 Thank You!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Your message has been received</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <p style="color: #374151; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
                Hi <strong style="color: #1f2937;">${name}</strong> 👋
              </p>
              
              <p style="color: #374151; line-height: 1.6; margin: 0 0 25px 0;">
                Thank you for reaching out through my portfolio! I've received your message and really appreciate you taking the time to get in touch.
              </p>
              
              <!-- Message Summary -->
              <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #0c4a6e; margin: 0 0 12px 0; font-size: 16px;">📋 Your Message Summary</h3>
                <p style="margin: 5px 0; color: #0369a1;"><strong>Subject:</strong> ${subject}</p>
                <div style="margin-top: 12px; padding: 12px; background: white; border-radius: 4px; border-left: 3px solid #0ea5e9;">
                  <em style="color: #0c4a6e; line-height: 1.5; white-space: pre-wrap;">"${message}"</em>
                </div>
              </div>
              
              <!-- Next Steps -->
              <div style="background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #92400e; margin: 0 0 12px 0; font-size: 16px;">⏰ What's Next?</h3>
                <ul style="color: #92400e; margin: 0; padding-left: 18px; line-height: 1.6;">
                  <li>I typically respond within 24 hours</li>
                  <li>I'll review your message carefully and provide a detailed response</li>
                  <li>For urgent matters, feel free to email me directly</li>
                </ul>
              </div>
              
              <p style="color: #374151; line-height: 1.6; margin: 25px 0 0 0;">
                Looking forward to connecting with you soon!
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #374151; line-height: 1.6; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #1f2937; font-size: 18px;">Faisal Ahmed</strong><br>
                  <span style="color: #6b7280;">Full Stack Developer</span>
                </p>
              </div>
              
              <!-- Contact Info -->
              <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%); border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #065f46; font-size: 14px; line-height: 1.6;">
                  📧 <strong>ahmadfaiz500@gmail.com</strong><br>
                  📍 Bengaluru, Karnataka, India<br>
                  🌐 Available for remote work globally
                </p>
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                  This is an automated response • ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });
    } else {
      // For other email addresses, we'll skip the auto-reply in development
      console.log(`Auto-reply skipped for ${email} - only available for verified emails in development`);
    }

    // Check for errors
    if (notificationEmail.error || (autoReplyEmail && autoReplyEmail.error)) {
      console.error('Resend error:', notificationEmail.error || (autoReplyEmail && autoReplyEmail.error));
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const responseMessage = email === 'ahmadfaiz500@gmail.com' 
      ? 'Emails sent successfully! Both notification and auto-reply emails have been sent.'
      : 'Notification email sent successfully! Auto-reply is only available in production with a verified domain.';

    return NextResponse.json(
      { 
        message: responseMessage,
        ids: {
          notification: notificationEmail.data?.id,
          autoReply: autoReplyEmail?.data?.id || null
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}