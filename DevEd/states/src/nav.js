import React, {useContext} from "react";
import {movieContext } from './movieContext'


function Nav({name, price, id}) {
    const [movies, setMovies] = useContext(movieContext);
    return (
        <div>
            <h1>Project</h1>
            <h3>Movies: {movies.length}</h3>
        </div>
    );
}
export default Nav;