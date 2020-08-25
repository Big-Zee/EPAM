import * as React from "react";

import "../../../styles/ResultsFilter.css";

interface ISearchState {
  searchMethod: string;
}

export default class CreateResultsFilter extends React.Component<
  {},
  ISearchState
> {
  constructor(props: any) {
    super(props);
    this.handleClickAll = this.handleClickAll.bind(this);
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

  handleClickAll(event: any) {
    alert("Clicked All");
    event.preventDefault();
  }

  handleClickDocumentary(event: any) {
    alert("Clicked Documentary");
    event.preventDefault();
  }

  handleClickComedyy(event: any) {
    alert("Clicked Comedy");
    event.preventDefault();
  }

  handleClickHorror(event: any) {
    alert("Clicked Horror");
    event.preventDefault();
  }

  handleClickCrime(event: any) {
    alert("Clicked Crime");
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="ResultsFilter">
          <button className="link" onClick={this.handleClickAll}>
            All
          </button>
          <button className="link" onClick={this.handleClickDocumentary}>
            Documentary
          </button>
          <button className="link" onClick={this.handleClickComedyy}>
            Comedy
          </button>
          <button className="link" onClick={this.handleClickHorror}>
            Horror
          </button>
          <button className="link" onClick={this.handleClickCrime}>
            Crime
          </button>
          <p className="linkRight" onClick={this.handleClickCrime}>
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
