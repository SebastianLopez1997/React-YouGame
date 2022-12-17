import React from "react";
import Button from "../UI/Button";

const Cards = (props) => {
  const { titulo, description, genero, img, btnText, btnClassName, precio } =
    props;

  return (
    <div className="card" style={{ width: "18rem", backgroundColor: "orange" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <h5 className="card-text">{description}</h5>
        <h5 className="card-text">Genero: {genero}</h5>
        <h6 className="card-text">Precio: {precio}</h6>
        <Button btnText={btnText} btnClassName={btnClassName} />
      </div>
    </div>
  );
};

export default Cards;
