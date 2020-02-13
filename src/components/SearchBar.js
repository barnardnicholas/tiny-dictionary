import React, { Component } from "react";
import DefinitionCard from "./DefinitionCard";
import * as api from "../utils/api";
import books from "../assets/pictures/books.png";
import magnifyingglass from "../assets/pictures/magnifying-glass.png";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    results: [],
    word: "",
    pronunciation: {
      all: ""
    },
    syllables: {
      count: 0,
      list: []
    }
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    api
      .getDefinitions(searchTerm)
      .then(response => {
        if (response.hasOwnProperty("results")) {
          const { results, word, pronunciation, syllables } = response;
          this.setState({
            results: results,
            word: word || "",
            pronunciation: pronunciation || { all: "" },
            syllables: syllables || { count: 0, list: [] }
          });
        }
      })
      .catch(err => {
        console.log("ERROR:", err);
        this.setState({
          results: [],
          word: "",
          pronunciation: { all: "" },
          syllables: { count: 0, list: [] }
        });
      });
  };

  renderResults = () => {
    const { results, word, pronunciation, syllables } = this.state;
    return (
      <div className="resultslist">
        <div className="resultstitle">
          <div>
            <h3>{word}</h3>
          </div>
          <div>{pronunciation.all}</div>
          <div>{syllables.list.join("-")}</div>
        </div>
        <ul>
          {results.map(result => {
            return (
              <li key={result.definition}>
                <DefinitionCard result={result} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { searchTerm, results } = this.state;
    return (
      <div className="textcontainer">
        <div className="searchbar">
          <img src={books} alt="books" height="140px" width="140px" />
          <h1>
            tiny
            <br />
            dictionary
          </h1>
          <p>a small web app by nick barnard</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={this.handleChange}
              className="textinput"
            ></input>
            <br />
            <button>
              <img
                src={magnifyingglass}
                alt="search"
                height="75%"
                width="75%"
              />
            </button>
          </form>
        </div>
        {this.renderResults()}
      </div>
    );
  }
}

export default SearchBar;
