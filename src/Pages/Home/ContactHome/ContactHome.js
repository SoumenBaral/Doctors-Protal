import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactHome = () => {
    return (
        <div className='bg-appointment flex justify-center mt-36'>
            <div className='lg:w-1/4 p-7 md:p-0'>
                <div className='text-center'>
                    <h4 className='text-xl text-primary font-semibold'>Contact Us</h4>
                    <h3 className='text-3xl text-white'>Stay connected with us</h3>
                </div>
                <form className='my-7'>
                    <input type="email" name="email" className='w-full mb-4 rounded-md h-9' placeholder=' Email Address' id="" />
                    <input type="text" name="email" className='w-full mb-4 rounded-md h-9' placeholder=' Subject' id="" />
                    <textarea name="" id="" cols="43" rows="5" placeholder=' Your Message' className='rounded-md'></textarea>
                    <div className='flex justify-center mt-4'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactHome;