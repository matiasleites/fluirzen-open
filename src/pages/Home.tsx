import back from "../assets/images/back-sky.webp";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div
      className="text-center text-white"
      style={{ backgroundImage: `url(${back})`, minHeight: "250vh" }}
    >
      <HeroSection />
    </div>
  );
}
