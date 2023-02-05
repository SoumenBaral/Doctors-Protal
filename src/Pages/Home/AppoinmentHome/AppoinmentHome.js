import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const AppointmentHome = () => {
    return (
        <section className='bg-appointment mt-40'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='Doctor' className=" lg:w-1/2 rounded-lg -mt-32 -mb-4 hidden md:block " />
                    <div >
                        <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                        <div className='text-white'>
                            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHome;