import HeroSection from "./components/HeroSection";
import QuotesSection from "./components/QuotesSection";
import PartnersCarousel from "./components/PartnersCarousel";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <QuotesSection />
      <PartnersCarousel />
      <MainSection />
    </div>
  );
}

export default App;
