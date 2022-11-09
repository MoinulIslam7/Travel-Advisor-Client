import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import SpecialOffer from './SpecialOffer/SpecialOffer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SpecialOffer></SpecialOffer>
            <Footer></Footer>

        </div>
    );
};

export default Home;