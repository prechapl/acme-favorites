import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Users from './Users';
import Things from './Things';
import Nav from './Nav';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      things: [],
      favorites: []
    };
  }

  componentDidMount() {
    axios
      .all([axios.get('/users'), axios.get('/things'), axios.get('/favorites')])
      .then(
        axios.spread((userRes, thingRes, favRes) => {
          this.setState({
            users: userRes.data,
            things: thingRes.data,
            favorites: favRes.data
          });
        })
      )
      .catch();
  }

  render() {
    const users = this.state.users;
    const things = this.state.things;
    const favorites = this.state.favorites;
    console.log('favs ', favorites);

    return (
      <Router>
        <div>
          <h3>Acme Favorites</h3>
          <Route component={Nav} />
          <Route
            path="/users/:id?"
            render={match => (
              <Users
                users={users}
                things={things}
                favorites={favorites}
                match={match}
              />
            )}
          />
          <Route
            path="/things/:id?"
            render={() => <Things things={things} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
