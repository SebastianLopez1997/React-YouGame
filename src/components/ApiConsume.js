import axios from "axios";
import React, { useState, useEffect } from "react";

const ApiConsume = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      async function getData() {
        try {
          const {data,status} = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/ditto"
          );
          console.log({status,data});
        } catch (error) {
          console.log(error);
        }
      }
    };

    getData();

    return () => {
      setData([]);
    };
  }, []);

  return <div>Consuminedo apis</div>;
};

export default ApiConsume;
