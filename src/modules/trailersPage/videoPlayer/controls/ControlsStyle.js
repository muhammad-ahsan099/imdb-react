import { makeStyles, Slider, withStyles } from "@material-ui/core";
import { commonColor } from "../../../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    controlsWrapper: {
      visibility: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "100%",
      background: "rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  
    button: {
      margin: theme.spacing(1),
    },
    controlIcons: {
      color: "#777",
      fontSize: 100,
      transform: "scale(0.9)",
      "&:hover": {
        color: "#fff",
        transform: "scale(1)",
        backgroundColor: 'transparent'
      },
    },
  
    bottomIcons: {
      color: "#fff",
      "&:hover": {
        color: "#fff",
      },
    },
  
    volumeSlider: {
      width: 54,
      color: '#fff',
      marginLeft: 12,
    },
    popper: {
      backgroundColor: commonColor.appBar,
      borderRadius: 0,
      color: 'white',
      fontWeight: '500',
      minWidth: 44,
      '&:hover': {
          color: '#ffffff',
          backgroundColor :'rgba(0,0,0, 0.7)',
      },    
    },
    closeBtn: {
      textTransform: 'none',
      color: '#848484',
      '&:hover': {
        color: '#ffffff',
    },
    }
  }));
  
export const PrettoSlider = withStyles({
    root: {
      height: 5,
      marginTop: -40
    },
    thumb: {
      height: 14,
      width: 14,
      backgroundColor: "#fff",
      border: "none",
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 5,
      borderRadius: 0,
      backgroundColor: '#fff'
    },
    rail: {
      height:5,
      borderRadius: 4,
      backgroundColor: '#473c3c'
    },
  })(Slider);