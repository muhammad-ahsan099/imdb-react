
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGenreList } from "../../redux/actions/GenreAction";


export const UseGenreList = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const genreList = useSelector(state => state.GenreReducer.genreList)
    console.log('genreList', genreList);

    useEffect(() => {
        dispatch(fetchGenreList(setLoading))
    }, [])

    return [
        {
            loading,
            genreList,
        }
    ]
}