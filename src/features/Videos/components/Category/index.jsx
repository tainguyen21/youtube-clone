import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ArrowBox, Item, StackContent } from "./styledComponents";

Category.propTypes = {};

function Category(props) {
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);

  const handleWheel = (e) => {
    const stack = document.getElementById("category");
    stack.scrollLeft -= e.nativeEvent.wheelDelta * 10;

    if (stack.scrollLeft === 0) setShowArrowLeft(false);
    else setShowArrowLeft(true);

    if (stack.offsetWidth + stack.scrollLeft == stack.scrollWidth)
      setShowArrowRight(false);
    else setShowArrowRight(true);
  };

  const handleArrowClick = (direction) => {
    const stack = document.getElementById("category");

    if (direction === -1) {
      stack.scrollLeft -= 400;

      setShowArrowRight(true);

      if (stack.scrollLeft <= 0) {
        stack.scrollLeft = 0;
        setShowArrowLeft(false);
      }
    }

    if (direction === 1) {
      stack.scrollLeft += 400;

      setShowArrowLeft(true);

      if (stack.scrollLeft + stack.offsetWidth >= stack.scrollWidth) {
        stack.scrollLeft = stack.scrollWidth - stack.offsetWidth;
        setShowArrowRight(false);
      }
    }
  };

  useEffect(() => {
    const stack = document.getElementById("category");
    if (stack.offsetWidth + stack.scrollLeft < stack.scrollWidth)
      setShowArrowRight(true);
  }, []);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
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
      >
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
        <Tooltip title="Tất cả">
          <Item label="Tất cả" component="span" variant="outlined" clickable />
        </Tooltip>
      </StackContent>
    </Box>
  );
}

export default Category;
