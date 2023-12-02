import React, { FC } from "react";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../component_styles/multiCarousel.scss";

import { ButtonListProps } from "../pages/Landing";

interface ButtonListPropsType {
  list: ButtonListProps[];
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 14,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const ButtonList: FC<ButtonListPropsType> = ({ list }) => {
  return (
    <>
      <Carousel
        arrows={true}
        autoPlay={false}
        centerMode={false}
        className="py-5"
        containerClass="carousel-container"
        infinite={false}
        responsive={responsive}
      >
        {list?.map((button: ButtonListProps) => {
          return (
            <NavLink to={button.link} className="px-2 my-auto">
              {(props) => (
                <Button
                  color="warning"
                  disableElevation
                  size="small"
                  variant={props.isActive ? "contained" : "outlined"}
                >
                  {button.text}
                </Button>
              )}
            </NavLink>
          );
        })}
      </Carousel>
    </>
  );
};

export default ButtonList;
