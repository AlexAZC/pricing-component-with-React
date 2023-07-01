import React from "react";
import { useState } from "react";


export default function Card(props){

    return(
            <div className="cardbox" >
                <p>{props.class}</p>
                <h2 className="price"><span>$</span>{props.price}</h2>
                <p className="second" >{props.storage}</p>
                <p>{props.users}</p>
                <p>{props.send}</p>
                <button>Learn More</button>
            </div>
    )

}