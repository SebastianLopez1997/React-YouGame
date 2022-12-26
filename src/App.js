import "./App.css";
import "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Main from "./components/Mian/Main";
import config from "./config.json";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner/Spinner";
import {
  BrowserRouter as RutaPrincipal,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import FallaCarga from "./components/Falla/FallaCarga";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";

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

  const handleClick = (evnt) => {
    console.log(evnt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se ejecuto el handleSubmit");
  };
  /////
  const [state, setState] = useState("");
  const volcales = ["a", "e", "i", "o", "u"];
  const handleKeyDown = (e) => {
    const { key } = e;
    if (!volcales.includes(key.toLowerCase())) {
      setState(key);
    }
  };
  //////
  return (
    <div className="App" style={{ backgroundColor: "rgb(249, 141, 0)" }}>
      <RutaPrincipal>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="item/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/*" element={<FallaCarga />} />
        </Routes>
      </RutaPrincipal>
      ///
      <div>
        <button onClick={handleClick}>Pruba de eventos</button>
        <form onSubmit={handleSubmit} action="">
          <input value={state} onKeyDown={handleKeyDown} type="text" />
          <button type="submit">Guardar el form</button>
        </form>
      </div>
      ///
      <Main>
        {loading && <Spinner />}
        <div className="d-flex">
          {!loading && cards.length > 0
            ? cards.map(
                (
                  {
                    titulo,
                    description,
                    genero,
                    img,
                    btnText,
                    btnClassName,
                    precio,
                    consola,
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
                    consola={consola}
                    btnText={btnText}
                    btnClassName={btnClassName}
                  />
                )
              )
            : !loading && cards.length < 1 && <h1>Ups fallo la carga</h1>}
        </div>
      </Main>
    </div>
  );
}

export default App;
