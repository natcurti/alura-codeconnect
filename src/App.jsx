import InputSearch from "./components/InputSearch";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Filter from "./components/Filter";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="container">
      <Sidebar />
      <div>
        <InputSearch />
        <Filter />
        <ul className="cards-list">
          {data
            ? data.map((item) => (
                <li key={item.id}>
                  <Card
                    id={item.id}
                    imageUrl={item.imagem_capa}
                    title={item.titulo}
                    resume={item.resumo}
                    code={item.linhas_de_codigo}
                    shared={item.compartilhamentos}
                    comments={item.comentarios}
                    user={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
