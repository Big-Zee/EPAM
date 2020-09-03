import * as React from "react";

import "../../../styles/ResultsFilter.css";

interface ISearchState {
  searchMethod: string;
}

let genres: { type: string; Id: number }[] = [
  { type: "All", Id: 0 },
  { type: "Documentary", Id: 1 },
  { type: "Comedy", Id: 2 },
  { type: "Horror", Id: 3 },
  { type: "Crime", Id: 4 },
];

export default class CreateResultsFilter extends React.Component<
  {},
  ISearchState
> {
  constructor(props: any) {
    super(props);
    this.handleGenreFilter = this.handleGenreFilter.bind(this);
    this.state = {
      searchMethod: "Release Date",
    };
  }  

  setSearchByName = () => {
    this.setState({ searchMethod: "Name" });
  };
  setSearchByReleaseDate = () => {
    this.setState({ searchMethod: "Release Date" });
  };

  handleGenreFilter(genre: string) {
    if (genre === "All") {
      alert("Clicked All");
    } else if (genre === "Documentary") {
      alert("Clicked Documentary");
    } else if (genre === "Comedy") {
      alert("Clicked Comedy");
    } else if (genre === "Horror") {
      alert("Clicked Horror");
    } else if (genre === "Crime") {
      alert("Clicked Crime");
    }
  }

  handleClickSort() {
    alert("Sort Clicked");
  }

  render() {
    return (
      <>
        <div className="ResultsFilter">
          {genres.map((genre) => (
            <button
              className="link"
              onClick={() => this.handleGenreFilter(genre.type)}
              key={genre.Id}
            >
              {genre.type}
            </button>
          ))}
          <p className="linkRight" onClick={this.handleClickSort}>
            Sort By
          </p>
          <div className="dropdown">
            <button className="dropbtn">{this.state.searchMethod}</button>
            <div className="dropdown-content">
              <a className="sortBy" onClick={this.setSearchByName}>
                By Name
              </a>
              <a className="sortBy" onClick={this.setSearchByReleaseDate}>
                Release Date
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
