import React from "react";
import PropTypes from "prop-types";
import { SideBarContainer } from "./styledComponents";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

SideBar.propTypes = {
  isShowSideBar: PropTypes.bool,
};

SideBar.defaultProps = {
  isShowSideBar: true,
};

function SideBar(props) {
  const { isShowSideBar, background, modal } = props;

  return (
    <SideBarContainer
      show={isShowSideBar.toString()}
      background={background ? background.toString() : ""}
      modal={modal ? modal.toString() : ""}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton selected={false} onClick={() => {}}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true} sx={{ fontSize: "medium" }}>
            Inbox
          </ListItemText>
        </ListItemButton>
        <ListItemButton selected={false} onClick={() => {}}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true} sx={{ fontSize: "medium" }}>
            Inbox
          </ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton selected={false} onClick={() => {}}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true} sx={{ fontSize: "medium" }}>
            Inbox
          </ListItemText>
        </ListItemButton>
        <ListItemButton selected={false} onClick={() => {}}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true} sx={{ fontSize: "medium" }}>
            Inbox
          </ListItemText>
        </ListItemButton>
      </List>
    </SideBarContainer>
  );
}

export default SideBar;
