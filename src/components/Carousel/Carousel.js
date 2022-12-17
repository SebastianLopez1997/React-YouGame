import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.pinimg.com/originals/48/33/a0/4833a01a75f1cb302c12f84c62da0475.png" className="d-block w-100" alt="Juego god of war" />
        </div>
        <div className="carousel-item">
          <img src="https://images6.alphacoders.com/102/1023546.jpg" className="d-block w-100" alt="Juego hallo infinite" />
        </div>
        <div className="carousel-item">
          <img src="https://wallpapercave.com/wp/wp8737802.png" className="d-block w-100" alt="Juego resident evil village" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
