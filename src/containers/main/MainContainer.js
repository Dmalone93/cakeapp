import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../../NavBar.js';
import CakeContainer from '../../containers/cakes/CakeContainer.js';
import CakeFormContainer from '../../containers/cakes/CakeFormContainer.js';
import Request from '../../helpers/request.js';
import DetailedCake from '../../components/cakes/DetailedCake.js';
import CakeEditFormContainer from '../../containers/cakes/CakeEditFormContainer.js';
const baseUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes';

class MainContainer extends Component {



  constructor(props){
    super(props);
    this.state = {
      cakes: []
    }
    this.handleCakeSelect = this.handleCakeSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get(baseUrl).then((data) => {
      this.setState({cakes: data})
      console.log('cakes', data);
    })
  }

  handleDelete(id){
    let request = new Request();
    request.delete(baseUrl + '/' + id).then((data) => {
      console.log(data)
      window.location = '/cakes'
    })
  }

  handleCakeSelect(id){
  const cake = this.state.cakes.find((cake) => {
    return cake.id === id;
  });
  return cake
  }



  render() {
    return (
      <div className="main-app">
      <Router >
      <React.Fragment>
      <NavBar/>
      <hr/>
      <Switch>

//GET ALL CAKES
      <Route exact path = '/cakes' render={() => {
        return <CakeContainer cakes={this.state.cakes}/>
      }}/>

//POST A CAKE
      <Route exact path = '/cakes/new' component={CakeFormContainer}/>

//GET ONE CAKE
      <Route exact path = '/cakes/:id' render={(props) => {
        const cake = this.handleCakeSelect(props.match.params.id);
        return <DetailedCake cake ={cake} onDelete={this.handleDelete}/>
      }}/>

//EDIT ONE CAKE
      <Route exact path = '/cakes/edit/:id' render={(props) => {
        const cake = this.handleCakeSelect(props.match.params.id);
        return <CakeEditFormContainer cake={cake}/>

      }}/>

      </Switch>
      </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default MainContainer;
