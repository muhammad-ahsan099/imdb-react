import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCelebrityBirthday } from '../../redux/actions/CelebritiesAction';
import { fetchfanFavoriteMovies, fetchHomeMoviesTop, fetchPrimeVideos, fetchRecentReleasedMovies, fetchRecentUpcomingMovies, fetchTopPickMovies } from '../../redux/actions/LandingPageAction';

export const UseLandingPage = () => {

    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    const homeMoviesTop = useSelector(state => state.LandingPageReducer.homeMoviesTop)
    const topPickMovies = useSelector(state => state.LandingPageReducer.topPickMovies)
    const fanFavoritesMovies = useSelector(state => state.LandingPageReducer.fanFavoritesMovies)
    const recentReleasedMovies = useSelector(state => state.LandingPageReducer.recentReleasedMovies)
    const recentUpcomingMovies = useSelector(state => state.LandingPageReducer.recentUpcomingMovies)
    const primeVideos = useSelector(state => state.LandingPageReducer.primeVideos)
    const celebritiesBirthday = useSelector(state => state.CelebritiesReducer.celebritiesBirthday)

    useEffect(() => {
        dispatch(fetchHomeMoviesTop(setLoading))
        dispatch(fetchTopPickMovies(setLoading))
        dispatch(fetchfanFavoriteMovies(setLoading))
        dispatch(fetchRecentReleasedMovies(setLoading))
        dispatch(fetchRecentUpcomingMovies(setLoading))
        dispatch(fetchPrimeVideos(setLoading))
        dispatch(fetchCelebrityBirthday(setLoading))
    }, [])




    return [
        {
            loading,
            homeMoviesTop,
            topPickMovies,
            fanFavoritesMovies,
            recentReleasedMovies,
            recentUpcomingMovies,
            primeVideos,
            celebritiesBirthday,
        }
    ]
}