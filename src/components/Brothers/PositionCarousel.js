import React from "react";
import "./css/position-carousel.scss";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PositionCarousel = (data) => {
  const [currentPositionTitle, updatePositionTitle] = React.useState("");
  const [currentPositionHolder, updatePositionHolder] = React.useState("");
  const allPositions = data.data;

  const [carousel, setCarousel] = React.useState();
  const slider = React.useRef();

  function updatePosition(current) {
    console.log(current);
    updatePositionTitle(allPositions[current].position_title);
    updatePositionHolder(allPositions[current].position_holder);
    console.log(currentPositionTitle);
  }

  function nextSlide() {
    carousel.slickNext();
  }

  function previousSlide() {
    carousel.slickPrev();
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => updatePosition(current),
  };

  console.log(data);

  return (
    <section class="positions" id="subsection">
      <h2 className="center-align">
        <span>Executive Board</span>
      </h2>

      <div className="position-selectors">
        {allPositions.map((position,index) => (
          <div>
            {index}
          </div>
        ))}
      </div>

      <div class="container">
        <Slider
          asNavFor={carousel}
          ref={(slider) => setCarousel(slider)}
          {...settings}
        >
          {allPositions.map((position) => (
            <div class="person">
              <div class="mini-decorator" id="circle1"></div>
              <div class="mini-decorator" id="circle2"></div>
              <div class="mini-decorator" id="circle3"></div>
              <Img
                fluid={position.image.childImageSharp.fluid}
                alt="TopSection Image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-bottom">
        <button onClick={previousSlide}>
          <svg
            className="left-arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM24 10.5L2 10.5V13.5L24 13.5V10.5Z"
              fill="#999999"
            />
          </svg>
        </button>
        {currentPositionHolder == "" ? (
          <div className="position-text">
            <h3>{allPositions[0].position_title}</h3>
            <p>{allPositions[0].position_holder}</p>
          </div>
        ) : (
          <div className="position-text">
            <h3>{currentPositionTitle}</h3>
            <p>{currentPositionHolder}</p>
          </div>
        )}
        <button onClick={nextSlide}>
          <svg
            className="right-arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM24 10.5L2 10.5V13.5L24 13.5V10.5Z"
              fill="#999999"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PositionCarousel;