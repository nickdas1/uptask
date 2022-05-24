import { Link } from "react-router-dom";
import { Box, Divider, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { PRIMARY_GREEN } from "./StyledComponents";

export default function JobList({ allJobs }) {
  return (
    <Paper elevation={3}>
      {allJobs.map((job) => (
        <Box key={job.id} sx={{ padding: "15px" }}>
          <Link
            to={`/job/${job.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ marginBottom: "15px" }}
            >
              {job.title}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Hourly: ${job.hourlyUSD.toFixed(2)}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Posted: {job.postedTime}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              <LocationOnIcon
                sx={{
                  color: PRIMARY_GREEN,
                  height: "20px",
                  marginRight: "5px",
                }}
              ></LocationOnIcon>
              {job.remote && "Remote, "}
              {job.location}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              sx={{ marginTop: "15px" }}
            >
              {job.description}
            </Typography>
            <Divider />
          </Link>
        </Box>
      ))}
    </Paper>
  );
}
