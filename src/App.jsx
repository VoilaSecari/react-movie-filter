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
  // ? movies.filter((movie) => movie.genre === selectedGenre)
  //   : movies; movie

  useEffect(() => {
    if (selectedGenre) {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectedGenre)
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [selectedGenre]);

  return (
    <div className="container">
      <h1>Film disponibili</h1>
      <div className="input-group mb-3">
        <span className="input-group-text">Cerca</span>
        <select
          className="form-select"
          id="genreSelect"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Seleziona un genere...</option>
          {/* genera i valori del filtro */}
          {uniqueGenres.map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {/* qui abbiamo le card con i film */}
      <hr />
      <div className="container">
        <div className="row g-3">
          {filteredMovies.map((movie, index) => (
            <div className="col-4" key={index}>
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0 card-title">{movie.title}</h4>
                </div>
                <div className="card-body">
                  <p className="mb-0 card-text">{movie.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
