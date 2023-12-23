import { Box } from "@mui/material";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box sx={{ flex: { sm: 1, md: 4 } }} p={2} alignItems={"center"}>
      <Posts
        title={"Al kulth nabi"}
        image={
          "https://www.pexels.com/photo/a-black-and-white-photo-of-a-canal-in-venice-19156891/"
        }
        date={"2 hours ago"}
        firstLetter={"A"}
      />
      <Posts
        title={"jappan kunjappan"}
        image={"https://www.pexels.com/photo/schloss-in-bnw-18944183/"}
        date={"jun 23 2023"}
        firstLetter={"J"}
      />
      <Posts
        title={"Linsha Najeeb"}
        image={
          "https://www.pexels.com/photo/grayscale-photo-of-a-woman-riding-piggyback-on-a-man-4976975/"
        }
        date={"may 18 2023"}
        firstLetter={"L"}
      />
      <Posts
        title={"Khidash Muhammed"}
        image={
          "https://www.pexels.com/photo/trees-in-grayscale-photography-753575/"
        }
        date={"aug 15 2023"}
        firstLetter={"K"}
      />
    </Box>
  );
};

export default Feed;
