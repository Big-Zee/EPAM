import * as React from "react";

import "../../../styles/SearchBox.css";

import { connect } from "react-redux";
import { getUsers, getUsersSuccess } from "../../actions/action";

interface IPorps {
  loading: boolean;
  onLoadUsersClick: any;
  onLoadUsersComplete: any;
  users: any;
}

export class SearchBox extends React.Component<IPorps, { value: string }> {
  constructor(props: IPorps) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoadUsersClick = this.handleLoadUsersClick.bind(this);
  }

  handleLoadUsersClick(title: any) {
    this.props.onLoadUsersClick();
    //this.sleep(2500).then(() => {
      //if (this.state.value) {
     /*   var address =
          "http://localhost:4000/movies?search=" +
          this.state.value +
          "&searchBy=title";
        console.log(`Adderss to fetch: ${address}`);
        address = 'https://jsonplaceholder.typicode.com/users';*/
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => this.props.onLoadUsersComplete(json)).then(()=> {this.sleepFor(2000);});
          
      //}
    //});
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert("Movie title was submitted: " + this.state.value);
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
        <form onSubmit={this.handleLoadUsersClick}>
          <input
            className="text"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="What do you want to watch?"
          />
          <button type="submit">Search</button>
        </form>
        {this.props.loading ? <p>loading...</p> : null}
        {!this.props.loading && this.props.users /*&& this.props.users >0*/ ? (
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

const mapStateToProps = (state: { users: any; isLoading: any }) => ({
  users: state.users,
  loading: state.isLoading,
});

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; users?: any }) => void
) => {
  return {
    onLoadUsersClick: () => {
      dispatch(getUsers());
    },
    onLoadUsersComplete: (users: any) => {
      dispatch(getUsersSuccess(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
