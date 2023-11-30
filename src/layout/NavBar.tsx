import React, { FC, FormEvent, useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import TheatersTwoToneIcon from "@mui/icons-material/TheatersTwoTone";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";

interface NavBarProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

const NavBar: FC<NavBarProps> = ({ handleDrawerOpen, open }) => {
  const [drawerExpand, setDrawerExpand] = useState<boolean>(false);

  const handleMenuClick = () => {
    setDrawerExpand(!drawerExpand);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {};

  return (
    <div
      className="grid grid-flow-col shadow-sm p-4"
      style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
    >
      <div className="flex col-span-6 items-center gap-2">
        <IconButton
          aria-label="menu"
          onClick={handleDrawerOpen}
          sx={{
            ...(open && { display: "none" }),
          }}
        >
          <MenuRoundedIcon />
        </IconButton>
        <TheatersTwoToneIcon color="secondary" sx={{ fontSize: 50 }} />
      </div>
      <div className="flex col-span-5 items-center">
        <Paper
          component="form"
          onSubmit={handleSearch}
          sx={{
            p: "2px 4px",
            display: "flex",
            borderRadius: "30px",
            boxShadow: 0,
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: "45px",
            alignItems: "center",
            width: 600,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <IconButton aria-label="speech " onClick={handleMenuClick}>
          <KeyboardVoiceIcon />
        </IconButton>
      </div>
      <div className="flex col-span-1 items-center justify-end gap-2">
        <IconButton aria-label="createVideo" onClick={handleMenuClick}>
          <VideoCallIcon />
        </IconButton>
        <IconButton aria-label="notifications" onClick={handleMenuClick}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="profile" onClick={handleMenuClick}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
