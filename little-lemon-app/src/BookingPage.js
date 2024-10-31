import { useReducer} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from './myApi';

export const updateTimes = (state, date) =>{
    const [year, month, day] = date.type.split("-").map(Number);
    const dateObject = new Date(year, month - 1, day);
    return fetchAPI(dateObject);
}
export const initializeTimes  = ()=>{
    const today = new Date();
    return fetchAPI(today);
}

function BookingPage(props){
    const [availableTimes, dispatchAT]=useReducer(updateTimes, initializeTimes());
    return(
        <>
            {/*<h1>Booking page</h1>
            <h1>Display title = h1</h1>
            <h2>Sub title = h2</h2>
            <h3>Card title = h3</h3>
            <p>Body = p</p>*/}
            <BookingForm availableTimes={availableTimes} dispatchAT={dispatchAT} submitForm={props.submitForm}></BookingForm>
        </>
    );
};
export default BookingPage;