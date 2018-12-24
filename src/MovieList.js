import React from 'react'
import Movie from './Movie'


export default function MovieList ({movies}){

    const movieElements = movies.map(movie =>
        <li key = {movie.id + movie.uniqueTitle}><Movie movie = {movie}/></li>
    );

    return (
        <ul className='movie-list'>
            {movieElements}
        </ul>
    )

}