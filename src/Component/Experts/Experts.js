import React from 'react';
import doctor1 from '../../images/expert/doctor-2.jpg'
import doctor2 from '../../images/expert/doctor-3.jpg'
import doctor3 from '../../images/expert/doctor-4.jpg'
import doctor4 from '../../images/expert/doctor-6.jpg'
import Expert from '../Expert/Expert';
// import '../Services/Services.css'


const Experts = () => {
const experts=[
{id:1,name:'Amir khan', price:500, img:doctor2},
{id:2,name:'Raj khan', price:600, img:doctor3},
{id:3,name:'Nihal khan', price:700, img:doctor4},
{id:4,name:'Akram khan', price:800, img:doctor1},

]

    return (
        <div className='container'>
      <div className='row'>
            <h3 className='text-center text-primary py-4'> Expert Doctors</h3>
          <div className='card-container'>
            {
        experts.map(expert=> <Expert 
          key={expert.id}
          expert={expert}
        ></Expert>) 

            }

          </div>
      </div>

        </div>
    );
};

export default Experts;