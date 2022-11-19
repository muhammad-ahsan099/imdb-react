import React from 'react'
import { IconButton, List } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

import Awards from '../../../assets/icons/awards.svg'
import AwardsActive from '../../../assets/icons/awardsActive.svg'
import TvIcon from '@material-ui/icons/Tv';
import Movies from '@material-ui/icons/TheatersRounded';
import Celebs from '@material-ui/icons/PeopleRounded';
import Watch from '@material-ui/icons/VideoLibraryRounded';
import Community from '@material-ui/icons/PublicRounded';
import Icon from "@material-ui/core/Icon";
import LOGO from '../../../assets/icons/logo.svg'
import PRO_LOGO from '../../../assets/icons/pro-logo.svg'



import useStyles from '../DrawerStyle'
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import { Link } from 'react-router-dom';

export default function WebDrawerOptions({ menuItems, handleDrawerToggle }) {
  const classes = useStyles();
  const { width } = UseWindowDimensions();

  return (
    <List className={classes.DrawerList}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2
        }}
      >
        <img src={LOGO} className={classes.logoImg} alt="imagelogo" />
        <IconButton
          onClick={handleDrawerToggle}
          color="primary"
          className={classes.crossIcon}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <div className={classes.TopDrawerOptions}>
        <div className={classes.linkDiv}>
          {
            menuItems.map((item, index) => {
              return (
                item?.heading === 'Movies'
                &&
                <>
                  <div className={classes.headingContainer}>
                    <Movies className={classes.listIcon} />
                    <h2 className={classes.h2}>{item?.heading}</h2>
                  </div>
                  {
                    item?.subTitles?.map((items, index) => {
                      return (
                        <Link to={items.path} className={classes.RouterLink}>
                          <div
                            onClick={handleDrawerToggle}
                            key={index}
                          >
                            <ul>
                              <li className={classes.linkTag}>{items?.title}</li>
                            </ul>
                          </div>
                        </Link>

                      )
                    })
                  }
                </>
              )

            })
          }
        </div>

        <div className={classes.linkDiv}>
          {
            menuItems?.map((item, index) => {
              return (
                item?.heading === 'TV Shows' ? (
                  <>
                    <div className={classes.headingContainer} >
                      <TvIcon className={classes.listIcon} />
                      <h2 className={classes.h2}>{item?.heading}</h2>
                    </div>
                    {
                      item?.subTitles?.map((items, index) => {
                        return (
                          <Link to={items?.path} className={classes.RouterLink}>
                            <div
                              onClick={handleDrawerToggle}
                              key={index}
                            >
                              <ul>
                                <li className={classes.linkTag}>{items?.title}</li>
                              </ul>
                            </div>
                          </Link>

                        )
                      })
                    }
                  </>
                ) :
                  item?.heading === 'Watch' ? (
                    <>
                      <div>
                        <div className={classes.headingContainer} >
                          <Watch className={classes.listIcon} />
                          <h2 className={classes.h2}>{item?.heading}</h2>
                        </div>

                      </div>
                      {
                        item?.subTitles?.map((items, index) => {
                          return (
                            <Link to={items.path} className={classes.RouterLink}>
                              <div
                                onClick={handleDrawerToggle}
                                key={index}
                              >
                                <ul>
                                  <li className={classes.linkTag}>{items?.title}</li>
                                </ul>
                              </div>
                            </Link>

                          )
                        })
                      }
                    </>) :
                    <></>
              )

            })
          }
        </div>
        <div className={classes.linkDiv}>
          {
            menuItems.map((item, index) => {
              return (
                item?.heading === 'Awards & Events'
                &&
                <>
                  <div className={classes.headingContainer} key={index}>
                    <Icon className={classes.listIcon}>
                      <img
                        src={AwardsActive}
                        alt="icons"
                      />
                    </Icon>
                    <h2 className={classes.h2}>{item?.heading}</h2>
                  </div>
                  {
                    item?.subTitles?.map((items, index) => {
                      return (
                        <Link to={items.path} className={classes.RouterLink}>
                          <div
                            onClick={handleDrawerToggle}
                            key={index}
                          >
                            <ul>
                              <li className={classes.linkTag}>{items?.title}</li>
                            </ul>
                          </div>
                        </Link>

                      )
                    })
                  }
                </>
              )

            })
          }
        </div>
        <div className={classes.linkDiv}>
          {
            menuItems.map((item, index) => {
              return (
                item?.heading === 'Celebs'
                &&
                <>
                  <div className={classes.headingContainer} >
                    <Celebs className={classes.listIcon} />
                    <h2 className={classes.h2}>{item?.heading}</h2>
                  </div>

                  {
                    item?.subTitles?.map((items, index) => {
                      return (
                        <Link to={items.path} className={classes.RouterLink}>
                          <div
                            onClick={handleDrawerToggle}
                            key={index}
                          >
                            <ul>
                              <li className={classes.linkTag}>{items?.title}</li>
                            </ul>
                          </div>
                        </Link>

                      )
                    })
                  }
                </>
              )

            })
          }
        </div>
        <div className={classes.linkDiv}>
          {
            menuItems.map((item, index) => {
              return (
                item?.heading === 'Community'
                &&
                <>
                  <div className={classes.headingContainer} >
                    <Community className={classes.listIcon} />
                    <h2 className={classes.h2}>{item?.heading}</h2>
                  </div>
                  {
                    item?.subTitles?.map((items, index) => {
                      return (
                        //  <Link to={item.path} className={classes.RouterLink}> */}
                        <div
                          onClick={handleDrawerToggle}
                          key={index}
                        >
                          <ul>
                            <li className={classes.linkTag}>{items?.title}</li>
                          </ul>
                        </div>
                        //  </Link>  

                      )
                    })
                  }
                </>
              )

            })
          }
        </div>



      </div>
    </List>)
}
