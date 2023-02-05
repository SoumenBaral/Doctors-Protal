import React from 'react';
import Services from '../../Services/Sarvices';
import AppointmentHome from '../AppoinmentHome/AppoinmentHome';
import ContactHome from '../ContactHome/ContactHome';
import InfoCards from '../InfoCards/InfoCards';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <ContactHome></ContactHome>
        </div>
    );
};

export default Home;