import * as React from "react";

import "../../../styles/MovieCard.css";

import logo from "../../../images/DefaultImage.jpg";

import ThreeDots from "../3Dots/3Dots";

import EditDeletePopup from "../EditDeletePopup/EditDeletePopup";

interface IHover {
  isHovering: boolean;
  showModal: boolean;
}

interface IProps {
  imageSource: string;
  title: string;
  description: string;
  year: string;
}

export default class MovieCard extends React.Component<IProps, IHover> {
  constructor(props: IProps) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.imageClick = this.imageClick.bind(this);
    this.state = {
      isHovering: false,
      showModal: false,
    };
  }

  imageClick() {
    console.log("Clicked! imageClick Inside");    
    this.setState(this.switchOnShowModal);
  }

  handleMouseOver() {
      this.setState(this.switOnisHovering);
  }

  handleMouseLeave() {
    console.log("Handle mouse leave!");
    this.setState(this.switOffchisHovering);
    this.setState(this.switchOffShowModal);
}

  handleMouseOut() {
    
  }

  switOffchisHovering(state: IHover) {
      return {
        isHovering: false,
      }
  }

  switOnisHovering(state: IHover) {
    return {
      isHovering: true,
    }
}

  toggleShowModal(state: IHover) {
    return {
      showModal: !state.showModal,
    };
  }

  switchOffShowModal(state: IHover) {
    return {
      showModal: false,
    }
  }

  switchOnShowModal(state: IHover) {
    return {
      showModal: true,
    }
  }

  toggleHoverState(state: IHover) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    var self = this;
    return (
      <>
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.imageClick}
          className="MovieCard"
        >
          <img src={this.props.imageSource || logo} width="100" height="50" />
          <>
          {this.state.isHovering && <ThreeDots  onClick={self.imageClick}/>}
          </>
          {/*this.state.showModal && <EditDeletePopup />*/}
          <h3>{this.props.title || "Default Title"}</h3>
          <p>
            {this.props.description ||
              "Default description that is long enough to be wrapped inside tail"}
          </p>
          <h4>{this.props.year || "2020"}</h4>
        </div>
      </>
    );
  }
}
