import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ListTripsPage from "./Pages/ListTripsPage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import CreateTripPage from "./Pages/CreateTripPage";
import TripDetailsPage from "./Pages/TripDetailsPage";
import AdminHomePage from "./Pages/AdminHomePage";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage /> } />
                <Route path='/login' element={ <LoginPage /> } />
                <Route path='/listtrips' element={ <ListTripsPage />} />
                <Route path='/appform' element={ <ApplicationFormPage /> } />
                <Route path='/createtrip' element={ <CreateTripPage /> } />
                <Route path='/tripdetails' element={ <TripDetailsPage /> } />
                <Route path='/adminhome' element={ <AdminHomePage /> } />
            </Routes>
        </BrowserRouter>
    )


}

export default Router