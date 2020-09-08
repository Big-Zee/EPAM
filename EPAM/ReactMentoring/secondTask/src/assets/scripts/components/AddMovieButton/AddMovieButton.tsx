import * as React from "react";

import '../../../styles/AddMovieButton.css'
import Popup from "../AddMovieModal/AddMovieModal";

export default class AddMovieButton extends React.Component<any, any> {
  constructor (props: any) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);    
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <>
      <button className="addMovieButton" onClick={() => this.handleOpenModal()}>
        + ADD MOVIE
      </button>
      {this.state.showModal && <Popup handleClose={this.handleCloseModal}></Popup>}
    </>
    );
  }
}