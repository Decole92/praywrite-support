import { SupportHeader } from "@/components/support-header";
import { HeroSection } from "@/components/hero-section";
import { FaqSection } from "@/components/faq-section";

import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import FeaturesPage from "@/components/features-section";

export default function SupportPage() {
  return (
    <div className='min-h-screen'>
      <SupportHeader />
      <main>
        <HeroSection />
        <FeaturesPage />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
