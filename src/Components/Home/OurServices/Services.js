import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ServiceCart from './ServiceCart';
import './Service.css'

const Services = () => {
    const [ medicines, setMedicine ] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        fetch('../../medicines.json')
        .then(rsult => rsult.json())
        .then(medicine => setMedicine(medicine.slice(0, 3)))
    },[])
    const handleMedicine = () => {
        history.push('/medicine')
    }
    return (
        <div className="container">
            <h3 className="text-center fw-bold mt-5">Our Servies</h3>
            <div className="row">
            {
                medicines.map(data => <ServiceCart
                bata={data}
                ></ServiceCart>)
            }
            </div>
            <div className="container ms-2 mt-4">
            <button onClick={handleMedicine} className="btnbtn">Explor More Medicine</button>
            </div>
        </div>
    );
};

export default Services;