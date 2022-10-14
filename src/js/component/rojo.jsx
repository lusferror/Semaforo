import React, {useEffect,useState} from "react";

const Rojo = (props)=>{
    
        return(
            <div id="rojo" className={props.color} onClick={props.luz} name="rojo">
            </div>
        )
}

export default Rojo;