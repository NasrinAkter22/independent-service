import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container'>
            <div className='row'>
            <h2 className='text-center text-primary py-4'>Our Services</h2>
            <div className='card-container'> 
               {
                  services?.map(service=><Service
                  key={service.key}
                  service={service}
                  
                  ></Service>) 
               }
        
            </div>
        </div>
        </div>
    ); 
};

export default Services;