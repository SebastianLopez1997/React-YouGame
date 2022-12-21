import React from "react";
import ApiConsume from "../ApiConsume";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import Navegacion from "../Navegacion/Navegacion";

const Main = (props) => {
const {children} = props
  return (
    <main>
      <Navbar />
      
      <Carousel />
      {children}
      <ApiConsume/>
      <h2>Aqui va el footer mas adelante</h2>
    </main>
  );
};

export default Main;
