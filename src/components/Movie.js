import React from 'react'
import { useHistory } from "react-router-dom"

import "./Movie.css"
function Movie(props) {
    const history = useHistory();
    const goToMovieCard = (id) => {
        history.push(`/movieCard/${id}`);
    }
    return (
        <div onClick={()=>goToMovieCard(props.movie.id)} className="movie" >
            <img className="image" src={props.movie.image} alt="movieImage" width="100px" height="100px" />
            
            <h3>{props.movie.title}</h3>
        </div>
    )
}

export default Movie
