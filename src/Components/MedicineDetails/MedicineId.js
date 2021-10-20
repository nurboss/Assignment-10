import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MDCart from './MDCart/MDCart';
import './MedicineId.css'

const MedicineId = () => {
    const [ mdicines, setMdicine ] = useState([]);
    const {medicineId} = useParams();
    
    useEffect(() => {
        fetch('../../medicines.json')
        .then(rsult => rsult.json())
        .then(medicine => setMdicine(medicine))
    },[])
    const find =  mdicines.filter(md => md.id == medicineId )
    console.log(find);
   return (
        <div className="main text-center">
            
            {
                find.map(fn => <MDCart
                key={fn.id}
                data = {fn}
                ></MDCart>)
            }
               
        </div>
    );
};

export default MedicineId;