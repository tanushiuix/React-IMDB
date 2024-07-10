import { baseUrl, options } from "../utils/constants";

export const fetchSearchResults = async (query: string) => {
  try {
    const response = await fetch(
      `${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
