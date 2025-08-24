import { useState } from "react";
import TrendingList from './TrendingList.jsx'
  
export default function App() {
  const movieArray = [
    {
  title: "Hitchhiker's Guide to the Galaxy",
  releaseYear: 2005,
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    },
    {
  title: "The End Of The F***ing World",
  releaseYear: 2015,
  imageUrl: "https://https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/The_End_of_the_F%2A%2A%2Aing_World_logo_netflix.jpg/640px-The_End_of_the_F%2A%2A%2Aing_World_logo_netflix.jpg"
    },
    {
  title: "The 100",
  releaseYear: 2018,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/The_100_%28CBS_Studios_television_series%29_logo.svg/640px-The_100_%28CBS_Studios_television_series%29_logo.svg.png"
    },
    {
  title: "Griselda",
  releaseYear: 2024,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Griselda_Blanco_Medellin.jpg/640px-Griselda_Blanco_Medellin.jpg"
    },
  ];
  const [movieData, setMovieData] = useState(movieArray);

  // code here 💖

  return <div><TrendingList movies={movieData}/></div>;
}
