import { useState, useEffect } from "react";

import CardsList from "./components/card-list.component.jsx";
import SearchBox from "./components/search-box.component.jsx";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      const lowerCasedMonster = monster.name.toLocaleLowerCase();
      return lowerCasedMonster.includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <div className="app-title">
        <h1 className="bigelow-rules-regular">Monster cat's</h1>
      </div>

      <SearchBox
        onSearchHandler={onSearchChange}
        placeholder="search monster robot"
        className="search-box"
      />
      <CardsList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
