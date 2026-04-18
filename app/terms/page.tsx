import React from "react";

export const metadata = {
  title: "Terms & Conditions | WebX AI",
  description: "Terms and conditions of use for WebX AI",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-dark text-white pt-32 pb-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Terms & Conditions</h1>
        <p className="text-sm text-[#666] mb-12">Last Updated: October 2023</p>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features and functionality are and will remain the exclusive property of WebX AI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">3. Client Responsibilities</h2>
          <p className="mb-4">
            As a client, you agree to provide accurate, current, and complete information as required for the execution of our services. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall WebX AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </div>
  );
}
