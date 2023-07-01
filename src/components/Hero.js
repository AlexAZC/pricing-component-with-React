import React from "react";
import Card from "./Card";
import data from "./data";

export default function Hero (){
    const eachCard = data.map(value => {
        return(
            <Card 
            key={value.id}
            class={value.class}
            price={value.price}
            storage={value.storage}
            users={value.users}
            send={value.send}

            />
        )

    })
    return(
        <div>
            <section className="allCards" >
            {eachCard}
            </section>
        </div>
    )

    

}