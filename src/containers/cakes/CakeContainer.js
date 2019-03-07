import React from 'react'
import Request from '../../helpers/request.js';

class CakeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {cakes: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/cakes').then((data) => {
      this.setState({cakes: data.cakes})
    })
  }

  render(){
    return ()
    <CakeList cakes = {this.state.cakes} />
  }
}

export default CakeContainer;
