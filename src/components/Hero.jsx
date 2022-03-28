import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Hero.css";

// Byta ut bilderna? Länka dom till faktiska produkterna?

function Hero() {
  return (
    <div className="hero-box">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mjau.se/media/2358/mjau-kattlada-rumsren.jpg?preset=card-images"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Heroprodukt 1</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.lansstyrelsen.se/images/18.52ea1660172a20ba65c299a/1592199354812/Daffy-i-tr%C3%A4dg%C3%A5rden-K-Alvinge.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Heroprodukt 2</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static-cdn.sr.se/images/411/569c5677-fdfc-47ab-8c20-5b5879c7a641.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Heroprodukt 3</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
