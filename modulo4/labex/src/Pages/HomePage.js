
import React from "react";
import {useNavigate} from 'react-router-dom';


function HomePage(){
    const navigate = useNavigate();

    const goToListTrips=()=>{
        navigate('/trips/list')
    }
    const GoToAdminHomePage=()=>{
        navigate('/admin/trips/list')
    }

    return (
        <section>
            <p>pagina inicial</p>
            <button onClick={goToListTrips}>lista</button>
            <button onClick={GoToAdminHomePage}>admin home</button>

        
        </section>
    )
}

export default HomePage