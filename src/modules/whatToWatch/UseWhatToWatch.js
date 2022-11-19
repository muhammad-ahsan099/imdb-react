import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllfanFavoriteMovies, fetchAllTopPickMovies } from '../../redux/actions/LandingPageAction';
import { fetchMostPopularMovies } from '../../redux/actions/MovieDetailAction';

export const UseWhatToWatch = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTopPickMovies(setLoading))
        dispatch(fetchAllfanFavoriteMovies(setLoading))
        dispatch(fetchMostPopularMovies(setLoading))

    }, [])

    const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const allTopPickMovies = useSelector(state => state.LandingPageReducer.allTopPickMovies)
    const allFanFavoritesMovies = useSelector(state => state.LandingPageReducer.allFanFavoritesMovies)
    const mostPopularMovies = useSelector(state => state.MovieDetailReducer.mostPopularMovies)
    let userWishlist = useSelector(state => state.AuthReducer.userProfile);
    userWishlist = userWishlist?.user_wishlist
  

    return [
        {
            loading,
            isUserLoggedIn,
            allTopPickMovies,
            allFanFavoritesMovies,
            mostPopularMovies,
            userWishlist,
        }
    ]
}