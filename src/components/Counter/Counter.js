import React, { useState, useEffect } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  useEffect(
    () => {
      //montage  || cuando muere
      console.log("El componente esta listo");
      if (contador > 0) {
        console.log("contador es mayor");
      } else {
        console.log("contador es menor");
      }
      
      if (contador === 3) {alert('Usted esta comprando 3 o mas unidades')}
      
      return () => {
        //Desmontar || cuando muere
        console.log("El componente murio");
      };
    },
    [
      contador
    ]
  );

  return (
    <div>
      <h5>Cantidad {contador}</h5>
      <button style={{ margin: "2vh" }} onClick={sumar}>
        {" "}
        +{" "}
      </button>
      <button style={{ margin: "2vh" }} onClick={restar}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Counter;
