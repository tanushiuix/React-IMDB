import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCast } from "../services/cast";
import { Cast } from "../types/cast";

const useCastDetails = () => {
  const [castDetails, setCastDetails] = useState<Cast[] | null>(null);
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
