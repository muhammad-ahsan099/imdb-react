import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchMovieDetail } from "../../redux/actions/MovieDetailAction"


export const UseTrailerPage = () => {
    const [loading, setLoading] = useState(false);
    let { imdb_id, id } = useParams();

    const dispatch = useDispatch();
    const movieDetail = useSelector(state => state.MovieDetailReducer.movieDetail)


    useEffect(() => {
        dispatch(fetchMovieDetail(setLoading, id))
    }, [imdb_id, id])

    return [
        {
            loading,
            movieDetail,
        }
    ]
}