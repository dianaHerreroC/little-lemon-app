import { useReducer } from "react";
import BookingForm from "./BookingForm";

export const updateTimes = (state, action) =>{
    return state;
}
export const initializeTimes  = ()=>{
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function BookingPage(){
    const [availableTimes, dispatchAT]=useReducer(updateTimes, [], initializeTimes);
    return(
        <>
            {/*<h1>Booking page</h1>
            <h1>Display title = h1</h1>
            <h2>Sub title = h2</h2>
            <h3>Card title = h3</h3>
            <p>Body = p</p>*/}
            <BookingForm availableTimes={availableTimes} dispatchAT={dispatchAT}></BookingForm>
        </>
    );
};
export default BookingPage;