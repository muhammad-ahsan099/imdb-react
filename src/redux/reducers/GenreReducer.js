import { GENRE_LIST, SIGNLE_GENRE } from "../type/Type";

const initialState = {
    genreList: [],
    genre: [],
};
const GenreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENRE_LIST: {
            return {
                ...state,
                genreList: action.payload
            }
        }

        case SIGNLE_GENRE: {
            return {
                ...state,
                genre: action.payload,
            }
        }
        default:
            return state;
    }
}

export default GenreReducer;
