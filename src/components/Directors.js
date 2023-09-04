import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
  <h1>Directors Page</h1>
 {directors.map((director, index)=>{
   return <main key={index}>
   <h2> Name: {director.name}</h2>
   <ul> 
      Movies: {director.movies.map((movie, index)=> <li key={index}>{movie}</li>)}
  </ul>
   </main>
 
 })}
  </div>;
}

export default Directors;
