import * as React from "react";

import '../../../styles/AddMovieButton.css'

export default class AddMovieButton extends React.Component {
  handleClick() {
    alert('AddMovie clicked!');
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button className="addMovieButton" onClick={() => this.handleClick()}>
        + ADD MOVIE
      </button>
    );
  }
}