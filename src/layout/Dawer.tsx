import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import "../component_styles/navBar.scss";

const drawerWidth = 240;

interface MiniDrawerProps {
  open: boolean;
  setOpen: (o: boolean) => void;
}

interface DrawerElementProps {
  label: string;
  icon: ReactNode;
  link: string;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "88px",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MiniDrawer: FC<MiniDrawerProps> = ({ open, setOpen }) => {
  const DRAWER_ELEMENTS_DIV_ONE: DrawerElementProps[] = [
    { label: "Home", icon: <HomeRoundedIcon />, link: "/" },
    { label: "Shorts", icon: <SlowMotionVideoRoundedIcon />, link: "/shorts" },
    {
      label: "Subscriptions",
      icon: <SubscriptionsRoundedIcon />,
      link: "/subs",
    },
  ];
  const DRAWER_ELEMENTS_DIV_TWO: DrawerElementProps[] = [
    { label: "History", icon: <HistoryRoundedIcon />, link: "/history" },
    { label: "Library", icon: <VideoLibraryRoundedIcon />, link: "/library" },
    {
      label: "Watch later",
      icon: <AccessTimeRoundedIcon />,
      link: "/watchLater",
    },
    {
      label: "Liked videos",
      icon: <ThumbUpOutlinedIcon />,
      link: "/likedVids",
    },
  ];
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {DRAWER_ELEMENTS_DIV_ONE.map((item, index) => (
          <NavLink
            className={({ isActive }: any) => (isActive ? "active" : undefined)}
            key={item.label}
            to={item.link}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 68,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {DRAWER_ELEMENTS_DIV_TWO.map((item, index) => (
          <NavLink
            className={({ isActive }: any) => (isActive ? "active" : undefined)}
            key={item.label}
            to={item.link}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 68,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default MiniDrawer;
