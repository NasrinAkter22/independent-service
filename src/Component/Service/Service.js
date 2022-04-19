import React from 'react';
import './Service.css'


const Service = ({service}) => {
    console.log(service);
    const {title,desc,price,img}=service
    return (
        <div className='singel-card'>
           <div class="card">
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <img style={{width:'350px'}} src={img} alt="" />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h3>{price}</h3>
    <p class="card-text">{desc}</p>
    <button  class="btn btn-primary">Go somewhere</button>
  </div>
</div>
        </div>
    );
};

export default Service;