import React from 'react';
import Cake from './Cake.js';

const DetailedCake = (props) => {
  if (!props.cake){
    return null
  }

  const handleDelete = () => {
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
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleEdit}>Edit</button>
    </div>
    </React.Fragment>
  )
}

export default DetailedCake;
