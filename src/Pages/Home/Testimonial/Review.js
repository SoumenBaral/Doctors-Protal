import React from 'react';

const Review = ({ review }) => {
    const { details, icon, name, country } = review;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">

                    <p>{details}</p>
                    <div className="flex  justify-start items-center gap-3 mt-9">
                        <figure className='border  rounded-full border-primary border-2'>
                            <img src={icon} className='w-16 md:w-[75px]' alt="" />
                        </figure>
                        <div >
                            <h2 className='text-xl'>{name}</h2>
                            <p>{country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;