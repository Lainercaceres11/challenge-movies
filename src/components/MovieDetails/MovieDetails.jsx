import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";

import css from "./MovieDetails.module.css";
import { Loader } from "../Loader/Loader";
import { RecomededMovie } from "../RecomendedMovie/RecomededMovie";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [isLoading, setIsLoading] = useState(true);
  const [moviesReccomended, setMoviesRecomended] = useState({});
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const params = useParams();

  // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async () => {
    setIsLoading(true);
    const { data } = await axios.get(`${API_URL}/movie/${params.id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    setMovie(data);
    setTrailer(trailer ? trailer : data.videos.results[0]);
    setIsLoading(false);
  };

  useEffect(()=>{
    recommendMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const recommendMovies = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`, {
      params: {
        api_key: API_KEY,
      },
    })

    console.log("Recomendadas", data.results)

    setMoviesRecomended(data.results)
  }

  useEffect(() => {
    fetchMovie();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }


  return (
    <>
      <div className={css.movies__details}>
        <h1>Title: {movie.original_title}</h1>
        <div className={css.movie__info__container}>
          <img
            width={"700"}
            src={URL_IMAGE + movie.backdrop_path}
            alt={movie.backdrop_path}
          />
          <div className={css.movie__description}>
            <h2 className={css.video__title}>Video Trailer</h2>

            {movie ? (
              <div className={css.container__video}>
                {playing ? (
                  <>
                    <button
                      onClick={() => setPlaying(false)}
                      className={css.button__video}
                    >
                      Close
                    </button>
                    <YouTube videoId={trailer.key} />
                  </>
                ) : (
                  <div className="container">
                    <div className="">
                      {trailer ? (
                        <button
                          className="boton"
                          onClick={() => setPlaying(true)}
                          type="button"
                        >
                          Play Trailer
                        </button>
                      ) : (
                        "Sorry, no trailer available"
                      )}
                      <h1>{movie.title}</h1>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <p>
          <strong>Languaje</strong>: <span>{movie.original_language}</span>{" "}
        </p>
        <p>
          <strong>Description</strong>: {movie.overview}
        </p>
        <p>
          <strong>Popularity</strong>: {movie.popularity}
        </p>
      </div>

      <section>
        <h2 className={css.recomended__title}>Recomendaciones</h2>
        <RecomededMovie moviesList={moviesReccomended} />
      </section>

      <footer className={css.button__movie}>
        <Link to={"/"}>
          <button>Volver a las peliculas</button>
        </Link>
      </footer>
    </>
  );
};
