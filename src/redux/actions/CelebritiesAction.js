import { CELEBRITY_BIRTHDAY } from "../type/Type"
import axios from "axios";
import { endPoint } from '../endPoint/EndPoint';

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