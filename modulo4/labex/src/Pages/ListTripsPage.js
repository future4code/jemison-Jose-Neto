
import React from "react";
import {useNavigate} from 'react-router-dom';

function ListTripsPage(){
    const navigate = useNavigate();

    const goToAppForm=()=>{
        navigate('/trips/application')
    }
    const goToLastPage=()=>{
        navigate(-1)
    }

    return (
        <section>
            <p>lista de viagens</p>
            <button onClick={goToAppForm}>formulário de cadastro</button>
            <button onClick={goToLastPage}>voltar</button>

        </section>
    )
}



export default ListTripsPage;

