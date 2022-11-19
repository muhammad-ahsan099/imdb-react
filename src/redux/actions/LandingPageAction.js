import { SEARCH_MOVIES, HOME_MOVIES_TOP, ALL_TOP_PICK_MOVIES, TOP_PICK_MOVIES, FAN_FAVORITES_MOVIES, RECENT_RELEASED_MOVIES, RECENT_UPCOMING_MOVIES, PRIME_VIDEOS, ALL_FAN_FAVORITES_MOVIES } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';

export const fetchSearchMovies = (setLoading, query) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/search-movies/?search=${query}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        console.log('Res of Searchbar: ', res.data);

        if (res.data) {
            dispatch({
                type: SEARCH_MOVIES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Search Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}




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

export const fetchTopPickMovies = (setLoading, page) => async (dispatch) => {
    try {
        console.log('Page: ', page);
        setLoading(true);
        let request = {
            method: 'get',
            url: page === undefined ?
                `${endPoint}movies/imdb-top-pick/`
                :
                `${endPoint}movies/imdb-top-pick/${page}`
            ,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data) {
            dispatch({
                type: TOP_PICK_MOVIES,
                payload: res?.data,
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
export const fetchAllTopPickMovies = (setLoading) => async (dispatch) => {
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
                type: ALL_TOP_PICK_MOVIES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get All Top Pick Movies: ', error);
    }
    finally {
        setTimeout(() =>
            setLoading(false)
            , 1000)
    }
}

export const fetchfanFavoriteMovies = (setLoading, page) => async (dispatch) => {
    try {
        setLoading(true);
        console.log('Loading');
        let request = {
            method: 'get',
            url: page === undefined ?
                `${endPoint}movies/imdb-fan-favorites/`
                :
                `${endPoint}movies/imdb-fan-favorites/${page}`
            ,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data) {
            dispatch({
                type: FAN_FAVORITES_MOVIES,
                payload: res?.data,
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

export const fetchAllfanFavoriteMovies = (setLoading) => async (dispatch) => {
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
                type: ALL_FAN_FAVORITES_MOVIES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get All Fan Favorites Movies: ', error);
    }
    finally {
        setTimeout(() =>
            setLoading(false)
            , 1000)
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

