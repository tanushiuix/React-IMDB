import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/trendingMovies";
import { TrendingMovie } from "../types/movie";

interface UseTrendingMoviesProps {
  currentPage: number;
}

const useTrendingMovies = ({ currentPage }: UseTrendingMoviesProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<TrendingMovie[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const data = await getTrendingMovies({
        currentPage,
      });

      if (data) {
        setMovies(data.results);
      }

      setLoading(false);
    })();
  }, [currentPage]);

  return { loading, movies };
};

export default useTrendingMovies;
