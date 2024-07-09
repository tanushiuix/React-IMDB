import React, { useState, useEffect } from "react";
import Cards from "./Movies";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieDisplaying: React.FC<{ apiKey: string }> = ({ apiKey }) => {
  const [cards, setCards] = useState<Movie[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await data.json();
      setCards(res.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  return (
    <div className="card-container">
      {cards.map((item: Movie) => (
        <Link key={item.id} to={"/movies/" + item.id}>
          <Cards cardsData={item} />
        </Link>
      ))}
    </div>
  );
};

export default MovieDisplaying;
