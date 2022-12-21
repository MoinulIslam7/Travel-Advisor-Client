import React from 'react';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Subscribe from './Subscribe/Subscribe';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {
    useTitle('Travel Advisor: Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SpecialOffer></SpecialOffer>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <InfoCards></InfoCards>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;