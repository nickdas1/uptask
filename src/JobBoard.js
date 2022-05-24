import { Box, Typography } from "@mui/material";
import { NavBar } from "./NavBar";
import CategoryMenu from "./CategoryMenu";
import JobBoardSearch from "./JobBoardSearch";
import JobList from "./JobList";

export default function JobBoard({ allJobs }) {
  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }

  return (
    <div>
      <NavBar />
      <Box sx={{ display: "flex", padding: "50px 5%", textAlign: "left" }}>
        <Box sx={{ width: "30%" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            Find Work
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Categories
          </Typography>
          <CategoryMenu categories={categories} />
        </Box>
        <Box sx={{ width: "70%" }}>
          <JobBoardSearch />
          <JobList allJobs={allJobs} />
        </Box>
      </Box>
    </div>
  );
}
