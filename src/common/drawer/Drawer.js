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
import useStyles from "./DrawerStyle";
import { useTheme } from "@material-ui/core/styles";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Select from "@material-ui/core/Select";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import UseWindowDimensions from "../customHooks/UseWindowDimensions";
import { USER_LOGO } from "../../constants/icons";
import Tooltip from '@material-ui/core/Tooltip';
// import vector from "../../assets/icons/Vector.png";
// import logout from "../../assets/icons/logout.png";
// import infoIcon from "../../assets/icons/infoIcon.png";
// import logo from "../../assets/logo.png";

import { UseDrawer } from "./UseDrawer";
function DrawerComponent(props) {
  const { window } = props;
  const { width } = UseWindowDimensions();
  const classes = useStyles();
  const theme = useTheme();
  // const location = useLocation();

  const [
    {
      menuItems,
      mobileOpen,
      isMobileMenuOpen,
      mobileMoreAnchorEl,
      selectValue,
      selectOpen,
      handleDrawerToggle,
      handleMobileMenuClose,
      handleMobileMenuOpen,
      handleChange,
      handleClose,
      handleOpen,
    },
  ] = UseDrawer();
  const [age, setAge] = React.useState("omarfarukuiux.50");
  const [open, setOpen] = React.useState(false);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit" disableFocusRipple={false}>
          <img src={USER_LOGO} width={18} height={18} alt="imagelogo" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          {/* <img src={vector} width={18} height={18} alt="imagelogo" /> */}
          <p>vector icon</p>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <img src={logout} width={18} height={18} alt="imagelogo" /> */}
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
  const drawer = (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: mobileOpen === 'top' || mobileOpen === 'bottom',
      })}
      role="presentation">
      <div className={classes.sideToolbar} />
      <List style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div className={classes.sidrbarBottomCard}>
          <p className={classes.sidrbarBottomCardText}>PROJECT:</p>
          <Select
            id="demo-simple-select-outlined"
            classes={{ root: classes.selectRoot }}
            className={classes.formControl}
            disableUnderline
            open={selectOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            value={selectValue}
            onChange={handleChange}
            displayEmpty={false}
            native
            style={{
              fontSize: 18,
              color: "#091E42",
              fontFamily: "Roboto-SemiBold",
            }}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option value={10}>omarfarukuiux.50</option>
            <option value={9}>omarfarukuiux.40</option>
            <option value={8}>omarfarukuiux.30</option>
            <option value={7}>omarfarukuiux.20</option>

          </Select>

          <Button
            variant="outlined"
            disableRipple={true}
            className={classes.sidebarBtn}
          >
            Account 12
          </Button>
        </div>

        {menuItems.map((item) => {
          return (
            // <Link to={item.path} className={classes.RouterLink}>
            <ListItem
              button
              onClick={width < 960 ? handleDrawerToggle : null}
              key={item.text}
            // className={[
            //   location.pathname === item.path ? classes.active : null,
            // ]}
            >
              <Icon
                classes={{ root: classes.iconRoot, path: { fill: "red" } }}
              >
                {/* <img
                    width={20}
                    height={21}
                    className={clsx(
                      classes.icons,
                      // location.pathname === item.path && classes.activeImg
                    )}
                    src={
                      location.pathname === item.path
                        ? item.iconWhite
                        : item.icon
                    }
                    alt="icons"
                  /> */}
              </Icon>

              <ListItemText
                style={{ fontFamily: "Poppins-Medium" }}
                className={clsx(
                  classes.listItemText,
                  // location.pathname === item.path && classes.activeText
                )}
                primary={item.text}
              />
            </ListItem>
            // </Link>
          );
        })}

        <div className={classes.sidrbarBottomDiv}>
          <div className={classes.sidrbarBottomDivLeft}>
            <div className={classes.sidrbarBottomDivInner}>
              <p className={classes.sidrbarDivLeftText}>Credits</p>
              <p className={classes.sidrbarDivLeftText}>$300</p>
            </div>

            <div className={classes.sidrbarBottomDivInnerTwo}>
              <p className={classes.sidrbarDivLeftText}>Billing</p>
              <p className={classes.sidrbarDivLeftText}>$44.68</p>
            </div>
          </div>
          {/* <img src={infoIcon} width={16} height={16} alt="imagelogo" /> */}
          <p>info icon</p>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // const dispatch = useDispatch();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <img src={logo} className={classes.logoImg} alt="imagelogo" /> */}
              <p style={{ color: '#000' }}>ahsan logo</p>
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.headerRightTextContainer}>
                <p style={{ color: "#091E42", fontFamily: "Roboto-Medium" }}>
                  <b>3 weeks</b> remaining in your free trial
                </p>
                {/* <img
                  src={infoIcon}
                  width={16}
                  height={16}
                  style={{ marginLeft: 8 }}
                  alt="imagelogo"
                /> */}
              </div>
              <p className={classes.line}>{""}</p>
              <Tooltip title='Profile'>
                <IconButton disableFocusRipple={false}>
                  <img src={USER_LOGO} width={18} height={18} alt="imagelogo" />
                </IconButton>
              </Tooltip>
              <Tooltip title='Dummy'>
                <IconButton disableFocusRipple={false}>
                  {/* <img src={vector} width={18} height={18} alt="imagelogo" /> */}
                </IconButton>
              </Tooltip>
              <Tooltip title='Logout'>
                <IconButton
                  // onClick={()=>dispatch(userLogout())}
                  edge="end"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  disableFocusRipple={false}
                >
                  {/* <img src={logout} width={18} height={18} alt="imagelogo" /> */}
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="primary"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
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

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Hidden mdUp implementation="css">
          <p>MdDown lorem ipsum text</p>
        </Hidden>
        <Hidden smDown implementation="css">
          <p>SmUp lorem ipsum text</p>
        </Hidden>

      </main>
    </div>
  );
}

DrawerComponent.propTypes = {
  window: PropTypes.func,
};

export default DrawerComponent;
