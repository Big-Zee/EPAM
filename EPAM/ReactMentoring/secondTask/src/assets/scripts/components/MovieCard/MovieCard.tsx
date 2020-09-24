import * as React from "react";

import "../../../styles/MovieCard.css";

import logo from "../../../images/DefaultImage.jpg";

import ThreeDots from "../3Dots/3Dots";

import ShowMovieDetails from "../MovieDetailsModal/MovieDetails";

interface IHover {
  isHovering: boolean;
  showModal: boolean;
  showMovieDetails: boolean;
}

interface IProps {
  imageSource: string;
  title: string;
  description: string;
  year: string;
  key: string;
  longDescription: string;
  rating: string;
  time: number;
}

export default class MovieCard extends React.Component<IProps, IHover> {
  constructor(props: IProps) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.toggleShowDetails = this.toggleShowDetails.bind(this);
    this.state = {
      isHovering: false,
      showModal: false,
      showMovieDetails: false,
    };
  }

  handleMouseOver() {
    this.setState(this.switOnisHovering);
  }

  handleMouseLeave() {
    console.log("Handle mouse leave!");
    this.setState(this.switOffchisHovering);
  }

  handleMouseOut() {}

  switOffchisHovering(state: IHover) {
    return {
      isHovering: false,
    };
  }

  switOnisHovering(state: IHover) {
    return {
      isHovering: true,
    };
  }

  toggleShowDetails() {
    console.log("Showing Movie details: " + this.state.showMovieDetails);
    this.setState({ showMovieDetails: !this.state.showMovieDetails });
  }

  switchOnShowDetails(state: IHover) {
    return {
      showMovieDetails: true,
    };
  }

  switchOffshowDetails(state: IHover) {
    return {
      showMovieDetails: false,
    };
  }

  switchOnShowModal(state: IHover) {
    return {
      showModal: true,
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
          onClick={this.toggleShowDetails}
          className="MovieCard"
        >
          <img
            src={this.props.imageSource || logo}
            width="100"
            height="50"
            onClick={this.toggleShowDetails}
          />
          <>
            {this.state.isHovering && (
              <ThreeDots />
            )}
          </>
          {this.state.showMovieDetails && (
            <ShowMovieDetails movieDetails={this.props} />
          )}
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
