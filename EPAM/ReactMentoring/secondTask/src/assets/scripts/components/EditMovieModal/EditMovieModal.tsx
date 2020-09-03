import * as React from "react";

import "../../../styles/AddMovieModal.css";

const EditMovieModal = (props: { handleClose: any }) => {
  const initialFormData = Object.freeze({
    movieTitle: "SampleMovieTitle",
    releaseDate: "2020/08/20",
    movieUrl: "SampleUrl",
    movieGenre: "SampleGenre",
    movieOverView: "SampleOverView",
    movieRunTime: "SampleRunTime",
  });

  var [formData, updateFormData] = React.useState(initialFormData);

  //This should be placed to be common for all Components
  //Qeustion where to put it ? Are there any best practices for that ?

  let genres: { type: string; Id: number }[] = [
    { type: "All", Id: 0 },
    { type: "Documentary", Id: 1 },
    { type: "Comedy", Id: 2 },
    { type: "Horror", Id: 3 },
    { type: "Crime", Id: 4 },
  ];

  const handleChange = (e: any) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    showContent();
  };

  function onReset(e: any) {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    formData = initialFormData;
    showContent();
  }

  function onSubmit() {
    showContent();
    props.handleClose();
    console.log("Closing Modal after submit");
  }

  function showContent() {
    console.log(`Got info about Movie : - Title: ${formData.movieTitle},
    - Release Date: ${formData.releaseDate},
    - Movie Url: ${formData.movieUrl},
    - Movie Genre: ${formData.movieGenre},
    - Movie Overview: ${formData.movieOverView},
    - Movie Runtime: ${formData.movieRunTime}
`);
  }

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
        </div>
        <h1 className="addMovie">EDIT MOVIE</h1>
        <h3 className="addMovieId">MOVIE ID</h3>
        <input disabled={true} className="disabled" placeholder="Sample Txt Blocked"></input>
        <h3 className="addMovieTitle">TITLE</h3>
        <input
          className="textAddMovieTitle"
          name="movieTitle"
          onChange={handleChange}
        />
        <h3 className="addMovieReleaseDate">RELEASE DATE</h3>
        <input
          className="datePicker"
          type="date"
          name="releaseDate"
          onChange={handleChange}
        ></input>
        <h3 className="addMovieUrl">MOVIE URL</h3>
        <input
          className="addMovieUrl"
          name="movieUrl"
          placeholder="Movie URL here"
          onChange={handleChange}
        />
        <h3 className="addMovieGenre">GENRE</h3>
        <select
          className="addMovieSelectGenre"
          placeholder="Select Genre"
          name="movieGenre"
          onChange={handleChange}
        >
          {genres.map((genre) => (
            <option key={genre.Id}>{genre.type}</option>
          ))}
          ;
        </select>
        <h3 className="addMovieOverview">OVERVIEW</h3>
        <input
          className="addMovieOverview"
          name="movieOverView"
          placeholder="Overview here"
          onChange={handleChange}
        />
        <h3 className="addMovieRuntime">RUNTIME</h3>
        <input
          className="addMovieRuntime"
          name="movieRunTime"
          placeholder="Runtime here"
          onChange={handleChange}
        />
        <a className="ResetButton" onClick={onReset}>
          Reset
        </a>
        <a className="SubmitButton" onClick={onSubmit}>
          SUBMIT
        </a>
      </div>
    </>
  );
};

export default EditMovieModal;
