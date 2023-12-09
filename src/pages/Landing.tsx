import React, { useEffect, useState } from "react";

import ButtonList from "../components/ButtonList";
import axios from "axios";
import { POPULAR_VIDEO_LIST } from "../utils/constants";
import { Item, VidProps } from "../utils/videoProps";
import VideoCard from "../components/VideoCard";

export interface ButtonListProps {
  text: string;
  link: string;
}

const Landing = () => {
  const DUMMY_BUTTON_LIST = [
    {
      text: "All",
      link: "/",
    },
    {
      text: "Comedy",
      link: "/comedy",
    },
    {
      text: "Sports",
      link: "/sports",
    },
    {
      text: "Gaming",
      link: "/gaming",
    },
    {
      text: "Live",
      link: "/live",
    },
    {
      text: "Soccer",
      link: "/soccer",
    },
    {
      text: "Cricket",
      link: "/cricket",
    },
    {
      text: "Cooking",
      link: "/cooking",
    },
    {
      text: "Music",
      link: "/music",
    },
    {
      text: "Tech",
      link: "/tech",
    },
    {
      text: "Vlog",
      link: "/vlod",
    },
  ];
  const [buttonList, setButtonList] =
    useState<ButtonListProps[]>(DUMMY_BUTTON_LIST);
  const [videos, setVodeos] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPopularVideos = async () => {
    const data = await axios
      .get<VidProps>(POPULAR_VIDEO_LIST)
      .then((res) => {
        setVodeos(res.data.items);
        setIsLoading(false);
      })
      .catch(Error);
    console.log(data);
  };

  useEffect(() => {
    setIsLoading(true);
    getPopularVideos();
  }, []);

  return (
    <>
      <ButtonList list={buttonList} />
      <div className="flex flex-wrap justify-around mt-3">
        {videos?.map((video: Item) => {
          return (
            <VideoCard key={video.id} info={video} isLoading={isLoading} />
          );
        })}
      </div>
    </>
  );
};

export default Landing;
