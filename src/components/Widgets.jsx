import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Widgets = () => {
  return (
    <Box
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, flex: { sm: 1, md: 2 } }}
    >
      <Box
        position={"fixed"}
        sx={{ width: "300px", padding: "0", marginRight: "10px" }}
      >
        {/* Online Friends */}
        <Box>
          <Typography fontWeight="500" mb={2}>
            Online Friends
          </Typography>
          <AvatarGroup
            max={4}
            sx={{ justifyContent: "left", marginRight: "10px" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
          </AvatarGroup>
        </Box>

        {/* Image Gallery */}
        <Box>
          <Typography fontWeight="500" mb={2} mt={2}>
            Image Gallery
          </Typography>
          <ImageList
            rowHeight={100}
            cols={3}
            sx={{
              maxWidth: "100%",
              padding: "10px",
            }}
          >
            <ImageListItem>
              <img
                src="https://mui.com/static/images/image-list/breakfast.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="./sina-rezakhani-wSKW9mhMf4g-unsplash.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="./neom-I5j46lqAo-o-unsplash.jpg" alt="breakfast" />
            </ImageListItem>
            <ImageListItem>
              <img
                src="./alex-shuper-yI7WlUIJ96w-unsplash.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="./mae-black-PxvDNfFeQGE-unsplash.jpg" alt="breakfast" />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://mui.com/static/images/image-list/breakfast.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="./sina-rezakhani-wSKW9mhMf4g-unsplash.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="./neom-I5j46lqAo-o-unsplash.jpg" alt="breakfast" />
            </ImageListItem>
            <ImageListItem>
              <img
                src="./alex-shuper-yI7WlUIJ96w-unsplash.jpg"
                alt="breakfast"
              />
            </ImageListItem>
            <ImageListItem>
              <img src="./mae-black-PxvDNfFeQGE-unsplash.jpg" alt="breakfast" />
            </ImageListItem>
          </ImageList>
        </Box>

        {/* Latest Conversations */}
        <Box>
          <Typography fontWeight="500" mt={2}>
            Latest Conversations
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Widgets;
