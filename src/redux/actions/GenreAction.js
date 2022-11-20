import { GENRE_LIST, SIGNLE_GENRE } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';


export const fetchGenreList = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/genre/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data?.success) {
            dispatch({
                type: GENRE_LIST,
                payload: res?.data?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Genre Lists: ', error);
    }
    finally {
        setTimeout(() =>
            setLoading(false)
            , 1000)
    }
}


export const fetchSingleGenre = (setLoading,title) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}movies/search/title/?title__in=${title}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        console.log('Fetch single Genre: ', res.data);

        if (res.data) {
            dispatch({
                type: SIGNLE_GENRE,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Single Genre: ', error);
    }
    finally {
        setLoading(false)
    }
}

