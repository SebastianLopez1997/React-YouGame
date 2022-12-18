import "./App.css";
import "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Main from "./components/Mian/Main";
import config from "./config.json";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCards = () => {
    setLoading(true);
    const operacion = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: config.cards,
        });
      }, 1500);
    });

    operacion
      .then(
        (resultado) => {
          console.clear();
          setCards(resultado.data);
        },
        (err) => {
          console.log(err + "Error");
        }
      )
      .catch((err) => {
        console.log(err);
        alert("Algo fallo");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCards();
    return () => {
      setCards([]);
    };
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "rgb(249, 141, 0)" }}>
      <Main>
        {loading && <Spinner />}
        <div className="d-flex">
          {!loading && cards.length > 0 ? cards.map(
              (
                {
                  titulo,
                  description,
                  genero,
                  img,
                  btnText,
                  btnClassName,
                  precio,
                },
                index
              ) => (
                <Cards
                  key={index}
                  titulo={titulo}
                  description={description}
                  genero={genero}
                  img={img}
                  precio={precio}
                  btnText={btnText}
                  btnClassName={btnClassName}
                />
              )
            ) : !loading && cards.length < 1 && <h1>Ups fallo la carga</h1>} 
        </div>
      </Main>
    </div>
  );
}

export default App;
