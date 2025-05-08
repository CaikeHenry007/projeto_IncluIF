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
      <div className="quote-title">
        <div className="line"></div>
        <div>
          <h2>“O que a memória ama fica eterno”</h2>
          <p className="author">Adélia Prado, poetisa e professora brasileira</p>
        </div>
      </div>

      <div className="quotes-gallery">
        <img src={imagem1} alt="Pincéis" />
        <img src={imagem2} alt="Mão esculpindo" />
        <img src={imagem3} alt="Homem segurando cachorro" />
        <img src={imagem4} alt="Homem sorrindo" />
      </div>

      <div className="quote-content">
        <blockquote className="main-quote">
         “Eu sozinha ando bem, mas com você ando melhor.”
          <span className="quote-author">Cora Coralina, poetisa brasileira</span>
        </blockquote>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam hic quia facere. Sed
            impedit asperiores non dolor autem sit illo provident quo porro corporis! Et odit illo
            qui Quis natus et magni fugiat! Et rerum autem ut sunt quae qui voluptas animi et alias
            iure.
          </p>
          <p>
            Id eveniet odio ut rerum galisum aut molestiae ipsa sit cumque nisi. Aut harum corrupti
            eos maxime ipsum vel ducimus galisum. Id dolore totam At voluptatem nostrum non velit
            vitae est harum labore. Cum sapiente cumque quo dolores dolorum et magnam voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
