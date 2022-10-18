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
                <Route path='/trips/list' element={ <ListTripsPage />} />
                <Route path='/trips/application' element={ <ApplicationFormPage /> } />
                <Route path='/admin/trips/create' element={ <CreateTripPage /> } />
                <Route path='/admin/trips/:id' element={ <TripDetailsPage /> } />
                <Route path='/admin/trips/list' element={ <AdminHomePage /> } />
            </Routes>
        </BrowserRouter>
    )


}

export default Router