import { useState } from "react";
import "./styles.css";

const InputSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="input-search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default InputSearch;
