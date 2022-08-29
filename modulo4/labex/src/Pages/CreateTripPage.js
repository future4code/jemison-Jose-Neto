
import React from "react";
import {useNavigate} from 'react-router-dom';




function CreateTripPage(){

    const navigate = useNavigate();
    const goToLastPage=()=>{
        navigate(-1)
    }

    return (
        <section>
            <p>criar viagem</p>
            <button onClick={goToLastPage}>voltar</button>

        </section>
        )
    }
    

    export default CreateTripPage