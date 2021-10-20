import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Services from './OurServices/Services';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;