export const sendEmail = async (data: any) => {
  const bodyContent = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.countryCode || ''} ${data.phone || ''}
Project Type: ${data.projectType}
Budget: ${data.budget || 'N/A'}
Timeline: ${data.timeline || 'N/A'}
Company: ${data.company || 'N/A'}
Details: ${data.details}
  `.trim();

  const payload = {
    body: bodyContent,
    name: "Webx AI",
    subject: `New Project Inquiry: ${data.name}`,
    to: "webxdev.ai@gmail.com"
  };

  try {
    const response = await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};
