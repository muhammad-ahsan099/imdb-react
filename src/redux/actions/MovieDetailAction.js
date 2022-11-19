import { MOVIE_DETAIL, MOST_POPULAR_MOVIES, TOP_250_MOVIES, ADD_RATING, UPDATE_RATING, DELETE_RATINGS, IMDB_ORIGINAL } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';
import { getToken } from "../../common/localStorage/LocalStorage";

export const fetchMovieDetail = (setLoading, id) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/movie/${id}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        
        if (res.data?.success) {
            dispatch({
                type: MOVIE_DETAIL,
                payload: res?.data?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Celebrities Birthday: ', error);
    }
    finally {
        setLoading(false)
    }
}


export const fetchMostPopularMovies = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/imdb-most-popular/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: MOST_POPULAR_MOVIES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Most Popular Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchTop250Movies = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/imdb-top-250-movies/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: TOP_250_MOVIES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Top 250 Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const ratingToMovie = (setLoading, creds) => async (dispatch) => {
    try {
        setLoading(true);
        const {access_token} = getToken()
        let request = {
            method: 'post',
            url: `${endPoint}movies/rating/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
            data: creds
        };
        let res = await axios(request);
        
        if (res.data.success) {
            dispatch({
                type: ADD_RATING,
                payload: res?.data?.success,
            })
        }
    }
    catch (error) {
        console.log('Error at Rating to Movie: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const updateRatingToMovie = (setLoading, creds, id) => async (dispatch) => {
    try {
        setLoading(true);
        const {access_token} = getToken()
        let request = {
            method: 'put',
            url: `${endPoint}movies/rating/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
            data: creds
        };
        let res = await axios(request);
        console.log('Res Update:', res.data);
        
        if (res.data.success) {
            dispatch({
                type: UPDATE_RATING,
                payload: res?.data?.success,
            })
        }
    }
    catch (error) {
        console.log('Error at Update Ratings to Movie: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const deleteRatingToMovie = (setLoading,id) => async (dispatch) => {
    try {
        setLoading(true);
        const {access_token} = getToken()
        let request = {
            method: 'delete',
            url: `${endPoint}movies/rating/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
        };
        let res = await axios(request);
        console.log('Del Rating Res:', res.data);
        
        if (res.data.success) {
            dispatch({
                type: DELETE_RATINGS,
                payload: res?.data?.success,
            })
        }
    }
    catch (error) {
        console.log('Error at Update Ratings to Movie: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const imdbOriginal = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/imdb-original/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        
        if (res.data) {
            dispatch({
                type: IMDB_ORIGINAL,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get IMDB original Movies: ', error);
    }
    finally {
        setLoading(false)
    }
}







