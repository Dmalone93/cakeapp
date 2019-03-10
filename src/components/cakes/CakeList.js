import React from 'react';
import Cake from './Cake.js'
import '../../css/CakeList.css'
import Request from '../../helpers/request.js';

const CakeList = (props) => {

  const cakes = props.cakes.map((cake, index) => {
      
    return(
      <div key={index} className="component-item">
      <div className="component">
      <Cake cake={cake} key={index}/>
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
