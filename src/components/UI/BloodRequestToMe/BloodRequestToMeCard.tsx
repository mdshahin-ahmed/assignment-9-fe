import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import BloodRequestToMeModal from "./components/BloodRequestToMeModal";
const BloodRequestToMeCard = ({ request }: { request: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <BloodRequestToMeModal
        open={open}
        setOpen={setOpen}
        DefValues={request}
      />
      <Card
        sx={{
          bgcolor: "#e1e1e1",
          // margin: "50px 0px",
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
                  {request?.requester?.name}
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
                <EditIcon /> Update Status
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
                {request?.donor?.bloodType}
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
                  className={`${
                    request?.requestStatus === "PENDING"
                      ? "colorYellow cardIcon"
                      : ""
                  }
              ${
                request?.requestStatus === "APPROVED"
                  ? "colorGreen cardIcon"
                  : ""
              }
              ${
                request?.requestStatus === "REJECTED" ? "colorRed cardIcon" : ""
              }`}
                />
                {request?.requestStatus}
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
                <LocalHospitalIcon className="color-primary cardIcon" />
                {request?.hospitalName}
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
                {request?.hospitalAddress}
              </Typography>
              {request?.requestStatus === "APPROVED" && (
                <Typography
                  variant="body1"
                  className="cardTypography"
                  color="text.secondary"
                  sx={{
                    mr: 2,
                    mt: 2,
                  }}
                >
                  <LocalPhoneIcon className="color-primary cardIcon" />
                  {request?.phoneNumber}
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default BloodRequestToMeCard;
