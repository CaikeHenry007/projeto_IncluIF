import HeroSection from "./components/HeroSection";
import QuotesSection from "./components/QuotesSection";
import PartnersCarousel from "./components/PartnersCarousel";
import MainSection from "./components/MainSection";
import VLibras from "./components/VLibras";

function App() {
  return (
    <div className="container">
      <VLibras />
      <HeroSection />
      <QuotesSection />
      <PartnersCarousel />
      <MainSection />
    </div>
  );
}

export default App;
