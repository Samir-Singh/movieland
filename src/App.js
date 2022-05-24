import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=f1552f1e";

// const movie1 = {
//   "Title": "Superman, Spiderman or Batman",
//   "Year": "2011",
//   "imdbID": "tt2084949",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }

const App = () => {

  const[movieData, setMovieData] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovieData(data.Search);
  };

  useEffect(() => {
    fetchMovies('superman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={()=>fetchMovies(searchTerm)}/>
      </div>

      {
          movieData 
          ? (
            <div className="container">
              {
                movieData.map((val, index)=><MovieCard key={index} year={val.Year} poster={val.Poster} title={val.Title} type={val.Type} />)
              }
            </div>
          ):
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
  );
};

export default App;
