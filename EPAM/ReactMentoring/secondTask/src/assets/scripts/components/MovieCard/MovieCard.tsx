import * as React from "react";

import "../../../styles/MovieCard.css";

import logo from "../../../images/DefaultImage.jpg";

import ThreeDots from "../3Dots/3Dots";

interface IHover {
  isHovering: boolean;
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
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state: IHover) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
          className="MovieCard"
        >
          <img src={this.props.imageSource || logo} width="100" height="50" />
          {this.state.isHovering && <ThreeDots />}
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
