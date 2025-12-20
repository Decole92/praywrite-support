import { SupportHeader } from "@/components/support-header"
import { HeroSection } from "@/components/hero-section"
import { FaqSection } from "@/components/faq-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <SupportHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
