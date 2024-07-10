import { GetTrendingMovieResponse } from "../types/movie";
import { baseUrl, options } from "../utils/constants";

export const getTrendingMovies = async ({
  currentPage,
}): Promise<GetTrendingMovieResponse | null> => {
  try {
    const response = await fetch(
      `${baseUrl}/trending/all/day?language=en-US&page=${currentPage}`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = (await response.json()) as GetTrendingMovieResponse;

    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);

    return null;
  }
};
