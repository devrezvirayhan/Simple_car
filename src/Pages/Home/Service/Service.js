import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description,img} = service;
    return (
        <div className='service'>
            <img className='service_car' src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price} Crore.</h4>
            <p className='px-4'>{description}</p>
        </div>
    );
};

export default Service;