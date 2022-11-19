import { Box, Button, Container, Grid, IconButton, MenuItem, Paper, TextField, } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./UserListStyle";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import SearchIcon from '@material-ui/icons/Search';

export default function UserList() {
    const Styles = useStyles();
    const [listType, setListType] = React.useState('Movies');

    const handleChange = (event) => {
        setListType(event.target.value);
    };


    return (
        <Container style={{ backgroundColor: 'rgb(214, 215,209' }}>
            <Grid container justifyContent={'center'}>
                {/* ist content */}
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Paper component={Box} className={Styles.istContainer}>
                        <div className={Styles.istContentDiv}>
                            {/* Headings */}
                            <div className={Styles.headingDiv}>
                                {/* <div>
                                    <span className={Styles.secondHeading}>Your Watchlist</span> <br />
                                    <span className={Styles.secondHeadingDes}>Private</span>
                                </div> */}
                                <div>
                                    <Button
                                        color='primary'
                                        variant='contained'
                                    >
                                        Done
                                    </Button>
                                    <br />
                                </div>
                            </div>

                            {/* underline */}
                            <hr />

                            <div>
                                <TextField
                                    id="standard-full-width"
                                    label="List Title"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    error={true}
                                    helperText="List title cannot be empty."
                                />
                                <TextField
                                    id="standard-full-width"
                                    label="Description"
                                    style={{ margin: 8 }}
                                    placeholder=""
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    value={listType}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    style={{ margin: 8 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    error={true}
                                    helperText="Can't Empty"

                                >
                                    <MenuItem value={'Movies'}>
                                        {'Movies'}
                                    </MenuItem>
                                    <MenuItem value={'People'}>
                                        {'People'}
                                    </MenuItem>
                                </TextField>
                            </div>


                            {/* main content */}
                            <div className={Styles.mainContainer}>
                                <div>
                                    <span className={Styles.labelHeading}>8 Titles</span>
                                </div>
                                <div>
                                    <label htmlFor="" className={Styles.labelHeading}>Sort by : </label>
                                    <select name="" id="">
                                        <option value="">Ranking</option>
                                        <option value="">IMDb Rating</option>
                                        <option value="">Release Date</option>
                                        <option value="">Number of Ratings</option>
                                        <option value="">Your Rating</option>
                                    </select>
                                    <IconButton size='small' className={Styles.ImportExportIcon}>
                                        <ImportExportIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <hr />

                            {/* cards */}
                            {
                                [1, 2].map((items, index) => {
                                    return (
                                        <>
                                            <div className={Styles.cardMainContainer}>

                                                <div className={Styles.poster} >
                                                </div>

                                                <div className={Styles.rightContainer}>
                                                    <div>
                                                        <p className={Styles.head}>The Menu</p>
                                                        <div>
                                                            <span className={Styles.movieText}>2022</span> <span className={Styles.movieText}>|</span> <span className={Styles.movieText} >2022</span>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.ratingContainer}>
                                                        <StarRoundedIcon className={Styles.iconStar} />
                                                        <span className={Styles.cardRatingTitle}>{'7.0 '}(98700)</span>

                                                    </div>

                                                    <div className={Styles.ratingContainer}>
                                                        <StarRoundedIcon className={Styles.iconBlueStar} />
                                                        <span className={Styles.cardRatingTitle}>{'7.0'}</span>
                                                    </div>

                                                    <div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>Added<br/> {new Date().toISOString().split('T')[0]}</div>

                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }


                            <div className={Styles.searchContainer}>
                                <p className={Styles.searchText}>Add a movie or TV show to this list:</p>
                                <div className={Styles.searchBar}>
                                    <input 
                                    type={'text'}
                                    className={Styles.search}
                                    />
                                    <SearchIcon style={{color: '#000'}} />
                                </div>
                            </div>

                        </div>
                    </Paper>
                </Grid>

                {/* second content */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper component={Box} className={Styles.secondContentDiv}>
                        <h2>You have seen</h2>
                        <p className={Styles.seenMovies}><span className={Styles.seenText}>2</span> / 250  &nbsp;&nbsp;(0%)</p>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
