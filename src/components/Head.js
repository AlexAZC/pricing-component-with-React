import React from "react";

export default function Head (){
    return (
        <div className="head">
        <h1>Our Pricing</h1>
        <section className="options" >
        <p>Annually</p>
        <label className="switch" >
            <input type="checkbox" />
            <span className="slider round" ></span>
        </label>
        <p>Monthly</p>
        </section>
        </div>
    )
}