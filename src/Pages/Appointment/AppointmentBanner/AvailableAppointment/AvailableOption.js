import React from 'react';

const AvailableOption = ({ AppointmentOption, setTreatment }) => {
    const { name, slots } = AppointmentOption;
    return (
        <div>
            <div className="card text-center shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl text-center font-semibold text-primary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                    <div className="card-actions justify-center">

                        <label
                            htmlFor="booking-modal" disabled={slots.length === 0} className="btn btn-primary text-white" onClick={() => setTreatment(AppointmentOption)}>Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableOption;