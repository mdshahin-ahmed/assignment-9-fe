"use client";

import { useGetSingleDonorQuery } from "@/redux/api/donorApi";
import { isLoggedIn } from "@/services/authServices";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DonorDetailsPage = ({ params }: { params: { id: string } }) => {
  const { data } = useGetSingleDonorQuery(params?.id);
  const router = useRouter();

  const handleRequest = () => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      router.push(`/blood-request/${params?.id}`);
    }
  };

  return (
    <Container>
      <Card
        sx={{
          bgcolor: "#e1e1e1",
          margin: "50px 0px",
        }}
      >
        <CardActionArea>
          <CardContent>
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
            <Box display="flex" mt={2}>
              <Typography
                variant="body1"
                className="cardTypography"
                color="text.secondary"
                sx={{
                  mr: 2,
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
                }}
              >
                <LocationOnIcon className="color-primary cardIcon" />
                {data?.location}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="cardTypography"
              color="text.secondary"
              sx={{
                mt: 2,
                ml: 1,
              }}
            >
              {data?.userProfile?.bio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "15px 0px",
          }}
        >
          <Button
            onClick={() => handleRequest()}
            // component={Link}
            // href={`/blood-request/${params?.id}`}
            className="btnPrimary"
          >
            Request Blood
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default DonorDetailsPage;
