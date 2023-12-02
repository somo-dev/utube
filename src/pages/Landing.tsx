import React, { useState } from "react";

import ButtonList from "../components/ButtonList";

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
  ];
  const [buttonList, setButtonList] = useState<ButtonListProps[]>(DUMMY_BUTTON_LIST);
  return (
    <>
      <ButtonList list={buttonList} />
    </>
  );
};

export default Landing;
