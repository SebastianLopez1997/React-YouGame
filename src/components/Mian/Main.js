import React from "react";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";

const Main = (props) => {
const {children} = props
  return (
    <main>
      <Navbar />
      <Carousel />
      {children}
      <h2>Aqui va ek footer mas adelante</h2>
    </main>
  );
};

export default Main;
