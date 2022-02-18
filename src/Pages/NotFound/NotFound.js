import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Img/Img/page_not_found.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="container">
            <img className='img-fluid imt-thumbnail' src={notFound} alt="" />
            <button className='btn btn-danger mt-2'>
            <Link style={{color:'white', textDecoration:'none'}} to="/">Go Bakc</Link>
            </button>
            </div>
        </div>
    );
};

export default NotFound;