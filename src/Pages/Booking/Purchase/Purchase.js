import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {purchaseID}= useParams();
    return (
        <div className='mt-5 py-2'>
            <div>
            <h2>This Is Daynamicess  Purchase ID {purchaseID} </h2>
        </div>
        </div>
    );
};

export default Purchase;