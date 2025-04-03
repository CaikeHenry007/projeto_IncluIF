import { useInView } from "react-intersection-observer";
import "../styles/HeroSection.css";
import ImagemDestaque from "../assets/image.jpg";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className={`hero-section ${inView ? "visible" : ""}`}>
      <div className="hero-content">
        <h1>NOSSAS ORIGENS</h1>
        <p>Grandes feitos brotam sem esquecermos nossas raízes.</p>
        <img src={ImagemDestaque} alt="Imagem destaque" />
      </div>
    </section>
  );
};

export default HeroSection;
