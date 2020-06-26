import React from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";

//Mui stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Popover from "@material-ui/core/Popover";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import MobileMenu from "./MobileMenu";
import Button from "@material-ui/core/Button"

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExploreIcon from "@material-ui/icons/Explore";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import InfoIcon from "@material-ui/icons/Info";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CallIcon from "@material-ui/icons/Call";

//icons
import Icons from "./Iconsbar";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(3),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  //drawer
  white:{
    color:'white',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  activebutton:{
    '&:focus': {
      outline: 'none',
  },
  }

}));
export default function PrimarySearchAppBar() {
    const classes = useStyles();
 //drawer
 const [state, setState] = React.useState({
  left: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <div
    className={clsx(classes.list)}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
 <List>
            <ListItem button component={Link} to="/explore">
              <ListItemIcon>
                {" "}
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>

            <ListItem button component={Link} to="/blog">
              <ListItemIcon>
                {" "}
                <ArtTrackIcon />
              </ListItemIcon>
              <ListItemText primary="Our Blog" />
            </ListItem>

            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                {" "}
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to="/newsletter">
              <ListItemIcon>
                {" "}
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText primary="Newsletter" />
            </ListItem>

            <ListItem button component={Link} to="/help">
              <ListItemIcon>
                {" "}
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>

            <ListItem button component={Link} to="/contact">
              <ListItemIcon>
                {" "}
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
    </div>
     );
  //Navbar
  const [anchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Popover
      anchorEl={mobileMoreAnchorEl}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{ marginTop: "1vh", marginRight: "0px" }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
    >
      <MobileMenu> </MobileMenu>
    </Popover>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button className={classes.activebutton} onClick={toggleDrawer(anchor, true)}>
                  {" "}
                  <MenuIcon className={classes.white} />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <Logo></Logo>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Icons> </Icons>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>

        
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
