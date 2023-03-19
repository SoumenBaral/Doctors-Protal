import React, { useEffect, useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AppointmentBanner/AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [AppointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}

            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                AppointmentOptions={AppointmentOptions}
            ></AvailableAppointment>

        </div>
    );
};

export default Appointment;