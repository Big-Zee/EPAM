import React from "react";

class CreateH2Header extends React.Component {
    render() {
      return <h2>Class Component - H2</h2>;
    }
  }

  class Greeting extends React.PureComponent {
    render() {
      return <h1>Morning, {this.props.name} - have a great day!</h1>;
    }
  }

  export {CreateH2Header, Greeting};