import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Casts from "./Cast";

interface Cast {
  id: number;
  character: string;
}

const CastDetails: React.FC = () => {
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI3Y2Y0ZTlmM2Y2ZTBkNTA2NWQwYmE2ZDlkNDAxMSIsIm5iZiI6MTcyMDQxODE2Ni4yMDgxNDgsInN1YiI6IjY2ODhlYTc2NDQxZGY4OTVhMjQ5OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FkaqOaGjWTs8p7J7DKRV_ycX2rfZOzAYwK6yussggto";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const [castDetails, setCastDetails] = useState<Cast[] | null>(null);
  const { resId } = useParams<{ resId: string }>();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${resId}/credits?language=en-US`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("data:", data);
        setCastDetails(data.cast);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchCast();
  }, [resId]);

  console.log(castDetails);

  return (
    <div className="card-container">
      <h1 className="casts_heading">Casts</h1>
      {castDetails &&
        castDetails.map((items) => (
          <Link to={"/movies/" + items.id} key={items.id}>
            <Casts castData={items} />
          </Link>
        ))}
    </div>
  );
};

export default CastDetails;
