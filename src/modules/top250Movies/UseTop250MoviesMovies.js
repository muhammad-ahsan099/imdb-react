import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTop250Movies } from "../../redux/actions/MovieDetailAction"


export const UseTop250MoviesMovies = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const top250Movies = useSelector(state => state.MovieDetailReducer.top250Movies)
    console.log('top250Movies', top250Movies);

    useEffect(() => {
        dispatch(fetchTop250Movies(setLoading))
    }, [])

    return [
        {
            loading,
            top250Movies,
        }
    ]
}