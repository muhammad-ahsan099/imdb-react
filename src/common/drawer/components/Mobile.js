import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from '../DrawerStyle';
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import { commonColor } from '../../../constants/colors';
import { IconButton, ListItemIcon } from '@material-ui/core';


export default function MobileDrawerOptions({ menuItems, handleDrawerToggle }) {
    const classes = useStyles();
    const { width } = UseWindowDimensions();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const Accordion = withStyles({
        root: {
            border: '0px',
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
                backgroundColor: "transparent",
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    const AccordionSummary = withStyles({
        root: {
            border: '0px',
            boxShadow: 'none',
            backgroundColor: commonColor.appBar,
            minHeight: 40,
            maxHeight: 40,
            '&$expanded': {
                minHeight: 40,
            },
        },
        content: {
            '&$expanded': {
                margin: '0',
            },
        },
        expanded: {},
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
        root: {
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: commonColor.appBar,
            paddingLeft: 12,
            // borderBottom: `1px solid ${commonColor.placeholderTextColor}`,
            padding: 0,
        },
    }))(MuiAccordionDetails);

    return (
        <>
            <div className={classes.imgMobBG} >
                <div />
                <IconButton
                    onClick={handleDrawerToggle}
                    color="primary"
                // className={classes.crossIcon}
                >
                    <CloseIcon style={{ color: '#fff' }} />
                </IconButton>
            </div>

            <div className={classes.linkDiv}>
                {
                    menuItems.map((item, index) => {
                        return (
                            item?.heading
                            &&
                            <>
                                <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <div className={classes.headingContainer}>
                                            <ListItemIcon className={expanded === index ? classes.listIcon : classes.listIconActive} >
                                                {item?.icon}
                                            </ListItemIcon>
                                            <h2 className={expanded === index ? classes.h2Active : classes.h2}>{item?.heading}</h2>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        {
                                            item?.subTitles?.map((items, index) => {
                                                return (
                                                    //  <Link to={item.path} className={classes.RouterLink}> */}
                                                    <div
                                                        // onClick={width < 960 ? handleDrawerToggle : null}
                                                        key={index}
                                                    >
                                                        <ul style={{ marginTop: 0, marginBottom: 10 }}>
                                                            <li className={classes.linkTag}>{items?.title}</li>
                                                        </ul>
                                                    </div>
                                                    //  </Link>  
                                                )
                                            })
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            </>
                        )

                    })
                }
            </div>
        </>
    )
}
