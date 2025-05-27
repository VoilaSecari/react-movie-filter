import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import movies from "./assets/data/movies";

export default function App() {
  //useState
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  //filtro i generi
  const genres = movies.map((movie) => movie.genre);
  //filtro i generi unici
  const uniqueGenres = genres.filter((genre, index) => {
    return genres.indexOf(genre) === index;
  });

  //filtrare i film
  // const filteredMovie = selectedGenre
  //   ? movies.filter((movie) => movie.genre === selectedGenre)
  //   : movies;

  return (
    <div className="container">
      <h1>Film disponibili</h1>
      <div className="input-group mb-3">
        <button className="input-group-text btn btn-secondary">Cerca</button>
        <select className="form-select">
          <option>Seleziona un genere</option>
          {uniqueGenres.map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {/* qui abbiamo le card con i film */}
      <hr />
    </div>
  );
}
