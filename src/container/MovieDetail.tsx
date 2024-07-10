import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";

import CastsDetails from "./CastsDetail";

const MovieDetail: React.FC = () => {
  const { resId } = useParams<{ resId: string }>();
  const { cardDetails, loading } = useMovieDetails();

  console.log(cardDetails);
  console.log(resId, "restID");
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cardDetails) {
    return <div>No movie details found</div>;
  }

  const cardimage_url = `https://image.tmdb.org/t/p/w1280/${cardDetails.backdrop_path}`;
  const posterimage_url = `https://image.tmdb.org/t/p/w500/${cardDetails.poster_path}`;

  return (
    <div className="CardDetails">
      <div className="card_image">
        {cardDetails.backdrop_path && (
          <img
            src={cardimage_url}
            alt="Movie backdrop"
            className="banner_images"
          />
        )}
        <div className="poster">
          <div className="posterimg_url">
            {cardDetails.poster_path && (
              <img
                src={posterimage_url}
                alt="Movie poster"
                className="poster_image"
              />
            )}
          </div>
          <div className="poster_desc">
            <h1 className="title">{cardDetails.original_title}</h1>
            <h5 className="plot">Plot</h5>
            <p className="overview">{cardDetails.overview}</p>
            <div className="poster_details">
              <div className="poster_release">
                <h3>Release Date</h3>
                <h3>Rating</h3>
                <h3>HomePage</h3>
                <h3>Runtime</h3>
              </div>
              <div className="poster_release_Details">
                <h4 className="release_date">{cardDetails.release_date}</h4>
                <h4 className="">{cardDetails.vote_average}</h4>
                <h4 className="release_channel">Netflix</h4>
                <h4>{cardDetails.runtime}</h4>
              </div>
            </div>
          </div>
        </div>
        <CastsDetails />
      </div>
    </div>
  );
};

export default MovieDetail;
