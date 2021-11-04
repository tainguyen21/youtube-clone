import React from "react";
import PropTypes from "prop-types";
import { Box, useTheme } from "@mui/system";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import * as Colors from "assets/styles/colors";

CommentItem.propTypes = {
  comment: PropTypes.object,
  mt: PropTypes.string,
};

CommentItem.defaultProps = {
  comment: {},
  mt: "0",
};

function CommentItem(props) {
  const { comment, mt } = props;
  const theme = useTheme();

  const {
    //authorChannelUrl,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textOriginal,
    //authorChannelId: { value: authorChannelId },
  } = comment && comment.snippet ? comment.snippet.topLevelComment.snippet : {};

  return (
    <Box sx={{ display: "flex", marginTop: mt }}>
      <Avatar src={authorProfileImageUrl || ""} />
      <Box sx={{ marginLeft: theme.spacing(2) }}>
        <Typography
          variant="body2"
          component="span"
          sx={{
            display: "inline-block",
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontWeight: 500,
          }}
        >
          {authorDisplayName}
        </Typography>
        <Typography variant="body2" component="span">
          {publishedAt}
        </Typography>
        <Typography variant="body2" component="p" sx={{ lineHeight: 1.6 }}>
          {textOriginal}
        </Typography>
        <Tooltip title="Thích">
          <Button
            sx={{
              color: Colors.blackColor,
              marginTop: theme.spacing(0.5),
              fontWeight: "light",
              fontSize: "12px",
            }}
            startIcon={<ThumbUpAltOutlinedIcon />}
          >
            {likeCount}
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default CommentItem;
