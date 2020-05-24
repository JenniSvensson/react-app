import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/movies/:imdb_id" component={MoviePage} />
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />

        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
