import { useInView } from "react-intersection-observer";
import "../styles/QuotesSection.css";

import pinceis from "../assets/pinceis.png";
import mao from "../assets/mao.png";
import cachorro from "../assets/cachorro.png";
import idoso from "../assets/idoso.png";

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
        <img src={pinceis} alt="Pincéis" />
        <img src={mao} alt="Mão esculpindo" />
        <img src={cachorro} alt="Homem segurando cachorro" />
        <img src={idoso} alt="Homem idoso sorrindo" />
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
