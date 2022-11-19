import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imdbOriginal } from '../../redux/actions/MovieDetailAction'

export const UseExclusiveVideos = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const exclusiveVideos = [
        {
            img: require('../../assets/images/cardImg44.jpg'),
            time: '3:28',
            des: `Sydney Sweeney's Rise to Fame`
        },
        {
            img: require('../../assets/images/cardImg45.jpg'),
            time: '2:30',
            des: `'The Invitation' Cast Ask Each Other Anything`
        },
        {
            img: require('../../assets/images/cardImg46.jpg'),
            time: '2:19',
            des: `Idris Elba and the 'Beast' Cast Share Wild Encounters`
        },
        {
            img: require('../../assets/images/cardImg47.jpg'),
            time: '3:21',
            des: `The Rise of "House of the Dragon" Star Olivia Cooke`
        },
        {
            img: require('../../assets/images/cardImg48.jpg'),
            time: '2:54',
            des: `Why "She-Hulk" Breaks the Fourth Wall`
        },
        {
            img: require('../../assets/images/cardImg49.jpg'),
            time: '1:49',
            des: `What to Watch This Fall: "Andor" and More`
        }
    ]

    useEffect(() => {
        dispatch(imdbOriginal(setLoading))
    }, [])

    const imdbOriginalMovie = useSelector(state => state.MovieDetailReducer.imdbOriginal)

    console.log('imdbOriginalMovie', imdbOriginalMovie);

    return [{loading, exclusiveVideos, imdbOriginalMovie}]

}