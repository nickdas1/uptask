import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { NavBar } from "./NavBar";
import CategoryMenu from "./CategoryMenu";
import JobBoardSearch from "./JobBoardSearch";
import JobList from "./JobList";

export default function JobBoard({ allJobs }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }

  function filterJobs() {
    if (selectedCategory !== "all") {
      allJobs = allJobs.filter(job => job.category === selectedCategory);
    }

    if (searchValue) {
      allJobs = allJobs.filter(job => job.title.toLowerCase().includes(searchValue));
    }

    return allJobs;
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
          <CategoryMenu
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <JobBoardSearch setSearchValue={setSearchValue} />
          <JobList jobs={filterJobs()} />
        </Box>
      </Box>
    </div>
  );
}
