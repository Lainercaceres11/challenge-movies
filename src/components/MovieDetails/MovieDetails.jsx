import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import css from "./MovieDetails.module.css";
import { Loader } from "../Loader/Loader";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams();
  const { id } = params;

  const getMovieById = async () => {
    setIsLoading(true)
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=ab5cfe86`);
    const data = await res.json();
    setMovie(data);
    setIsLoading(false)
  };

  useEffect(() => {
    getMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <div className={css.movies__details}>
        <h1>Director: {movie.Director}</h1>
        <div className={css.movie__info__container}>
          <img width={"250"} src={movie.Poster} alt={movie.Poster} />
          <div className={css.movie__description}>
            <p>
              <strong>Actors</strong>: {movie.Actors} - <strong>Rating</strong>:{" "}
              <span>{movie.imdbRating}</span>{" "}
            </p>
            <p><strong>Description</strong>: {movie.Plot}</p>
            <p><strong>Languaje</strong>: {movie.Language}</p>
          </div>
        </div>
      </div>
      <footer className={css.button__movie}>
        <Link to={"/"}>
          <button>Volver a las peliculas</button>
        </Link>
      </footer>
    </>
  );
};
