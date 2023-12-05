import React, { FC } from "react";
import { Item } from "../utils/videoProps";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getDateDifference } from "../utils/helperFucntions";

interface VideoCardProps {
  info: Item;
}

const VideoCard: FC<VideoCardProps> = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const dateDif = getDateDifference(snippet.publishedAt);

  return (
    <Card sx={{ maxWidth: 300 }} className="mb-12">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnails?.high.url}
          alt="thumbnail"
        />
      </CardActionArea>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "wheat" }} aria-label="profile-icon">
            {channelTitle.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="more-options">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={channelTitle}
      />
      <Typography variant="body2" color="text.secondary">
        {`${statistics?.viewCount} views | ${dateDif}`}
      </Typography>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default VideoCard;
