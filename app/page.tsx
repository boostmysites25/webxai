import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyWebXAI from "@/components/WhyWebXAI";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyWebXAI />
      <Approach />
      {/* <Timeline/> */}
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
