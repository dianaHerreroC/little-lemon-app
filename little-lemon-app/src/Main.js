import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking';
import { submitAPI } from './myApi';

function Main(){
    const navigate = useNavigate();
    const submitForm = (formData)=>{
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
    }
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage submitForm={submitForm}/>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking/> }></Route>
            </Routes>
        </main>
    );
};
export default Main;