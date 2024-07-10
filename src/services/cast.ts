import { apiKey } from "../utils/constants";

export const getCast = async ({ resId }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${resId}/credits?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data.cast;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
