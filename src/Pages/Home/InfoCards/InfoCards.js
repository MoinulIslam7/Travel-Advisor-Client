import React from 'react';
import clock from "../../../assets/img/clock.svg"
import marker from "../../../assets/img/marker.svg"
import phone from "../../../assets/img/phone.svg"
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData =[
        {
            id: 1,
            name: "Opening Hours",
            description: "Open 9.00am to 5.00pm everyday",
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary '
        },
        {
            id: 2,
            name: "Our Locations",
            description: "Mirpur 2, Dhaka, Bangladesh",
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 1,
            name: "Contact Us",
            description: "+8801626248996",
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary '
        },
    ]
    return (
        <div className='grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-4'>
            {
                cardData.map(card => <InfoCard
                
                key={card.id}
                card = {card}
                >
                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;