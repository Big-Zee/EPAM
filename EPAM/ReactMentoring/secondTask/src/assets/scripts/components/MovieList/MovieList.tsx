import * as React from "react";

import MovieCard from "../MovieCard/MovieCard";

let movies = [
  {
    title: "Pulp Fiction",
    description: "Action & Adventure",
    id: "we3a7",
    imageSource: "src/assets/images/Movies/PF1994.jpg",
    year: "1994",
  },
  {
    title: "Bohemian Rhapsody",
    description: "Drama, Bigraphy, Music",
    id: "we3a4",
    imageSource: "src/assets/images/Movies/BR.jpg",
    year: "2003",
  },

  {
    title: "Kill Bill: Vol 2",
    description: "Oscar winning Movie",
    id: "we3a6",
    imageSource: "src/assets/images/Movies/KB2.jpg",
    year: "1994",
  },
];

export default function MovieList(props: any) {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          imageSource={movie.imageSource}
          key={movie.id}
          year={movie.year}
        />
      ))}
    </>
  );
}
