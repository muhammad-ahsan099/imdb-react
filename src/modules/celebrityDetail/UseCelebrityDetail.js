import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCelebrityDetail } from "../../redux/actions/CelebritiesAction";


export const UseCelebrityDetail = () => {

    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    console.log('Celeb id', id);


    const dispatch = useDispatch();
    const celbrityDetail = useSelector(state => state.CelebritiesReducer.celbrityDetail)


    useEffect(() => {
        dispatch(fetchCelebrityDetail(setLoading, id))
    }, [id])


    return [
        {
            loading,
            celbrityDetail,
        }
    ]
}