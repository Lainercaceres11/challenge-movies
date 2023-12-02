/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import css from "./MovieList.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line react/prop-types

export const MovieList = ({ movies = [] }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const [gender, setGender] = useState([]);
  const [localMovies, setLocalMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=4f5f43495afcc67e9553f6c684a82f84`
      )
      .then((res) => {
        setGender(res.data.genres);
      });
  }, []);


  const handleClick = (genderId) => {
    axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4f5f43495afcc67e9553f6c684a82f84&with_genres=${genderId}`
    )
    .then((res) => {
      setLocalMovies(res.data.results);
    })
    .catch(() => {});
  }

  const navigate = useNavigate();
  return (
    <div>
      {gender.map((genders) => {
        return (
          // <Link key={genders.id} to={`/${genders.id}/${genders.name}`}>
          <button key={genders.id} onClick={() => handleClick(genders.id)} >
            {genders.name}
          </button>
          // </Link>
        );
      })}
      <div className={css.movies}>
        {(!localMovies.length ? movies : localMovies).map((movie) => (
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
    </div>
  );
};