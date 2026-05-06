import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import styles from "./Home.module.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function LoadMovies() {
      const response = await api.get("/movie/now_playing?language=pt-BR");

      setMovies(response.data.results.slice(0, 20));
      setLoading(false);
    }

    LoadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.lista_filmes}>
        {movies.map((filme) => {
          return (
            <article key={filme.id}>
              <div className={styles.title_box}>
                <strong>{filme.title}</strong>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/movie/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
