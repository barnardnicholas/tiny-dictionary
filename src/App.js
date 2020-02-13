import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import openbook from "./assets/pictures/openbook.jpg";

function App() {
  return (
    <div className="App">
      <div className="bookgrid">
        <img src={openbook} alt="openbook" className="openbook" />
      </div>
      <div className="textgrid">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
