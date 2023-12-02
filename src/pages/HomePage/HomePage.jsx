import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    setIsLoading(true);
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setIsLoading(false);
  };

  const searchMovies = (e) => {
    setIsLoading(true)
    e.preventDefault();
    fetchMovies(searchKey);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>
          Buscador de tus mejores peliculas 🎬{" "}
        </h1>
        <form className="form" onSubmit={searchMovies}>
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
            type="text"
            placeholder="Star warz, Matrix"
          />
          <button className="button" type="submit">Buscar</button>
        </form>
      </header>

      {isLoading && <Loader />}

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
