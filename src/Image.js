import React from "react";

export default function Image (props) {
    return(
        <div className='movie-poster'>
            <img src={props.img} alt={props.title}/>
        </div>
    )
}