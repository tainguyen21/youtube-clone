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
import { Link } from "react-router-dom";
import * as Colors from "assets/styles/colors";

SideBar.propTypes = {
  show: PropTypes.bool,
};

SideBar.defaultProps = {
  show: true,
};

function SideBar(props) {
  const { show, background, modal } = props;

  return (
    <SideBarContainer
      show={show.toString()}
      background={background ? background.toString() : ""}
      modal={modal ? modal.toString() : ""}
    >
      <List component="nav" aria-label="main mailbox folders">
        <Link
          to="/"
          style={{ textDecoration: "none", color: Colors.blackColor }}
        >
          <ListItemButton selected={false} onClick={() => {}}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText disableTypography={true} sx={{ fontSize: "medium" }}>
              Trang chủ
            </ListItemText>
          </ListItemButton>
        </Link>

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
            Đăng xuất
          </ListItemText>
        </ListItemButton>
      </List>
    </SideBarContainer>
  );
}

export default SideBar;
