import * as React from "react";

import "../../../styles/MovieDetailsModal.css";

/*public handleCloseModal () {
    this.setState({ showModal: false });*/

const ShowMovieDetails = (props: { handleClose: any }) => {
  function handleCloseModal() {
      
  }

  return (
    <>
      <div className="popup-box-delete">
        <div className="box-delete">
          <span className="close-icon" onClick={handleCloseModal}>
            x
          </span>
        </div>
        <h3 className="addMovieTitle">
          Are you sure you want to delete this movie?
        </h3>
      </div>
    </>
  );
};

export default ShowMovieDetails;
