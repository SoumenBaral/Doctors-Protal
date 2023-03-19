import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="hero min-h-screen bg-chair">
                <div className="hero-content flex-col gap-14 lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='doctor' />
                    <div className='shadow-lg rounded-lg'>
                        <DayPicker mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}></DayPicker>
                    </div>

                </div>

            </div>

        </header>
    );
};

export default AppointmentBanner;