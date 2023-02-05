import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import Service from './service/Service';
import treatment from '../../assets/images/treatment.png'
const Services = () => {
    const CardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: fluoride,
            description: 'Opening at 9.00am to close at 6.00pm Every Day',
            bgClass: ' bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            description: 'distribution of letters,as opposed to using .The point of using Lorem Ipsumis that it.',
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal ',
            icon: teeth,
            bgClass: ' bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-center text-primary font-semibold'>OUR SERVICES</h1>
                <h3 className='text-3xl text-center '>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
                {
                    CardData.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
            <div className='flex justify-center mt-32'>
                <div className='w-[90%]'>
                    <div className="card lg:card-side bg-base-100 ">
                        <figure><img src={treatment} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <div className="card-actions ">
                                <button className="btn btn-primary text-white">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;