import React from 'react'
import Request from '../../helpers/request.js';
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
