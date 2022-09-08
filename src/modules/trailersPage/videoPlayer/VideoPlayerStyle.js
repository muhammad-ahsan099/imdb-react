import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    playerWrapper: {
      width: "100%",  
      position: "relative",
    },
  
    controlsWrapper: {
      visibility: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    topControls: {
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(2),
    },
    middleControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    bottomWrapper: {
      display: "flex",
      flexDirection: "column",
  
      // background: "rgba(0,0,0,0.6)",
      // height: 60,
      padding: theme.spacing(2),
    },
  
    bottomControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // height:40,
    },
  
    button: {
      margin: theme.spacing(1),
    },
    controlIcons: {
      color: "#777",
  
      fontSize: 50,
      transform: "scale(0.9)",
      "&:hover": {
        color: "#fff",
        transform: "scale(1)",
      },
    },
  
    bottomIcons: {
      color: "#999",
      "&:hover": {
        color: "#fff",
      },
    },
  
    volumeSlider: {
      width: 100,
    },
    playerWrapper: {
      marginBottom: -6,
      position: 'relative',
      width: '100%'
      // paddingTop: '56.25%' /* 720 / 1280 = 0.5625 */
    },
    reactPlayerContainer: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    }
    
  }));