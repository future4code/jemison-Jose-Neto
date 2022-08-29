
import React from "react";
import {useNavigate} from 'react-router-dom';


function AdminHomePage(){
    const navigate = useNavigate();
    const goToCreateTrip=()=>{
        navigate('/admin/trips/create')
    }
    const goToTripDetails=()=>{
        navigate('/admin/trips/:id')
    }
    const goToLastPage=()=>{
        navigate(-1)
    }

    return (
        <section>
            <p>painel de admin</p>
            <button onClick={goToCreateTrip}>criar viagem</button>
            <button onClick={goToTripDetails}>detalhes viagem</button>
            <button onClick={goToLastPage}>voltar</button>

        </section>
    )
}

export default AdminHomePage