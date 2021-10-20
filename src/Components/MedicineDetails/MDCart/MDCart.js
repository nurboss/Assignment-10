import React from 'react';
import './MDCart.css'

const MDCart = (posps) => {
    const {name, type, generics, brand, taka, img} = posps.data
    return (
        <div className="single-cart">
            <div className="cartimgbox">
                <img src={img} alt="" />
            </div>
            <div className="single-text-box">
                <h1 className="fw-bold">{name}</h1>
                <p>{type}</p>
                <h5 className="fw-normal">Generics Name: {generics}</h5>
                <h5 className="fw-normal">Company Name: {brand}</h5>
                <h1 className="fw-bold">{taka} Taka.</h1>
            </div>
        </div>
    );
};

export default MDCart;