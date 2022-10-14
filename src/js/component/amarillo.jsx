import React from "react";

const Amarillo = (props)=>{
        return(
            <div id="amarillo" className={"my-1 "+props.color} onClick={props.luz}>
            </div>
        )
    }


export default Amarillo;