import PropTypes from "prop-types";

import {
  Adb,
  Facebook,
  GitHub,
  Home,
  Instagram,
  LinkedIn,
  Nightlight,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
} from "@mui/material";

const ListText = styled(ListItemText)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Sidebar = ({ setMode, mode }) => {
  return (
    <Box
      p={2}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        flex: { xs: 2, sm: 2, md: 1 },
      }}
    >
      <Box position={"fixed"} textAlign={"left"}>
        <List>
          {/* Icons 1 */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListText primary="Home" />
            </ListItemButton>
          </ListItem>
          {/* Icons 2 */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <Adb />
              </ListItemIcon>
              <ListText primary="Adb" />
            </ListItemButton>
          </ListItem>
          {/* Icons 3 */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListText primary="Git" />
            </ListItemButton>
          </ListItem>
          {/* Icons 4 */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
              <ListText primary="Linkedin" />
            </ListItemButton>
          </ListItem>
          {/* Icons 5 */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListText primary="Facbook" />
            </ListItemButton>
          </ListItem>
          {/* Icons 6 */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListText primary="Instagram" />
            </ListItemButton>
          </ListItem>

          {/* Darkmode Switch */}
          <ListItem>
            <ListItemButton component="a" href="#" alignItems="center">
              <ListItemIcon>
                <Nightlight />
              </ListItemIcon>
              <Switch
                defaultChecked
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  setMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
export default Sidebar;
