import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Cast } from "../types/types";

import { getCast } from "../services/cast";
const useCastDetails = () => {
  const [castDetails, setCastDetails] = useState<Cast[] | undefined>(undefined);
  const { resId } = useParams<{ resId: string }>();

  useEffect(() => {
    (async () => {
      const casts = await getCast({ resId });
      setCastDetails(casts);
    })();
  }, []);

  return castDetails;
};

export default useCastDetails;
