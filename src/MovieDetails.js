import React from "react";


export default function MovieDetails (props){
    return(
        <div className='cert-runtime-genre'>
        <span className='certificate'> {props.certificate}</span>
        <span className='runtime'> {props.duration} min</span>
        <span>{props.genres}</span>
        <div className='rating'>
            <span className='metascore'> {props.metascore}</span>
            <span> Metascore</span>
        </div>
        </div>
    )
}