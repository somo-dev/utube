import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import TheatersTwoToneIcon from "@mui/icons-material/TheatersTwoTone";
import {
  Autocomplete,
  Avatar,
  Badge,
  CircularProgress,
  Collapse,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import axios from "axios";
import { SEARCH_SUGGESTION_LIST } from "../utils/constants";
import { StarBorder } from "@mui/icons-material";

interface NavBarProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

interface SearchData {
  0: string; // "i"
  1: string[]; // Array of search suggestions
  2: any[]; // Empty array (not sure about the purpose, so using any[])
  3: {
    "google:suggestsubtypes": number[][]; // Array of number arrays
  };
}

const NavBar: FC<NavBarProps> = ({ handleDrawerOpen, open }) => {
  const [drawerExpand, setDrawerExpand] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [drop, setDrop] = useState<boolean>(false);
  const loading = open && options.length === 0;

  // const sleep = (duration: number): Promise<void> => {
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, duration);
  //   });
  // };

  const handlesearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchQuery(value);
  };

  useEffect(() => {
    const timer = setTimeout(
      () =>
        axios
          .get<SearchData>(SEARCH_SUGGESTION_LIST + searchQuery)
          .then((res) => {
            setOptions(res.data[1]);
            if (res.data[1].length > 2) {
              setDrop(true);
            } else setDrop(false);
          })
          .catch(Error),
      200
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
        <div>
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
              value={searchQuery}
              onFocus={() => setDrop(true)}
              onChange={handlesearchQueryChange}
              onBlur={() => setDrop(false)}
              inputProps={{
                type: "search",
              }}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className="fixed bg-white borderrad ml-2 w-[540px] rounded-lg mt-1 shadow-md">
            <Collapse in={drop} timeout="auto" unmountOnExit>
              {options?.map((option: string) => (
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary={option} />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          </div>
        </div>
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
