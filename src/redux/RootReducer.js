

import {combineReducers} from 'redux';

import AuthReducer from './reducers/AuthReducer';
import LandingPageReducer from './reducers/LandingPageReducer'
import CelebritiesReducer from './reducers/CelebritiesReducer'

const RootReducer =   combineReducers({
    AuthReducer,
    LandingPageReducer,
    CelebritiesReducer,
    
})

export default RootReducer;