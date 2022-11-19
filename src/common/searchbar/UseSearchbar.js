
import axios from "axios";
import { useEffect, useState } from "react"
import { endPoint } from "../../redux/endPoint/EndPoint";


export const UseSearchbar = () => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [searchActive, setSearchActive] = useState(false)
    const [mobShow, setMobShow] = useState(false)
    const [searchMovies, setSearchMovies] = useState([])

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleToggle = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        setOpen(false);
    };

    useEffect( () => {

        const SearchHandler = async () => {
            if (query !== '') {
                let queryText = query.split(' ').join('+')
                try {
                    setLoading(true);
                    let request = {
                        method: 'get',
                        url: `${endPoint}movies/search-movies/?search=${queryText}`,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    };
                    let res = await axios(request);
                    console.log('Res of Searchbar: ', res.data);
                    console.log('queryText: ', queryText);

                    if (res.data) {
                        setSearchMovies(res?.data)
                    }
                }
                catch (error) {
                    console.log('Error at Search Movies: ', error);
                }
                finally {
                    setLoading(false)
                }
            }
        }

        SearchHandler();
    }, [query])

    return [
        {
            loading,
            query, setQuery,
            searchActive, setSearchActive,
            mobShow, setMobShow,
            anchorEl, setAnchorEl,
            open, setOpen,
            handleToggle,
            handleClose,
            searchMovies,
        }
    ]
}