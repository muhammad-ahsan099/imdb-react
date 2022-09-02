import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarUnfillIcon from '@material-ui/icons/StarBorderOutlined';
import StarFillIcon from '@material-ui/icons/StarOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useStyles } from './MovieCardStyle';
import { IconButton } from '@material-ui/core';

export default function MovieCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="274"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className={classes.topSection}>
                        <div className={classes.rating}>
                            <StarFillIcon fontSize='small' className={classes.fillIcon} />
                            <Typography className={classes.ratingText}>
                                7.0
                            </Typography>
                        </div>
                        <StarUnfillIcon fontSize='small' color='primary' />
                    </div>
                    <Typography className={classes.Typography} variant="h6" component="h6">
                        Lizard
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions classes={{ root: classes.cardAction }}>
                <Button
                    variant='outlined'
                    className={classes.menuButton}
                    startIcon={<AddIcon />}
                >
                    Menu
                </Button>
                <div className={classes.bottomSection}>
                    <Button
                        variant='outlined'
                        className={classes.trailerButton}
                        startIcon={<PlayArrowRoundedIcon />}
                    >
                        <p className={classes.menuText}>
                            Trailer
                        </p>
                    </Button>

                    <IconButton
                        size={'large'}
                        className={classes.smallMenuScreen}
                    >
                        <InfoOutlinedIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
}
