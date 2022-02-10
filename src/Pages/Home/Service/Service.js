import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description,img} = service;
    return (
        <div className='service'>
            <img className='service_car' src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price} Cr.</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;