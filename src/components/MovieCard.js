import React from 'react'
import "./MovieCard.css"
import { Link, useParams } from "react-router-dom"
import { MovieData } from "../MovieData"
import StarRating from './StarRating';
function MovieCard() {
    const { id } = useParams();
    //this is just to filter data in api will use id to lode data of a give movie
    const movie = MovieData.filter(movie => movie.id == id)
    console.log(movie)
    return (
        <div className="movieCardParent" >
            <Link to="/" >Go Back</Link>
            <div className="movieCardChild" >
                <img src={movie[0].image} alt="movieImage" />
                <StarRating star = {movie[0].rating} />
                <h2>{movie[0].title}</h2>
                <p>{movie[0].description}</p>
            </div>
        </div>
    )
}

export default MovieCard
