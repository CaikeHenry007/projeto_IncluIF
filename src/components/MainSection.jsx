import "../styles/MainSection.css";
import missao from "../assets/missao.jpg";
import visao from "../assets/visao.jpg";
import video from "../assets/video.mp4"

const MainSection = () => {
  return (
    <section className="main-section">
      {/* Cabeçalho */}
      <div className="section-header">
        <h2>
          Saiba quais são nossos <strong>valores fundamentais</strong>, nossa
          história e nossos <strong>objetivos</strong>
        </h2>
        <p>
          A arte deve ser acessível, inspiradora e significativa para todos.
          Nossa história e nossos valores refletem esse compromisso: transformar
          ideias em expressões visuais que conectam, sensibilizam e ecoam
          diferentes olhares e vivências.
        </p>
      </div>

      {/* Vídeo de destaque com bordas arredondadas */}
      <div className="highlight-video">
        <video src={video} controls autoPlay loop muted playsInline />
      </div>

      {/* Frase */}
      <div className="quote">
        <hr />
        <p>“Sem pilares, nenhuma construção se sustenta”</p>
      </div>

      {/* Missão e Visão */}
      <div className="mission-vision-block">
        <div className="block">
          <img src={missao} alt="Missão" />
          <div className="texts">
            <h3>MISSÃO</h3>
            <p>
              Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam
              hic quia facere. Sed impedit asperiores non dolor autem sit illo
              provident quo porro corporis! Et odit illo qui Quis natus et magni
              fugiat! Et rerum autem ut sunt quae qui voluptas animi et alias
              iure. d eveniet odio ut rerum galisum aut molestiae ipsa sit
              cumque nisi.
            </p>
          </div>
        </div>

        <div className="block">
          <img src={visao} alt="Visão" />
          <div className="texts">
            <h3>VISÃO</h3>
            <p>
              Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam
              hic quia facere. Sed impedit asperiores non dolor autem sit illo
              provident quo porro corporis! Et odit illo qui Quis natus et magni
              fugiat! Et rerum autem ut sunt quae qui voluptas animi et alias
              iure. d eveniet odio ut rerum galisum a ut molestiae ipsa sit.
            </p>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="values-section">
        <div className="principal-texts">
          <h2>VALORES</h2>
          <p>
            Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam hic
            quia facere. Sed impedit asperiores non dolor autem sit illo
            provident quo porro corporis! Et odit illo qui Quis natus et magni
            fugiat! Et rerum autem ut sunt quae qui voluptas animi e.
          </p>
        </div>

        <div className="values-cards">
          <div className="value-card">
            <span>1</span>
            <h4>Equidade</h4>
            <p>
              Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam
              hic quia facere. Sed impedit asperiores non dolor.
            </p>
          </div>
          <div className="value-card">
            <span>2</span>
            <h4>Respeito</h4>
            <p>
              Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam
              hic quia facere. Sed impedit asperiores non dolor.
            </p>
          </div>
          <div className="value-card">
            <span>3</span>
            <h4>Diversidade</h4>
            <p>
              Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam
              hic quia facere. Sed impedit asperiores non dolor.
            </p>
          </div>
          <div className="value-card">
            <span>4</span>
            <h4>Empatia</h4>
            <p>
              Lorem ipsum dolor sit amet. Et sequi dolor vel assumenda aperiam
              hic quia facere. Sed impedit asperiores non dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
