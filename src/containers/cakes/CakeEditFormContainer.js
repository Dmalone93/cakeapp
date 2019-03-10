import React from 'react';
import {Component} from 'react';
import Request from '../../helpers/request.js'
import CakeEditForm from '../../components/cakes/CakeEditForm.js'
import Cake from '../../components/cakes/Cake.js'


class CakeEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleCakeUpdate = this.handleCakeUpdate.bind(this);
  }

  handleCakeUpdate(cake){
    const request = new Request();
    request.put('api/cakes' + this.props.cake.id, cake).then(() => {
      console.log(cake);
      window.location = '/cakes/' + this.props.cake.id
    })
  }

  render(){
    return (
      <CakeEditForm cake={this.props.cake} handleCakeUpdate={this.handleCakeUpdate} />
    )
  }
}




export default CakeEditFormContainer;
