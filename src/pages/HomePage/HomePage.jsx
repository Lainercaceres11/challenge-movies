import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";

const API_URL = "https://www.omdbapi.com/?s=all&apikey=ab5cfe86";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const getMovies = async () => {
    setIsLoading(true)
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    setMovies(data.Search);
    setIsLoading(false)
  };

  const getSearchMovie = async () => {
    setIsLoading(true)
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=ab5cfe86&s=${search}`
    );
    const data = await res.json();
    setMovies(data.Search);
    setIsLoading(false)
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchMovie();
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>
          Buscador de tus mejores peliculas 🎬{" "}
        </h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Star warz, Matrix"
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      {isLoading && <Loader />}

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
