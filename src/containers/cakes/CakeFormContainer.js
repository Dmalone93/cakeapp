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
