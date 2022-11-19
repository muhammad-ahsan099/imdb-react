import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import UseWindowDimensions from "../../common/customHooks/UseWindowDimensions"
import { fetchAllTopPickMovies } from "../../redux/actions/LandingPageAction"
import { deleteRatingToMovie, fetchMovieDetail, ratingToMovie, updateRatingToMovie } from "../../redux/actions/MovieDetailAction"


export const UseDetail = () => {
    const [movieId, setMovieId] = useState(0)
    const [dropDown, setDropDown] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [rating, setRating] = useState('')
    const [ratingId, setRatingId] = useState()
    const [savedRating, setSavedRating] = useState('')
    const [openRatingModal, setOpenRatingModal] = useState(false)
    const [openListModal, setOpenListModal] = useState(false)

    const width = UseWindowDimensions()
    const [loading, setLoading] = useState(false);
    let { imdb_id, id } = useParams();


    const dispatch = useDispatch();
    const allTopPickMovies = useSelector(state => state.LandingPageReducer.allTopPickMovies)
    const movieDetail = useSelector(state => state.MovieDetailReducer.movieDetail)
    const userProfile = useSelector(state => state.AuthReducer.userProfile)

    useEffect(() => {
        if (userProfile?.user_rating?.length >= 0) {
            const filterRating = userProfile?.user_rating?.filter(item => item?.movie === movieDetail?.id)
            if (filterRating.length === 0) {
                setSavedRating('Rate')
            }
            else {
                setRatingId(filterRating[0]?.id)
                setRating(filterRating[0]?.ratings)
                setSavedRating(filterRating[0]?.ratings)
            }
        }
    }, [userProfile, movieDetail])

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
        return hours + ' hours ' + minutes + ' minutes ';
    }

    // var SavedRating = {};
    const CurrentMovieRating = (id) => {
        // if (userProfile?.user_rating?.length >= 0) {
        //     if (!check) {
        //         const filterRating = userProfile?.user_rating?.filter(item => item?.movie === id)
        //         if (filterRating.length === 0) {
        //             return 'Rate'
        //         }
        //         else {
        //             SavedRating = filterRating[0]
        //             return filterRating[0]?.ratings + '/10'
        //         }
        //     }
        // }
    }

    const Rating = () => {
        const creds = {
            user: userProfile?.id,
            ratings: rating,
            movie: movieDetail?.id
        }

        dispatch(ratingToMovie(setLoading, creds))
        setTimeout(() =>
            setOpenRatingModal(false)
            , 500)
    }
    const UpdateRating = () => {
        const creds = {
            user: userProfile?.id,
            ratings: rating,
            movie: movieDetail?.id
        }

        dispatch(updateRatingToMovie(setLoading, creds, ratingId))
        setTimeout(() =>
            setOpenRatingModal(false)
            , 500)
    }

    const RemoveRating = () => {
        dispatch(deleteRatingToMovie(setLoading, ratingId))
        setTimeout(() =>
            setOpenRatingModal(false)
            , 500)
    }


    return [
        {
            dropDown, setDropDown,
            drawerOpen, setDrawerOpen,
            rating, setRating,
            savedRating, setSavedRating,
            openRatingModal, setOpenRatingModal,
            openListModal, setOpenListModal,
            movieDetail,
            time_convert,
            allTopPickMovies,
            Rating,
            RemoveRating,
            UpdateRating,
            userProfile,
            CurrentMovieRating,
        }
    ]
}