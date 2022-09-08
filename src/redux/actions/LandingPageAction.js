import { HOME_MOVIES_TOP, TOP_PICK_MOVIES, FAN_FAVORITES_MOVIES, RECENT_RELEASED_MOVIES, RECENT_UPCOMING_MOVIES, PRIME_VIDEOS } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';

export const fetchHomeMoviesTop = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/home-movies/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: HOME_MOVIES_TOP,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Home Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchTopPickMovies = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/imdb-top-pick/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: TOP_PICK_MOVIES,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Top Pick Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchfanFavoriteMovies = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/imdb-fan-favorites/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: FAN_FAVORITES_MOVIES,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get fan favorite Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchRecentReleasedMovies = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/recent-released/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: RECENT_RELEASED_MOVIES,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get recent released Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchRecentUpcomingMovies = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/recent-upcoming/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        if (res.data) {
            dispatch({
                type: RECENT_UPCOMING_MOVIES,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get recent Upcoming Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchPrimeVideos = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/imdb-prime-videos/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        if (res.data) {
            dispatch({
                type: PRIME_VIDEOS,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Prime Videos Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

