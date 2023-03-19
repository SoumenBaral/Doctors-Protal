import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const Name = form.name.value
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            AppointmentsDate: date,
            slot,
            treatment: name,
            patient: Name,
            email,
            phone

        }
        setTreatment(null)
        console.log(booking)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3' >
                        <input type="text" value={date} disabled className='input w-full input-bordered' />
                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots?.map((slot, i) => <option
                                    key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder='Full Name' className='input w-full input-bordered' />
                        <input name='phone' type="text" placeholder='Phone Number' className='input w-full input-bordered' />
                        <input name='email' type="email" placeholder='Email' className='input w-full input-bordered' /><br />
                        <input type="submit" value="SUBMIT" className='w-full input-bordered btn btn-accent
                        ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;