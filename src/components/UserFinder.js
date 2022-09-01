import { Fragment, useState, useEffect, Component } from 'react';
import Users from './Users';

import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Leigh' },
  { id: 'u2', name: 'Tara' },
  { id: 'u3', name: 'Ralph' },
  { id: 'u4', name: 'Franklin' },
];

class UserFinder extends Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm),
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input
            type="search"
            onChange={this.searchChangeHandler.bind(this)}
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
