import React, { FC } from "react";
import { Item } from "../utils/videoProps";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Skeleton,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  formatNumberAbbreviated,
  getDateDifference,
} from "../utils/helperFucntions";
import { NavLink } from "react-router-dom";

interface VideoCardProps {
  info: Item;
  isLoading: boolean;
}

const VideoCard: FC<VideoCardProps> = ({ info, isLoading }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const dateDif = getDateDifference(snippet.publishedAt);

  return (
    <>
      {!isLoading ? (
        <NavLink to={`watch?v=${info.id}`}>
          <Box className="mb-12 mx-4" sx={{ width: 320 }}>
            {thumbnails?.high.url ? (
              <CardActionArea>
                <img
                  style={{
                    width: 320,
                    height: 180,
                    marginBottom: 15,
                    borderRadius: 6,
                  }}
                  alt="thumbnail"
                  src={thumbnails?.high.url}
                />
              </CardActionArea>
            ) : (
              <Skeleton variant="rectangular" width={320} height={180} />
            )}
            {thumbnails?.medium.url ? (
              <Box sx={{ pr: 2 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography gutterBottom variant="body2">
                      {title}
                    </Typography>
                  }
                  subheader={
                    <>
                      <Typography
                        display="block"
                        variant="caption"
                        color="text.secondary"
                      >
                        {channelTitle}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {`${formatNumberAbbreviated(
                          statistics?.viewCount
                        )} views • ${dateDif}`}
                      </Typography>
                    </>
                  }
                />
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        </NavLink>
      ) : (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      )}
    </>
  );
};

export default VideoCard;
