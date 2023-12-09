import React, { FC, useEffect } from "react";

import { Button, Chip } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../component_styles/buttonList.scss";

import { ButtonListProps } from "../pages/Landing";

interface ButtonListPropsType {
  list: ButtonListProps[];
}

const ButtonList: FC<ButtonListPropsType> = ({ list }) => {
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    // Your existing logic for handling the wheel event
    const element = document.getElementById("scroll");

    if (element) {
      element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    }
  };

  useEffect(() => {
    const element = document.getElementById("scroll");

    if (element) {
      element.addEventListener("wheel", handleWheel);

      return () => {
        element.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);
  return (
    <div className="scrollable-container mt-3 scrollbar-hide" id="scroll">
      <div className="scrollable-content">
        {list?.map((button: ButtonListProps) => {
          return (
            <NavLink
              key={button.text}
              to={button.link}
              className="my-auto mx-4"
            >
              {(props) => (
                <Chip
                  className="px-4"
                  // color={props.isActive ? "success" : "default"}
                  label={button.text}
                  variant={props.isActive ? "filled" : "outlined"}
                  onClick={undefined}
                />
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonList;
