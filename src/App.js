import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Users from './Users';
import Things from './Things';
import Nav from './Nav';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
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
    // console.log('props', this.props.children);
    const users = this.state.users;
    const things = this.state.things;
    const favorites = this.state.favorites;
    // console.log('favs ', favorites);

    return (
      <Router>
        <div>
          <h3>Acme Favorites</h3>
          <Route component={Nav} />
          <Route
            path="/users/:id?"
            render={() => (
              <Users users={users} things={things} favorites={favorites} />
            )}
          />
          <Route
            path="/things/:id?"
            render={() => (
              <Things things={things} favorites={favorites} users={users} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
