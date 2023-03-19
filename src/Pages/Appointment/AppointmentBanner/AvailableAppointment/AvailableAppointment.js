import { format } from 'date-fns';
import { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import AvailableOption from './AvailableOption';


const AvailableAppointment = ({ selectedDate, AppointmentOptions }) => {
    const [treatment, setTreatment] = useState({});

    return (
        <div className='my-9'>
            <div>
                <p className='text-center text-secondary text-xl
            '>Available Services on {format(selectedDate, 'PPP')}</p>
                <h4 className='text-center text-gray-400 text-lg'>Please select a service.</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 my-6'>
                {
                    AppointmentOptions.map(AppointmentOption => <AvailableOption key={AppointmentOption._id} AppointmentOption={AppointmentOption}
                        setTreatment={setTreatment}
                    ></AvailableOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;