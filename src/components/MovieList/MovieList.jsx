import { useNavigate } from "react-router-dom";
import css from "./MovieList.module.css";
// eslint-disable-next-line react/prop-types
export const MovieList = ({ movies = [] }) => {
  const navigate = useNavigate();
  return (
    <div className={css.movies}>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => navigate(`/movie-details/${movie.imdbID}`)}
        >
          <img src={movie.Poster} alt={movie.Poster} />
          <p>{movie.Year}</p>
          <p>{movie.Title}</p>
        </div>
      ))}
    </div>
  );
};
