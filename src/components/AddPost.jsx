import {
  DateRange,
  Edit,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraFront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledModel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="secondary" aria-label="edit">
          <Edit />
        </Fab>
      </Tooltip>

      <StyledModel
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
          m={1}
          sx={{ width: 500, height: 400 }}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"} mb={3}>
            Create Post
          </Typography>

          {/* User Identity */}
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={600} variant="span">
              Khidash Muhammed
            </Typography>
          </UserBox>

          {/* Post Field / Text Field */}
          <TextField
            sx={{ width: "100%", marginTop: "10px" }}
            id="filled-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />

          {/* Icons */}
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraFront color="success" />
            <PersonAdd color="error" />
          </Stack>

          {/* Post Button */}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </>
  );
};

export default AddPost;
