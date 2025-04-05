import back from "../assets/images/back-sky.webp";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";

export default function Home() {
  return (
    <div
      className="text-center text-white"
      style={{
        backgroundImage: `url(${back})`,
        minHeight: "250vh",
        width: "100vw",
        minWidth: "100vw",
      }}
    >
      <HeroSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
