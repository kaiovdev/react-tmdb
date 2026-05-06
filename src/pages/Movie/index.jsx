import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import styles from "./Movie.module.css";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadMovie();

    return;
  }, [navigate, id]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando detalhes...</h2>
      </div>
    );
  }

  function saveMovie() {
    const myList = localStorage.getItem("@tmdb");

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id,
    );

    if (hasMovie) {
      toast.warn("Esse filme já está na lista");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@tmdb", JSON.stringify(savedMovies));
    toast.success("Filme salvo com sucesso!");
  }

  return (
    <div className={styles.filme_info}>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className={styles.area_buttons}>
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            href={`https://www.youtube.com/results?search_query=${movie.title} Trailer`}
            target="blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Movie;
