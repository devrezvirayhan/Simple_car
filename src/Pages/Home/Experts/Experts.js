import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {


    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('expert.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div id='experts'>
            <div className='container'>
                <h2 className='text-success p-2 '>Our Experts</h2>
                <div className='row'>
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}>
                        </Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;