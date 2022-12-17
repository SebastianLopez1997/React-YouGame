import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import Main from "./components/Mian/Main";

function App() {
  const cards = [
    {
      titulo: "God of war",
      description: "juego del año",
      genero: "aventura",
      img: "https://i.pinimg.com/originals/48/33/a0/4833a01a75f1cb302c12f84c62da0475.png",
      precio: 6000,
      btnText: "Comprar",
    },
    {
      titulo: "Resident evil",
      description: "juego de aventura",
      genero: "terror",
      img: "https://wallpapercave.com/wp/wp8737802.png",
      precio: 5000,
      btnText: "Comprar",
    },
    {
      titulo: "Halo infinite",
      description: "Juego de disparos",
      genero: "accion",
      img: "https://images6.alphacoders.com/102/1023546.jpg",
      precio: 5600,
      btnText: "Agotado",
      btnClassName: "btn btn-danger",
    },
  ];
  return (
    <div className="App" style={{ backgroundColor: "rgb(249, 141, 0)" }}>
      <Main>
        <div>
          <div className="d-flex">
            {cards.map(
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
            )}
          </div>
        </div>
      </Main>
    </div>
  );
}

export default App;
