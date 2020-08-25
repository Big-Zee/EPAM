import * as React from "react";

import SearchBox from "../SearchBox/SearchBox";

import AddMovieButton from "../AddMovieButton/AddMovieButton";

import "../../../styles/Header.css";

export default function CreateHeader() {
  return (
    <>
      <div className="header"></div>
        <div className="headerComponents">          
        <h1>Find your movie</h1>
          <AddMovieButton />
          <SearchBox />             
      </div>
    </>
  );
}
