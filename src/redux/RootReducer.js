

import {combineReducers} from 'redux';

import AuthReducer from './reducers/AuthReducer';
import LandingPageReducer from './reducers/LandingPageReducer'
import CelebritiesReducer from './reducers/CelebritiesReducer'
import MovieDetailReducer from './reducers/MovieDetailReducer'
import GenreReducer from './reducers/GenreReducer';

const RootReducer =   combineReducers({
    AuthReducer,
    LandingPageReducer,
    CelebritiesReducer,
    MovieDetailReducer,
    GenreReducer,
    
})

export default RootReducer;