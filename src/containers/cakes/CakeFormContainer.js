import React from 'react';
import Request from '../../helpers/request.js';
import CakeForm from '../../components/cakes/CakeForm.js';


class CakeFormContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleCakePost = this.handleCakePost.bind(this);
  }

  handleCakePost(cake){
    const request = new Request;
    request.post('/api/cakes', cake).then(() => {
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
