
import React from "react";
import {useNavigate} from 'react-router-dom';





function ApplicationFormPage(){
    const navigate = useNavigate();
    const goToLastPage=()=>{
        navigate(-1)
    }
    
    return (
        <section>
            <p>formulario de cadastro</p>
            <button onClick={goToLastPage}>voltar</button>

        </section>
    )
}

export default ApplicationFormPage