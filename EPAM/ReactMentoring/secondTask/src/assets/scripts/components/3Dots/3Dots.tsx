import * as React from "react";

import "../../../styles/ThreeDotsStyles.css";

import ThreeDotsImage from "../../../images/3dots.png";

import EditDeletePopup from "../EditDeletePopup/EditDeletePopup";

interface IHover {
  showModal: boolean;
}

export default class Generate3DotsOnHover extends React.Component<any, IHover> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.imageClick = this.imageClick.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.modalState() });
  }

  imageClick() {
    this.toggleModal();
  }

  public modalState() {
    const stateRef = this.state;
    return stateRef["showModal"];
  }

  render() {
    return (
      <>
        <img
          onClick={this.imageClick}
          className="ThreeDot"
          src={ThreeDotsImage}
        />
        {this.state.showModal && <EditDeletePopup></EditDeletePopup>}
      </>
    );
  }
}

//Changed to class as this was not working with function for some reason!
/*export default function Generate3DotsOnHover(props: any) {
  var [showModal, setModal] = useState(false);

  function imageClick() {
    console.log("3Dots Click");
    showModal = !showModal;
  }

  const ThreeDots = () => (
    <>
      <div onClick={imageClick}><img onClick={imageClick} className="ThreeDot" src={ThreeDotsImage} /></div>
    </>
  );

  return (
    <>
      {<ThreeDots />}
      {showModal && <EditDeletePopup></EditDeletePopup>}
    </>
  );
}*/
