import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetch("../../src/assets/data.json");
      const moviesJSON = await movies.json();
      setData(moviesJSON);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row">
      {data.map((movie) => (
        <div key={movie.id} className="col-sm-2">
          <Card key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default List;
