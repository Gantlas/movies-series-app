import React, { Component } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="row">
        {movies.Response === "True" ? (
          movies.Search.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))
        ) : (
          <div className="text-center m-auto fa-lg">{movies.Error}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
