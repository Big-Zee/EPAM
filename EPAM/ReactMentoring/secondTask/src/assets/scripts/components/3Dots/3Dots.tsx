import * as React from "react";
import { useState } from "react";

import "../../../styles/ThreeDotsStyles.css";

import ThreeDotsImage from "../../../images/3dots.png";

import EditDeletePopup from "../EditDeletePopup/EditDeletePopup";

export default function Generate3DotsOnHover(props: any) {
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
}
