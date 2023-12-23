import { Box } from "@mui/material";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box sx={{ flex: { sm: 1, md: 4 } }} p={2} alignItems={"center"}>
      <Posts
        title={"Al kulth nabi"}
        image={"./alex-shuper-yI7WlUIJ96w-unsplash.jpg"}
        date={"2 hours ago"}
        firstLetter={"A"}
      />
      <Posts
        title={"jappan kunjappan"}
        image={"./mae-black-3uk2UDSEM3Q-unsplash.jpg"}
        date={"jun 23 2023"}
        firstLetter={"J"}
      />
      <Posts
        title={"Linsha Najeeb"}
        image={"./mae-black-PxvDNfFeQGE-unsplash.jpg"}
        date={"may 18 2023"}
        firstLetter={"L"}
      />
      <Posts
        title={"Khidash Muhammed"}
        image={"public/neom-I5j46lqAo-o-unsplash.jpg"}
        date={"aug 15 2023"}
        firstLetter={"K"}
      />
    </Box>
  );
};

export default Feed;
