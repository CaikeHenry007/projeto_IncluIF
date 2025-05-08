import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PartnersCarousel.css";

import imagem1 from "../assets/img1.jpg";
import imagem2 from "../assets/img2.jpg";
import imagem3 from "../assets/img3.jpg";
import imagem4 from "../assets/img4.jpg";
import imagem5 from "../assets/img5.jpg";

const partners = [
  { name: "Leandro Ledel", role: "Coordenador Geral", img: imagem1 },
  { name: "Manuela Rocha", role: "Designer Multimídia", img: imagem2 },
  { name: "Rodolfo Oliveira", role: "Coordenador de IoT", img: imagem3 },
  { name: "Caike Henry", role: "Aluno Bolsista", img: imagem4 },
  { name: "Gustavo Gil", role: "Aluno Bolsista", img: imagem5 },
];

const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} custom-arrow ${direction}`}
    style={{ ...style }}
    onClick={onClick}
  >
    {direction === "left" ? "‹" : "›"}
  </div>
);

const PartnersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="partners-carousel">
      <h2>PARCEIROS DESSA JORNADA</h2>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.img} alt={partner.name} />
            <h3>{partner.name}</h3>
            <p>{partner.role}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnersCarousel;
