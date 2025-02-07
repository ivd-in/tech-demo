import {
  ReviewSection,
  SectionOne,
} from "@/components/ivd";
import CallSection from "@/components/ivd/call.section";
import CTASection from "@/components/ivd/cta.section";
import FAQSection from "@/components/ivd/faq.section";
import HeroParallex from "@/components/ivd/hero.parallex";
import ProcessSteps from "@/components/ivd/sec.section";
import Services from "@/components/ivd/tec";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <HeroParallex />
      <Services />
      <ProcessSteps />
      <ReviewSection />
      <FAQSection />
      <CallSection />
      <CTASection />
    </div>
  );
}
