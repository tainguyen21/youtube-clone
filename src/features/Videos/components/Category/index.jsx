import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ArrowBox, BoxContainer, Item, StackContent } from "./styledComponents";
import PropTypes from "prop-types";

VideosCategory.propTypes = {
  category: PropTypes.array,
};

VideosCategory.defaultProps = {
  category: [],
};

function VideosCategory(props) {
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoryScrollWidth = useRef(0);
  const categoryOffsetWdith = useRef(0);
  const wheelSpeed = 1;
  const arrowClickSpace = 400;

  const { category } = props;

  const handleWheel = (e) => {
    //When scroll to the leftmost
    if (scrollLeft - e.nativeEvent.wheelDelta * wheelSpeed <= 0)
      setShowArrowLeft(false);
    else setShowArrowLeft(true);

    //When scroll to the rightmost
    if (
      scrollLeft -
        e.nativeEvent.wheelDelta * wheelSpeed +
        categoryOffsetWdith.current >=
      categoryScrollWidth.current
    )
      setShowArrowRight(false);
    else setShowArrowRight(true);

    //Update scrollLeft state, check scrollLeft < 0 or > scrollWidth
    setScrollLeft((state) => {
      if (state - e.nativeEvent.wheelDelta * wheelSpeed < 0) return 0;
      else if (
        state -
          e.nativeEvent.wheelDelta * wheelSpeed +
          categoryOffsetWdith.current >
        categoryScrollWidth.current
      )
        return categoryScrollWidth.current - categoryOffsetWdith.current;
      else return state - e.nativeEvent.wheelDelta * wheelSpeed;
    });
  };

  const handleArrowClick = (direction) => {
    //If click left arrow
    if (direction === -1) {
      setShowArrowRight(true);

      //Leftmost
      if (scrollLeft - arrowClickSpace <= 0) {
        setShowArrowLeft(false);
      }

      setScrollLeft((state) => {
        if (state - arrowClickSpace < 0) return 0;
        else return state - arrowClickSpace;
      });
    }

    //If click right arrow
    if (direction === 1) {
      setShowArrowLeft(true);

      //Rightmost
      if (
        scrollLeft + categoryOffsetWdith.current + arrowClickSpace >=
        categoryScrollWidth.current
      ) {
        setShowArrowRight(false);
      }

      setScrollLeft((state) => {
        if (
          state + arrowClickSpace + categoryOffsetWdith.current >
          categoryScrollWidth.current
        )
          return categoryScrollWidth.current - categoryOffsetWdith.current;
        else return state + arrowClickSpace;
      });
    }
  };

  useEffect(() => {
    //Get the scrollWidth and offsetWidth
    const stack = document.getElementById("category");

    categoryScrollWidth.current = stack.scrollWidth;
    categoryOffsetWdith.current = stack.offsetWidth;

    if (stack.offsetWidth < stack.scrollWidth) setShowArrowRight(true);
  }, []);

  return (
    <BoxContainer>
      <ArrowBox
        position="left"
        show={showArrowLeft.toString()}
        onClick={() => handleArrowClick(-1)}
      >
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </ArrowBox>
      <ArrowBox
        position="right"
        show={showArrowRight.toString()}
        onClick={() => handleArrowClick(1)}
      >
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </ArrowBox>
      <StackContent
        onWheel={handleWheel}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
        id="category"
        scroll_left={scrollLeft}
        //Check end to add padding when scroll to rightmost
        end={
          categoryScrollWidth.current - categoryOffsetWdith.current ===
          scrollLeft
            ? "true"
            : ""
        }
      >
        {category.map((item, index) => (
          <Tooltip title="Tất cả" key={index}>
            <Item
              label={item.snippet.title || ""}
              component="span"
              variant="outlined"
              clickable
            />
          </Tooltip>
        ))}
      </StackContent>
    </BoxContainer>
  );
}

export default VideosCategory;
