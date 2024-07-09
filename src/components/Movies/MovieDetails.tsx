import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CastDetails from "../Casts/CastDetails";

interface CardDetails {
  backdrop_path: string;
  poster_path: string;
}

const MovieDetails: React.FC = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);

  const { resId } = useParams<{ resId: string }>();

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI3Y2Y0ZTlmM2Y2ZTBkNTA2NWQwYmE2ZDlkNDAxMSIsIm5iZiI6MTcyMDQxODE2Ni4yMDgxNDgsInN1YiI6IjY2ODhlYTc2NDQxZGY4OTVhMjQ5OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FkaqOaGjWTs8p7J7DKRV_ycX2rfZOzAYwK6yussggto";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${resId}?language=en-US`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCardDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovies();
  }, [resId]);

  if (!cardDetails) {
    return <div>Loading...</div>;
  }

  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    runtime,
  } = cardDetails;
  const cardimage_url = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterimage_url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  console.log(original_title);

  return (
    <div className="CardDetails">
      <div className="card_image">
        {backdrop_path && (
          <img
            src={cardimage_url}
            alt="Movie backdrop"
            className="banner_images"
          />
        )}
        <div className="poster">
          <div className="posterimg_url">
            {poster_path && (
              <img
                src={posterimage_url}
                alt="Movie poster"
                className="poster_image"
              />
            )}
          </div>
          <div className="poster_desc">
            <h1 className="title">{original_title}</h1>
            <h5 className="plot">Plot</h5>
            <p className="overview">{overview}</p>
            <div className="poster_details">
              <div className="poster_release">
                <h3>Release Date</h3>
                <h3>Rating</h3>
                <h3>HomePage</h3>
                <h3>Runtime</h3>
              </div>
              <div className="poster_release_Details">
                <h4 className="release_date">{release_date}</h4>
                <h4 className="">{vote_average}</h4>
                <h4 className="release_channel">Netflix</h4>
                <h4>{runtime}</h4>
              </div>
            </div>
          </div>
        </div>

        <CastDetails />
      </div>
    </div>
  );
};

export default MovieDetails;
