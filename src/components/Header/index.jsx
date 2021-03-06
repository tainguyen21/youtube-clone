import AccountCircle from "@mui/icons-material/AccountCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { closeSideBar, toggleSideBar } from "app/uiSlice";
import * as Colors from "assets/styles/colors.js";
import { searchByKeyWord } from "features/Search/searchSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Search, SearchIconWrapper, StyledInputBase } from "./styledComponents";

function Header() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(
      searchByKeyWord({
        keyword: data.keyword,
      })
    );
    dispatch(closeSideBar());

    history.push(`/search/${data.keyword}`);
  };

  const handleSideBarClick = () => {
    dispatch(toggleSideBar());
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <AddAPhotoIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          color: Colors.blackColor,
          backgroundColor: Colors.whiteColor,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={handleSideBarClick}
          >
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <YouTubeIcon color="error" fontSize="large" />
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight="bold"
                  color="#000"
                >
                  YouTube
                </Typography>
              </Box>
            </Link>
          </Box>
          <Search onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <StyledInputBase
              placeholder="T??m ki???m"
              inputProps={{ "aria-label": "search", ...register("keyword") }}
              required
            />
            <Tooltip title="T??m ki???m">
              <SearchIconWrapper type="submit">
                <SearchIcon />
              </SearchIconWrapper>
            </Tooltip>
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Tooltip title="T???o">
                <Badge badgeContent={4} color="error">
                  <AddAPhotoIcon />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Tooltip title="Th??ng b??o">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </Tooltip>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

export default Header;
