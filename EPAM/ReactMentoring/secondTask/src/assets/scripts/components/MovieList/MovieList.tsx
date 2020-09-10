import * as React from "react";

import MovieCard from "../MovieCard/MovieCard";

let movies = [
  {
    title: "Pulp Fiction",
    description: "Action & Adventure",
    longDescription: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    id: "we3a7",
    imageSource: "src/assets/images/Movies/PF1994.jpg",
    year: "1994",
    rating: "4.3",
    time: 154,
  },
  {
    title: "Bohemian Rhapsody",
    description: "Drama, Bigraphy, Music",
    longDescription: "Bohemian Rhapsody is a 2018 biographical drama film about Freddie Mercury, the lead singer of the British rock band Queen. It was directed by Bryan Singer[a] from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. It stars Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, and Mike Myers in supporting roles. Queen members Brian May and Roger Taylor served as consultants. A British-American venture, the film was produced by 20th Century Fox, Regency Enterprises, GK Films, and Queen Films, with Fox serving as distributor. The film follows the singer's life from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium.",
    id: "we3a4",
    imageSource: "src/assets/images/Movies/BR.jpg",
    year: "2003",
    rating: "4.2",
    time: 134,
  },

  {
    title: "Kill Bill: Vol 2",
    description: "Oscar winning Movie",
    longDescription: "Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who continues her campaign of revenge against the Deadly Viper Assassination Squad (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine), who tried to kill her and her unborn child. Tarantino conceived Kill Bill as a homage to 'grindhouse' cinema including martial arts films, samurai cinema, blaxploitation films, and spaghetti westerns. Volume 2 is the second of two Kill Bill films produced simultaneously; the first, Volume 1, was released in 2003. The films were originally set for a single release, but the film, with a runtime of over four hours, was divided in two. Like Volume 1, Volume 2 received positive reviews and was a commercial success.",
    id: "we3a6",
    imageSource: "src/assets/images/Movies/KB2.jpg",
    year: "1994",
    rating: "4.6",
    time: 120,
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
          longDescription={movie.longDescription}
          rating={movie.rating}
          time={movie.time}
        />
      ))}
    </>
  );
}
