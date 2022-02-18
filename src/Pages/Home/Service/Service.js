import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description,id,img} = service;
    return (
        <div className='service pb-2'>
            <img className='service_car' src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price} Crore.</h4>
            <p className='px-4'>{description}</p>
            <Link to={`/purchase/${id}`}>
            <button className='btn btn-success'>Purchase</button></Link>
        </div>
    );
};

export default Service;