import React from 'react';
import logo from '../../../../assets/images/chair.png'
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero lg:min-h-screen lg:bg-chair">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='hero' />
                <div>
                    <h3 className="md:text-4xl text-2xl  font-bold">Your New Smile Starts Here</h3>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default Banner;