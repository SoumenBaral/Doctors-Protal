import React from 'react';

const InfoCard = ({ card }) => {
    const { icon, description, bgClass, name } = card;
    return (
        <div className={`card md:card-side ${bgClass} shadow-xl text-white px-6`}>
            <figure className='mt-6 md:mt-0'><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;