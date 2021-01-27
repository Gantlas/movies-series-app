import axios from "axios";

import { SERACH_MOVIE, FETCH_MOVIES } from "./types";
import { API_KEY } from "../API_KEY";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SERACH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search,
      })
    )
    .catch((err) => console.log(err));
};
