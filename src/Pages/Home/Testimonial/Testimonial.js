import React from 'react';
import quote from '../../../assets/icons/quote.svg'
const Testimonial = () => {
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
            <div>

            </div>
        </section>
    );
};

export default Testimonial;