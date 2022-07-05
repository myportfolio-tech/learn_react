import React, { useState, createContext } from "react";

export const movieContext = createContext();

export function MovieProvider(props){
    
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
        <movieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </movieContext.Provider>

    );
}
