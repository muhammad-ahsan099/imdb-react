import { MOVIE_DETAIL } from "../type/Type";

const initialState = {
    movieDetail: {},
};
const MovieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_DETAIL: {
            return {
                ...state,
                movieDetail: action.payload,
            }
        }

        default:
            return state;
    }
}

export default MovieDetailReducer;
