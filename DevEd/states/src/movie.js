import React from "react";

function Movie({name, price, id}) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{id}</p>
        </div>
    );
}
export default Movie