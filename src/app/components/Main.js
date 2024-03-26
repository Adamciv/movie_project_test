"use client";
import { useEffect, useState } from "react";
import requests from "@/endpoints";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // here we use this variable that saves a cover randomly
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // fetching the popular movies api endpoint and then
  // use it for the cover of the website

  useEffect(() => {
    fetch(requests.Popular)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  // making the descreption of the movie shorter if it's longer than 150 charecters
  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover" // object-cover doesn't let distortion and fixes the aspect the ratio
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-2 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
