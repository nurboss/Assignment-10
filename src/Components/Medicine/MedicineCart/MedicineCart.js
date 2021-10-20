import React from 'react';
import { Link } from 'react-router-dom';
import './MedicineCart.css'

const MedicineCart = (props) => {
    const {id, name, type, generics, brand, taka, img} = props.medc

    return (
        <div className=" container col-lg-4 col-md-6 col-md-12">
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
                        <p className="fw-bold">Generics: <span className="fw-normal">{generics}</span></p>
                        <p className="fw-bold mt-2">Company: <span className="fw-normal">{brand}</span></p>
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

export default MedicineCart;