import React from "react";
import Counter from "../Counter/Counter";
import Button from "../UI/Button";

const Cards = (props) => {
  const { titulo, description, genero, img, btnText, btnClassName, precio, consola } =
    props;

  return (
    <div className="card" style={{margin:"5vh", width: "18rem", backgroundColor: "orange" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <h5 className="card-text">{description}</h5>
        <h5 className="card-text">Genero: {genero}</h5>
        <h6 className="card-text">Precio: $ {precio}</h6>
        <h6 className="card-text">Consola: {consola}</h6>
        <Button btnText={btnText} btnClassName={btnClassName} />
        <Counter/>
      </div>
    </div>
  );
};

export default Cards;
