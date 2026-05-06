import { useEffect, useState } from "react";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@tmdb");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMovies(JSON.parse(myList) || []);
  }, []);

  function removeFavoriteMovie(title, id) {
    let filterMovies = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(filterMovies);
    localStorage.setItem("@tmdb", JSON.stringify(filterMovies));
    toast.warn(`${title} foi removido da sua lista`);
  }

  return (
    <div className={styles.my_movies}>
      <h1>Meus filmes favoritos</h1>

      {movies.length === 0 && <span>Você não possui nenhum filme salvo</span>}

      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                <button
                  onClick={() => removeFavoriteMovie(movie.title, movie.id)}
                >
                  Remover
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
