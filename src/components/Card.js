import React from "react"

export default function Card(props) {
    return (
        <div 
            className="card-face"
            onClick={(event) => props.handleClick(props.value)}
        >
            <img className="card-image" src={props.img}/>
        </div>
    )
}