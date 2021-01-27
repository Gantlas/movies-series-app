import React, { Component } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="row">
        {movies?.length > 0
          ? movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
