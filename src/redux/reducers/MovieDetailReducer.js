import { MOVIE_DETAIL, MOST_POPULAR_MOVIES, TOP_250_MOVIES, ADD_RATING,UPDATE_RATING, DELETE_RATINGS, IMDB_ORIGINAL } from "../type/Type";

const initialState = {
    movieDetail: {},
    mostPopularMovies: [],
    top250Movies: [],
    imdbOriginal: [],
    ratings: false,
};
const MovieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_DETAIL: {
            return {
                ...state,
                movieDetail: action.payload,
            }
        }
        case MOST_POPULAR_MOVIES: {
            return {
                ...state,
                mostPopularMovies: action.payload,
            }
        }
        case TOP_250_MOVIES: {
            return {
                ...state,
                top250Movies: action.payload,
            }
        }
        case IMDB_ORIGINAL: {
            return {
                ...state,
                imdbOriginal: action.payload,
            }
        }
        case ADD_RATING: {
            return {
                ...state,
                ratings: action.payload,
            }
        }
        case UPDATE_RATING: {
            return {
                ...state,
                ratings: action.payload,
            }
        }
        case DELETE_RATINGS: {
            return {
                ...state,
                ratings: action.payload
            }
        }

        default:
            return state;
    }
}

export default MovieDetailReducer;
