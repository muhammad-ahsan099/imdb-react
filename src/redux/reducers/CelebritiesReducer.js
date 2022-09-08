import { CELEBRITY_BIRTHDAY } from "../type/Type";

const initialState = {
    celebritiesBirthday: [],
};
const CelebritiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CELEBRITY_BIRTHDAY: {
            return {
                ...state,
                celebritiesBirthday: action.payload,
            }
        }

        default:
            return state;
    }
}

export default CelebritiesReducer;
