import React from "react";

const Boton = (props) =>{
    return (
        <button type="button" class="btn btn-primary w-50 h-50 rounded-circle mb-1" style={{fontSize:"2rem"}} onClick={props.cambio}>CAMBIAR</button>
    )
}

export default Boton;