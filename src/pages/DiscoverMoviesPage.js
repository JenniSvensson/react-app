import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [status, set_status] = useState("Nothing here yet");
  const [movies, set_movies] = useState([]);
  const route_parameters = useParams();
  const history = useHistory();

  const navigateToSearch = async () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  async function searchWithParams(route) {
    const paramQuery = encodeURIComponent(route);

    if (route !== undefined) {
      try {
        set_status("Searching");
        const response = await axios.get(
          `https://omdbapi.com/?apikey=13fe53fa&s=${paramQuery}`
        );
        // if the response is emppty just push a empty array to set_movies
        if (response.data.Search) {
          set_movies(response.data.Search);
          set_status("Done");
        } else {
          //mapping through an empty array wont cause any errors
          set_movies([]);
          set_status("Unable to find a movie with that title");
        }
      } catch (error) {
        console.log("this is the error message", error.message);
      }
    } else {
      set_status("Nothing here yet");
      set_movies([]);
    }
  }

  useEffect(() => {
    //this gets called everytime the params changes
    searchWithParams(route_parameters.searchtext);
  }, [route_parameters.searchtext]);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>
      <p>{status}</p>
      <ul>
        {movies.map((movie, i) => {
          return (
            <li className="wrapper" key={i + 1}>
              <img src={movie.Poster}></img>

              <Link
                to={`/movies/${movie.imdbID}`}
              >{`${movie.Title} ${movie.imdbID} `}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
