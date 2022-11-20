import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme, withStyles } from "@material-ui/core/styles";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Select from "@material-ui/core/Select";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Badge, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import UseWindowDimensions from "../customHooks/UseWindowDimensions";
import { USER_LOGO } from "../../constants/icons";
import LOGO from '../../assets/icons/logo.svg'
import PRO_LOGO from '../../assets/icons/pro-logo.svg'
import BOOKMARK from '../../assets/icons/bookmark.svg'
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from "./DrawerStyle";
import CloseIcon from '@material-ui/icons/Close';
import Awards from '../../assets/icons/awards.svg'
import AwardsActive from '../../assets/icons/awardsActive.svg'
import TvIcon from '@material-ui/icons/Tv';
import Movies from '@material-ui/icons/TheatersRounded';
import Celebs from '@material-ui/icons/PeopleRounded';
import Watch from '@material-ui/icons/VideoLibraryRounded';
import Community from '@material-ui/icons/PublicRounded';
import { commonColor } from "../../constants/colors";
import MobileDrawerOptions from "./components/Mobile";
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";



import { UseDrawer } from "./UseDrawer";
import Searchbar from "../searchbar/Searchbar";
import PopperAccount from "../popperComponent/popperAccount/PopperAccount";
import PopperLanguage from "../popperComponent/popperLanguage/PopperLanguage";
import WebDrawerOptions from "./components/Web";
import PoopperIMDBPro from "../popperComponent/popperImdbPro/PopperImdbPro";

function DrawerComponent(props) {
  const { window } = props;
  const { width } = UseWindowDimensions();
  const classes = useStyles();
  const theme = useTheme();
  // const location = useLocation();

  const [
    {
      userProfile,
      isUserLoggedIn,
      menuItems,
      mobileOpen,
      handleDrawerToggle,
      accountOptions,
    },
  ] = UseDrawer();


  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [open, setOpen] = React.useState(0);
  const [remain, setRemain] = React.useState(false)

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const drawer = (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: mobileOpen === 'top' || mobileOpen === 'bottom',
      })}
      role="presentation">
      <div className={classes.sideToolbar} />
      <div>
        <Hidden mdUp>
          <MobileDrawerOptions
            menuItems={menuItems}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Hidden>

        <Hidden smDown>
          <WebDrawerOptions
            menuItems={menuItems}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Hidden>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // const dispatch = useDispatch();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar disableGutters={true}
            className={classes.Toolbar}
          >
            <div className={classes.logoDiv}>
              <Link to='/'>
                <img src={LOGO} className={classes.mainLogo} alt="imagelogo" />
              </Link>
              <Button
                variant='outlined'
                onClick={handleDrawerToggle}
                className={classes.menuButton}
                startIcon={<MenuIcon />}
              >
                <p className={classes.menuText}>
                  Menu
                </p>
              </Button>

              <IconButton
                onClick={handleDrawerToggle}
                className={classes.smallMenuScreen}
              >
                <MenuIcon />
              </IconButton>

            </div>

            <div className={classes.space} />
            {/* <div style={{display: 'flex', alignItems: 'center'}}> */}
            <Searchbar />
            <div className={classes.smallDivider} />
            <Hidden smDown>
              <PoopperIMDBPro />
              <div className={classes.divider} />
              <Link to='/user-watchlist' className={classes.link}>
                <Button
                  variant='outlined'
                  className={classes.menuButton}
                  startIcon={<BsFillBookmarkPlusFill style={{ height: 18, width: 18 }} />}
                >
                  <p className={classes.menuText}>
                    Watchlist
                  </p>
                  {/* {
                  isUserLoggedIn && */}
                  <Badge
                    classes={{ colorPrimary: classes.colorPrimary }}
                    color="primary"
                    overlap='rectangular'
                    className={classes.badge}
                    badgeContent={userProfile?.user_wishlist?.to_watch?.length}
                  />
                  {/* } */}
                </Button>
              </Link>
            </Hidden>

            {
              isUserLoggedIn ?
                <PopperAccount accountOptions={accountOptions} userName={userProfile?.name} />
                :
                <Link to='/registration' className={classes.link}>
                  <Button
                    variant='outlined'
                    className={classes.signInButton}
                  >
                    Sign&nbsp;In
                  </Button>
                </Link>
            }
            <PopperLanguage />

            {/* </div> */}
          </Toolbar>
        </AppBar>
      </div>

      <nav aria-label="mailbox folders">
        <Hidden mdUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden smDown>
          <Drawer
            classes={{
              paper: classes.drawerWeb,
            }}
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            container={container}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <p>dummy text</p>
      </main> */}
    </div>
  );
}

DrawerComponent.propTypes = {
  window: PropTypes.func,
};

export default DrawerComponent;
