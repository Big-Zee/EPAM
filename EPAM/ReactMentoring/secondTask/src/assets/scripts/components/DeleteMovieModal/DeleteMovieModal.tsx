import * as React from "react";

import "../../../styles/AddMovieModal.css";

const DeleteMoviePopup = (props: { handleClose: any }) => {

  function onSubmit() {
    console.log("Confirm Delete Movie");
  }

  return (
    <>
      <div className="popup-box-delete">
        <div className="box-delete">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
        </div>
        <h1 className="addMovie">DELETE MOVIE</h1>
        <h3 className="addMovieTitle">Are you sure you want to delete this movie?</h3>
        <a className="SubmitButton-delete" onClick={onSubmit}>
          CONFIRM
        </a>
      </div>
    </>
  );
};

export default DeleteMoviePopup;
