import { CELEBRITY_BIRTHDAY, MOST_POPULAR_CELEBS, CELEBRITY_DETAIL } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';


export const fetchCelebrityDetail = (setLoading, id) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}actors/celebrity/${id}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data?.success) {
            dispatch({
                type: CELEBRITY_DETAIL,
                payload: res?.data?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Celebrities Birthday: ', error);
    }
    finally {
        setTimeout(() =>
            setLoading(false)
            , 1000)
    }
}


export const fetchCelebrityBirthday = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}actors/celebrities-today-dob/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data) {
            dispatch({
                type: CELEBRITY_BIRTHDAY,
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


export const fetchMostPopularCelebs = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}actors/popular-celebs/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data) {
            dispatch({
                type: MOST_POPULAR_CELEBS,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Most Popular Celebs: ', error);
    }
    finally {
        setTimeout(() =>
            setLoading(false)
            , 1000)
    }
}