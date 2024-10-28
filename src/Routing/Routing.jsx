import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from '../layout/Header';
import Home from '../components/Home';
import Footer from '../layout/Footer';
import ContactUs from '../components/ContactUs';
import About from '../components/About';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Booking from '../components/Booking';
import PageNotFound from '../components/PageNotFound';
import ShowBooking from '../components/ShowBooking';
import Details from '../components/Details';
import Update from '../components/Update';
// import Register from '../components/Register';



const Routing = () => {
    return (
        <div>

            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<ContactUs/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    {/* <Route path='/register' element={<Register/>}></Route> */}
                    <Route path='/registration' element={<Registration/>}></Route>
                    <Route path='/booking' element={<Booking/>}></Route>
                    <Route path='/showbooking' element={<ShowBooking/>}></Route>
                    {/* <Route path='/details/${item.id}' element={<ShowBooking/>}></Route> */}
                    <Route path='/showbooking/details/:itemId' element={<Details/>}></Route>
                    <Route path='/showbooking/edit/:productId' element={<Update/>}></Route>



                    <Route path='*' element={<PageNotFound/>}></Route>

                </Routes>
                <Footer />
            </Router>

        </div>
    )
}

export default Routing
