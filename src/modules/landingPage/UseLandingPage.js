import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../common/localStorage/LocalStorage';
import { fetchCelebrityBirthday } from '../../redux/actions/CelebritiesAction';
import { fetchfanFavoriteMovies, fetchHomeMoviesTop, fetchPrimeVideos, fetchRecentReleasedMovies, fetchRecentUpcomingMovies, fetchTopPickMovies } from '../../redux/actions/LandingPageAction';

export const UseLandingPage = () => {

    const [loading, setLoading] = useState(false);
    const page = '?page=1';

    const dispatch = useDispatch();
    const homeMoviesTop = useSelector(state => state.LandingPageReducer.homeMoviesTop)
    let topPickMovies = useSelector(state => state.LandingPageReducer.topPickMovies)
    topPickMovies = topPickMovies?.results ?
        topPickMovies?.results :
        topPickMovies
    let fanFavoritesMovies = useSelector(state => state.LandingPageReducer.fanFavoritesMovies)
    fanFavoritesMovies = fanFavoritesMovies?.results ?
        fanFavoritesMovies?.results :
        fanFavoritesMovies
    const recentReleasedMovies = useSelector(state => state.LandingPageReducer.recentReleasedMovies)
    const recentUpcomingMovies = useSelector(state => state.LandingPageReducer.recentUpcomingMovies)
    const primeVideos = useSelector(state => state.LandingPageReducer.primeVideos)
    const celebritiesBirthday = useSelector(state => state.CelebritiesReducer.celebritiesBirthday)

    useEffect(() => {
        dispatch(fetchHomeMoviesTop(setLoading,))
        dispatch(fetchTopPickMovies(setLoading, page))
        dispatch(fetchfanFavoriteMovies(setLoading, page))
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