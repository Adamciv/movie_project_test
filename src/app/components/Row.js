import React from "react";

import { useState, useEffect } from "react";
import Cards from "./cards";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  
  const getmovies = () => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  };

  useEffect(() => getmovies(), [fetchURL]);

  // here is a break down of what is happening here in this component
  // we've called this component in the main component, page.js
  // it recevies two props from the main component, {title, fetchURL}
  // we fecth the url, and then put the result in movies, so now movies stores an array full of info about the fetched endpoint (movie type)
  // now movies has an array of 20 objects,
  console.log(movies)

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div id={"main"} className="relative flex items-center group">
        <MdChevronLeft className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} />
        <div  id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Cards key={id} item={item}/>
            
          ))}
        </div>
        <MdChevronRight className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} />
      </div>
    </div>
  );
};

export default Row;
