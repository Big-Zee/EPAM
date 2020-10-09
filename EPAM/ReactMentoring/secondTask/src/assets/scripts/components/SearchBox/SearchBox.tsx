import * as React from "react";

import "../../../styles/SearchBox.css";

import { connect } from "react-redux";
import { getMoviesByTitle, getMoviesByTitleSuccess } from "../../actions/action";

interface IPorps {
  loading: boolean;
  onLoadMoviesByTitleClick: any;
  onSearchMoviesByTitleComplete: any;
  users: any;
  //movies: any;
}

export class SearchBox extends React.Component<IPorps, { titleToSearch: string }> {
  constructor(props: IPorps) {
    super(props);
    this.state = { titleToSearch: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleSearchMoviesByTitleClick = this.handleSearchMoviesByTitleClick.bind(this);
  }

  handleSearchMoviesByTitleClick(title: any) {
    this.props.onLoadMoviesByTitleClick();
    //this.sleep(2500).then(() => {
      //if (this.state.value) {
    /*    var address =
          "http://localhost:4000/movies?search=" +
          this.state.value +
          "&searchBy=title";
        console.log(`Adderss to fetch: ${address}`);
        address = 'https://jsonplaceholder.typicode.com/users';*/
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => this.props.onSearchMoviesByTitleComplete(json))
  }

  handleChange(event: any) {
    this.setState({ titleToSearch: event.target.value });
  }

  handleSubmit(event: any) {
    alert("Movie title was submitted: " + this.state.titleToSearch);
  }

  sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  sleepFor( sleepDuration: number ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

  render() {
    return (
      <>
        <form onSubmit={this.handleSearchMoviesByTitleClick}>
          <input
            className="text"
            type="text"
            value={this.state.titleToSearch}
            onChange={this.handleChange}
            placeholder="What do you want to watch?"
          />
          <button type="submit">Search</button>
        </form>
        {this.props.loading ? <p>loading...</p> : null}
        {!this.props.loading && this.props.users ? (
          <ul>
            {this.props.users.map(
              (user: {
                id: React.ReactText;
                name: React.ReactNode;
                email: React.ReactNode;
              }) => (
                <li key={user.id}>
                  <strong>{user.name}</strong> | {user.email}
                </li>
              )
              )}
          </ul>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state: { users: any; isLoading: any }) => (console.log("Entered map state to props"),{
  users: state.users,
  loading: state.isLoading,
});

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; users?: any }) => void
) => {
  return {
    onLoadMoviesByTitleClick: () => {
      dispatch(getMoviesByTitle());
    },
    onSearchMoviesByTitleComplete: (users: any) => {
      dispatch(getMoviesByTitleSuccess(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
