/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import css from "./MovieList.module.css";
// eslint-disable-next-line react/prop-types

const URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const MovieList = ({ movies = [] }) => {
  const navigate = useNavigate();
  return (
    <div className={css.movies}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => navigate(`/movie-details/${movie.id}`)}
        >
          <img src={`${URL_IMAGE + movie.poster_path}`} alt="" width="300" />

          <h4 className="text-center">{movie.title}</h4>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};
