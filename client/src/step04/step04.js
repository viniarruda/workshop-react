import React, { useEffect, useState } from "react";
import axios from "axios";

const Step04 = () => {
  // Hooks nos permitem dividir o código com base no que ele está fazendo
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    const token = "c206acd8d2835b571e94784bf91091c2";
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=${page}`
    );
    if (status) {
      setMovies(data.results);
    }
  };

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </ul>
      <button onClick={() => setPage(page + 1)}>Próxima página</button>
    </div>
  );
};

export default Step04;
