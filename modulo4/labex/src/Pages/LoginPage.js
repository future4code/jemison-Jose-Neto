
import React from "react";
import {useNavigate} from 'react-router-dom';


function LoginPage(){

    const navigate = useNavigate();
    const goAdminPage=()=>{
        navigate('/admin/trips/list')
    }


    return (
        <section>
            <p>tela de login</p>
            <button onClick={goAdminPage}>admin page</button>
        </section>
    )
}

export default LoginPage