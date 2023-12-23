import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Mail, Nightlight, Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// ? Global styles
const StyledNavbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  backgroundColor: "primary",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex",
  alignItems: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));

const UserIcons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const Navbar = ({ setMode, mode }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledNavbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Anxious Ape
        </Typography>
        <DeveloperModeIcon sx={{ display: { xs: "block", sm: "none" } }} />

        {/* search */}
        <Search sx={{ color: "black", padding: "0 10px" }}>
          <SearchIcon />
          <InputBase sx={{ padding: "0 10px" }} placeholder="Search..." />
        </Search>

        {/* Icons */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={14} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
          />
        </Icons>

        {/* User Icons */}
        <UserIcons>
          <Nightlight
            sx={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          />
          <Typography variant="span" fontSize={"10px"}>
            Anxious Ape
          </Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </UserIcons>

        {/* Menu */}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledNavbar>
    </AppBar>
  );
};

export default Navbar;
