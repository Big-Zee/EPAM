import * as React from "react";

import '../../../styles/SearchBox.css';

export default class SearchBox extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert("Movie title was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
          <input className="text" type="text" value={this.state.value} onChange={this.handleChange} placeholder="What do you want to watch?"/><button type="submit">Search</button>
      </form>
    );
  }
}
