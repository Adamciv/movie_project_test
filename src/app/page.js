"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Row from "./components/Row";
import requests from "@/endpoints";

//{endpoints.map((movie)=>(<Row title={movie} fetchURL={requests.movie}/>))}

export default function Home() {
  const endpoints = Object.keys(requests);

  // this function reutrns the Row component whenever called
  const getRows = (movieType) => {
    return (
      <Row key={movieType} title={movieType} fetchURL={requests[movieType]} />
    );
  };

  return (
    <>
      
      <Main />

      {endpoints.map(getRows)}
    </>
  );
}
