import * as React from "react";

import "../../../styles/MovieDetailsModal.css";

import logo from "../../../images/DefaultImage.jpg";

const ShowMovieDetails = (props: { handleClose: any; movieDetails: any }) => {
  function handleCloseModal() {}

  return (
    <>
      <div className="popup-box-movie-details">
        <div className="box-movie-details">
          <span className="close-icon" onClick={handleCloseModal}>
            x
          </span>
        </div>
        <h3 className="movieTitle">{props.movieDetails.title}</h3>
        <h4 className="movieDescription">{props.movieDetails.description}</h4>
        <h4 className="movieLongDescription">{props.movieDetails.longDescription}</h4>
        <h3 className="movieRating">{props.movieDetails.rating}</h3>
        <h3 className="movieDetailsYear">{props.movieDetails.year}</h3>
        <h3 className="movieDetailsTime">{props.movieDetails.time} min</h3>
        <img
          className="movieDetails"
          src={props.movieDetails.imageSource || logo}
          width="50"
          height="30"
        />
      </div>
    </>
  );
};

export default ShowMovieDetails;
