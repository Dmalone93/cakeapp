import React, { Component } from 'react';
import MainContainer from './containers/main/MainContainer.js'
import './css/App.css';

class App extends Component{
  render() {
    return (
      <MainContainer />
    );
  }
}




export default App;

import React from 'react';
import {Link} from 'react-router-dom';
import './css/NavBar.css'

const NavBar = (props) => {

  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/cakes">Cakes</Link>
        </li>
        <li className="navLink">
        <Link to="/cakes/new">Add a Cake</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;

import React from 'react'

import '../../css/Cake.css'

const Cake = (props) => {
  if (!props.cake){
    return null
  }

  const url = "/cakes/" + props.cake.id;
  return(
    <React.Fragment>
    <div className="single-cake-container">
    <div className="cake-image">
    <img src={props.cake.imageUrl} alt="cake-img" />
    </div>
    <div className="cake-info">
    <a className="name" href={url}>{props.cake.name}</a>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Cake;

import React from 'react';

const CakeEditForm = (props) => {
  if(!props.cake){
    return null
  }

  function handleSubmit(event){
    event.preventDefault();
    const cake = {
    "name": event.target.name.value,
    "comment": event.target.comment.value,
    "yumFactor": event.target.yumFactor.value,
    "imageUrl": event.target.image.value,
      }
      props.handleCakeUpdate(cake);
    }

    return(
      <div>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Cake Name" name="name"/>
         <input type="text" placeholder="Comment" name="comment"/>
         <input type="text" placeholder="Image URL" name="image"/>
         <select name="yumFactor" placeholder="Yum Factor">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         </select>
         <button type="submit">Save</button>
       </form>
     </div>
    )
}

export default CakeEditForm;

import React from 'react';

const CakeForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const cake = {
      "name": event.target.name.value,
      "comment": event.target.comment.value,
      "yumFactor": event.target.yumFactor.value,
      "imageUrl": event.target.image.value,
    }
    console.log('cake', cake);
    props.handleCakePost(cake);
    // window.location = '/'
  }

  return(
    <div>
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Cake Name" name="name"/>
       <input type="text" placeholder="Comment" name="comment"/>
       <input type="text" placeholder="Image URL" name="image"/>
       <select name="yumFactor" placeholder="Yum Factor">
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       </select>
       <button type="submit">Save</button>
     </form>
   </div>
  )


}

export default CakeForm;

import React from 'react';
import Cake from './Cake.js'
import '../../css/CakeList.css'

const CakeList = (props) => {

  const cakes = props.cakes.map((cake, index) => {

    return(
      <div key={index} className="component-item">
      <div className="component">
      <Cake cake={cake} key={index} />
      </div>
      </div>
    )
  })
  return (
    <div className="cakes-container">
    {cakes}
    </div>
  )

}


export default CakeList;

import React from 'react';

const DetailedCake = (props) => {
  if (!props.cake){
    return null
  }

  const deleteFunction = () => {
    props.onDelete(props.cake.id);
  }

  const handleEdit = () => {
    window.location = "/cakes/edit/" + props.cake.id
  }

  return(
    <React.Fragment>
    <div className="component">
    <h2>{props.cake.name}</h2>
    <img src={props.cake.imageUrl} alt="cake-img" />
    <p>{props.cake.yumFactor}</p>
    <p>{props.cake.comment}</p>
    <button onClick={deleteFunction}>Delete</button>
    <button onClick={handleEdit}>Edit</button>
    </div>
    </React.Fragment>
  )
}

export default DetailedCake;

import React from 'react'
import CakeList from '../../components/cakes/CakeList.js'

class CakeContainer extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <CakeList cakes = {this.props.cakes} />
    )

  }
}

export default CakeContainer;

import React from 'react';
import {Component} from 'react';
import Request from '../../helpers/request.js'
import CakeEditForm from '../../components/cakes/CakeEditForm.js';
const baseUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/';



class CakeEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleCakeUpdate = this.handleCakeUpdate.bind(this);
  }

  handleCakeUpdate(cake){
    const request = new Request();
    request.put(baseUrl + this.props.cake.id, cake).then(() => {
      window.location = '/cakes/' + this.props.cake.id;
    })
  }

  render(){
    return (
      <CakeEditForm cake={this.props.cake} handleCakeUpdate={this.handleCakeUpdate}/>
    )
  }
}




export default CakeEditFormContainer;

import React from 'react';
import Request from '../../helpers/request.js';
import CakeForm from '../../components/cakes/CakeForm.js';
const baseUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes';


class CakeFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleCakePost = this.handleCakePost.bind(this);
  }

  handleCakePost(cake){
    const request = new Request();
    request.post(baseUrl, cake).then(() => {
      console.log(cake);
      window.location = '/cakes'
    })

  }

  render(){
    return(

      <CakeForm handleCakePost={this.handleCakePost} />
    )
  }
}

export default CakeFormContainer;

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
