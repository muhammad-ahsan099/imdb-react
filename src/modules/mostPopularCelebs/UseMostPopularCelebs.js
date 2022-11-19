
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMostPopularCelebs } from "../../redux/actions/CelebritiesAction";


export const UseMostPopularCelebs = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const popularCelebs = useSelector(state => state.CelebritiesReducer.popularCelebs)
    console.log('popularCelebs', popularCelebs);

    useEffect(() => {
        dispatch(fetchMostPopularCelebs(setLoading))
    }, [])

    return [
        {
            loading,
            popularCelebs,
        }
    ]
}