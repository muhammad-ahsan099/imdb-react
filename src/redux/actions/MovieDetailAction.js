import { MOVIE_DETAIL } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';

export const fetchMovieDetail = (setLoading, id) => async (dispatch) => {
    try {
        console.log('id at action: ', id);
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