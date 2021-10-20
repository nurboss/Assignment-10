import React from 'react';
import './Aboutus.css'
import img from '../../images/about us.png'

const AboutUs = () => {
    return (
        <div className="container main">
        <div className="row">
        <div className="text col-lg-6 col-md-12 col-sm-12">
            <h1>About US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque vero eius tenetur esse quas molestiae fugit repudiandae similique doloribus dignissimos hic in, minima architecto dolorum, voluptate aperiam, quidem exercitationem? Debitis, hic aperiam eveniet saepe nemo eligendi! Unde placeat dolorum excepturi minima, aut est fuga, harum, tempore saepe odit fugit? </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi, modi voluptatum pariatur iste laborum cumque, labore consequuntur deleniti tempore error officiis quo accusamus. Itaque temporibus consequuntur consectetur non quasi!</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
                <img className="img-fluid" src={img} alt="" />
        </div>
        </div>
    </div>
    );
};

export default AboutUs;