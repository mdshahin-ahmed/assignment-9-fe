"use client";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MyProfileModal from "./components/MyProfileModal";

const MyProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetMyProfileQuery("");

  return (
    <Container>
      <MyProfileModal open={open} setOpen={setOpen} DefValues={data} />
      <Card
        sx={{
          bgcolor: "#e1e1e1",
          margin: "50px 0px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box display="flex">
                <AccountCircleIcon
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                />
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  ml={1}
                  alignSelf="center"
                  mb={0}
                >
                  {data?.name}
                </Typography>
              </Box>
              <Box
                onClick={() => setOpen(true)}
                sx={{
                  backgroundColor: "#ff0066",
                  alignSelf: "center",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                <EditIcon /> Edit Profile
              </Box>
            </Stack>
            <Box mt={2}>
              <Typography
                variant="body1"
                className="cardTypography"
                color="text.secondary"
                sx={{
                  mr: 2,
                  mt: 2,
                }}
              >
                <BloodtypeIcon className="colorRed cardIcon" />
                {data?.bloodType}
              </Typography>

              <Typography
                variant="body1"
                className="cardTypography"
                color="text.secondary"
                sx={{
                  mr: 2,
                  mt: 2,
                }}
              >
                <FiberManualRecordIcon
                  className={
                    data?.availability
                      ? "colorGreen cardIcon"
                      : "colorRed cardIcon"
                  }
                />
                {(data?.availability && "Available") || "Unavailable"}
              </Typography>

              <Typography
                variant="body1"
                className="cardTypography"
                color="text.secondary"
                sx={{
                  mr: 2,
                  mt: 2,
                }}
              >
                <LocationOnIcon className="color-primary cardIcon" />
                {data?.location}
              </Typography>
              <Typography
                variant="body1"
                className="cardTypography"
                color="text.secondary"
                sx={{
                  mr: 2,
                  mt: 2,
                }}
              >
                <EmailIcon className="color-primary cardIcon" />
                {data?.email}
              </Typography>
              <Typography
                variant="body1"
                className="cardTypography"
                color="text.secondary"
                sx={{
                  mr: 2,
                  mt: 2,
                }}
              >
                {data?.userProfile?.bio}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default MyProfilePage;
