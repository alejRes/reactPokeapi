import React, {useState} from  "react";

const Card = (props) =>{

    return(
        <div>
            <img src={props.data.sprites.other.dream_world.front_default}alt="" /> 
            <p>{props.data.name}</p>
        </div>
    )
}

export default Card
