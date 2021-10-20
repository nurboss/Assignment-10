import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = (props) => {
    const {name, type, taka, img, id} = props.bata
    return (
        <div className="content col-lg-4 col-md-6 col-md-12 ">
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={img} alt="" />
                    </div>
                    <div className="text">
                        <div className="text-box">
                        <h4 className="fw-bold">{name}</h4>
                        <p>{type}</p>
                        </div>
                        
                    </div>
                </div>
                <div className=" my-3 d-flex justify-content-between"> 
                    <Link to={`/details/${id}`}>
                    <button className="button">Details</button>
                    </Link>                      
                    <h4 className="fw-bold">{taka} Taka.</h4>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCart;