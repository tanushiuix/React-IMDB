import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";
import { getMovies } from "../services/Movies";

export interface CardDetails {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
}

const useMovieDetails = (): {
  cardDetails: CardDetails | null;
  loading: boolean;
  error: string | null;
} => {
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { resId } = useParams<{ resId: string }>();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const movies = await getMovies({ resId });
      setCardDetails(movies);

      setLoading(false);
    })();
  }, [resId]);

  return { cardDetails, loading, error };
};

export default useMovieDetails;
