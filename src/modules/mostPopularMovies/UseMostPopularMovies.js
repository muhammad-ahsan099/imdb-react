import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMostPopularMovies } from "../../redux/actions/MovieDetailAction"


export const UseMostPopularMovies = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const mostPopularMovies = useSelector(state => state.MovieDetailReducer.mostPopularMovies)

    useEffect(() => {
        dispatch(fetchMostPopularMovies(setLoading))
    }, [])

    return [
        {
            loading,
            mostPopularMovies,
        }
    ]
}