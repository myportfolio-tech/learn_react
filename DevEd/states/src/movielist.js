import React, {useState} from "react";
import Movie from "./movie";

function MovieList() {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id:123
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id:124
        },
        {
            name: 'Inception',
            price: '$10',
            id:234
        }
    ]);

    return (
        <div>
        {movies.map(movie =>(
            <Movie name={movie.name} price={movie.price} id={movie.id}/>
        ))}
        </div>
    );
}
export default MovieList