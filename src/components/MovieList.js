//b/c of webpack show how ur using each component
import React from 'react';
// function or class, function because passing data along.
import MovieTitle from './MovieTitle';

var MovieList = (props) => (
    <div className="movie-list">
       {props.title.map((film) => (
            <MovieTitle
                film={film}
                key={film.title}
           />
       ))}
    </div>
);


//dont forget to export
export default MovieList
