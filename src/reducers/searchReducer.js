import {
  FETCH_MOVIES,
  SERACH_MOVIE,
  FETCH_MOVIE,
  LOADING,
} from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SERACH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
