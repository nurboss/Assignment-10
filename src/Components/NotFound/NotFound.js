import React from 'react';
import notFound from '../../images/page-not-found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="main">
            <div >
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;