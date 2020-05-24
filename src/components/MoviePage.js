import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MoviePage.scss";

export default function MoviePage() {
  const [movieData, set_movieData] = useState([]);
  const route_parameters = useParams();
  console.log("This is the ID", route_parameters);

  console.log("render");

  async function fetchData() {
    const queryParam = encodeURIComponent(route_parameters.imdb_id);

    const data = await axios.get(
      `https://omdbapi.com/?apikey=13fe53fa&i=${queryParam}`
    );

    console.log("data", data);
    const result = data.data;
    set_movieData([result]);
  }

  useEffect(() => {
    fetchData();
  }, [route_parameters]);

  return (
    <div>
      <p>This is the page for movie with imdb id:{route_parameters.imdb_id}</p>
      {console.log("This is the data: ", movieData)}
      {movieData.map((movie, i) => {
        return (
          <div>
            <p className="tag">{movie.Title}</p>
            <p>{movie.Plot}</p>

            <div>
              <img src={movie.Poster}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
