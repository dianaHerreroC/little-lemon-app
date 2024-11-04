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
        <BookingForm availableTimes={availableTimes} dispatchAT={dispatchAT} submitForm={props.submitForm}></BookingForm>
    );
};
export default BookingPage;