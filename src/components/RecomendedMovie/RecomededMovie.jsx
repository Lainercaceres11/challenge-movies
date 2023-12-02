/* eslint-disable react/prop-types */
import { Loader } from "../Loader/Loader";
import css from "./RecomendedMovie.module.css";

const URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const RecomededMovie = ({ moviesList = [] }) => {
  if (moviesList.length <= 0) {
    return <Loader />;
  }
  return (
    <div className={css.movies__recomended__grid}>
      {moviesList.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img
            width={"200"}
            src={URL_IMAGE + movie.poster_path}
            alt={movie.poster_path}
          />
          <p>{movie.original_title}</p>
          <p>{movie.popularity}</p>
        </div>
      ))}
    </div>
  );
};
