import React from 'react';

const CakeEditForm = (props) => {
  if(!props.cake){
    return null
  }

  function handleSubmit(event){
    event.preventDefault();
    const cake = {
    "name": event.target.name.value,
    "comment": event.target.comment.value,
    "yumFactor": event.target.yumFactor.value,
    "image": event.target.image.value,
      }
      props.handleCakeUpdate(cake);
    }

    return(
      <div>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Cake Name" name="name"/>
         <input type="text" placeholder="Comment" name="comment"/>
         <input type="text" placeholder="Image URL" name="image"/>
         <select name="yumFactor" placeholder="Yum Factor">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         </select>
         <button type="submit">Save</button>
       </form>
     </div>
    )
}

export default CakeEditForm;
