import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const CardData = [
        {
            id: 1,
            name: 'Opening Hours',
            icon: clock,
            description: 'Opening at 9.00am to close at 6.00pm Every Day',
            bgClass: ' bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            icon: marker,
            description: 'Brooklyn, NY 10036, United States',
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: ' bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 '>
            {
                CardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;