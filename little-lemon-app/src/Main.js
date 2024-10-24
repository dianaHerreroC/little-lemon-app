import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import BookingPage from './BookingPage'

function Main(){
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
            </Routes>
        </main>
    );
};
export default Main;