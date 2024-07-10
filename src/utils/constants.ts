export const logo_Url: string =
  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";

export const github_Url: string =
  "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png";

export const apiKey: string =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI3Y2Y0ZTlmM2Y2ZTBkNTA2NWQwYmE2ZDlkNDAxMSIsIm5iZiI6MTcyMDQxODE2Ni4yMDgxNDgsInN1YiI6IjY2ODhlYTc2NDQxZGY4OTVhMjQ5OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FkaqOaGjWTs8p7J7DKRV_ycX2rfZOzAYwK6yussggto";

export const baseUrl: string = "https://api.themoviedb.org/3";

export function image(path) {
  const route = `https://image.tmdb.org/t/p/w185/${path}`;
}
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};