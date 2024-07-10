import { options } from "../utils/constants";

export const getMovies = async ({ resId }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${resId}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
