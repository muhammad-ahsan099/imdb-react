import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchSingleGenre } from "../../redux/actions/GenreAction"


export const UseSignleGenre = () => {
    const [loading, setLoading] = useState(false);
    let { title } = useParams();

    const dispatch = useDispatch();
    const genre_collection = useSelector(state => state.GenreReducer.genre)
    const singleGenre = genre_collection[0]?.genre_movies

    useEffect(() => {
        dispatch(fetchSingleGenre(setLoading, title))
    }, [])

    return [
        {
            loading,
            title,
            singleGenre,
        }
    ]
}