import React from "react";
import PropTypes, { func } from "prop-types";

const Purple=(props)=>{
        
        return(
            <div id="purple" className={"mt-2 "+props.color+" "+props.estilos} onClick={props.luz}>
            </div>
        )
    }

export default Purple;