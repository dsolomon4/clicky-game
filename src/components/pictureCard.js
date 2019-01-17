import React from "react";
import "../styles/Game.css"

function Cards (props){
    return(
        <div className="col">
            <div className="image-holder">
                <img alt={props.alt} src={props.src}/>
            </div>
        </div>
    )
}

export default Cards;

// function Cards (props){
//     return(
//         <div className="card">
//         <div className="image-holder">
//         <img alt={props.name} src={props.image}/>
//         </div>
//         </div>
//     )
// }