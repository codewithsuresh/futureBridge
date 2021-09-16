import React from 'react'
import{ MovieData } from "../MovieData"
import Movie from './Movie'

function MoviesContainer() {
    console.log(MovieData)
    return (
        <div>
            {
                MovieData.map(m =>  <Movie key={m.id} movie={m} /> )
            }
           
        </div>
    )
}

export default MoviesContainer
