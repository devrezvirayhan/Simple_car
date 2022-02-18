import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, description } = expert;
    return (

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card" >
            <img className='img-fluid img-thumbnail' src={img} alt="" />
                <div className="card-body">
                    <h3 className="card-title text-danger">{name}</h3>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default Expert;