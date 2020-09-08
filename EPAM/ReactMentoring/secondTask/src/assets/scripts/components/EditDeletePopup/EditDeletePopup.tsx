import * as React from "react";

import EditPopup from "../EditMovieModal/EditMovieModal";

import DeletePopup from "../DeleteMovieModal/DeleteMovieModal";

import "../../../styles/EditDeleteModal.css";

export default class EditDeletePopup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
      showEditModal: false,
      showDeleteModal: false,
    };
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenEditModal() {
    this.setState({ showModal: true });
    this.setState({ showEditModal: true });
  }

  handleOpenDeleteModal() {
    this.setState({ showModal: true });
    this.setState({ showDeleteModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: !this.modalState });
    this.setState({ showEditModal: false });
    this.setState({ showDeleteModal: false });
  }

  public modalState() {
    const stateRef = this.state;
    return stateRef["showModal"];
  }

  render() {
    return (
      <>
        <div className="editdeletepopup-box">
          <div className="editdeletebox">
            <h3 className="editdeletemodal" onClick={this.handleOpenEditModal}>
              EDIT
            </h3>
            <h3
              className="editdeletemodal"
              onClick={this.handleOpenDeleteModal}
            >
              DELETE
            </h3>
          </div>
        </div>
        {this.state.showModal && this.state.showEditModal && (
          <EditPopup handleClose={this.handleCloseModal}></EditPopup>
        )}
        {this.state.showModal && this.state.showDeleteModal && (
          <DeletePopup handleClose={this.handleCloseModal}></DeletePopup>
        )}
      </>
    );
  }
}
