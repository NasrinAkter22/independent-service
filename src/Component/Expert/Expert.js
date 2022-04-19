import React from 'react';

const Expert = ({expert}) => {
    console.log(expert);
    const {name,img,price}=expert
    return (
        <div className='single-card'>
           <div class="card">
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <img style={{width:'350px'}} src={img} alt="" />
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <h3>Price: ${price}</h3>
   
    <button  class="btn btn-primary">Go somewhere</button>
  </div>
</div>
        </div>
    );
};

export default Expert;