import { useInView } from "react-intersection-observer";
import "../styles/HeroSection.css";
import ImagemDestaque from "../assets/image.jpg";
// import SetaIcone from "../assets/seta.png"; // ícone de seta

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className={`hero-section ${inView ? "visible" : ""}`}>
      <h1 className="hero-title">NOSSAS ORIGENS</h1>

      <div className="hero-image-wrapper">
        <img src={ImagemDestaque} alt="Imagem destaque" className="imagemDestaque" />
        <div className="seta-icon">
          {/* <img src={SetaIcone} alt="Seta para baixo" /> */}
        </div>
      </div>

      <div className="hero-text-container">
        <div className="hero-highlight">
          Grandes feitos brotam<br />sem esquecermos<br />nossas raízes.
        </div>
        <div className="hero-description">
          <p>
          Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda 
          aperiam hic quia facere. Sed impedit asperiores non dolor 
          autem sit illo provident quo porro corporis! Et odit illo 
          qui Quis natus et magni fugiat! Et rerum autem ut sunt quae 
          qui voluptas animi et alias iure.
          </p>
          <p>
            Id eveniet odio ut rerum galisum aut molestiae ipsa sit 
            cumque nisi. Aut harum corrupti eos maxime ipsum vel 
            ducimus galisum. Id dolore totam At voluptatem nostrum 
            non velit vitae est harum labore. Cum sapiente cumque quo 
            dolores dolorum et magnam voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
