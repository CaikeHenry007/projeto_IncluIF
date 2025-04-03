import { useInView } from "react-intersection-observer";
import "../styles/QuotesSection.css";

import imagem1 from "../assets/image1.jpg";
import imagem2 from "../assets/image2.jpg";
import imagem3 from "../assets/image3.jpg";
import imagem4 from "../assets/image4.jpg";

const QuotesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className={`quotes-section ${inView ? "visible" : ""}`}>
      <h2>“O que a memória ama fica eterno”</h2>
      <p>Adélia Prado, poetisa e professora brasileira</p>

      <div className="quotes-gallery">
        <img src={imagem1} alt="Pincéis" />
        <img src={imagem2} alt="Mão esculpindo" />
        <img src={imagem3} alt="Homem segurando cachorro" />
        <img src={imagem4} alt="Homem sorrindo" />
      </div>

      <p className="quote">
        “Eu sozinha ando bem, mas com você ando melhor.”
        <br />
        <span>- Cora Coralina, poetisa brasileira</span>
      </p>
    </section>
  );
};

export default QuotesSection;
