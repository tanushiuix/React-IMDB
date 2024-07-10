import React from "react";
import { Link } from "react-router-dom";
import Cast from "../components/casts/Cast";
import useCastDetails from "../hooks/useCastDetails";

const CastsDetails: React.FC = () => {
  const castDetails = useCastDetails();

  return (
    <div className="card-container">
      <h1 className="casts_heading">Casts</h1>
      {castDetails &&
        castDetails.map((item) => (
          <Link to={"/movies/" + item.id} key={item.id}>
            <Cast castData={item} />
          </Link>
        ))}
    </div>
  );
};

export default CastsDetails;
