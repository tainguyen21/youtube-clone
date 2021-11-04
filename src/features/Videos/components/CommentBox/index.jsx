import { Avatar, Button, Input, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import CommentItem from "../CommentItem";

CommentBox.propTypes = {
  comments: PropTypes.array,
  total: PropTypes.number,
};

CommentBox.defaultProps = {
  comments: [],
  total: 0,
};

const ariaLabel = { "aria-label": "description" };

function CommentBox(props) {
  const { comments, total } = props;
  const theme = useTheme();

  return (
    <div>
      <Typography
        variant="body1"
        component="div"
        sx={{ padding: theme.spacing(2, 0) }}
      >
        {`${total} bình luận`}
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Avatar src="/static/images/avatar/1.jpg" />
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flexGrow: 1, marginLeft: theme.spacing(2) }}
        >
          <Input
            placeholder="Bình luận công khai..."
            inputProps={ariaLabel}
            fullWidth
          />
          <Button
            variant="contained"
            sx={{ margin: `${theme.spacing(2)} 0 0 auto`, display: "block" }}
          >
            Bình luận
          </Button>
        </Box>
      </Box>

      {comments.map((comment, index) => (
        <CommentItem comment={comment} key={index} mt={theme.spacing(2)} />
      ))}
    </div>
  );
}

export default CommentBox;
