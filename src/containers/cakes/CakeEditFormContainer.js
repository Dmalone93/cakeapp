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
