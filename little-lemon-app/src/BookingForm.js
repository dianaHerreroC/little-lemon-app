import { useState } from "react";
import './BookingForm.css'

function BookingForm(props){
    const [date, setDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // Convert to "YYYY-MM-DD"
    });
    const [time, setTime]=useState();
    const [guests, setGuests]=useState("1");
    const [occasion, setOccasion]=useState("Birthday");

    const handleSubmit= (e) =>{
        e.preventDefault();
        props.submitForm(e);
    };

    return(
        <form className="BookingForm" onSubmit={handleSubmit}>
            <h1>Reserve a table</h1>
            <div className='DateField'>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="Date"
                    value={date}
                    onChange={(e)=>{
                        setDate(e.target.value);
                        props.dispatchAT({type:e.target.value});
                    }}
                ></input>
            </div>
            <div className='TimeField'>
                <label htmlFor="time">Time</label>
                <select
                    id="time "
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}
                >
                    {(props.availableTimes || []).map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                            {timeOption}
                        </option>
                    ))}
                </select>
            </div>
            <div className='GuestsField'>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    name="Guests"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)}
                ></input>
            </div>
            <div className='Occasion'>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e)=>setOccasion(e.target.value)}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit">Make your reservation</button>
        </form>
    );
};
export default BookingForm;