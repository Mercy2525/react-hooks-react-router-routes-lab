import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
  <h1>Movies Page</h1>
  {movies.map((movie,index)=>{
    return <main key={index}>
    <h2>Name:{movie.title}</h2>
    <p>Time: {movie.time}</p>
    <ul> 
      Genres: {movie.genres.map((genre, index)=><li key={index}>{genre}</li>)}
    </ul>
    </main>
  })}
  </div>;
}

export default Movies;
