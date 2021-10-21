import React, { useEffect, useState } from 'react';
import './Medicine.css'
import MedicineCart from './MedicineCart/MedicineCart';

const Medicine = () => {
    const [ medicines, setMedicine ] = useState([]);
    useEffect(() => {
        fetch('./medicines.json')
        .then(result => result.json())
        .then(medicine => setMedicine(medicine))
    },[])
    return (
        <div className="container mt-5 pb-5">
            <div className="row">
            {
                medicines.map(data => <MedicineCart 
                    key={data.id}
                    medc={data}
                    ></MedicineCart> )
            }
            </div>
        </div>
    );
};

export default Medicine;