import React, {useState, useContext} from "react";
import Movie from "./movie";
import { movieContext } from "./movieContext";

function MovieList() {
    const [movies, setMovies] = useContext(movieContext);
    return (
        <div>
        {movies.map(movie =>(
            <Movie name={movie.name} price={movie.price} id={movie.id}/>
        ))}
        </div>
    );
}
export default MovieList;