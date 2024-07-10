import { Cast, GetAllCastCrewResponse } from "../types/cast";
import { apiKey } from "../utils/constants";

export const getCast = async ({ resId }): Promise<Cast[] | null> => {
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

    const data = (await response.json()) as GetAllCastCrewResponse;
    return data.cast;
  } catch (error) {
    return null;
  }
};
