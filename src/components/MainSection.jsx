import "../styles/MainSection.css";

import video from "../assets/video.mp4";
import missao from "../assets/missao.jpg";
import visao from "../assets/visao.jpg";

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

      {/* Vídeo */}
      <div className="video-section">
        <video controls className="video-element">
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

      {/* Missão e Visão */}
      <div className="mission-vision-container">
        <div className="mission-vision">
          <img src={missao} alt="Missão" className="mission-image" />
          <div className="mission-content">
            <h3>MISSÃO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sequi
              dolor vel assumenda aperiam hic quia facere.
            </p>
          </div>
        </div>

        <div className="mission-vision">
          <img src={visao} alt="Visão" className="mission-image" />
          <div className="mission-content">
            <h3>VISÃO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sequi
              dolor vel assumenda aperiam hic quia facere.
            </p>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="values-section">
        <h2>VALORES</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
        <div className="values-cards">
          <div className="value-card"></div>
          <div className="value-card"></div>
          <div className="value-card"></div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
