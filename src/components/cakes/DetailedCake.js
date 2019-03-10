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
