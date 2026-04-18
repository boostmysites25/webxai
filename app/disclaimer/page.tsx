import React from "react";

export const metadata = {
  title: "Disclaimer | WebX AI",
  description: "Legal Disclaimer for WebX AI",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-dark text-white pt-32 pb-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Disclaimer</h1>
        <p className="text-sm text-[#666] mb-12">Last Updated: October 2023</p>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">1. General Information</h2>
          <p className="mb-4">
            All information provided on this website is for general informational purposes only. WebX AI makes no representation or warranty, express or implied. Your use of the site is solely at your own risk.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">2. Technical Advice</h2>
          <p className="mb-4">
            The content on our site does not constitute professional technical, financial, or legal advice. Any reliance you place on such information is strictly at your own risk. We strongly advise consulting with proper professionals before making any decisions based on information found on our platform.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">3. External Links</h2>
          <p className="mb-4">
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with WebX AI. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
        </section>

        <section className="mb-10 block">
          <h2 className="text-2xl font-medium mb-4">4. "As Is" Content</h2>
          <p className="mb-4">
            The information contained on the site is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness or timeliness and without any warranties of any kind whatsoever, express or implied. WebX AI does not warrant that this site and any information or material downloaded from this site, will be uninterrupted, error-free, omission-free or free of viruses or other harmful items.
          </p>
        </section>
      </div>
    </div>
  );
}
