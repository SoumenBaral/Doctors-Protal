import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import p1 from '../../../assets/images/people1.png'
import p2 from '../../../assets/images/people2.png'
import p3 from '../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            country: 'California',
            icon: p1
        },
        {
            id: 2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Rasmika Madana',
            country: 'Bangladesh',
            icon: p2
        },
        {
            id: 3,
            details: 'Alia Bhatt is a British actress of Indian descent who predominantly works in Hindi films. She has received several accolades including four Filmfare Awards.',
            name: 'Alia Bhatt',
            country: 'India',
            icon: p3
        },
    ]


    return (
        <section className='mt-20 '>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="quote" className='w-24 md:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;