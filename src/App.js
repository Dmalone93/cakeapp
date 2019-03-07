import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <Router >
      <React.Fragment>
      <NavBar />
      <Switch>
      <Route exact path = '/cakes' component={CakeContainer}/>
      <Route exact path = '/cakes/new' component={CakeFormContainer}/>
      <Route exact path = '/cakes/:id' render= {(props) => {
        const id = props.match.params.id;
        return <SingleCakeContainer id = {id} />
      }}/>
      </Switch>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
