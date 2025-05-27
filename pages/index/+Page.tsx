import { AboutSection } from "../../components/sections/AboutSection.js";
import { FooterSection } from "../../components/sections/FooterSection.js";
import { HeroSection } from "../../components/sections/HeroSection.js";
import i18n from "../../locales/i18n.js";

export default function Page() {
  i18n.changeLanguage("pt");
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FooterSection />
    </>
  );
}
