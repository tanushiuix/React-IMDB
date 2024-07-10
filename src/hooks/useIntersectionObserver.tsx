import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  fetchData: () => void,
  sentinelRef: React.MutableRefObject<HTMLElement | null>,
  loading: boolean
): IntersectionObserver | null => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
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
