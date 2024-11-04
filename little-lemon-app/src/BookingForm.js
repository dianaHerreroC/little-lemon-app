import { useState } from "react";
import './BookingForm.css'

export const validateTime=(time)=>{
    return Boolean(time);
}
export const validateOccasion=(occasion)=>{
    return Boolean(occasion);
}

function BookingForm(props){
    const [date, setDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // Convert to "YYYY-MM-DD"
    });
    const [time, setTime]=useState("");
    const [guests, setGuests]=useState("1");
    const [occasion, setOccasion]=useState("");

    const handleSubmit= (e) =>{
        e.preventDefault();
        props.submitForm(e);
    };

    const [timeError, setTimeError] = useState(false);
    const [occasionError, setOccasionError] = useState(false);
    const validateForm=()=>{
        return validateTime(time)&&validateOccasion(occasion);
    };

    return(
        <form className="BookingForm" onSubmit={handleSubmit}>
            <header>
                <h1>Reserve a table</h1>
            </header>
            <section className='DateField'>
                <label htmlFor="date">Date </label>
                <input
                    type="date"
                    id="date"
                    name="Date"
                    value={date}
                    onChange={(e)=>{
                        setDate(e.target.value);
                        props.dispatchAT({type:e.target.value});
                    }}
                    min={new Date().toISOString().split("T")[0]}
                ></input>
            </section>
            <section className='TimeField'>
                <label htmlFor="time">Time </label>
                <select
                    id="time"
                    value={time}
                    onChange={(e)=>{
                        setTime(e.target.value);
                        setTimeError(!validateTime(e.target.value));
                    }}
                    aria-invalid={timeError}
                    className={timeError ? "errorField" : "correctField"}
                >
                    <option value="">---Select time---</option>
                    {(props.availableTimes || []).map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                            {timeOption}
                        </option>
                    ))}
                </select>
                {timeError && <span className="errorMessage">Please select a time.</span>}
            </section>
            <section className='GuestsField'>
                <label htmlFor="guests">Number of guests </label>
                <input
                    type="number"
                    id="guests"
                    name="Guests"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)}
                ></input>
            </section>
            <section className='Occasion'>
                <label htmlFor="occasion">Occasion </label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e)=>{
                        setOccasion(e.target.value);
                        setOccasionError(!validateOccasion(e.target.value));
                    }}
                    aria-invalid={occasionError}
                    className={occasionError ? "errorField" : "correctField"}
                >
                    <option value="">---Select occasion---</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Just dinner">Just dinner</option>
                </select>
                {occasionError && <span className="errorMessage">Please select an occasion.</span>}
            </section>
            <button type="submit" disabled={!validateForm()} aria-label="Make a reservation">Make your reservation</button>
        </form>
    );
};
export default BookingForm;