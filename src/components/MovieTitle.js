//b/c of webpack show how ur using each component
import React from 'react';
// function or class, function because passing data along.

var MovieTitle = (props) => (
    <div>
        {props.film.title}
    </div>
)
//dont forget to export
export default MovieTitle
