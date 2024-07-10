import { useEffect, useRef } from "react";

const useIntersectionObserver = (fetchData, sentinelRef, loading) => {
  const observer = useRef(null);

  useEffect(() => {
    const intersectionCallback = (entries,observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          fetchData();
        }
      });
    };

    observer.current = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (observer.current && sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current && sentinelRef.current) {
        observer.current.unobserve(sentinelRef.current);
      }
    };
  }, [fetchData, loading, sentinelRef]);

  return observer.current;
};

export default useIntersectionObserver;
