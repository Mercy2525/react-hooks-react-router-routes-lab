import React from "react";
import { actors } from "../data";

function Actors() {
  
  return <div>
  <h1>Actors Page</h1>
  {actors.map((actor,index)=>{
    return <main key={index}>
    <h3>{actor.name}</h3>
    <ul>
    Movies: {actor.movies.map((movie, index)=><li key={index}>{movie}</li>)}
    </ul>
    
    </main>
  })}
  </div>;
}

export default Actors;
