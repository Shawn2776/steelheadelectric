import ContactUsSection from "@/components/ContactUsSection";
import OtherHero from "@/components/desktop/d_other_hero";
import Services from "@/components/Services";
import WhyChooseUsSection from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      {/* <DesktopHero /> */}
      <OtherHero />
      <Services />
      <WhyChooseUsSection />
      <ContactUsSection />
    </div>
  );
}
