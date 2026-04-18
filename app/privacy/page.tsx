import React from "react";

export const metadata = {
  title: "Privacy Policy | WebX AI",
  description: "Privacy Policy for WebX AI",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark text-white pt-32 pb-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-sm text-[#666] mb-12">Last Updated: October 2023</p>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email address, phone number, postal address, profile picture, payment method, and other information you choose to provide.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">2. Use of Information</h2>
          <p className="mb-4">
            We may use the information we collect about you to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#888]">
            <li>Provide, maintain, and improve our services;</li>
            <li>Perform internal operations, including to troubleshoot software bugs and operational problems;</li>
            <li>Send you communications we think will be of interest to you;</li>
            <li>Personalize and improve the services.</li>
          </ul>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">3. Sharing of Information</h2>
          <p className="mb-4">
            We do not share your personal information with third parties except as described in this policy, such as with your consent, to comply with laws, or to protect our rights.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">4. Security</h2>
          <p className="mb-4">
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@webx.ai.
          </p>
        </section>
      </div>
    </div>
  );
}
