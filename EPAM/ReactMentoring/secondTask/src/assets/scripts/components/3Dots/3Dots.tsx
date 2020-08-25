import * as React from "react";

import "../../../styles/ThreeDotsStyles.css";

import ThreeDotsImage from "../../../images/3dots.png";

export default function Generate3DotsOnHover(props: any) {
  const imageClick = () => {
    console.log("Click 3 Dots");
  };
  const ThreeDots = () => (
    <img
      className="ThreeDot"
      src={ThreeDotsImage}
      onClick={() => imageClick()}
    />
  );

  return <>{<ThreeDots />}</>;
}
