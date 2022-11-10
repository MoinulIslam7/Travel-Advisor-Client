import React from 'react';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Subscribe from './Subscribe/Subscribe';



const Home = () => {
    useTitle('Travel Advisor: Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SpecialOffer></SpecialOffer>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </div>
    );
};

export default Home;