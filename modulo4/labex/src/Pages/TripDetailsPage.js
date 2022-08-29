
import React from "react";
import {useNavigate} from 'react-router-dom';





function TripDetailsPage(){
    const navigate = useNavigate();
    const goToLastPage=()=>{
    navigate(-1)
    }

    return (
        <section>
            <p>detalhes da viagem</p>
            <button onClick={goToLastPage}>voltar</button>
        </section>
        )
    }
    

    export default TripDetailsPage