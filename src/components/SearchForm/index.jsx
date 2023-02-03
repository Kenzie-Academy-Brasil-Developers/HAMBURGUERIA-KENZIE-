import { Button } from "../Button";
import { useState } from "react";

export const SearchForm = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();

    setSearch(searchValue);
    setSearchValue("");
  };
  return (
    <form onSubmit={submit}>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button>Pesquisar</Button>
    </form>
  );
};
