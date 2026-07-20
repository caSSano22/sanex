import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  Premise,
  SocialProof,
  Features,
  HowItWorks,
  DashboardPreview,
  Roadmap,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Premise />
      <SocialProof />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Roadmap />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
