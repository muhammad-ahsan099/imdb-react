import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import UseWindowDimensions from "../../common/customHooks/UseWindowDimensions"
import { fetchAllTopPickMovies } from "../../redux/actions/LandingPageAction"
import { fetchMovieDetail } from "../../redux/actions/MovieDetailAction"


export const UseDetail = () => {
    const [movieId, setMovieId] = useState(0)
    const [dropDown, setDropDown] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const [openRatingModal, setOpenRatingModal] = useState(false)
    const [openListModal, setOpenListModal] = useState(false)
    const width = UseWindowDimensions()
    const [loading, setLoading] = useState(false);
    let { imdb_id, id } = useParams();
    console.log('imdb id, id', imdb_id, id);


    const dispatch = useDispatch();
    const movieDetail = useSelector(state => state.MovieDetailReducer.movieDetail)
    const allTopPickMovies = useSelector(state => state.LandingPageReducer.allTopPickMovies)


    useEffect(() => {
        setMovieId(id)
        dispatch(fetchMovieDetail(setLoading, id))
        dispatch(fetchAllTopPickMovies(setLoading))
    }, [imdb_id, id])

    useEffect(() => {
        if (width.width > 600) {
            setDropDown(true)
        } else {
            setDropDown(false)
        }
    }, [width])

    const time_convert = (num) => {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return hours+ ' hours ' + minutes + ' minutes ';
    }

    return [
        {
            dropDown, setDropDown,
            drawerOpen, setDrawerOpen,
            rating, setRating,
            openRatingModal, setOpenRatingModal,
            openListModal, setOpenListModal,
            movieDetail,
            time_convert,
            allTopPickMovies,
        }
    ]
}