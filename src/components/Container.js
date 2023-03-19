import React from "react"
import FadeInOut from "./FadeInOut.js";
export default function Container(props) {
    
    return (
        <div className="card-container">
                {props.cardElements}
            </div>
    )
}