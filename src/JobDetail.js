import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "@mui/material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import { NavBar } from "./NavBar";
import {
  MainBody,
  PrimaryButton,
  SpacerBox,
  PRIMARY_GREEN,
  SecondaryButton,
} from "./StyledComponents";

export default function JobDetail({ allJobs }) {
  let { id: idFromURL } = useParams();

  const selectedJob = allJobs.find((job) => job.id === Number(idFromURL));

  return (
    <>
      <NavBar />
      <MainBody>
        <Box sx={{ width: "60%" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            {selectedJob.title}
          </Typography>
          <Divider />
          <Box sx={{ padding: "30px 0" }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ color: PRIMARY_GREEN, fontWeight: "bold" }}
            >
              {selectedJob.category}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Posted: {selectedJob.postedTime}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              <LocationOnIcon
                sx={{
                  color: PRIMARY_GREEN,
                  height: "20px",
                  marginRight: "5px",
                }}
              ></LocationOnIcon>
              {selectedJob.remote && "Remote, "}
              {selectedJob.location}
            </Typography>
          </Box>
          <Divider />
          <Typography
            variant="body2"
            gutterBottom
            component="div"
            sx={{ marginTop: "30px" }}
          >
            {selectedJob.description}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "3px",
            width: "35%",
            textAlign: "center",
            height: "450px",
          }}
        >
          <SpacerBox>
            <PrimaryButton
              disableRipple
              sx={{
                textTransform: "none",
                width: "50%",
                marginBottom: "20px",
              }}
            >
              Submit a Proposal
            </PrimaryButton>
            <div>
              <SecondaryButton
                disableRipple
                sx={{
                  textTransform: "none",
                  width: "50%",
                  marginBottom: "20px",
                }}
              >
                <FavoriteBorderIcon sx={{ marginRight: "5px" }} />
                Save Job
              </SecondaryButton>
            </div>
          </SpacerBox>
          <Divider />
          <SpacerBox sx={{ textAlign: "left" }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              About the client
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              sx={{ marginTop: "10px", color: "slategray" }}
            >
              {selectedJob.paymentVerified ? (
                <>
                  <CheckCircleOutlineIcon
                    sx={{
                      fontSize: "inherit",
                      color: PRIMARY_GREEN,
                      marginRight: "5px",
                    }}
                  />
                  Payment Verified
                </>
              ) : (
                <>
                  <CancelIcon
                    sx={{
                      fontSize: "inherit",
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></CancelIcon>
                  Payment Not Verified
                </>
              )}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              sx={{ marginTop: "10px", color: "slategray" }}
            >
              <LocationOnIcon
                sx={{
                  color: PRIMARY_GREEN,
                  fontSize: "inherit",
                  marginRight: "5px",
                }}
              ></LocationOnIcon>
              {selectedJob.location}
            </Typography>
          </SpacerBox>
          <Divider />
          <SpacerBox sx={{ textAlign: "left" }}>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Job Link
            </Typography>
            <TextField
              disabled
              id="standard-disabled"
              variant="standard"
              defaultValue="https://www.website.com/job"
              InputProps={{ disableUnderline: true }}
              sx={{ background: "lightgrey", padding: "0 10px", width: "50%" }}
            />
            <Link
              href="#"
              color={PRIMARY_GREEN}
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              Copy Link
            </Link>
          </SpacerBox>
        </Box>
      </MainBody>
    </>
  );
}
