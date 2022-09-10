import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllfanFavoriteMovies, fetchAllTopPickMovies } from '../../redux/actions/LandingPageAction';

export const UseWhatToWatch = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTopPickMovies(setLoading))
        dispatch(fetchAllfanFavoriteMovies(setLoading))
    }, [])

    const allTopPickMovies = useSelector(state => state.LandingPageReducer.allTopPickMovies)
    const allFanFavoritesMovies = useSelector(state => state.LandingPageReducer.allFanFavoritesMovies)

    return [
        {
            loading,
            allTopPickMovies,
            allFanFavoritesMovies
        }
    ]
}