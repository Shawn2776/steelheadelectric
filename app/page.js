import ContactUsSection from "@/components/ContactUsSection";
import DesktopHero from "@/components/desktop/d_hero";
import OtherHero from "@/components/desktop/d_other_hero";
import Services from "@/components/Services";
import WhyChooseUsSection from "@/components/WhyUs";
import Image from "next/image";

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
