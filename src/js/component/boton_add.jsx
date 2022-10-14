import React from "react";

const BotonAdd = (props) =>{
    return (
        <button type="button" class="btn btn-success w-50 h-50 rounded-circle" style={{fontSize:"2rem"}} onClick={props.add}>{props.nombre}</button>
    )
}

export default BotonAdd;