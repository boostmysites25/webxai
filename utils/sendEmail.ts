export const sendEmail = async (data: any) => {
  // 1. ADMIN EMAIL TEMPLATE
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          background-color: #000000; 
          color: #e2e8f0; 
          margin: 0; 
          padding: 0; 
          -webkit-font-smoothing: antialiased; 
        }
        
        .wrapper {
          width: 100%;
          background: #000000;
          padding: 40px 0;
        }

        .container { 
          max-width: 640px; 
          margin: 0 auto; 
          background-color: #0A0A0F;
          border: 1px solid #1e293b; 
          border-radius: 16px; 
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .header {
          background: linear-gradient(135deg, #0F172A 0%, #020617 100%);
          padding: 32px;
          border-bottom: 1px solid #1e293b;
          text-align: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 8px;
        }
        
        .logo span { color: #3b82f6; } /* Blue accent */

        .header-title {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94a3b8;
          font-weight: 600;
        }

        .content {
          padding: 32px;
        }

        .section-title {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #1e293b;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          column-gap: 16px;
          margin-bottom: 24px;
        }

        .full-width {
          grid-column: span 2;
        }

        .field {
          background: #111827;
          border: 1px solid #1f293b;
          border-radius: 8px;
          padding: 12px 16px;
        }

        .label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 4px;
          display: block;
        }

        .value {
          font-size: 15px;
          color: #f8fafc;
          font-weight: 500;
          line-height: 1.4;
          word-break: break-word;
        }
        
        .value a {
            color: #60a5fa;
            text-decoration: none;
        }
        
        .value a:hover {
            text-decoration: underline;
        }

        .message-box {
          background: #111827;
          border: 1px solid #1f293b;
          border-radius: 8px;
          padding: 20px;
        }
        
        .message-content {
          font-size: 15px;
          line-height: 1.6;
          color: #e2e8f0;
          white-space: pre-wrap;
        }

        .cta-row {
            margin-top: 32px;
            text-align: center;
        }
        
        .btn {
            display: inline-block;
            background: #2563eb;
            color: #ffffff;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 14px;
            transition: background 0.2s;
        }
        
        .btn:hover { background: #1d4ed8; }

        .footer {
          background: #020617;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #1e293b;
          color: #64748b;
          font-size: 12px;
        }
        
        .tag {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            background: rgba(59, 130, 246, 0.15);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.2);
        }

        @media (max-width: 600px) {
          .grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
          .container { border-radius: 0; border-left: none; border-right: none; }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          
          <!-- Header -->
          <div class="header">
            <div class="logo">WebX <span>AI</span></div>
            <div class="header-title">New Lead Notification</div>
          </div>

          <div class="content">
            
            <!-- Section: Client Info -->
            <div class="section-title">Client Information</div>
            <div class="grid">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <span class="label">Phone</span>
                <div class="value">${data.countryCode || ''} ${data.phone || 'N/A'}</div>
              </div>
              <div class="field">
                <span class="label">Company</span>
                <div class="value">${data.company || 'N/A'}</div>
              </div>
            </div>

            <!-- Section: Project Details -->
            <div class="section-title" style="margin-top: 10px;">Project Scope</div>
            <div class="grid">
              <div class="field">
                <span class="label">Service Interest</span>
                <div class="value" style="margin-top: 4px;">
                    <span class="tag">${data.projectType}</span>
                </div>
              </div>
              <div class="field">
                <span class="label">Budget Range</span>
                <div class="value">${data.budget || 'N/A'}</div>
              </div>
              <div class="field full-width">
                <span class="label">Expected Timeline</span>
                <div class="value">${data.timeline || 'N/A'}</div>
              </div>
            </div>

            <!-- Section: Message -->
            <div class="section-title" style="margin-top: 10px;">Brief / Requirements</div>
            <div class="message-box">
              <div class="message-content">${data.details || 'No additional details provided.'}</div>
            </div>
            
            <!-- Quick Actions -->
            <div class="cta-row">
                <a href="mailto:${data.email}?subject=Re: WebX AI Project Inquiry" class="btn">Reply to Lead</a>
            </div>

          </div>

          <!-- Footer -->
          <div class="footer">
            Generated by WebX AI Contact Form<br>
            Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // 2. USER "THANK YOU" EMAIL TEMPLATE
  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; background-color: #05050A; color: #ffffff; padding: 0; margin: 0; }
        .wrapper { width: 100%; background-color: #05050A; padding: 40px 10px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #0C0C12; border: 1px solid #2a2a35; border-radius: 16px; padding: 40px; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.6); }
        .icon { font-size: 40px; margin-bottom: 20px; }
        .title { font-size: 32px; color: #ffffff; font-weight: 800; margin-bottom: 16px; margin-top: 0; background: linear-gradient(90deg, #60a5fa, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text { font-size: 16px; color: #d1d5db; line-height: 1.6; margin-bottom: 30px; }
        .btn { display: inline-block; padding: 14px 32px; background: linear-gradient(90deg, #2563eb, #7c3aed); color: #ffffff; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3); }
        .btn:hover { opacity: 0.9; }
        .footer { margin-top: 40px; color: #6b7280; font-size: 12px; border-top: 1px solid #1f2937; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="icon">🚀</div>
          <h1 class="title">We've Received Your Inquiry</h1>
          <div class="text">
            Hi <strong>${data.name}</strong>,<br><br>
            Thank you for reaching out to WebX AI! We're excited to hear about your interest in <strong>${data.projectType}</strong>.<br><br>
            Our team is currently reviewing your project details. We'll get back to you shortly to schedule a consultation and discuss how we can build something extraordinary together.
          </div>
          
          <div style="margin-bottom: 30px;">
            <p style="color: #9ca3af; font-size: 14px;">Need to share more files or details right away?</p>
            <a href="mailto:webxdev.ai@gmail.com?subject=Re: Inquiry from ${data.name}" class="btn">Email Us Directly</a>
          </div>

          <div class="footer">
            &copy; ${new Date().getFullYear()} WebX AI. All rights reserved.<br>
            Transforming ideas into digital reality.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Payload for Admin
  const adminPayload = {
    html: adminHtml, // Pass both just in case backend supports one or other
    name: "Webx AI Form",
    subject: `New Lead: ${data.name} - ${data.projectType}`,
    to: "webxdev.ai@gmail.com"
  };

  // Payload for User
  const userPayload = {
    html: userHtml,
    name: "WebX AI Team",
    subject: `We've received your project inquiry! 🚀`,
    to: data.email
  };

  try {
    const endpoint = "https://send-mail-redirect-boostmysites.vercel.app/send-email";

    // 1. Send to Admin
    const adminRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminPayload),
    });

    if (!adminRes.ok) {
        console.error("Admin email failed");
    }

    // 2. Send to User (Thank You)
    // We don't block the UI if this fails, but we try to send it.
    if (data.email) {
        await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userPayload),
        }).catch(err => console.error("User email failed", err));
    }

    return true; // We return true if admin email at least *tried* or if likely successful
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};
