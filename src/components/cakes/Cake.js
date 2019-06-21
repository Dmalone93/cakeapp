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
