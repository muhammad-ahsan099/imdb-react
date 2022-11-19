import { CELEBRITY_BIRTHDAY, MOST_POPULAR_CELEBS, CELEBRITY_DETAIL } from "../type/Type";

const initialState = {
    celebritiesBirthday: [],
    popularCelebs: [],
    celbrityDetail: {},
};
const CelebritiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CELEBRITY_DETAIL: {
            return {
                ...state,
                celbrityDetail: action.payload
            }
        }

        case CELEBRITY_BIRTHDAY: {
            return {
                ...state,
                celebritiesBirthday: action.payload,
            }
        }
        case MOST_POPULAR_CELEBS: {
            return {
                ...state,
                popularCelebs: action.payload,
            }
        }

        default:
            return state;
    }
}

export default CelebritiesReducer;
